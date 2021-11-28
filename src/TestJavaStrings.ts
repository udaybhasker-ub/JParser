export default {
    CONTROLLER: `
    import com.pqebooks.auth.service.EbUserService;
    import com.pqebooks.auth.service.LibrianAlertService;
    import com.pqebooks.auth.validate.UserAccountValidator;
    import com.pqebooks.auth.validate.ValidationError;
    import com.pqebooks.customtext.service.IPropertyMessageService;
    
    @Controller
    @SecuredAction(securityLevel=SecurityLevel.PATRON)
    public class NewAccountController 
    {
        private final Logger logger = LoggerFactory.getLogger(NewAccountController.class);
    
        @Magic
        private AccountService accountService ; 

        @Autowired
        private AccountService accountService ; 
        
        @Autowired
        private EbUserService userService;
    
        @Autowired
        private UserSessionService sessionService;
    
        @Autowired
        private IPropertyMessageService propertyMessageService;
        
        @Autowired
        private ChannelService channelService;	
    
        @Autowired
        private ServletContext servletContext;
        
        @Autowired
        private AuthenticationService authService;	
        
        @Autowired
        private DemographicService demographicService;	
        
        @Autowired
        LibrianAlertService librianAlertService;
        
        @RequestMapping(value = "**/newAccount.action", method = RequestMethod.GET)
        protected String newAccount(UserSession userSession, HttpServletRequest request, HttpServletResponse response) throws IOException 
        {
            String acronym = userSession.getChannelName();
            Channel channel = channelService.getChannelByName(acronym, true);
            String ip = request.getRemoteAddr();
            if(channel == null ||  authService.accountCreateType(channel, ip, userSession.getReferralURL()) != 2 || channel.isSSO()){
                response.sendRedirect(servletContext.getContextPath() + "/" + ServerMessage.PAGE_NOT_FOUND.getUrl());   
                return null;
            }
            return "account.new_account";
        }
    
        @RequestMapping(value = "**/newAccountRequest.json", method = RequestMethod.POST)
        public ModelAndView newAccountRequest (UserSession userSession,  @RequestParam Map<String, String> params, 
                                                                            HttpServletRequest request) throws Exception 
        {		
            UserAccountValidator validator = createNewUser(userSession, params, request.getRemoteAddr());
            
            MappingJackson2JsonView jsonView = new MappingJackson2JsonView();
            ModelAndView mav = new ModelAndView(jsonView);
            
            if (validator.hasError()) {
                Map<String, String> errors = this.getErrorMap(userSession, validator);
                mav.addObject("errors", errors);
                
                mav.addObject("statusCode", 1);
                mav.addObject("status","FAILURE");			
            }
            else {
                this.userService.updateLastLoginDate(validator.getUsername(), userSession.getChannelID());
                String demographicsQueryString = String.format(DemographicConstants.NEW_USER_ACC_CREATED_DISCRIPTION, 
                                                                     userSession.getUserName(), userSession.getChannelName()) + " from modal";
                this.demographicService.addDemographics(DemographicConstants.USER_ACCOUNT, DemographicConstants.NEW_USER_CREATED, userSession, request, demographicsQueryString);	
                    
                mav.addObject("statusCode", 0);
                mav.addObject("status","SUCCESS");			
            }
            return (mav);
        }
        
        @RequestMapping(value = "**/newAccount.action", method = RequestMethod.POST)
        public String newAccountAction (UserSession userSession, ModelMap model, @RequestParam Map<String, String> params,
                                                                                        HttpServletRequest request) throws Exception 
        {
            UserAccountValidator validator = createNewUser(userSession, params, request.getRemoteAddr());
            
            if (! validator.hasError() ) {
                this.userService.updateLastLoginDate(validator.getUsername(), userSession.getChannelID());
                String demographicsQueryString = String.format(DemographicConstants.NEW_USER_ACC_CREATED_DISCRIPTION, 
                                                                      userSession.getUserName(), userSession.getChannelName());
                this.demographicService.addDemographics(DemographicConstants.USER_ACCOUNT, DemographicConstants.NEW_USER_CREATED, 
                                                                                       userSession, request, demographicsQueryString);	
                            
                return  (ConfirmMessage.NEW_ACCOUNT.sendForward());
            }
            
            Map<String, String> userData = this.getUserData(validator);
            Map<String, String> errors = this.getErrorMap(userSession, validator);
    
            model.addAttribute("userData", userData);
            model.addAttribute("errors", errors);
    
            return "account.new_account";
        }
        
        private void updateUserSession (UserSession userSession, EbUser ebUser) {
            userSession.setUserID(ebUser.getId());
            userSession.setUserTypeID(ebUser.getUserTypeId());
            userSession.setUserName(ebUser.getUsername());
            userSession.setChannelAccess(true);
            sessionService.updateSession(userSession);
    
        }
        private UserAccountValidator validateUserParams (int libraryId, Map<String, String> params)
        {
            UserAccountValidator validator = new UserAccountValidator();
            
            validator.setFirstName(params.get("firstName"));
            validator.setLastName(params.get("lastName"));
            validator.setEmail(params.get("email")); 
            validator.setPassword(params.get("password"));
            
            // deafult username to email
            validator.setUsername( validator.getEmail());
            String terms = params.get("terms");
            if(StringUtils.isBlank(terms)){
                validator.addError(ValidationError.TERMS_OF_SERVICE_NOT_CHECKED);
            }
            if ( ! validator.hasError() ) {
                // make sure email is not used in both username and email field.
                EbUser user = userService.getUserByNameOrEmail(validator.getEmail(), libraryId);
                if (user != null) {
                    validator.addError(ValidationError.USER_ALREADY_EXIST);
                }
            }
            return (validator);
        }
    
        private UserAccountValidator createNewUser (UserSession userSession, Map<String, String> params, String consentIp)
        {
            UserAccountValidator validator = null;
            int libraryId = userSession.getChannelID();
    
            try {
                validator = validateUserParams (libraryId, params);
        
                if ( ! validator.hasError() ) {
                    
                    EbUser user = validator.createUser(libraryId, consentIp);
                    //need to save the saltedhash
                    user.updatePassword(validator.getPassword());
                    userService.saveUser(user);		
                    accountService.sendNewAccountEmail(userSession,user);
                    librianAlertService.sendNewAccountEmail(userSession, user);
                    updateUserSession (userSession, user);
    
                }
            }
            catch (Exception e) {
                logger.warn("Cannot create new user for email [{}] library [{}]", params.get("email"), libraryId, e);
                if (validator == null) {
                    validator = new UserAccountValidator();
                }
                validator.addError(ValidationError.USER_UPDATE_ERROR);
            }
            return (validator);
        }
        
        private Map<String, String> getUserData (UserAccountValidator validator) 
        {
            Map<String, String> userData = new HashMap<>();
            userData.put("firstName", validator.getFirstName());
            userData.put("lastName", validator.getLastName());
            userData.put("email", validator.getEmail());
            // password should not be pre-populated back to the form
            return (userData);
        }
    
        private Map<String, String> getErrorMap (UserSession userSession, UserAccountValidator validator) 
        {
            Map<String, String> errorMap = validator.getErrorMap("pqAuthError_");
            propertyMessageService.populateErrorMessageMap(errorMap, userSession);
            return (errorMap);
        }
    }
    `
}