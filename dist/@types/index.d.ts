declare module parser
{
	export {};

	export enum QUERIES {
	    outwiredFields = "/fieldDeclaration[/fieldModifier/annotation?{/At(image=\"@\") && /typeName/Identifier(image=\"Autowired\")}]:[/fieldModifier/annotation/typeName/Identifier:[image#annotation], /unannType/unannClassType/Identifier:[image#className], /variableDeclaratorList/variableDeclaratorId/Identifier:[image#instanceId]]",
	    allImports = "/importDeclaration/Import:[image#import]",
	    allMethods = "/methodDeclaration/methodHeader/methodDeclarator/Identifier:[image#methodName]",
	    classNames = "/classDeclaration/normalClassDeclaration/typeIdentifier/Identifier:[image#javaClass]",
	    test = "/methodBody/block/blockStatements/blockStatement/localVariableDeclarationStatement/localVariableDeclaration/variableDeclaratorList/variableDeclarator/variableInitializer/expression/ternaryExpression/binaryExpression/unaryExpression/primary/primaryPrefix/fqnOrRefType/fqnOrRefTypePartFirst/fqnOrRefTypePartCommon/Identifier[?{(image=\"accountService\")}]:[image#serviceCall]",
	    serviceWithoutThis = "/methodBody/blockStatements/fqnOrRefType[/fqnOrRefTypePartFirst/Identifier?{(image=\"userService\")}]:[/fqnOrRefTypePartFirst/Identifier:[image#service], /fqnOrRefTypePartRest/Identifier:[image#serviceMethod]]",
	    serviceWithThis = "/methodBody/blockStatements/statementWithoutTrailingSubstatement/unaryExpression/primarySuffix/Identifier(image=\"userService\")]/fqnOrRefType:[/fqnOrRefTypePartFirst/Identifier:[image#service], /fqnOrRefTypePartRest/Identifier:[image#serviceMethod]]",
	    test21 = "/methodBody/blockStatements/blockStatement/fqnOrRefType[?{/fqnOrRefTypePartFirst/Identifier(image=\"userService\")}]",
	    test3 = "methodBody/blockStatements/blockStatement/statement/statementWithoutTrailingSubstatement/expressionStatement/statementExpression/expression/ternaryExpression/binaryExpression/unaryExpression/primary/primarySuffix/Identifier:[image#serviceCall]",
	    test4 = "/methodBody/blockStatements/blockStatement/fqnOrRefType[?{/fqnOrRefTypePartFirst/Identifier(image=\"userService\")}]",
	    test5 = "/methodBody/blockStatements/blockStatement[?{/fqnOrRefType/fqnOrRefTypePartFirst/Identifier(image=\"userService\")}]/fqnOrRefType",
	    test6 = "/methodBody/blockStatements[?{/fqnOrRefType/fqnOrRefTypePartFirst/Identifier(image=\"userService\")}]:[/fqnOrRefType/fqnOrRefTypePartFirst/Identifier:[image#service]]",
	    test7 = "statement/statementWithoutTrailingSubstatement/expressionStatement/statementExpression/expression/ternaryExpression/binaryExpression/unaryExpression/primary/primaryPrefix/fqnOrRefType[/fqnOrRefTypePartFirst?{/fqnOrRefTypePartCommon(image=\"userService\")}]",
	    test8 = "statement/ifStatement/statement/statementWithoutTrailingSubstatement/block/blockStatements/blockStatement/localVariableDeclarationStatement/localVariableDeclaration/variableDeclaratorList/variableDeclarator/variableInitializer/expression/ternaryExpression/binaryExpression/unaryExpression/primary/primaryPrefix/fqnOrRefType/fqnOrRefTypePartFirst/fqnOrRefTypePartCommon[?{/Identifier(image=\"userService\")}]",
	    test9 = "/methodBody/blockStatements/blockStatement[?{/fqnOrRefType/fqnOrRefTypePartFirst/Identifier(image=\"userService\")]/unaryExpression/primary/primaryPrefix/fqnOrRefType:[/fqnOrRefTypePartFirst/fqnOrRefTypePartCommon/Identifier:[image#service], /fqnOrRefTypePartRest/fqnOrRefTypePartCommon/Identifier:[image#serviceMethod]]",
	    test10 = "/methodBody/block/blockStatements/blockStatement/statement/block/blockStatements/blockStatement/statement/statementWithoutTrailingSubstatement/expressionStatement/statementExpression/expression/ternaryExpression/binaryExpression/unaryExpression/primary/primarySuffix[?{/Identifier(image=\"userService\")}]",
	    test11 = "/methodBody/blockStatements/fqnOrRefType[/fqnOrRefTypePartFirst/Identifier?{(image=\"userService\")}]",
	    alluserServiceSteps = "/methodBody/block/blockStatements/blockStatement/expressionStatement/statementExpression/expression/primary[?{/primarySuffix~0/Identifier(image=\"userService\")}]:[/primarySuffix~0/Identifier:[image#primarySuffix], /primarySuffix~1/Identifier:[image#primarySuffix]]"
	}
	export default class JParser {
	    constructor();
	    parse(): void;
	    getResults(cst: any, expression: any): any[];
	}

}