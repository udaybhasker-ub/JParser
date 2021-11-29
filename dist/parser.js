/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var JParser_1 = __webpack_require__(/*! ./src/JParser */ "./src/JParser.ts");
Array.prototype['last'] = function () {
    return this[this.length - 1];
};
var parser = new JParser_1["default"]();
parser.parseTest();


/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/api.js":
/*!****************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/api.js ***!
  \****************************************************/
/*! exports provided: VERSION, Parser, CstParser, EmbeddedActionsParser, ParserDefinitionErrorType, EMPTY_ALT, Lexer, LexerDefinitionErrorType, createToken, createTokenInstance, EOF, tokenLabel, tokenMatcher, tokenName, defaultGrammarResolverErrorProvider, defaultGrammarValidatorErrorProvider, defaultParserErrorProvider, EarlyExitException, isRecognitionException, MismatchedTokenException, NotAllInputParsedException, NoViableAltException, defaultLexerErrorProvider, Alternation, Flat, NonTerminal, Option, Repetition, RepetitionMandatory, RepetitionMandatoryWithSeparator, RepetitionWithSeparator, Rule, Terminal, serializeGrammar, serializeProduction, GAstVisitor, assignOccurrenceIndices, resolveGrammar, validateGrammar, clearCache, createSyntaxDiagramsCode, generateParserFactory, generateParserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCache", function() { return clearCache; });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version */ "./node_modules/chevrotain/lib_esm/src/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _version__WEBPACK_IMPORTED_MODULE_0__["VERSION"]; });

/* harmony import */ var _parse_parser_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse/parser/parser */ "./node_modules/chevrotain/lib_esm/src/parse/parser/parser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return _parse_parser_parser__WEBPACK_IMPORTED_MODULE_1__["Parser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CstParser", function() { return _parse_parser_parser__WEBPACK_IMPORTED_MODULE_1__["CstParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmbeddedActionsParser", function() { return _parse_parser_parser__WEBPACK_IMPORTED_MODULE_1__["EmbeddedActionsParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParserDefinitionErrorType", function() { return _parse_parser_parser__WEBPACK_IMPORTED_MODULE_1__["ParserDefinitionErrorType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMPTY_ALT", function() { return _parse_parser_parser__WEBPACK_IMPORTED_MODULE_1__["EMPTY_ALT"]; });

/* harmony import */ var _scan_lexer_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scan/lexer_public */ "./node_modules/chevrotain/lib_esm/src/scan/lexer_public.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lexer", function() { return _scan_lexer_public__WEBPACK_IMPORTED_MODULE_2__["Lexer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LexerDefinitionErrorType", function() { return _scan_lexer_public__WEBPACK_IMPORTED_MODULE_2__["LexerDefinitionErrorType"]; });

/* harmony import */ var _scan_tokens_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scan/tokens_public */ "./node_modules/chevrotain/lib_esm/src/scan/tokens_public.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createToken", function() { return _scan_tokens_public__WEBPACK_IMPORTED_MODULE_3__["createToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTokenInstance", function() { return _scan_tokens_public__WEBPACK_IMPORTED_MODULE_3__["createTokenInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EOF", function() { return _scan_tokens_public__WEBPACK_IMPORTED_MODULE_3__["EOF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenLabel", function() { return _scan_tokens_public__WEBPACK_IMPORTED_MODULE_3__["tokenLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenMatcher", function() { return _scan_tokens_public__WEBPACK_IMPORTED_MODULE_3__["tokenMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenName", function() { return _scan_tokens_public__WEBPACK_IMPORTED_MODULE_3__["tokenName"]; });

/* harmony import */ var _parse_errors_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parse/errors_public */ "./node_modules/chevrotain/lib_esm/src/parse/errors_public.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultGrammarResolverErrorProvider", function() { return _parse_errors_public__WEBPACK_IMPORTED_MODULE_4__["defaultGrammarResolverErrorProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultGrammarValidatorErrorProvider", function() { return _parse_errors_public__WEBPACK_IMPORTED_MODULE_4__["defaultGrammarValidatorErrorProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultParserErrorProvider", function() { return _parse_errors_public__WEBPACK_IMPORTED_MODULE_4__["defaultParserErrorProvider"]; });

/* harmony import */ var _parse_exceptions_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parse/exceptions_public */ "./node_modules/chevrotain/lib_esm/src/parse/exceptions_public.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EarlyExitException", function() { return _parse_exceptions_public__WEBPACK_IMPORTED_MODULE_5__["EarlyExitException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRecognitionException", function() { return _parse_exceptions_public__WEBPACK_IMPORTED_MODULE_5__["isRecognitionException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MismatchedTokenException", function() { return _parse_exceptions_public__WEBPACK_IMPORTED_MODULE_5__["MismatchedTokenException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotAllInputParsedException", function() { return _parse_exceptions_public__WEBPACK_IMPORTED_MODULE_5__["NotAllInputParsedException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoViableAltException", function() { return _parse_exceptions_public__WEBPACK_IMPORTED_MODULE_5__["NoViableAltException"]; });

/* harmony import */ var _scan_lexer_errors_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scan/lexer_errors_public */ "./node_modules/chevrotain/lib_esm/src/scan/lexer_errors_public.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultLexerErrorProvider", function() { return _scan_lexer_errors_public__WEBPACK_IMPORTED_MODULE_6__["defaultLexerErrorProvider"]; });

/* harmony import */ var _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parse/grammar/gast/gast_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alternation", function() { return _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_7__["Alternation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flat", function() { return _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_7__["Flat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NonTerminal", function() { return _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_7__["NonTerminal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_7__["Option"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Repetition", function() { return _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_7__["Repetition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepetitionMandatory", function() { return _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_7__["RepetitionMandatory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepetitionMandatoryWithSeparator", function() { return _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_7__["RepetitionMandatoryWithSeparator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepetitionWithSeparator", function() { return _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_7__["RepetitionWithSeparator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rule", function() { return _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_7__["Rule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Terminal", function() { return _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_7__["Terminal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeGrammar", function() { return _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_7__["serializeGrammar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeProduction", function() { return _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_7__["serializeProduction"]; });

/* harmony import */ var _parse_grammar_gast_gast_visitor_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse/grammar/gast/gast_visitor_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_visitor_public.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GAstVisitor", function() { return _parse_grammar_gast_gast_visitor_public__WEBPACK_IMPORTED_MODULE_8__["GAstVisitor"]; });

/* harmony import */ var _parse_grammar_gast_gast_resolver_public__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parse/grammar/gast/gast_resolver_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_resolver_public.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignOccurrenceIndices", function() { return _parse_grammar_gast_gast_resolver_public__WEBPACK_IMPORTED_MODULE_9__["assignOccurrenceIndices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveGrammar", function() { return _parse_grammar_gast_gast_resolver_public__WEBPACK_IMPORTED_MODULE_9__["resolveGrammar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateGrammar", function() { return _parse_grammar_gast_gast_resolver_public__WEBPACK_IMPORTED_MODULE_9__["validateGrammar"]; });

/* harmony import */ var _diagrams_render_public__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./diagrams/render_public */ "./node_modules/chevrotain/lib_esm/src/diagrams/render_public.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSyntaxDiagramsCode", function() { return _diagrams_render_public__WEBPACK_IMPORTED_MODULE_10__["createSyntaxDiagramsCode"]; });

/* harmony import */ var _generate_generate_public__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./generate/generate_public */ "./node_modules/chevrotain/lib_esm/src/generate/generate_public.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateParserFactory", function() { return _generate_generate_public__WEBPACK_IMPORTED_MODULE_11__["generateParserFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateParserModule", function() { return _generate_generate_public__WEBPACK_IMPORTED_MODULE_11__["generateParserModule"]; });

// semantic version



// Tokens utilities

// Other Utilities



// grammar reflection API

// GAST Utilities



/* istanbul ignore next */
function clearCache() {
    console.warn("The clearCache function was 'soft' removed from the Chevrotain API." +
        "\n\t It performs no action other than printing this message." +
        "\n\t Please avoid using it as it will be completely removed in the future");
}


//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/diagrams/render_public.js":
/*!***********************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/diagrams/render_public.js ***!
  \***********************************************************************/
/*! exports provided: createSyntaxDiagramsCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSyntaxDiagramsCode", function() { return createSyntaxDiagramsCode; });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../version */ "./node_modules/chevrotain/lib_esm/src/version.js");

function createSyntaxDiagramsCode(grammar, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.resourceBase, resourceBase = _c === void 0 ? "https://unpkg.com/chevrotain@" + _version__WEBPACK_IMPORTED_MODULE_0__["VERSION"] + "/diagrams/" : _c, _d = _b.css, css = _d === void 0 ? "https://unpkg.com/chevrotain@" + _version__WEBPACK_IMPORTED_MODULE_0__["VERSION"] + "/diagrams/diagrams.css" : _d;
    var header = "\n<!-- This is a generated file -->\n<!DOCTYPE html>\n<meta charset=\"utf-8\">\n<style>\n  body {\n    background-color: hsl(30, 20%, 95%)\n  }\n</style>\n\n";
    var cssHtml = "\n<link rel='stylesheet' href='" + css + "'>\n";
    var scripts = "\n<script src='" + resourceBase + "vendor/railroad-diagrams.js'></script>\n<script src='" + resourceBase + "src/diagrams_builder.js'></script>\n<script src='" + resourceBase + "src/diagrams_behavior.js'></script>\n<script src='" + resourceBase + "src/main.js'></script>\n";
    var diagramsDiv = "\n<div id=\"diagrams\" align=\"center\"></div>    \n";
    var serializedGrammar = "\n<script>\n    window.serializedGrammar = " + JSON.stringify(grammar, null, "  ") + ";\n</script>\n";
    var initLogic = "\n<script>\n    var diagramsDiv = document.getElementById(\"diagrams\");\n    main.drawDiagramsFromSerializedGrammar(serializedGrammar, diagramsDiv);\n</script>\n";
    return (header + cssHtml + scripts + diagramsDiv + serializedGrammar + initLogic);
}
//# sourceMappingURL=render_public.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/generate/generate.js":
/*!******************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/generate/generate.js ***!
  \******************************************************************/
/*! exports provided: genUmdModule, genWrapperFunction, genClass, genAllRules, genRule, genTerminal, genNonTerminal, genAlternation, genSingleAlt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genUmdModule", function() { return genUmdModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genWrapperFunction", function() { return genWrapperFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genClass", function() { return genClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genAllRules", function() { return genAllRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genRule", function() { return genRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genTerminal", function() { return genTerminal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genNonTerminal", function() { return genNonTerminal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genAlternation", function() { return genAlternation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genSingleAlt", function() { return genSingleAlt; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parse/grammar/gast/gast_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js");


/**
 * Missing features
 * 1. Rule arguments
 * 2. Gates
 * 3. embedded actions
 */
var NL = "\n";
function genUmdModule(options) {
    return "\n(function (root, factory) {\n    if (typeof define === 'function' && define.amd) {\n        // AMD. Register as an anonymous module.\n        define(['chevrotain'], factory);\n    } else if (typeof module === 'object' && module.exports) {\n        // Node. Does not work with strict CommonJS, but\n        // only CommonJS-like environments that support module.exports,\n        // like Node.\n        module.exports = factory(require('chevrotain'));\n    } else {\n        // Browser globals (root is window)\n        root.returnExports = factory(root.b);\n    }\n}(typeof self !== 'undefined' ? self : this, function (chevrotain) {\n\n" + genClass(options) + "\n    \nreturn {\n    " + options.name + ": " + options.name + " \n}\n}));\n";
}
function genWrapperFunction(options) {
    return "    \n" + genClass(options) + "\nreturn new " + options.name + "(tokenVocabulary, config)    \n";
}
function genClass(options) {
    // TODO: how to pass the token vocabulary? Constructor? other?
    var result = "\nfunction " + options.name + "(tokenVocabulary, config) {\n    // invoke super constructor\n    // No support for embedded actions currently, so we can 'hardcode'\n    // The use of CstParser.\n    chevrotain.CstParser.call(this, tokenVocabulary, config)\n\n    const $ = this\n\n    " + genAllRules(options.rules) + "\n\n    // very important to call this after all the rules have been defined.\n    // otherwise the parser may not work correctly as it will lack information\n    // derived during the self analysis phase.\n    this.performSelfAnalysis(this)\n}\n\n// inheritance as implemented in javascript in the previous decade... :(\n" + options.name + ".prototype = Object.create(chevrotain.CstParser.prototype)\n" + options.name + ".prototype.constructor = " + options.name + "    \n    ";
    return result;
}
function genAllRules(rules) {
    var rulesText = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(rules, function (currRule) {
        return genRule(currRule, 1);
    });
    return rulesText.join("\n");
}
function genRule(prod, n) {
    var result = indent(n, "$.RULE(\"" + prod.name + "\", function() {") + NL;
    result += genDefinition(prod.definition, n + 1);
    result += indent(n + 1, "})") + NL;
    return result;
}
function genTerminal(prod, n) {
    var name = prod.terminalType.name;
    // TODO: potential performance optimization, avoid tokenMap Dictionary access
    return indent(n, "$.CONSUME" + prod.idx + "(this.tokensMap." + name + ")" + NL);
}
function genNonTerminal(prod, n) {
    return indent(n, "$.SUBRULE" + prod.idx + "($." + prod.nonTerminalName + ")" + NL);
}
function genAlternation(prod, n) {
    var result = indent(n, "$.OR" + prod.idx + "([") + NL;
    var alts = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(prod.definition, function (altDef) { return genSingleAlt(altDef, n + 1); });
    result += alts.join("," + NL);
    result += NL + indent(n, "])" + NL);
    return result;
}
function genSingleAlt(prod, n) {
    var result = indent(n, "{") + NL;
    if (prod.name) {
        result += indent(n + 1, "NAME: \"" + prod.name + "\",") + NL;
    }
    result += indent(n + 1, "ALT: function() {") + NL;
    result += genDefinition(prod.definition, n + 1);
    result += indent(n + 1, "}") + NL;
    result += indent(n, "}");
    return result;
}
function genProd(prod, n) {
    /* istanbul ignore else */
    if (prod instanceof _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["NonTerminal"]) {
        return genNonTerminal(prod, n);
    }
    else if (prod instanceof _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Option"]) {
        return genDSLRule("OPTION", prod, n);
    }
    else if (prod instanceof _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["RepetitionMandatory"]) {
        return genDSLRule("AT_LEAST_ONE", prod, n);
    }
    else if (prod instanceof _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["RepetitionMandatoryWithSeparator"]) {
        return genDSLRule("AT_LEAST_ONE_SEP", prod, n);
    }
    else if (prod instanceof _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["RepetitionWithSeparator"]) {
        return genDSLRule("MANY_SEP", prod, n);
    }
    else if (prod instanceof _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Repetition"]) {
        return genDSLRule("MANY", prod, n);
    }
    else if (prod instanceof _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Alternation"]) {
        return genAlternation(prod, n);
    }
    else if (prod instanceof _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Terminal"]) {
        return genTerminal(prod, n);
    }
    else if (prod instanceof _parse_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Flat"]) {
        return genDefinition(prod.definition, n);
    }
    else {
        throw Error("non exhaustive match");
    }
}
function genDSLRule(dslName, prod, n) {
    var result = indent(n, "$." + (dslName + prod.idx) + "(");
    if (prod.name || prod.separator) {
        result += "{" + NL;
        if (prod.name) {
            result += indent(n + 1, "NAME: \"" + prod.name + "\"") + "," + NL;
        }
        if (prod.separator) {
            result +=
                indent(n + 1, "SEP: this.tokensMap." + prod.separator.name) +
                    "," +
                    NL;
        }
        result += "DEF: " + genDefFunction(prod.definition, n + 2) + NL;
        result += indent(n, "}") + NL;
    }
    else {
        result += genDefFunction(prod.definition, n + 1);
    }
    result += indent(n, ")") + NL;
    return result;
}
function genDefFunction(definition, n) {
    var def = "function() {" + NL;
    def += genDefinition(definition, n);
    def += indent(n, "}") + NL;
    return def;
}
function genDefinition(def, n) {
    var result = "";
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(def, function (prod) {
        result += genProd(prod, n + 1);
    });
    return result;
}
function indent(howMuch, text) {
    var spaces = Array(howMuch * 4 + 1).join(" ");
    return spaces + text;
}
//# sourceMappingURL=generate.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/generate/generate_public.js":
/*!*************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/generate/generate_public.js ***!
  \*************************************************************************/
/*! exports provided: generateParserFactory, generateParserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateParserFactory", function() { return generateParserFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateParserModule", function() { return generateParserModule; });
/* harmony import */ var _generate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate */ "./node_modules/chevrotain/lib_esm/src/generate/generate.js");

function generateParserFactory(options) {
    var wrapperText = Object(_generate__WEBPACK_IMPORTED_MODULE_0__["genWrapperFunction"])({
        name: options.name,
        rules: options.rules
    });
    var constructorWrapper = new Function("tokenVocabulary", "config", "chevrotain", wrapperText);
    return function (config) {
        return constructorWrapper(options.tokenVocabulary, config, 
        // TODO: check how the require is transpiled/webpacked
        __webpack_require__(/*! ../api */ "./node_modules/chevrotain/lib_esm/src/api.js"));
    };
}
function generateParserModule(options) {
    return Object(_generate__WEBPACK_IMPORTED_MODULE_0__["genUmdModule"])({ name: options.name, rules: options.rules });
}
//# sourceMappingURL=generate_public.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/lang/lang_extensions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/lang/lang_extensions.js ***!
  \*********************************************************************/
/*! exports provided: classNameFromInstance, functionName, defineNameProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNameFromInstance", function() { return classNameFromInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "functionName", function() { return functionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineNameProp", function() { return defineNameProp; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");

function classNameFromInstance(instance) {
    return functionName(instance.constructor);
}
var FUNC_NAME_REGEXP = /^\s*function\s*(\S*)\s*\(/;
var NAME = "name";
/* istanbul ignore next too many hacks for IE/old versions of node.js here*/
function functionName(func) {
    // Engines that support Function.prototype.name OR the nth (n>1) time after
    // the name has been computed in the following else block.
    var existingNameProp = func.name;
    if (existingNameProp) {
        return existingNameProp;
    }
    // hack for IE and engines that do not support Object.defineProperty on function.name (Node.js 0.10 && 0.12)
    var computedName = func.toString().match(FUNC_NAME_REGEXP)[1];
    return computedName;
}
/**
 * @returns {boolean} - has the property been successfully defined
 */
function defineNameProp(obj, nameValue) {
    var namePropDescriptor = Object.getOwnPropertyDescriptor(obj, NAME);
    /* istanbul ignore else -> will only run in old versions of node.js */
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(namePropDescriptor) || namePropDescriptor.configurable) {
        Object.defineProperty(obj, NAME, {
            enumerable: false,
            configurable: true,
            writable: false,
            value: nameValue
        });
        return true;
    }
    /* istanbul ignore next -> will only run in old versions of node.js */
    return false;
}
//# sourceMappingURL=lang_extensions.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/constants.js":
/*!****************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/constants.js ***!
  \****************************************************************/
/*! exports provided: IN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IN", function() { return IN; });
// TODO: can this be removed? where is it used?
var IN = "_~IN~_";
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/cst/cst.js":
/*!**************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/cst/cst.js ***!
  \**************************************************************/
/*! exports provided: setNodeLocationOnlyOffset, setNodeLocationFull, addTerminalToCst, addNoneTerminalToCst, NamedDSLMethodsCollectorVisitor, expandAllNestedRuleNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNodeLocationOnlyOffset", function() { return setNodeLocationOnlyOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNodeLocationFull", function() { return setNodeLocationFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTerminalToCst", function() { return addTerminalToCst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNoneTerminalToCst", function() { return addNoneTerminalToCst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedDSLMethodsCollectorVisitor", function() { return NamedDSLMethodsCollectorVisitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandAllNestedRuleNames", function() { return expandAllNestedRuleNames; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _grammar_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../grammar/keys */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/keys.js");
/* harmony import */ var _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grammar/gast/gast_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js");
/* harmony import */ var _grammar_gast_gast_visitor_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grammar/gast/gast_visitor_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_visitor_public.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * This nodeLocation tracking is not efficient and should only be used
 * when error recovery is enabled or the Token Vector contains virtual Tokens
 * (e.g, Python Indent/Outdent)
 * As it executes the calculation for every single terminal/nonTerminal
 * and does not rely on the fact the token vector is **sorted**
 */
function setNodeLocationOnlyOffset(currNodeLocation, newLocationInfo) {
    // First (valid) update for this cst node
    if (isNaN(currNodeLocation.startOffset) === true) {
        // assumption1: Token location information is either NaN or a valid number
        // assumption2: Token location information is fully valid if it exist
        // (both start/end offsets exist and are numbers).
        currNodeLocation.startOffset = newLocationInfo.startOffset;
        currNodeLocation.endOffset = newLocationInfo.endOffset;
    }
    // Once the startOffset has been updated with a valid number it should never receive
    // any farther updates as the Token vector is sorted.
    // We still have to check this this condition for every new possible location info
    // because with error recovery enabled we may encounter invalid tokens (NaN location props)
    else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
        currNodeLocation.endOffset = newLocationInfo.endOffset;
    }
}
/**
 * This nodeLocation tracking is not efficient and should only be used
 * when error recovery is enabled or the Token Vector contains virtual Tokens
 * (e.g, Python Indent/Outdent)
 * As it executes the calculation for every single terminal/nonTerminal
 * and does not rely on the fact the token vector is **sorted**
 */
function setNodeLocationFull(currNodeLocation, newLocationInfo) {
    // First (valid) update for this cst node
    if (isNaN(currNodeLocation.startOffset) === true) {
        // assumption1: Token location information is either NaN or a valid number
        // assumption2: Token location information is fully valid if it exist
        // (all start/end props exist and are numbers).
        currNodeLocation.startOffset = newLocationInfo.startOffset;
        currNodeLocation.startColumn = newLocationInfo.startColumn;
        currNodeLocation.startLine = newLocationInfo.startLine;
        currNodeLocation.endOffset = newLocationInfo.endOffset;
        currNodeLocation.endColumn = newLocationInfo.endColumn;
        currNodeLocation.endLine = newLocationInfo.endLine;
    }
    // Once the start props has been updated with a valid number it should never receive
    // any farther updates as the Token vector is sorted.
    // We still have to check this this condition for every new possible location info
    // because with error recovery enabled we may encounter invalid tokens (NaN location props)
    else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
        currNodeLocation.endOffset = newLocationInfo.endOffset;
        currNodeLocation.endColumn = newLocationInfo.endColumn;
        currNodeLocation.endLine = newLocationInfo.endLine;
    }
}
function addTerminalToCst(node, token, tokenTypeName) {
    if (node.children[tokenTypeName] === undefined) {
        node.children[tokenTypeName] = [token];
    }
    else {
        node.children[tokenTypeName].push(token);
    }
}
function addNoneTerminalToCst(node, ruleName, ruleResult) {
    if (node.children[ruleName] === undefined) {
        node.children[ruleName] = [ruleResult];
    }
    else {
        node.children[ruleName].push(ruleResult);
    }
}
var NamedDSLMethodsCollectorVisitor = /** @class */ (function (_super) {
    __extends(NamedDSLMethodsCollectorVisitor, _super);
    function NamedDSLMethodsCollectorVisitor(ruleIdx) {
        var _this = _super.call(this) || this;
        _this.result = [];
        _this.ruleIdx = ruleIdx;
        return _this;
    }
    NamedDSLMethodsCollectorVisitor.prototype.collectNamedDSLMethod = function (node, newNodeConstructor, methodIdx) {
        // TODO: better hack to copy what we need here...
        if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(node.name)) {
            // copy without name so this will indeed be processed later.
            var nameLessNode 
            /* istanbul ignore else */
            = void 0;
            /* istanbul ignore else */
            if (node instanceof _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__["Option"] ||
                node instanceof _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__["Repetition"] ||
                node instanceof _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__["RepetitionMandatory"] ||
                node instanceof _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__["Alternation"]) {
                nameLessNode = new newNodeConstructor({
                    definition: node.definition,
                    idx: node.idx
                });
            }
            else if (node instanceof _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__["RepetitionMandatoryWithSeparator"] ||
                node instanceof _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__["RepetitionWithSeparator"]) {
                nameLessNode = new newNodeConstructor({
                    definition: node.definition,
                    idx: node.idx,
                    separator: node.separator
                });
            }
            else {
                throw Error("non exhaustive match");
            }
            var def = [nameLessNode];
            var key = Object(_grammar_keys__WEBPACK_IMPORTED_MODULE_1__["getKeyForAutomaticLookahead"])(this.ruleIdx, methodIdx, node.idx);
            this.result.push({ def: def, key: key, name: node.name, orgProd: node });
        }
    };
    NamedDSLMethodsCollectorVisitor.prototype.visitOption = function (node) {
        this.collectNamedDSLMethod(node, _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__["Option"], _grammar_keys__WEBPACK_IMPORTED_MODULE_1__["OPTION_IDX"]);
    };
    NamedDSLMethodsCollectorVisitor.prototype.visitRepetition = function (node) {
        this.collectNamedDSLMethod(node, _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__["Repetition"], _grammar_keys__WEBPACK_IMPORTED_MODULE_1__["MANY_IDX"]);
    };
    NamedDSLMethodsCollectorVisitor.prototype.visitRepetitionMandatory = function (node) {
        this.collectNamedDSLMethod(node, _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__["RepetitionMandatory"], _grammar_keys__WEBPACK_IMPORTED_MODULE_1__["AT_LEAST_ONE_IDX"]);
    };
    NamedDSLMethodsCollectorVisitor.prototype.visitRepetitionMandatoryWithSeparator = function (node) {
        this.collectNamedDSLMethod(node, _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__["RepetitionMandatoryWithSeparator"], _grammar_keys__WEBPACK_IMPORTED_MODULE_1__["AT_LEAST_ONE_SEP_IDX"]);
    };
    NamedDSLMethodsCollectorVisitor.prototype.visitRepetitionWithSeparator = function (node) {
        this.collectNamedDSLMethod(node, _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__["RepetitionWithSeparator"], _grammar_keys__WEBPACK_IMPORTED_MODULE_1__["MANY_SEP_IDX"]);
    };
    NamedDSLMethodsCollectorVisitor.prototype.visitAlternation = function (node) {
        var _this = this;
        this.collectNamedDSLMethod(node, _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__["Alternation"], _grammar_keys__WEBPACK_IMPORTED_MODULE_1__["OR_IDX"]);
        var hasMoreThanOneAlternative = node.definition.length > 1;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(node.definition, function (currFlatAlt, altIdx) {
            if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(currFlatAlt.name)) {
                var def = currFlatAlt.definition;
                if (hasMoreThanOneAlternative) {
                    def = [new _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__["Option"]({ definition: currFlatAlt.definition })];
                }
                else {
                    // mandatory
                    def = currFlatAlt.definition;
                }
                var key = Object(_grammar_keys__WEBPACK_IMPORTED_MODULE_1__["getKeyForAltIndex"])(_this.ruleIdx, _grammar_keys__WEBPACK_IMPORTED_MODULE_1__["OR_IDX"], node.idx, altIdx);
                _this.result.push({
                    def: def,
                    key: key,
                    name: currFlatAlt.name,
                    orgProd: currFlatAlt
                });
            }
        });
    };
    return NamedDSLMethodsCollectorVisitor;
}(_grammar_gast_gast_visitor_public__WEBPACK_IMPORTED_MODULE_3__["GAstVisitor"]));

function expandAllNestedRuleNames(topRules, fullToShortName) {
    var result = {
        allRuleNames: []
    };
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(topRules, function (currTopRule) {
        var currTopRuleShortName = fullToShortName[currTopRule.name];
        result.allRuleNames.push(currTopRule.name);
        var namedCollectorVisitor = new NamedDSLMethodsCollectorVisitor(currTopRuleShortName);
        currTopRule.accept(namedCollectorVisitor);
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(namedCollectorVisitor.result, function (_a) {
            var def = _a.def, key = _a.key, name = _a.name;
            result.allRuleNames.push(currTopRule.name + name);
        });
    });
    return result;
}
//# sourceMappingURL=cst.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/cst/cst_visitor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/cst/cst_visitor.js ***!
  \**********************************************************************/
/*! exports provided: defaultVisit, createBaseSemanticVisitorConstructor, createBaseVisitorConstructorWithDefaults, CstVisitorDefinitionError, validateVisitor, validateMissingCstMethods, validateRedundantMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultVisit", function() { return defaultVisit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBaseSemanticVisitorConstructor", function() { return createBaseSemanticVisitorConstructor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBaseVisitorConstructorWithDefaults", function() { return createBaseVisitorConstructorWithDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CstVisitorDefinitionError", function() { return CstVisitorDefinitionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateVisitor", function() { return validateVisitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMissingCstMethods", function() { return validateMissingCstMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateRedundantMethods", function() { return validateRedundantMethods; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _lang_lang_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lang/lang_extensions */ "./node_modules/chevrotain/lib_esm/src/lang/lang_extensions.js");
/* harmony import */ var _grammar_checks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grammar/checks */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/checks.js");



function defaultVisit(ctx, param) {
    var childrenNames = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["keys"])(ctx);
    var childrenNamesLength = childrenNames.length;
    for (var i = 0; i < childrenNamesLength; i++) {
        var currChildName = childrenNames[i];
        if (currChildName === 'name') return;
        var currChildArray = ctx[currChildName];
        var currChildArrayLength = currChildArray.length;
        for (var j = 0; j < currChildArrayLength; j++) {
            var currChild = currChildArray[j];
            // distinction between Tokens Children and CstNode children
            if (currChild.tokenTypeIdx === undefined) {
                if (currChild.fullName !== undefined) {
                    this[currChild.fullName](currChild.children, param);
                }
                else {
                    this[currChild.name](currChild.children, param);
                }
            }
        }
    }
    // defaultVisit does not support generic out param
    return undefined;
}
function createBaseSemanticVisitorConstructor(grammarName, ruleNames) {
    var derivedConstructor = function () { };
    // can be overwritten according to:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/
    // name?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fname
    Object(_lang_lang_extensions__WEBPACK_IMPORTED_MODULE_1__["defineNameProp"])(derivedConstructor, grammarName + "BaseSemantics");
    var semanticProto = {
        visit: function (cstNode, param) {
            // enables writing more concise visitor methods when CstNode has only a single child
            if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(cstNode)) {
                // A CST Node's children dictionary can never have empty arrays as values
                // If a key is defined there will be at least one element in the corresponding value array.
                cstNode = cstNode[0];
            }
            // enables passing optional CstNodes concisely.
            if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(cstNode)) {
                return undefined;
            }
            if (cstNode.fullName !== undefined) {
                return this[cstNode.fullName](cstNode.children, param);
            }
            else {
                if (cstNode.tokenTypeIdx) {
                    return this[cstNode.tokenType.name](cstNode, param);
                }
                return this[cstNode.name](cstNode.children, param);
            }
        },
        validateVisitor: function () {
            var semanticDefinitionErrors = validateVisitor(this, ruleNames);
            if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(semanticDefinitionErrors)) {
                var errorMessages = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(semanticDefinitionErrors, function (currDefError) { return currDefError.msg; });
                throw Error("Errors Detected in CST Visitor <" + Object(_lang_lang_extensions__WEBPACK_IMPORTED_MODULE_1__["functionName"])(this.constructor) + ">:\n\t" +
                    ("" + errorMessages.join("\n\n").replace(/\n/g, "\n\t")));
            }
        }
    };
    derivedConstructor.prototype = semanticProto;
    derivedConstructor.prototype.constructor = derivedConstructor;
    derivedConstructor._RULE_NAMES = ruleNames;
    return derivedConstructor;
}
function createBaseVisitorConstructorWithDefaults(grammarName, ruleNames, baseConstructor) {
    var derivedConstructor = function () { };
    // can be overwritten according to:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/
    // name?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FFunction%2Fname
    Object(_lang_lang_extensions__WEBPACK_IMPORTED_MODULE_1__["defineNameProp"])(derivedConstructor, grammarName + "BaseSemanticsWithDefaults");
    var withDefaultsProto = Object.create(baseConstructor.prototype);
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(ruleNames, function (ruleName) {
        withDefaultsProto[ruleName] = defaultVisit;
    });
    derivedConstructor.prototype = withDefaultsProto;
    derivedConstructor.prototype.constructor = derivedConstructor;
    return derivedConstructor;
}
var CstVisitorDefinitionError;
(function (CstVisitorDefinitionError) {
    CstVisitorDefinitionError[CstVisitorDefinitionError["REDUNDANT_METHOD"] = 0] = "REDUNDANT_METHOD";
    CstVisitorDefinitionError[CstVisitorDefinitionError["MISSING_METHOD"] = 1] = "MISSING_METHOD";
})(CstVisitorDefinitionError || (CstVisitorDefinitionError = {}));
function validateVisitor(visitorInstance, ruleNames) {
    var missingErrors = validateMissingCstMethods(visitorInstance, ruleNames);
    var redundantErrors = validateRedundantMethods(visitorInstance, ruleNames);
    return missingErrors.concat(redundantErrors);
}
function validateMissingCstMethods(visitorInstance, ruleNames) {
    var errors = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(ruleNames, function (currRuleName) {
        if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(visitorInstance[currRuleName])) {
            return {
                msg: "Missing visitor method: <" + currRuleName + "> on " + Object(_lang_lang_extensions__WEBPACK_IMPORTED_MODULE_1__["functionName"])(visitorInstance.constructor) + " CST Visitor.",
                type: CstVisitorDefinitionError.MISSING_METHOD,
                methodName: currRuleName
            };
        }
    });
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["compact"])(errors);
}
var VALID_PROP_NAMES = ["constructor", "visit", "validateVisitor"];
function validateRedundantMethods(visitorInstance, ruleNames) {
    var errors = [];
    for (var prop in visitorInstance) {
        if (_grammar_checks__WEBPACK_IMPORTED_MODULE_2__["validTermsPattern"].test(prop) &&
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(visitorInstance[prop]) &&
            !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["contains"])(VALID_PROP_NAMES, prop) &&
            !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["contains"])(ruleNames, prop)) {
            errors.push({
                msg: "Redundant visitor method: <" + prop + "> on " + Object(_lang_lang_extensions__WEBPACK_IMPORTED_MODULE_1__["functionName"])(visitorInstance.constructor) + " CST Visitor\n" +
                    "There is no Grammar Rule corresponding to this method's name.\n" +
                    ("For utility methods on visitor classes use methods names that do not match /" + _grammar_checks__WEBPACK_IMPORTED_MODULE_2__["validTermsPattern"].source + "/."),
                type: CstVisitorDefinitionError.REDUNDANT_METHOD,
                methodName: prop
            });
        }
    }
    return errors;
}
//# sourceMappingURL=cst_visitor.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/errors_public.js":
/*!********************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/errors_public.js ***!
  \********************************************************************/
/*! exports provided: defaultParserErrorProvider, defaultGrammarResolverErrorProvider, defaultGrammarValidatorErrorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultParserErrorProvider", function() { return defaultParserErrorProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGrammarResolverErrorProvider", function() { return defaultGrammarResolverErrorProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGrammarValidatorErrorProvider", function() { return defaultGrammarValidatorErrorProvider; });
/* harmony import */ var _scan_tokens_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scan/tokens_public */ "./node_modules/chevrotain/lib_esm/src/scan/tokens_public.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grammar/gast/gast_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js");
/* harmony import */ var _grammar_gast_gast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grammar/gast/gast */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast.js");
/* harmony import */ var _grammar_checks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grammar/checks */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/checks.js");






var defaultParserErrorProvider = {
    buildMismatchTokenMessage: function (_a) {
        var expected = _a.expected, actual = _a.actual, previous = _a.previous, ruleName = _a.ruleName;
        var hasLabel = Object(_scan_tokens_public__WEBPACK_IMPORTED_MODULE_0__["hasTokenLabel"])(expected);
        var expectedMsg = hasLabel
            ? "--> " + Object(_scan_tokens_public__WEBPACK_IMPORTED_MODULE_0__["tokenLabel"])(expected) + " <--"
            : "token of type --> " + expected.name + " <--";
        var msg = "Expecting " + expectedMsg + " but found --> '" + actual.image + "' <--";
        return msg;
    },
    buildNotAllInputParsedMessage: function (_a) {
        var firstRedundant = _a.firstRedundant, ruleName = _a.ruleName;
        return ("Redundant input, expecting EOF but found: " + firstRedundant.image);
    },
    buildNoViableAltMessage: function (_a) {
        var expectedPathsPerAlt = _a.expectedPathsPerAlt, actual = _a.actual, previous = _a.previous, customUserDescription = _a.customUserDescription, ruleName = _a.ruleName;
        var errPrefix = "Expecting: ";
        // TODO: issue: No Viable Alternative Error may have incomplete details. #502
        var actualText = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["first"])(actual).image;
        var errSuffix = "\nbut found: '" + actualText + "'";
        if (customUserDescription) {
            return errPrefix + customUserDescription + errSuffix;
        }
        else {
            var allLookAheadPaths = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["reduce"])(expectedPathsPerAlt, function (result, currAltPaths) { return result.concat(currAltPaths); }, []);
            var nextValidTokenSequences = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(allLookAheadPaths, function (currPath) {
                return "[" + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(currPath, function (currTokenType) {
                    return Object(_scan_tokens_public__WEBPACK_IMPORTED_MODULE_0__["tokenLabel"])(currTokenType);
                }).join(", ") + "]";
            });
            var nextValidSequenceItems = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(nextValidTokenSequences, function (itemMsg, idx) { return "  " + (idx + 1) + ". " + itemMsg; });
            var calculatedDescription = "one of these possible Token sequences:\n" + nextValidSequenceItems.join("\n");
            return errPrefix + calculatedDescription + errSuffix;
        }
    },
    buildEarlyExitMessage: function (_a) {
        var expectedIterationPaths = _a.expectedIterationPaths, actual = _a.actual, customUserDescription = _a.customUserDescription, ruleName = _a.ruleName;
        var errPrefix = "Expecting: ";
        // TODO: issue: No Viable Alternative Error may have incomplete details. #502
        var actualText = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["first"])(actual).image;
        var errSuffix = "\nbut found: '" + actualText + "'";
        if (customUserDescription) {
            return errPrefix + customUserDescription + errSuffix;
        }
        else {
            var nextValidTokenSequences = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(expectedIterationPaths, function (currPath) {
                return "[" + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(currPath, function (currTokenType) {
                    return Object(_scan_tokens_public__WEBPACK_IMPORTED_MODULE_0__["tokenLabel"])(currTokenType);
                }).join(",") + "]";
            });
            var calculatedDescription = "expecting at least one iteration which starts with one of these possible Token sequences::\n  " +
                ("<" + nextValidTokenSequences.join(" ,") + ">");
            return errPrefix + calculatedDescription + errSuffix;
        }
    }
};
Object.freeze(defaultParserErrorProvider);
var defaultGrammarResolverErrorProvider = {
    buildRuleNotFoundError: function (topLevelRule, undefinedRule) {
        var msg = "Invalid grammar, reference to a rule which is not defined: ->" +
            undefinedRule.nonTerminalName +
            "<-\n" +
            "inside top level rule: ->" +
            topLevelRule.name +
            "<-";
        return msg;
    }
};
var defaultGrammarValidatorErrorProvider = {
    buildDuplicateFoundError: function (topLevelRule, duplicateProds) {
        function getExtraProductionArgument(prod) {
            if (prod instanceof _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__["Terminal"]) {
                return prod.terminalType.name;
            }
            else if (prod instanceof _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__["NonTerminal"]) {
                return prod.nonTerminalName;
            }
            else {
                return "";
            }
        }
        var topLevelName = topLevelRule.name;
        var duplicateProd = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["first"])(duplicateProds);
        var index = duplicateProd.idx;
        var dslName = Object(_grammar_gast_gast__WEBPACK_IMPORTED_MODULE_3__["getProductionDslName"])(duplicateProd);
        var extraArgument = getExtraProductionArgument(duplicateProd);
        var hasExplicitIndex = index > 0;
        var msg = "->" + dslName + (hasExplicitIndex ? index : "") + "<- " + (extraArgument ? "with argument: ->" + extraArgument + "<-" : "") + "\n                  appears more than once (" + duplicateProds.length + " times) in the top level rule: ->" + topLevelName + "<-.                  \n                  For further details see: https://sap.github.io/chevrotain/docs/FAQ.html#NUMERICAL_SUFFIXES \n                  ";
        // white space trimming time! better to trim afterwards as it allows to use WELL formatted multi line template strings...
        msg = msg.replace(/[ \t]+/g, " ");
        msg = msg.replace(/\s\s+/g, "\n");
        return msg;
    },
    buildInvalidNestedRuleNameError: function (topLevelRule, nestedProd) {
        var msg = "Invalid nested rule name: ->" + nestedProd.name + "<- inside rule: ->" + topLevelRule.name + "<-\n" +
            ("it must match the pattern: ->" + _grammar_checks__WEBPACK_IMPORTED_MODULE_4__["validNestedRuleName"].toString() + "<-.\n") +
            "Note that this means a nested rule name must start with the '$'(dollar) sign.";
        return msg;
    },
    buildDuplicateNestedRuleNameError: function (topLevelRule, nestedProd) {
        var duplicateName = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["first"])(nestedProd).name;
        var errMsg = "Duplicate nested rule name: ->" + duplicateName + "<- inside rule: ->" + topLevelRule.name + "<-\n" +
            "A nested name must be unique in the scope of a top level grammar rule.";
        return errMsg;
    },
    buildNamespaceConflictError: function (rule) {
        var errMsg = "Namespace conflict found in grammar.\n" +
            ("The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <" + rule.name + ">.\n") +
            "To resolve this make sure each Terminal and Non-Terminal names are unique\n" +
            "This is easy to accomplish by using the convention that Terminal names start with an uppercase letter\n" +
            "and Non-Terminal names start with a lower case letter.";
        return errMsg;
    },
    buildAlternationPrefixAmbiguityError: function (options) {
        var pathMsg = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(options.prefixPath, function (currTok) {
            return Object(_scan_tokens_public__WEBPACK_IMPORTED_MODULE_0__["tokenLabel"])(currTok);
        }).join(", ");
        var occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
        var errMsg = "Ambiguous alternatives: <" + options.ambiguityIndices.join(" ,") + "> due to common lookahead prefix\n" +
            ("in <OR" + occurrence + "> inside <" + options.topLevelRule.name + "> Rule,\n") +
            ("<" + pathMsg + "> may appears as a prefix path in all these alternatives.\n") +
            "See: https://sap.github.io/chevrotain/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX\n" +
            "For Further details.";
        return errMsg;
    },
    buildAlternationAmbiguityError: function (options) {
        var pathMsg = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(options.prefixPath, function (currtok) {
            return Object(_scan_tokens_public__WEBPACK_IMPORTED_MODULE_0__["tokenLabel"])(currtok);
        }).join(", ");
        var occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
        var currMessage = "Ambiguous Alternatives Detected: <" + options.ambiguityIndices.join(" ,") + "> in <OR" + occurrence + ">" +
            (" inside <" + options.topLevelRule.name + "> Rule,\n") +
            ("<" + pathMsg + "> may appears as a prefix path in all these alternatives.\n");
        currMessage =
            currMessage +
                "See: https://sap.github.io/chevrotain/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES\n" +
                "For Further details.";
        return currMessage;
    },
    buildEmptyRepetitionError: function (options) {
        var dslName = Object(_grammar_gast_gast__WEBPACK_IMPORTED_MODULE_3__["getProductionDslName"])(options.repetition);
        if (options.repetition.idx !== 0) {
            dslName += options.repetition.idx;
        }
        var errMsg = "The repetition <" + dslName + "> within Rule <" + options.topLevelRule.name + "> can never consume any tokens.\n" +
            "This could lead to an infinite loop.";
        return errMsg;
    },
    buildTokenNameError: function (options) {
        var tokTypeName = options.tokenType.name;
        var errMsg = "Invalid Grammar Token name: ->" + tokTypeName + "<- it must match the pattern: ->" + options.expectedPattern.toString() + "<-";
        return errMsg;
    },
    buildEmptyAlternationError: function (options) {
        var errMsg = "Ambiguous empty alternative: <" + (options.emptyChoiceIdx + 1) + ">" +
            (" in <OR" + options.alternation.idx + "> inside <" + options.topLevelRule.name + "> Rule.\n") +
            "Only the last alternative may be an empty alternative.";
        return errMsg;
    },
    buildTooManyAlternativesError: function (options) {
        var errMsg = "An Alternation cannot have more than 256 alternatives:\n" +
            ("<OR" + options.alternation.idx + "> inside <" + options.topLevelRule.name + "> Rule.\n has " + (options.alternation.definition.length +
                1) + " alternatives.");
        return errMsg;
    },
    buildLeftRecursionError: function (options) {
        var ruleName = options.topLevelRule.name;
        var pathNames = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["map"](options.leftRecursionPath, function (currRule) { return currRule.name; });
        var leftRecursivePath = ruleName + " --> " + pathNames
            .concat([ruleName])
            .join(" --> ");
        var errMsg = "Left Recursion found in grammar.\n" +
            ("rule: <" + ruleName + "> can be invoked from itself (directly or indirectly)\n") +
            ("without consuming any Tokens. The grammar path that causes this is: \n " + leftRecursivePath + "\n") +
            " To fix this refactor your grammar to remove the left recursion.\n" +
            "see: https://en.wikipedia.org/wiki/LL_parser#Left_Factoring.";
        return errMsg;
    },
    buildInvalidRuleNameError: function (options) {
        var ruleName = options.topLevelRule.name;
        var expectedPatternString = options.expectedPattern.toString();
        var errMsg = "Invalid grammar rule name: ->" + ruleName + "<- it must match the pattern: ->" + expectedPatternString + "<-";
        return errMsg;
    },
    buildDuplicateRuleNameError: function (options) {
        var ruleName;
        if (options.topLevelRule instanceof _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_2__["Rule"]) {
            ruleName = options.topLevelRule.name;
        }
        else {
            ruleName = options.topLevelRule;
        }
        var errMsg = "Duplicate definition, rule: ->" + ruleName + "<- is already defined in the grammar: ->" + options.grammarName + "<-";
        return errMsg;
    }
};
//# sourceMappingURL=errors_public.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/exceptions_public.js":
/*!************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/exceptions_public.js ***!
  \************************************************************************/
/*! exports provided: isRecognitionException, MismatchedTokenException, NoViableAltException, NotAllInputParsedException, EarlyExitException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRecognitionException", function() { return isRecognitionException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MismatchedTokenException", function() { return MismatchedTokenException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoViableAltException", function() { return NoViableAltException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAllInputParsedException", function() { return NotAllInputParsedException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarlyExitException", function() { return EarlyExitException; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");

var MISMATCHED_TOKEN_EXCEPTION = "MismatchedTokenException";
var NO_VIABLE_ALT_EXCEPTION = "NoViableAltException";
var EARLY_EXIT_EXCEPTION = "EarlyExitException";
var NOT_ALL_INPUT_PARSED_EXCEPTION = "NotAllInputParsedException";
var RECOGNITION_EXCEPTION_NAMES = [
    MISMATCHED_TOKEN_EXCEPTION,
    NO_VIABLE_ALT_EXCEPTION,
    EARLY_EXIT_EXCEPTION,
    NOT_ALL_INPUT_PARSED_EXCEPTION
];
Object.freeze(RECOGNITION_EXCEPTION_NAMES);
// hacks to bypass no support for custom Errors in javascript/typescript
function isRecognitionException(error) {
    // can't do instanceof on hacked custom js exceptions
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["contains"])(RECOGNITION_EXCEPTION_NAMES, error.name);
}
function MismatchedTokenException(message, token, previousToken) {
    this.name = MISMATCHED_TOKEN_EXCEPTION;
    this.message = message;
    this.token = token;
    this.previousToken = previousToken;
    this.resyncedTokens = [];
}
// must use the "Error.prototype" instead of "new Error"
// because the stack trace points to where "new Error" was invoked"
MismatchedTokenException.prototype = Error.prototype;
function NoViableAltException(message, token, previousToken) {
    this.name = NO_VIABLE_ALT_EXCEPTION;
    this.message = message;
    this.token = token;
    this.previousToken = previousToken;
    this.resyncedTokens = [];
}
NoViableAltException.prototype = Error.prototype;
function NotAllInputParsedException(message, token) {
    this.name = NOT_ALL_INPUT_PARSED_EXCEPTION;
    this.message = message;
    this.token = token;
    this.resyncedTokens = [];
}
NotAllInputParsedException.prototype = Error.prototype;
function EarlyExitException(message, token, previousToken) {
    this.name = EARLY_EXIT_EXCEPTION;
    this.message = message;
    this.token = token;
    this.previousToken = previousToken;
    this.resyncedTokens = [];
}
EarlyExitException.prototype = Error.prototype;
//# sourceMappingURL=exceptions_public.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/grammar/checks.js":
/*!*********************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/grammar/checks.js ***!
  \*********************************************************************/
/*! exports provided: validateGrammar, identifyProductionForDuplicates, OccurrenceValidationCollector, validTermsPattern, validNestedRuleName, validateRuleName, validateNestedRuleName, validateTokenName, validateRuleDoesNotAlreadyExist, validateRuleIsOverridden, validateNoLeftRecursion, getFirstNoneTerminal, validateEmptyOrAlternative, validateAmbiguousAlternationAlternatives, RepetionCollector, validateTooManyAlts, validateSomeNonEmptyLookaheadPath, checkPrefixAlternativesAmbiguities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateGrammar", function() { return validateGrammar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifyProductionForDuplicates", function() { return identifyProductionForDuplicates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccurrenceValidationCollector", function() { return OccurrenceValidationCollector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validTermsPattern", function() { return validTermsPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validNestedRuleName", function() { return validNestedRuleName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateRuleName", function() { return validateRuleName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateNestedRuleName", function() { return validateNestedRuleName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateTokenName", function() { return validateTokenName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateRuleDoesNotAlreadyExist", function() { return validateRuleDoesNotAlreadyExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateRuleIsOverridden", function() { return validateRuleIsOverridden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateNoLeftRecursion", function() { return validateNoLeftRecursion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstNoneTerminal", function() { return getFirstNoneTerminal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmptyOrAlternative", function() { return validateEmptyOrAlternative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAmbiguousAlternationAlternatives", function() { return validateAmbiguousAlternationAlternatives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepetionCollector", function() { return RepetionCollector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateTooManyAlts", function() { return validateTooManyAlts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSomeNonEmptyLookaheadPath", function() { return validateSomeNonEmptyLookaheadPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPrefixAlternativesAmbiguities", function() { return checkPrefixAlternativesAmbiguities; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _parser_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parser/parser */ "./node_modules/chevrotain/lib_esm/src/parse/parser/parser.js");
/* harmony import */ var _gast_gast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gast/gast */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast.js");
/* harmony import */ var _lookahead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lookahead */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/lookahead.js");
/* harmony import */ var _cst_cst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cst/cst */ "./node_modules/chevrotain/lib_esm/src/parse/cst/cst.js");
/* harmony import */ var _interpreter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interpreter */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/interpreter.js");
/* harmony import */ var _gast_gast_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gast/gast_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js");
/* harmony import */ var _gast_gast_visitor_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gast/gast_visitor_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_visitor_public.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









function validateGrammar(topLevels, globalMaxLookahead, tokenTypes, ignoredIssues, errMsgProvider, grammarName) {
    var duplicateErrors = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"](topLevels, function (currTopLevel) {
        return validateDuplicateProductions(currTopLevel, errMsgProvider);
    });
    var leftRecursionErrors = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"](topLevels, function (currTopRule) {
        return validateNoLeftRecursion(currTopRule, currTopRule, errMsgProvider);
    });
    var emptyAltErrors = [];
    var ambiguousAltsErrors = [];
    var emptyRepetitionErrors = [];
    // left recursion could cause infinite loops in the following validations.
    // It is safest to first have the user fix the left recursion errors first and only then examine Further issues.
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["every"])(leftRecursionErrors, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])) {
        emptyAltErrors = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(topLevels, function (currTopRule) {
            return validateEmptyOrAlternative(currTopRule, errMsgProvider);
        });
        ambiguousAltsErrors = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(topLevels, function (currTopRule) {
            return validateAmbiguousAlternationAlternatives(currTopRule, globalMaxLookahead, ignoredIssues, errMsgProvider);
        });
        emptyRepetitionErrors = validateSomeNonEmptyLookaheadPath(topLevels, globalMaxLookahead, errMsgProvider);
    }
    var termsNamespaceConflictErrors = checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider);
    var tokenNameErrors = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"](tokenTypes, function (currTokType) {
        return validateTokenName(currTokType, errMsgProvider);
    });
    var nestedRulesNameErrors = validateNestedRulesNames(topLevels, errMsgProvider);
    var nestedRulesDuplicateErrors = validateDuplicateNestedRules(topLevels, errMsgProvider);
    var tooManyAltsErrors = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(topLevels, function (curRule) {
        return validateTooManyAlts(curRule, errMsgProvider);
    });
    var ruleNameErrors = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(topLevels, function (curRule) {
        return validateRuleName(curRule, errMsgProvider);
    });
    var duplicateRulesError = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(topLevels, function (curRule) {
        return validateRuleDoesNotAlreadyExist(curRule, topLevels, grammarName, errMsgProvider);
    });
    return (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["flatten"](duplicateErrors.concat(tokenNameErrors, nestedRulesNameErrors, nestedRulesDuplicateErrors, emptyRepetitionErrors, leftRecursionErrors, emptyAltErrors, ambiguousAltsErrors, termsNamespaceConflictErrors, tooManyAltsErrors, ruleNameErrors, duplicateRulesError)));
}
function validateNestedRulesNames(topLevels, errMsgProvider) {
    var result = [];
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(topLevels, function (curTopLevel) {
        var namedCollectorVisitor = new _cst_cst__WEBPACK_IMPORTED_MODULE_4__["NamedDSLMethodsCollectorVisitor"]("");
        curTopLevel.accept(namedCollectorVisitor);
        var nestedProds = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(namedCollectorVisitor.result, function (currItem) { return currItem.orgProd; });
        result.push(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(nestedProds, function (currNestedProd) {
            return validateNestedRuleName(curTopLevel, currNestedProd, errMsgProvider);
        }));
    });
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["flatten"])(result);
}
function validateDuplicateProductions(topLevelRule, errMsgProvider) {
    var collectorVisitor = new OccurrenceValidationCollector();
    topLevelRule.accept(collectorVisitor);
    var allRuleProductions = collectorVisitor.allProductions;
    var productionGroups = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupBy"](allRuleProductions, identifyProductionForDuplicates);
    var duplicates = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["pick"](productionGroups, function (currGroup) {
        return currGroup.length > 1;
    });
    var errors = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"](_utils_utils__WEBPACK_IMPORTED_MODULE_0__["values"](duplicates), function (currDuplicates) {
        var firstProd = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["first"](currDuplicates);
        var msg = errMsgProvider.buildDuplicateFoundError(topLevelRule, currDuplicates);
        var dslName = Object(_gast_gast__WEBPACK_IMPORTED_MODULE_2__["getProductionDslName"])(firstProd);
        var defError = {
            message: msg,
            type: _parser_parser__WEBPACK_IMPORTED_MODULE_1__["ParserDefinitionErrorType"].DUPLICATE_PRODUCTIONS,
            ruleName: topLevelRule.name,
            dslName: dslName,
            occurrence: firstProd.idx
        };
        var param = getExtraProductionArgument(firstProd);
        if (param) {
            defError.parameter = param;
        }
        return defError;
    });
    return errors;
}
function identifyProductionForDuplicates(prod) {
    return Object(_gast_gast__WEBPACK_IMPORTED_MODULE_2__["getProductionDslName"])(prod) + "_#_" + prod.idx + "_#_" + getExtraProductionArgument(prod);
}
function getExtraProductionArgument(prod) {
    if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_6__["Terminal"]) {
        return prod.terminalType.name;
    }
    else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_6__["NonTerminal"]) {
        return prod.nonTerminalName;
    }
    else {
        return "";
    }
}
var OccurrenceValidationCollector = /** @class */ (function (_super) {
    __extends(OccurrenceValidationCollector, _super);
    function OccurrenceValidationCollector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allProductions = [];
        return _this;
    }
    OccurrenceValidationCollector.prototype.visitNonTerminal = function (subrule) {
        this.allProductions.push(subrule);
    };
    OccurrenceValidationCollector.prototype.visitOption = function (option) {
        this.allProductions.push(option);
    };
    OccurrenceValidationCollector.prototype.visitRepetitionWithSeparator = function (manySep) {
        this.allProductions.push(manySep);
    };
    OccurrenceValidationCollector.prototype.visitRepetitionMandatory = function (atLeastOne) {
        this.allProductions.push(atLeastOne);
    };
    OccurrenceValidationCollector.prototype.visitRepetitionMandatoryWithSeparator = function (atLeastOneSep) {
        this.allProductions.push(atLeastOneSep);
    };
    OccurrenceValidationCollector.prototype.visitRepetition = function (many) {
        this.allProductions.push(many);
    };
    OccurrenceValidationCollector.prototype.visitAlternation = function (or) {
        this.allProductions.push(or);
    };
    OccurrenceValidationCollector.prototype.visitTerminal = function (terminal) {
        this.allProductions.push(terminal);
    };
    return OccurrenceValidationCollector;
}(_gast_gast_visitor_public__WEBPACK_IMPORTED_MODULE_7__["GAstVisitor"]));

var validTermsPattern = /^[a-zA-Z_]\w*$/;
var validNestedRuleName = new RegExp(validTermsPattern.source.replace("^", "^\\$"));
// TODO: remove this limitation now that we use recorders
function validateRuleName(rule, errMsgProvider) {
    var errors = [];
    var ruleName = rule.name;
    if (!ruleName.match(validTermsPattern)) {
        errors.push({
            message: errMsgProvider.buildInvalidRuleNameError({
                topLevelRule: rule,
                expectedPattern: validTermsPattern
            }),
            type: _parser_parser__WEBPACK_IMPORTED_MODULE_1__["ParserDefinitionErrorType"].INVALID_RULE_NAME,
            ruleName: ruleName
        });
    }
    return errors;
}
// TODO: did the nested rule name regExp now change?
function validateNestedRuleName(topLevel, nestedProd, errMsgProvider) {
    var errors = [];
    var errMsg;
    if (!nestedProd.name.match(validNestedRuleName)) {
        errMsg = errMsgProvider.buildInvalidNestedRuleNameError(topLevel, nestedProd);
        errors.push({
            message: errMsg,
            type: _parser_parser__WEBPACK_IMPORTED_MODULE_1__["ParserDefinitionErrorType"].INVALID_NESTED_RULE_NAME,
            ruleName: topLevel.name
        });
    }
    return errors;
}
// TODO: remove this limitation now that we use recorders
function validateTokenName(tokenType, errMsgProvider) {
    var errors = [];
    var tokTypeName = tokenType.name;
    if (!tokTypeName.match(validTermsPattern)) {
        errors.push({
            message: errMsgProvider.buildTokenNameError({
                tokenType: tokenType,
                expectedPattern: validTermsPattern
            }),
            type: _parser_parser__WEBPACK_IMPORTED_MODULE_1__["ParserDefinitionErrorType"].INVALID_TOKEN_NAME
        });
    }
    return errors;
}
function validateRuleDoesNotAlreadyExist(rule, allRules, className, errMsgProvider) {
    var errors = [];
    var occurrences = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["reduce"])(allRules, function (result, curRule) {
        if (curRule.name === rule.name) {
            return result + 1;
        }
        return result;
    }, 0);
    if (occurrences > 1) {
        var errMsg = errMsgProvider.buildDuplicateRuleNameError({
            topLevelRule: rule,
            grammarName: className
        });
        errors.push({
            message: errMsg,
            type: _parser_parser__WEBPACK_IMPORTED_MODULE_1__["ParserDefinitionErrorType"].DUPLICATE_RULE_NAME,
            ruleName: rule.name
        });
    }
    return errors;
}
// TODO: is there anyway to get only the rule names of rules inherited from the super grammars?
// This is not part of the IGrammarErrorProvider because the validation cannot be performed on
// The grammar structure, only at runtime.
function validateRuleIsOverridden(ruleName, definedRulesNames, className) {
    var errors = [];
    var errMsg;
    if (!_utils_utils__WEBPACK_IMPORTED_MODULE_0__["contains"](definedRulesNames, ruleName)) {
        errMsg =
            "Invalid rule override, rule: ->" + ruleName + "<- cannot be overridden in the grammar: ->" + className + "<-" +
                "as it is not defined in any of the super grammars ";
        errors.push({
            message: errMsg,
            type: _parser_parser__WEBPACK_IMPORTED_MODULE_1__["ParserDefinitionErrorType"].INVALID_RULE_OVERRIDE,
            ruleName: ruleName
        });
    }
    return errors;
}
function validateNoLeftRecursion(topRule, currRule, errMsgProvider, path) {
    if (path === void 0) { path = []; }
    var errors = [];
    var nextNonTerminals = getFirstNoneTerminal(currRule.definition);
    if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](nextNonTerminals)) {
        return [];
    }
    else {
        var ruleName = topRule.name;
        var foundLeftRecursion = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["contains"](nextNonTerminals, topRule);
        if (foundLeftRecursion) {
            errors.push({
                message: errMsgProvider.buildLeftRecursionError({
                    topLevelRule: topRule,
                    leftRecursionPath: path
                }),
                type: _parser_parser__WEBPACK_IMPORTED_MODULE_1__["ParserDefinitionErrorType"].LEFT_RECURSION,
                ruleName: ruleName
            });
        }
        // we are only looking for cyclic paths leading back to the specific topRule
        // other cyclic paths are ignored, we still need this difference to avoid infinite loops...
        var validNextSteps = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["difference"](nextNonTerminals, path.concat([topRule]));
        var errorsFromNextSteps = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"](validNextSteps, function (currRefRule) {
            var newPath = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["cloneArr"](path);
            newPath.push(currRefRule);
            return validateNoLeftRecursion(topRule, currRefRule, errMsgProvider, newPath);
        });
        return errors.concat(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["flatten"](errorsFromNextSteps));
    }
}
function getFirstNoneTerminal(definition) {
    var result = [];
    if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](definition)) {
        return result;
    }
    var firstProd = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["first"](definition);
    /* istanbul ignore else */
    if (firstProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_6__["NonTerminal"]) {
        result.push(firstProd.referencedRule);
    }
    else if (firstProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_6__["Flat"] ||
        firstProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_6__["Option"] ||
        firstProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_6__["RepetitionMandatory"] ||
        firstProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_6__["RepetitionMandatoryWithSeparator"] ||
        firstProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_6__["RepetitionWithSeparator"] ||
        firstProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_6__["Repetition"]) {
        result = result.concat(getFirstNoneTerminal(firstProd.definition));
    }
    else if (firstProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_6__["Alternation"]) {
        // each sub definition in alternation is a FLAT
        result = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["flatten"](_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"](firstProd.definition, function (currSubDef) {
            return getFirstNoneTerminal(currSubDef.definition);
        }));
    }
    else if (firstProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_6__["Terminal"]) {
        // nothing to see, move along
    }
    else {
        throw Error("non exhaustive match");
    }
    var isFirstOptional = Object(_gast_gast__WEBPACK_IMPORTED_MODULE_2__["isOptionalProd"])(firstProd);
    var hasMore = definition.length > 1;
    if (isFirstOptional && hasMore) {
        var rest = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["drop"](definition);
        return result.concat(getFirstNoneTerminal(rest));
    }
    else {
        return result;
    }
}
var OrCollector = /** @class */ (function (_super) {
    __extends(OrCollector, _super);
    function OrCollector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.alternations = [];
        return _this;
    }
    OrCollector.prototype.visitAlternation = function (node) {
        this.alternations.push(node);
    };
    return OrCollector;
}(_gast_gast_visitor_public__WEBPACK_IMPORTED_MODULE_7__["GAstVisitor"]));
function validateEmptyOrAlternative(topLevelRule, errMsgProvider) {
    var orCollector = new OrCollector();
    topLevelRule.accept(orCollector);
    var ors = orCollector.alternations;
    var errors = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["reduce"](ors, function (errors, currOr) {
        var exceptLast = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["dropRight"](currOr.definition);
        var currErrors = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"](exceptLast, function (currAlternative, currAltIdx) {
            var possibleFirstInAlt = Object(_interpreter__WEBPACK_IMPORTED_MODULE_5__["nextPossibleTokensAfter"])([currAlternative], [], null, 1);
            if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"](possibleFirstInAlt)) {
                return {
                    message: errMsgProvider.buildEmptyAlternationError({
                        topLevelRule: topLevelRule,
                        alternation: currOr,
                        emptyChoiceIdx: currAltIdx
                    }),
                    type: _parser_parser__WEBPACK_IMPORTED_MODULE_1__["ParserDefinitionErrorType"].NONE_LAST_EMPTY_ALT,
                    ruleName: topLevelRule.name,
                    occurrence: currOr.idx,
                    alternative: currAltIdx + 1
                };
            }
            else {
                return null;
            }
        });
        return errors.concat(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["compact"](currErrors));
    }, []);
    return errors;
}
function validateAmbiguousAlternationAlternatives(topLevelRule, globalMaxLookahead, ignoredIssues, errMsgProvider) {
    var orCollector = new OrCollector();
    topLevelRule.accept(orCollector);
    var ors = orCollector.alternations;
    // TODO: this filtering should be deprecated once we remove the ignoredIssues
    //  IParserConfig property
    var ignoredIssuesForCurrentRule = ignoredIssues[topLevelRule.name];
    if (ignoredIssuesForCurrentRule) {
        ors = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["reject"])(ors, function (currOr) {
            return ignoredIssuesForCurrentRule[Object(_gast_gast__WEBPACK_IMPORTED_MODULE_2__["getProductionDslName"])(currOr) +
                (currOr.idx === 0 ? "" : currOr.idx)];
        });
    }
    // New Handling of ignoring ambiguities
    // - https://github.com/SAP/chevrotain/issues/869
    ors = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["reject"])(ors, function (currOr) { return currOr.ignoreAmbiguities === true; });
    var errors = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["reduce"](ors, function (result, currOr) {
        var currOccurrence = currOr.idx;
        var actualMaxLookahead = currOr.maxLookahead || globalMaxLookahead;
        var alternatives = Object(_lookahead__WEBPACK_IMPORTED_MODULE_3__["getLookaheadPathsForOr"])(currOccurrence, topLevelRule, actualMaxLookahead, currOr);
        var altsAmbiguityErrors = checkAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
        var altsPrefixAmbiguityErrors = checkPrefixAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
        return result.concat(altsAmbiguityErrors, altsPrefixAmbiguityErrors);
    }, []);
    return errors;
}
var RepetionCollector = /** @class */ (function (_super) {
    __extends(RepetionCollector, _super);
    function RepetionCollector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allProductions = [];
        return _this;
    }
    RepetionCollector.prototype.visitRepetitionWithSeparator = function (manySep) {
        this.allProductions.push(manySep);
    };
    RepetionCollector.prototype.visitRepetitionMandatory = function (atLeastOne) {
        this.allProductions.push(atLeastOne);
    };
    RepetionCollector.prototype.visitRepetitionMandatoryWithSeparator = function (atLeastOneSep) {
        this.allProductions.push(atLeastOneSep);
    };
    RepetionCollector.prototype.visitRepetition = function (many) {
        this.allProductions.push(many);
    };
    return RepetionCollector;
}(_gast_gast_visitor_public__WEBPACK_IMPORTED_MODULE_7__["GAstVisitor"]));

function validateTooManyAlts(topLevelRule, errMsgProvider) {
    var orCollector = new OrCollector();
    topLevelRule.accept(orCollector);
    var ors = orCollector.alternations;
    var errors = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["reduce"](ors, function (errors, currOr) {
        if (currOr.definition.length > 255) {
            errors.push({
                message: errMsgProvider.buildTooManyAlternativesError({
                    topLevelRule: topLevelRule,
                    alternation: currOr
                }),
                type: _parser_parser__WEBPACK_IMPORTED_MODULE_1__["ParserDefinitionErrorType"].TOO_MANY_ALTS,
                ruleName: topLevelRule.name,
                occurrence: currOr.idx
            });
        }
        return errors;
    }, []);
    return errors;
}
function validateSomeNonEmptyLookaheadPath(topLevelRules, maxLookahead, errMsgProvider) {
    var errors = [];
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(topLevelRules, function (currTopRule) {
        var collectorVisitor = new RepetionCollector();
        currTopRule.accept(collectorVisitor);
        var allRuleProductions = collectorVisitor.allProductions;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(allRuleProductions, function (currProd) {
            var prodType = Object(_lookahead__WEBPACK_IMPORTED_MODULE_3__["getProdType"])(currProd);
            var actualMaxLookahead = currProd.maxLookahead || maxLookahead;
            var currOccurrence = currProd.idx;
            var paths = Object(_lookahead__WEBPACK_IMPORTED_MODULE_3__["getLookaheadPathsForOptionalProd"])(currOccurrence, currTopRule, prodType, actualMaxLookahead);
            var pathsInsideProduction = paths[0];
            if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["flatten"])(pathsInsideProduction))) {
                var errMsg = errMsgProvider.buildEmptyRepetitionError({
                    topLevelRule: currTopRule,
                    repetition: currProd
                });
                errors.push({
                    message: errMsg,
                    type: _parser_parser__WEBPACK_IMPORTED_MODULE_1__["ParserDefinitionErrorType"].NO_NON_EMPTY_LOOKAHEAD,
                    ruleName: currTopRule.name
                });
            }
        });
    });
    return errors;
}
function checkAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
    var foundAmbiguousPaths = [];
    var identicalAmbiguities = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["reduce"])(alternatives, function (result, currAlt, currAltIdx) {
        // ignore (skip) ambiguities with this alternative
        if (alternation.definition[currAltIdx].ignoreAmbiguities === true) {
            return result;
        }
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(currAlt, function (currPath) {
            var altsCurrPathAppearsIn = [currAltIdx];
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(alternatives, function (currOtherAlt, currOtherAltIdx) {
                if (currAltIdx !== currOtherAltIdx &&
                    Object(_lookahead__WEBPACK_IMPORTED_MODULE_3__["containsPath"])(currOtherAlt, currPath) &&
                    // ignore (skip) ambiguities with this "other" alternative
                    alternation.definition[currOtherAltIdx]
                        .ignoreAmbiguities !== true) {
                    altsCurrPathAppearsIn.push(currOtherAltIdx);
                }
            });
            if (altsCurrPathAppearsIn.length > 1 &&
                !Object(_lookahead__WEBPACK_IMPORTED_MODULE_3__["containsPath"])(foundAmbiguousPaths, currPath)) {
                foundAmbiguousPaths.push(currPath);
                result.push({
                    alts: altsCurrPathAppearsIn,
                    path: currPath
                });
            }
        });
        return result;
    }, []);
    var currErrors = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"](identicalAmbiguities, function (currAmbDescriptor) {
        var ambgIndices = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(currAmbDescriptor.alts, function (currAltIdx) { return currAltIdx + 1; });
        var currMessage = errMsgProvider.buildAlternationAmbiguityError({
            topLevelRule: rule,
            alternation: alternation,
            ambiguityIndices: ambgIndices,
            prefixPath: currAmbDescriptor.path
        });
        return {
            message: currMessage,
            type: _parser_parser__WEBPACK_IMPORTED_MODULE_1__["ParserDefinitionErrorType"].AMBIGUOUS_ALTS,
            ruleName: rule.name,
            occurrence: alternation.idx,
            alternatives: [currAmbDescriptor.alts]
        };
    });
    return currErrors;
}
function checkPrefixAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
    var errors = [];
    // flatten
    var pathsAndIndices = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["reduce"])(alternatives, function (result, currAlt, idx) {
        var currPathsAndIdx = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(currAlt, function (currPath) {
            return { idx: idx, path: currPath };
        });
        return result.concat(currPathsAndIdx);
    }, []);
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(pathsAndIndices, function (currPathAndIdx) {
        var alternativeGast = alternation.definition[currPathAndIdx.idx];
        // ignore (skip) ambiguities with this alternative
        if (alternativeGast.ignoreAmbiguities === true) {
            return;
        }
        var targetIdx = currPathAndIdx.idx;
        var targetPath = currPathAndIdx.path;
        var prefixAmbiguitiesPathsAndIndices = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["findAll"])(pathsAndIndices, function (searchPathAndIdx) {
            // prefix ambiguity can only be created from lower idx (higher priority) path
            return (
            // ignore (skip) ambiguities with this "other" alternative
            alternation.definition[searchPathAndIdx.idx]
                .ignoreAmbiguities !== true &&
                searchPathAndIdx.idx < targetIdx &&
                // checking for strict prefix because identical lookaheads
                // will be be detected using a different validation.
                Object(_lookahead__WEBPACK_IMPORTED_MODULE_3__["isStrictPrefixOfPath"])(searchPathAndIdx.path, targetPath));
        });
        var currPathPrefixErrors = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(prefixAmbiguitiesPathsAndIndices, function (currAmbPathAndIdx) {
            var ambgIndices = [currAmbPathAndIdx.idx + 1, targetIdx + 1];
            var occurrence = alternation.idx === 0 ? "" : alternation.idx;
            var message = errMsgProvider.buildAlternationPrefixAmbiguityError({
                topLevelRule: rule,
                alternation: alternation,
                ambiguityIndices: ambgIndices,
                prefixPath: currAmbPathAndIdx.path
            });
            return {
                message: message,
                type: _parser_parser__WEBPACK_IMPORTED_MODULE_1__["ParserDefinitionErrorType"].AMBIGUOUS_PREFIX_ALTS,
                ruleName: rule.name,
                occurrence: occurrence,
                alternatives: ambgIndices
            };
        });
        errors = errors.concat(currPathPrefixErrors);
    });
    return errors;
}
function checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider) {
    var errors = [];
    var tokenNames = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(tokenTypes, function (currToken) { return currToken.name; });
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(topLevels, function (currRule) {
        var currRuleName = currRule.name;
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["contains"])(tokenNames, currRuleName)) {
            var errMsg = errMsgProvider.buildNamespaceConflictError(currRule);
            errors.push({
                message: errMsg,
                type: _parser_parser__WEBPACK_IMPORTED_MODULE_1__["ParserDefinitionErrorType"].CONFLICT_TOKENS_RULES_NAMESPACE,
                ruleName: currRuleName
            });
        }
    });
    return errors;
}
function validateDuplicateNestedRules(topLevelRules, errMsgProvider) {
    var errors = [];
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(topLevelRules, function (currTopRule) {
        var namedCollectorVisitor = new _cst_cst__WEBPACK_IMPORTED_MODULE_4__["NamedDSLMethodsCollectorVisitor"]("");
        currTopRule.accept(namedCollectorVisitor);
        var prodsByGroup = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupBy"])(namedCollectorVisitor.result, function (item) { return item.name; });
        var duplicates = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["pick"])(prodsByGroup, function (currGroup) {
            return currGroup.length > 1;
        });
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["values"])(duplicates), function (currDupGroup) {
            var currDupProds = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(currDupGroup, function (dupGroup) { return dupGroup.orgProd; });
            var errMsg = errMsgProvider.buildDuplicateNestedRuleNameError(currTopRule, currDupProds);
            errors.push({
                message: errMsg,
                type: _parser_parser__WEBPACK_IMPORTED_MODULE_1__["ParserDefinitionErrorType"].DUPLICATE_NESTED_NAME,
                ruleName: currTopRule.name
            });
        });
    });
    return errors;
}
//# sourceMappingURL=checks.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/grammar/first.js":
/*!********************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/grammar/first.js ***!
  \********************************************************************/
/*! exports provided: first, firstForSequence, firstForBranching, firstForTerminal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstForSequence", function() { return firstForSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstForBranching", function() { return firstForBranching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstForTerminal", function() { return firstForTerminal; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gast/gast_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js");
/* harmony import */ var _gast_gast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gast/gast */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast.js");



function first(prod) {
    /* istanbul ignore else */
    if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["NonTerminal"]) {
        // this could in theory cause infinite loops if
        // (1) prod A refs prod B.
        // (2) prod B refs prod A
        // (3) AB can match the empty set
        // in other words a cycle where everything is optional so the first will keep
        // looking ahead for the next optional part and will never exit
        // currently there is no safeguard for this unique edge case because
        // (1) not sure a grammar in which this can happen is useful for anything (productive)
        return first(prod.referencedRule);
    }
    else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Terminal"]) {
        return firstForTerminal(prod);
    }
    else if (Object(_gast_gast__WEBPACK_IMPORTED_MODULE_2__["isSequenceProd"])(prod)) {
        return firstForSequence(prod);
    }
    else if (Object(_gast_gast__WEBPACK_IMPORTED_MODULE_2__["isBranchingProd"])(prod)) {
        return firstForBranching(prod);
    }
    else {
        throw Error("non exhaustive match");
    }
}
function firstForSequence(prod) {
    var firstSet = [];
    var seq = prod.definition;
    var nextSubProdIdx = 0;
    var hasInnerProdsRemaining = seq.length > nextSubProdIdx;
    var currSubProd;
    // so we enter the loop at least once (if the definition is not empty
    var isLastInnerProdOptional = true;
    // scan a sequence until it's end or until we have found a NONE optional production in it
    while (hasInnerProdsRemaining && isLastInnerProdOptional) {
        currSubProd = seq[nextSubProdIdx];
        isLastInnerProdOptional = Object(_gast_gast__WEBPACK_IMPORTED_MODULE_2__["isOptionalProd"])(currSubProd);
        firstSet = firstSet.concat(first(currSubProd));
        nextSubProdIdx = nextSubProdIdx + 1;
        hasInnerProdsRemaining = seq.length > nextSubProdIdx;
    }
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["uniq"])(firstSet);
}
function firstForBranching(prod) {
    var allAlternativesFirsts = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(prod.definition, function (innerProd) {
        return first(innerProd);
    });
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["uniq"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["flatten"])(allAlternativesFirsts));
}
function firstForTerminal(terminal) {
    return [terminal.terminalType];
}
//# sourceMappingURL=first.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/grammar/follow.js":
/*!*********************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/grammar/follow.js ***!
  \*********************************************************************/
/*! exports provided: ResyncFollowsWalker, computeAllProdsFollows, buildBetweenProdsFollowPrefix, buildInProdFollowPrefix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResyncFollowsWalker", function() { return ResyncFollowsWalker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAllProdsFollows", function() { return computeAllProdsFollows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildBetweenProdsFollowPrefix", function() { return buildBetweenProdsFollowPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildInProdFollowPrefix", function() { return buildInProdFollowPrefix; });
/* harmony import */ var _rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/rest.js");
/* harmony import */ var _first__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/first.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./node_modules/chevrotain/lib_esm/src/parse/constants.js");
/* harmony import */ var _gast_gast_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gast/gast_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





// This ResyncFollowsWalker computes all of the follows required for RESYNC
// (skipping reference production).
var ResyncFollowsWalker = /** @class */ (function (_super) {
    __extends(ResyncFollowsWalker, _super);
    function ResyncFollowsWalker(topProd) {
        var _this = _super.call(this) || this;
        _this.topProd = topProd;
        _this.follows = {};
        return _this;
    }
    ResyncFollowsWalker.prototype.startWalking = function () {
        this.walk(this.topProd);
        return this.follows;
    };
    ResyncFollowsWalker.prototype.walkTerminal = function (terminal, currRest, prevRest) {
        // do nothing! just like in the public sector after 13:00
    };
    ResyncFollowsWalker.prototype.walkProdRef = function (refProd, currRest, prevRest) {
        var followName = buildBetweenProdsFollowPrefix(refProd.referencedRule, refProd.idx) +
            this.topProd.name;
        var fullRest = currRest.concat(prevRest);
        var restProd = new _gast_gast_public__WEBPACK_IMPORTED_MODULE_4__["Flat"]({ definition: fullRest });
        var t_in_topProd_follows = Object(_first__WEBPACK_IMPORTED_MODULE_1__["first"])(restProd);
        this.follows[followName] = t_in_topProd_follows;
    };
    return ResyncFollowsWalker;
}(_rest__WEBPACK_IMPORTED_MODULE_0__["RestWalker"]));

function computeAllProdsFollows(topProductions) {
    var reSyncFollows = {};
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["forEach"])(topProductions, function (topProd) {
        var currRefsFollow = new ResyncFollowsWalker(topProd).startWalking();
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["assign"])(reSyncFollows, currRefsFollow);
    });
    return reSyncFollows;
}
function buildBetweenProdsFollowPrefix(inner, occurenceInParent) {
    return inner.name + occurenceInParent + _constants__WEBPACK_IMPORTED_MODULE_3__["IN"];
}
function buildInProdFollowPrefix(terminal) {
    var terminalName = terminal.terminalType.name;
    return terminalName + terminal.idx + _constants__WEBPACK_IMPORTED_MODULE_3__["IN"];
}
//# sourceMappingURL=follow.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast.js":
/*!************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast.js ***!
  \************************************************************************/
/*! exports provided: isSequenceProd, isOptionalProd, isBranchingProd, getProductionDslName, DslMethodsCollectorVisitor, collectMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSequenceProd", function() { return isSequenceProd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOptionalProd", function() { return isOptionalProd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBranchingProd", function() { return isBranchingProd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductionDslName", function() { return getProductionDslName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DslMethodsCollectorVisitor", function() { return DslMethodsCollectorVisitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectMethods", function() { return collectMethods; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _gast_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gast_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js");
/* harmony import */ var _gast_visitor_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gast_visitor_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_visitor_public.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



function isSequenceProd(prod) {
    return (prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["Flat"] ||
        prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["Option"] ||
        prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["Repetition"] ||
        prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["RepetitionMandatory"] ||
        prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["RepetitionMandatoryWithSeparator"] ||
        prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["RepetitionWithSeparator"] ||
        prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["Terminal"] ||
        prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["Rule"]);
}
function isOptionalProd(prod, alreadyVisited) {
    if (alreadyVisited === void 0) { alreadyVisited = []; }
    var isDirectlyOptional = prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["Option"] ||
        prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["Repetition"] ||
        prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["RepetitionWithSeparator"];
    if (isDirectlyOptional) {
        return true;
    }
    // note that this can cause infinite loop if one optional empty TOP production has a cyclic dependency with another
    // empty optional top rule
    // may be indirectly optional ((A?B?C?) | (D?E?F?))
    if (prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["Alternation"]) {
        // for OR its enough for just one of the alternatives to be optional
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["some"])(prod.definition, function (subProd) {
            return isOptionalProd(subProd, alreadyVisited);
        });
    }
    else if (prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["NonTerminal"] && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["contains"])(alreadyVisited, prod)) {
        // avoiding stack overflow due to infinite recursion
        return false;
    }
    else if (prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["AbstractProduction"]) {
        if (prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["NonTerminal"]) {
            alreadyVisited.push(prod);
        }
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["every"])(prod.definition, function (subProd) {
            return isOptionalProd(subProd, alreadyVisited);
        });
    }
    else {
        return false;
    }
}
function isBranchingProd(prod) {
    return prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["Alternation"];
}
function getProductionDslName(prod) {
    /* istanbul ignore else */
    if (prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["NonTerminal"]) {
        return "SUBRULE";
    }
    else if (prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["Option"]) {
        return "OPTION";
    }
    else if (prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["Alternation"]) {
        return "OR";
    }
    else if (prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["RepetitionMandatory"]) {
        return "AT_LEAST_ONE";
    }
    else if (prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["RepetitionMandatoryWithSeparator"]) {
        return "AT_LEAST_ONE_SEP";
    }
    else if (prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["RepetitionWithSeparator"]) {
        return "MANY_SEP";
    }
    else if (prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["Repetition"]) {
        return "MANY";
    }
    else if (prod instanceof _gast_public__WEBPACK_IMPORTED_MODULE_1__["Terminal"]) {
        return "CONSUME";
    }
    else {
        throw Error("non exhaustive match");
    }
}
var DslMethodsCollectorVisitor = /** @class */ (function (_super) {
    __extends(DslMethodsCollectorVisitor, _super);
    function DslMethodsCollectorVisitor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // A minus is never valid in an identifier name
        _this.separator = "-";
        _this.dslMethods = {
            option: [],
            alternation: [],
            repetition: [],
            repetitionWithSeparator: [],
            repetitionMandatory: [],
            repetitionMandatoryWithSeparator: []
        };
        return _this;
    }
    DslMethodsCollectorVisitor.prototype.reset = function () {
        this.dslMethods = {
            option: [],
            alternation: [],
            repetition: [],
            repetitionWithSeparator: [],
            repetitionMandatory: [],
            repetitionMandatoryWithSeparator: []
        };
    };
    DslMethodsCollectorVisitor.prototype.visitTerminal = function (terminal) {
        var key = terminal.terminalType.name + this.separator + "Terminal";
        if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(this.dslMethods, key)) {
            this.dslMethods[key] = [];
        }
        this.dslMethods[key].push(terminal);
    };
    DslMethodsCollectorVisitor.prototype.visitNonTerminal = function (subrule) {
        var key = subrule.nonTerminalName + this.separator + "Terminal";
        if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(this.dslMethods, key)) {
            this.dslMethods[key] = [];
        }
        this.dslMethods[key].push(subrule);
    };
    DslMethodsCollectorVisitor.prototype.visitOption = function (option) {
        this.dslMethods.option.push(option);
    };
    DslMethodsCollectorVisitor.prototype.visitRepetitionWithSeparator = function (manySep) {
        this.dslMethods.repetitionWithSeparator.push(manySep);
    };
    DslMethodsCollectorVisitor.prototype.visitRepetitionMandatory = function (atLeastOne) {
        this.dslMethods.repetitionMandatory.push(atLeastOne);
    };
    DslMethodsCollectorVisitor.prototype.visitRepetitionMandatoryWithSeparator = function (atLeastOneSep) {
        this.dslMethods.repetitionMandatoryWithSeparator.push(atLeastOneSep);
    };
    DslMethodsCollectorVisitor.prototype.visitRepetition = function (many) {
        this.dslMethods.repetition.push(many);
    };
    DslMethodsCollectorVisitor.prototype.visitAlternation = function (or) {
        this.dslMethods.alternation.push(or);
    };
    return DslMethodsCollectorVisitor;
}(_gast_visitor_public__WEBPACK_IMPORTED_MODULE_2__["GAstVisitor"]));

var collectorVisitor = new DslMethodsCollectorVisitor();
function collectMethods(rule) {
    collectorVisitor.reset();
    rule.accept(collectorVisitor);
    var dslMethods = collectorVisitor.dslMethods;
    // avoid uncleaned references
    collectorVisitor.reset();
    return dslMethods;
}
//# sourceMappingURL=gast.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js ***!
  \*******************************************************************************/
/*! exports provided: AbstractProduction, NonTerminal, Rule, Flat, Option, RepetitionMandatory, RepetitionMandatoryWithSeparator, Repetition, RepetitionWithSeparator, Alternation, Terminal, serializeGrammar, serializeProduction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractProduction", function() { return AbstractProduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonTerminal", function() { return NonTerminal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rule", function() { return Rule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flat", function() { return Flat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepetitionMandatory", function() { return RepetitionMandatory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepetitionMandatoryWithSeparator", function() { return RepetitionMandatoryWithSeparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repetition", function() { return Repetition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepetitionWithSeparator", function() { return RepetitionWithSeparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alternation", function() { return Alternation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Terminal", function() { return Terminal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeGrammar", function() { return serializeGrammar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeProduction", function() { return serializeProduction; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _scan_tokens_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../scan/tokens_public */ "./node_modules/chevrotain/lib_esm/src/scan/tokens_public.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var AbstractProduction = /** @class */ (function () {
    function AbstractProduction(definition) {
        this.definition = definition;
    }
    AbstractProduction.prototype.accept = function (visitor) {
        visitor.visit(this);
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(this.definition, function (prod) {
            prod.accept(visitor);
        });
    };
    return AbstractProduction;
}());

var NonTerminal = /** @class */ (function (_super) {
    __extends(NonTerminal, _super);
    function NonTerminal(options) {
        var _this = _super.call(this, []) || this;
        _this.idx = 1;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["assign"])(_this, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["pick"])(options, function (v) { return v !== undefined; }));
        return _this;
    }
    Object.defineProperty(NonTerminal.prototype, "definition", {
        get: function () {
            if (this.referencedRule !== undefined) {
                return this.referencedRule.definition;
            }
            return [];
        },
        set: function (definition) {
            // immutable
        },
        enumerable: true,
        configurable: true
    });
    NonTerminal.prototype.accept = function (visitor) {
        visitor.visit(this);
        // don't visit children of a reference, we will get cyclic infinite loops if we do so
    };
    return NonTerminal;
}(AbstractProduction));

var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.orgText = "";
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["assign"])(_this, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["pick"])(options, function (v) { return v !== undefined; }));
        return _this;
    }
    return Rule;
}(AbstractProduction));

// TODO: is this only used in an Alternation?
//       Perhaps `Flat` should be renamed to `Alternative`?
var Flat = /** @class */ (function (_super) {
    __extends(Flat, _super);
    // A named Flat production is used to indicate a Nested Rule in an alternation
    function Flat(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.ignoreAmbiguities = false;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["assign"])(_this, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["pick"])(options, function (v) { return v !== undefined; }));
        return _this;
    }
    return Flat;
}(AbstractProduction));

var Option = /** @class */ (function (_super) {
    __extends(Option, _super);
    function Option(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["assign"])(_this, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["pick"])(options, function (v) { return v !== undefined; }));
        return _this;
    }
    return Option;
}(AbstractProduction));

var RepetitionMandatory = /** @class */ (function (_super) {
    __extends(RepetitionMandatory, _super);
    function RepetitionMandatory(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["assign"])(_this, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["pick"])(options, function (v) { return v !== undefined; }));
        return _this;
    }
    return RepetitionMandatory;
}(AbstractProduction));

var RepetitionMandatoryWithSeparator = /** @class */ (function (_super) {
    __extends(RepetitionMandatoryWithSeparator, _super);
    function RepetitionMandatoryWithSeparator(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["assign"])(_this, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["pick"])(options, function (v) { return v !== undefined; }));
        return _this;
    }
    return RepetitionMandatoryWithSeparator;
}(AbstractProduction));

var Repetition = /** @class */ (function (_super) {
    __extends(Repetition, _super);
    function Repetition(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["assign"])(_this, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["pick"])(options, function (v) { return v !== undefined; }));
        return _this;
    }
    return Repetition;
}(AbstractProduction));

var RepetitionWithSeparator = /** @class */ (function (_super) {
    __extends(RepetitionWithSeparator, _super);
    function RepetitionWithSeparator(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["assign"])(_this, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["pick"])(options, function (v) { return v !== undefined; }));
        return _this;
    }
    return RepetitionWithSeparator;
}(AbstractProduction));

var Alternation = /** @class */ (function (_super) {
    __extends(Alternation, _super);
    function Alternation(options) {
        var _this = _super.call(this, options.definition) || this;
        _this.idx = 1;
        _this.ignoreAmbiguities = false;
        _this.hasPredicates = false;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["assign"])(_this, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["pick"])(options, function (v) { return v !== undefined; }));
        return _this;
    }
    return Alternation;
}(AbstractProduction));

var Terminal = /** @class */ (function () {
    function Terminal(options) {
        this.idx = 1;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["assign"])(this, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["pick"])(options, function (v) { return v !== undefined; }));
    }
    Terminal.prototype.accept = function (visitor) {
        visitor.visit(this);
    };
    return Terminal;
}());

function serializeGrammar(topRules) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(topRules, serializeProduction);
}
function serializeProduction(node) {
    function convertDefinition(definition) {
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(definition, serializeProduction);
    }
    /* istanbul ignore else */
    if (node instanceof NonTerminal) {
        return {
            type: "NonTerminal",
            name: node.nonTerminalName,
            idx: node.idx
        };
    }
    else if (node instanceof Flat) {
        return {
            type: "Flat",
            definition: convertDefinition(node.definition)
        };
    }
    else if (node instanceof Option) {
        return {
            type: "Option",
            idx: node.idx,
            definition: convertDefinition(node.definition)
        };
    }
    else if (node instanceof RepetitionMandatory) {
        return {
            type: "RepetitionMandatory",
            name: node.name,
            idx: node.idx,
            definition: convertDefinition(node.definition)
        };
    }
    else if (node instanceof RepetitionMandatoryWithSeparator) {
        return {
            type: "RepetitionMandatoryWithSeparator",
            name: node.name,
            idx: node.idx,
            separator: (serializeProduction(new Terminal({ terminalType: node.separator }))),
            definition: convertDefinition(node.definition)
        };
    }
    else if (node instanceof RepetitionWithSeparator) {
        return {
            type: "RepetitionWithSeparator",
            name: node.name,
            idx: node.idx,
            separator: (serializeProduction(new Terminal({ terminalType: node.separator }))),
            definition: convertDefinition(node.definition)
        };
    }
    else if (node instanceof Repetition) {
        return {
            type: "Repetition",
            name: node.name,
            idx: node.idx,
            definition: convertDefinition(node.definition)
        };
    }
    else if (node instanceof Alternation) {
        return {
            type: "Alternation",
            name: node.name,
            idx: node.idx,
            definition: convertDefinition(node.definition)
        };
    }
    else if (node instanceof Terminal) {
        var serializedTerminal = {
            type: "Terminal",
            name: node.terminalType.name,
            label: Object(_scan_tokens_public__WEBPACK_IMPORTED_MODULE_1__["tokenLabel"])(node.terminalType),
            idx: node.idx
        };
        var pattern = node.terminalType.PATTERN;
        if (node.terminalType.PATTERN) {
            serializedTerminal.pattern = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isRegExp"])(pattern)
                ? pattern.source
                : pattern;
        }
        return serializedTerminal;
    }
    else if (node instanceof Rule) {
        return {
            type: "Rule",
            name: node.name,
            orgText: node.orgText,
            definition: convertDefinition(node.definition)
        };
    }
    else {
        throw Error("non exhaustive match");
    }
}
//# sourceMappingURL=gast_public.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_resolver_public.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_resolver_public.js ***!
  \****************************************************************************************/
/*! exports provided: resolveGrammar, validateGrammar, assignOccurrenceIndices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveGrammar", function() { return resolveGrammar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateGrammar", function() { return validateGrammar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignOccurrenceIndices", function() { return assignOccurrenceIndices; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resolver */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/resolver.js");
/* harmony import */ var _checks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../checks */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/checks.js");
/* harmony import */ var _errors_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../errors_public */ "./node_modules/chevrotain/lib_esm/src/parse/errors_public.js");
/* harmony import */ var _gast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gast */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast.js");





function resolveGrammar(options) {
    options = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"])(options, {
        errMsgProvider: _errors_public__WEBPACK_IMPORTED_MODULE_3__["defaultGrammarResolverErrorProvider"]
    });
    var topRulesTable = {};
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(options.rules, function (rule) {
        topRulesTable[rule.name] = rule;
    });
    return Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["resolveGrammar"])(topRulesTable, options.errMsgProvider);
}
function validateGrammar(options) {
    options = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"])(options, {
        errMsgProvider: _errors_public__WEBPACK_IMPORTED_MODULE_3__["defaultGrammarValidatorErrorProvider"],
        ignoredIssues: {}
    });
    return Object(_checks__WEBPACK_IMPORTED_MODULE_2__["validateGrammar"])(options.rules, options.maxLookahead, options.tokenTypes, options.ignoredIssues, options.errMsgProvider, options.grammarName);
}
function assignOccurrenceIndices(options) {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(options.rules, function (currRule) {
        var methodsCollector = new _gast__WEBPACK_IMPORTED_MODULE_4__["DslMethodsCollectorVisitor"]();
        currRule.accept(methodsCollector);
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(methodsCollector.dslMethods, function (methods) {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(methods, function (currMethod, arrIdx) {
                currMethod.idx = arrIdx + 1;
            });
        });
    });
}
//# sourceMappingURL=gast_resolver_public.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_visitor_public.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_visitor_public.js ***!
  \***************************************************************************************/
/*! exports provided: GAstVisitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAstVisitor", function() { return GAstVisitor; });
/* harmony import */ var _gast_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gast_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js");

var GAstVisitor = /** @class */ (function () {
    function GAstVisitor() {
    }
    GAstVisitor.prototype.visit = function (node) {
        var nodeAny = node;
        switch (nodeAny.constructor) {
            case _gast_public__WEBPACK_IMPORTED_MODULE_0__["NonTerminal"]:
                return this.visitNonTerminal(nodeAny);
            case _gast_public__WEBPACK_IMPORTED_MODULE_0__["Flat"]:
                return this.visitFlat(nodeAny);
            case _gast_public__WEBPACK_IMPORTED_MODULE_0__["Option"]:
                return this.visitOption(nodeAny);
            case _gast_public__WEBPACK_IMPORTED_MODULE_0__["RepetitionMandatory"]:
                return this.visitRepetitionMandatory(nodeAny);
            case _gast_public__WEBPACK_IMPORTED_MODULE_0__["RepetitionMandatoryWithSeparator"]:
                return this.visitRepetitionMandatoryWithSeparator(nodeAny);
            case _gast_public__WEBPACK_IMPORTED_MODULE_0__["RepetitionWithSeparator"]:
                return this.visitRepetitionWithSeparator(nodeAny);
            case _gast_public__WEBPACK_IMPORTED_MODULE_0__["Repetition"]:
                return this.visitRepetition(nodeAny);
            case _gast_public__WEBPACK_IMPORTED_MODULE_0__["Alternation"]:
                return this.visitAlternation(nodeAny);
            case _gast_public__WEBPACK_IMPORTED_MODULE_0__["Terminal"]:
                return this.visitTerminal(nodeAny);
            case _gast_public__WEBPACK_IMPORTED_MODULE_0__["Rule"]:
                return this.visitRule(nodeAny);
            /* istanbul ignore next */
            default:
                throw Error("non exhaustive match");
        }
    };
    GAstVisitor.prototype.visitNonTerminal = function (node) { };
    GAstVisitor.prototype.visitFlat = function (node) { };
    GAstVisitor.prototype.visitOption = function (node) { };
    GAstVisitor.prototype.visitRepetition = function (node) { };
    GAstVisitor.prototype.visitRepetitionMandatory = function (node) { };
    GAstVisitor.prototype.visitRepetitionMandatoryWithSeparator = function (node) { };
    GAstVisitor.prototype.visitRepetitionWithSeparator = function (node) { };
    GAstVisitor.prototype.visitAlternation = function (node) { };
    GAstVisitor.prototype.visitTerminal = function (node) { };
    GAstVisitor.prototype.visitRule = function (node) { };
    return GAstVisitor;
}());

//# sourceMappingURL=gast_visitor_public.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/grammar/interpreter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/grammar/interpreter.js ***!
  \**************************************************************************/
/*! exports provided: AbstractNextPossibleTokensWalker, NextAfterTokenWalker, AbstractNextTerminalAfterProductionWalker, NextTerminalAfterManyWalker, NextTerminalAfterManySepWalker, NextTerminalAfterAtLeastOneWalker, NextTerminalAfterAtLeastOneSepWalker, possiblePathsFrom, nextPossibleTokensAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractNextPossibleTokensWalker", function() { return AbstractNextPossibleTokensWalker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextAfterTokenWalker", function() { return NextAfterTokenWalker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractNextTerminalAfterProductionWalker", function() { return AbstractNextTerminalAfterProductionWalker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextTerminalAfterManyWalker", function() { return NextTerminalAfterManyWalker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextTerminalAfterManySepWalker", function() { return NextTerminalAfterManySepWalker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextTerminalAfterAtLeastOneWalker", function() { return NextTerminalAfterAtLeastOneWalker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextTerminalAfterAtLeastOneSepWalker", function() { return NextTerminalAfterAtLeastOneSepWalker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "possiblePathsFrom", function() { return possiblePathsFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextPossibleTokensAfter", function() { return nextPossibleTokensAfter; });
/* harmony import */ var _rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/rest.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _first__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./first */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/first.js");
/* harmony import */ var _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gast/gast_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var AbstractNextPossibleTokensWalker = /** @class */ (function (_super) {
    __extends(AbstractNextPossibleTokensWalker, _super);
    function AbstractNextPossibleTokensWalker(topProd, path) {
        var _this = _super.call(this) || this;
        _this.topProd = topProd;
        _this.path = path;
        _this.possibleTokTypes = [];
        _this.nextProductionName = "";
        _this.nextProductionOccurrence = 0;
        _this.found = false;
        _this.isAtEndOfPath = false;
        return _this;
    }
    AbstractNextPossibleTokensWalker.prototype.startWalking = function () {
        this.found = false;
        if (this.path.ruleStack[0] !== this.topProd.name) {
            throw Error("The path does not start with the walker's top Rule!");
        }
        // immutable for the win
        this.ruleStack = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["cloneArr"])(this.path.ruleStack).reverse(); // intelij bug requires assertion
        this.occurrenceStack = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["cloneArr"])(this.path.occurrenceStack).reverse(); // intelij bug requires assertion
        // already verified that the first production is valid, we now seek the 2nd production
        this.ruleStack.pop();
        this.occurrenceStack.pop();
        this.updateExpectedNext();
        this.walk(this.topProd);
        return this.possibleTokTypes;
    };
    AbstractNextPossibleTokensWalker.prototype.walk = function (prod, prevRest) {
        if (prevRest === void 0) { prevRest = []; }
        // stop scanning once we found the path
        if (!this.found) {
            _super.prototype.walk.call(this, prod, prevRest);
        }
    };
    AbstractNextPossibleTokensWalker.prototype.walkProdRef = function (refProd, currRest, prevRest) {
        // found the next production, need to keep walking in it
        if (refProd.referencedRule.name === this.nextProductionName &&
            refProd.idx === this.nextProductionOccurrence) {
            var fullRest = currRest.concat(prevRest);
            this.updateExpectedNext();
            this.walk(refProd.referencedRule, fullRest);
        }
    };
    AbstractNextPossibleTokensWalker.prototype.updateExpectedNext = function () {
        // need to consume the Terminal
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(this.ruleStack)) {
            // must reset nextProductionXXX to avoid walking down another Top Level production while what we are
            // really seeking is the last Terminal...
            this.nextProductionName = "";
            this.nextProductionOccurrence = 0;
            this.isAtEndOfPath = true;
        }
        else {
            this.nextProductionName = this.ruleStack.pop();
            this.nextProductionOccurrence = this.occurrenceStack.pop();
        }
    };
    return AbstractNextPossibleTokensWalker;
}(_rest__WEBPACK_IMPORTED_MODULE_0__["RestWalker"]));

var NextAfterTokenWalker = /** @class */ (function (_super) {
    __extends(NextAfterTokenWalker, _super);
    function NextAfterTokenWalker(topProd, path) {
        var _this = _super.call(this, topProd, path) || this;
        _this.path = path;
        _this.nextTerminalName = "";
        _this.nextTerminalOccurrence = 0;
        _this.nextTerminalName = _this.path.lastTok.name;
        _this.nextTerminalOccurrence = _this.path.lastTokOccurrence;
        return _this;
    }
    NextAfterTokenWalker.prototype.walkTerminal = function (terminal, currRest, prevRest) {
        if (this.isAtEndOfPath &&
            terminal.terminalType.name === this.nextTerminalName &&
            terminal.idx === this.nextTerminalOccurrence &&
            !this.found) {
            var fullRest = currRest.concat(prevRest);
            var restProd = new _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Flat"]({ definition: fullRest });
            this.possibleTokTypes = Object(_first__WEBPACK_IMPORTED_MODULE_2__["first"])(restProd);
            this.found = true;
        }
    };
    return NextAfterTokenWalker;
}(AbstractNextPossibleTokensWalker));

/**
 * This walker only "walks" a single "TOP" level in the Grammar Ast, this means
 * it never "follows" production refs
 */
var AbstractNextTerminalAfterProductionWalker = /** @class */ (function (_super) {
    __extends(AbstractNextTerminalAfterProductionWalker, _super);
    function AbstractNextTerminalAfterProductionWalker(topRule, occurrence) {
        var _this = _super.call(this) || this;
        _this.topRule = topRule;
        _this.occurrence = occurrence;
        _this.result = {
            token: undefined,
            occurrence: undefined,
            isEndOfRule: undefined
        };
        return _this;
    }
    AbstractNextTerminalAfterProductionWalker.prototype.startWalking = function () {
        this.walk(this.topRule);
        return this.result;
    };
    return AbstractNextTerminalAfterProductionWalker;
}(_rest__WEBPACK_IMPORTED_MODULE_0__["RestWalker"]));

var NextTerminalAfterManyWalker = /** @class */ (function (_super) {
    __extends(NextTerminalAfterManyWalker, _super);
    function NextTerminalAfterManyWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NextTerminalAfterManyWalker.prototype.walkMany = function (manyProd, currRest, prevRest) {
        if (manyProd.idx === this.occurrence) {
            var firstAfterMany = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["first"])(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterMany === undefined;
            if (firstAfterMany instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Terminal"]) {
                this.result.token = firstAfterMany.terminalType;
                this.result.occurrence = firstAfterMany.idx;
            }
        }
        else {
            _super.prototype.walkMany.call(this, manyProd, currRest, prevRest);
        }
    };
    return NextTerminalAfterManyWalker;
}(AbstractNextTerminalAfterProductionWalker));

var NextTerminalAfterManySepWalker = /** @class */ (function (_super) {
    __extends(NextTerminalAfterManySepWalker, _super);
    function NextTerminalAfterManySepWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NextTerminalAfterManySepWalker.prototype.walkManySep = function (manySepProd, currRest, prevRest) {
        if (manySepProd.idx === this.occurrence) {
            var firstAfterManySep = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["first"])(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterManySep === undefined;
            if (firstAfterManySep instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Terminal"]) {
                this.result.token = firstAfterManySep.terminalType;
                this.result.occurrence = firstAfterManySep.idx;
            }
        }
        else {
            _super.prototype.walkManySep.call(this, manySepProd, currRest, prevRest);
        }
    };
    return NextTerminalAfterManySepWalker;
}(AbstractNextTerminalAfterProductionWalker));

var NextTerminalAfterAtLeastOneWalker = /** @class */ (function (_super) {
    __extends(NextTerminalAfterAtLeastOneWalker, _super);
    function NextTerminalAfterAtLeastOneWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NextTerminalAfterAtLeastOneWalker.prototype.walkAtLeastOne = function (atLeastOneProd, currRest, prevRest) {
        if (atLeastOneProd.idx === this.occurrence) {
            var firstAfterAtLeastOne = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["first"])(currRest.concat(prevRest));
            this.result.isEndOfRule = firstAfterAtLeastOne === undefined;
            if (firstAfterAtLeastOne instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Terminal"]) {
                this.result.token = firstAfterAtLeastOne.terminalType;
                this.result.occurrence = firstAfterAtLeastOne.idx;
            }
        }
        else {
            _super.prototype.walkAtLeastOne.call(this, atLeastOneProd, currRest, prevRest);
        }
    };
    return NextTerminalAfterAtLeastOneWalker;
}(AbstractNextTerminalAfterProductionWalker));

// TODO: reduce code duplication in the AfterWalkers
var NextTerminalAfterAtLeastOneSepWalker = /** @class */ (function (_super) {
    __extends(NextTerminalAfterAtLeastOneSepWalker, _super);
    function NextTerminalAfterAtLeastOneSepWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NextTerminalAfterAtLeastOneSepWalker.prototype.walkAtLeastOneSep = function (atleastOneSepProd, currRest, prevRest) {
        if (atleastOneSepProd.idx === this.occurrence) {
            var firstAfterfirstAfterAtLeastOneSep = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["first"])(currRest.concat(prevRest));
            this.result.isEndOfRule =
                firstAfterfirstAfterAtLeastOneSep === undefined;
            if (firstAfterfirstAfterAtLeastOneSep instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Terminal"]) {
                this.result.token =
                    firstAfterfirstAfterAtLeastOneSep.terminalType;
                this.result.occurrence = firstAfterfirstAfterAtLeastOneSep.idx;
            }
        }
        else {
            _super.prototype.walkAtLeastOneSep.call(this, atleastOneSepProd, currRest, prevRest);
        }
    };
    return NextTerminalAfterAtLeastOneSepWalker;
}(AbstractNextTerminalAfterProductionWalker));

function possiblePathsFrom(targetDef, maxLength, currPath) {
    if (currPath === void 0) { currPath = []; }
    // avoid side effects
    currPath = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["cloneArr"])(currPath);
    var result = [];
    var i = 0;
    // TODO: avoid inner funcs
    function remainingPathWith(nextDef) {
        return nextDef.concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["drop"])(targetDef, i + 1));
    }
    // TODO: avoid inner funcs
    function getAlternativesForProd(definition) {
        var alternatives = possiblePathsFrom(remainingPathWith(definition), maxLength, currPath);
        return result.concat(alternatives);
    }
    /**
     * Mandatory productions will halt the loop as the paths computed from their recursive calls will already contain the
     * following (rest) of the targetDef.
     *
     * For optional productions (Option/Repetition/...) the loop will continue to represent the paths that do not include the
     * the optional production.
     */
    while (currPath.length < maxLength && i < targetDef.length) {
        var prod = targetDef[i];
        /* istanbul ignore else */
        if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Flat"]) {
            return getAlternativesForProd(prod.definition);
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["NonTerminal"]) {
            return getAlternativesForProd(prod.definition);
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Option"]) {
            result = getAlternativesForProd(prod.definition);
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["RepetitionMandatory"]) {
            var newDef = prod.definition.concat([
                new _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Repetition"]({
                    definition: prod.definition
                })
            ]);
            return getAlternativesForProd(newDef);
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["RepetitionMandatoryWithSeparator"]) {
            var newDef = [
                new _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Flat"]({ definition: prod.definition }),
                new _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Repetition"]({
                    definition: [
                        new _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Terminal"]({ terminalType: prod.separator })
                    ].concat(prod.definition)
                })
            ];
            return getAlternativesForProd(newDef);
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["RepetitionWithSeparator"]) {
            var newDef = prod.definition.concat([
                new _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Repetition"]({
                    definition: [
                        new _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Terminal"]({ terminalType: prod.separator })
                    ].concat(prod.definition)
                })
            ]);
            result = getAlternativesForProd(newDef);
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Repetition"]) {
            var newDef = prod.definition.concat([
                new _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Repetition"]({
                    definition: prod.definition
                })
            ]);
            result = getAlternativesForProd(newDef);
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Alternation"]) {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["forEach"])(prod.definition, function (currAlt) {
                result = getAlternativesForProd(currAlt.definition);
            });
            return result;
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Terminal"]) {
            currPath.push(prod.terminalType);
        }
        else {
            throw Error("non exhaustive match");
        }
        i++;
    }
    result.push({
        partialPath: currPath,
        suffixDef: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["drop"])(targetDef, i)
    });
    return result;
}
function nextPossibleTokensAfter(initialDef, tokenVector, tokMatcher, maxLookAhead) {
    var EXIT_NON_TERMINAL = "EXIT_NONE_TERMINAL";
    // to avoid creating a new Array each time.
    var EXIT_NON_TERMINAL_ARR = [EXIT_NON_TERMINAL];
    var EXIT_ALTERNATIVE = "EXIT_ALTERNATIVE";
    var foundCompletePath = false;
    var tokenVectorLength = tokenVector.length;
    var minimalAlternativesIndex = tokenVectorLength - maxLookAhead - 1;
    var result = [];
    var possiblePaths = [];
    possiblePaths.push({
        idx: -1,
        def: initialDef,
        ruleStack: [],
        occurrenceStack: []
    });
    while (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(possiblePaths)) {
        var currPath = possiblePaths.pop();
        // skip alternatives if no more results can be found (assuming deterministic grammar with fixed lookahead)
        if (currPath === EXIT_ALTERNATIVE) {
            if (foundCompletePath &&
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["last"])(possiblePaths).idx <= minimalAlternativesIndex) {
                // remove irrelevant alternative
                possiblePaths.pop();
            }
            continue;
        }
        var currDef = currPath.def;
        var currIdx = currPath.idx;
        var currRuleStack = currPath.ruleStack;
        var currOccurrenceStack = currPath.occurrenceStack;
        // For Example: an empty path could exist in a valid grammar in the case of an EMPTY_ALT
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(currDef)) {
            continue;
        }
        var prod = currDef[0];
        /* istanbul ignore else */
        if (prod === EXIT_NON_TERMINAL) {
            var nextPath = {
                idx: currIdx,
                def: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["drop"])(currDef),
                ruleStack: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["dropRight"])(currRuleStack),
                occurrenceStack: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["dropRight"])(currOccurrenceStack)
            };
            possiblePaths.push(nextPath);
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Terminal"]) {
            /* istanbul ignore else */
            if (currIdx < tokenVectorLength - 1) {
                var nextIdx = currIdx + 1;
                var actualToken = tokenVector[nextIdx];
                if (tokMatcher(actualToken, prod.terminalType)) {
                    var nextPath = {
                        idx: nextIdx,
                        def: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["drop"])(currDef),
                        ruleStack: currRuleStack,
                        occurrenceStack: currOccurrenceStack
                    };
                    possiblePaths.push(nextPath);
                }
                // end of the line
            }
            else if (currIdx === tokenVectorLength - 1) {
                // IGNORE ABOVE ELSE
                result.push({
                    nextTokenType: prod.terminalType,
                    nextTokenOccurrence: prod.idx,
                    ruleStack: currRuleStack,
                    occurrenceStack: currOccurrenceStack
                });
                foundCompletePath = true;
            }
            else {
                throw Error("non exhaustive match");
            }
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["NonTerminal"]) {
            var newRuleStack = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["cloneArr"])(currRuleStack);
            newRuleStack.push(prod.nonTerminalName);
            var newOccurrenceStack = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["cloneArr"])(currOccurrenceStack);
            newOccurrenceStack.push(prod.idx);
            var nextPath = {
                idx: currIdx,
                def: prod.definition.concat(EXIT_NON_TERMINAL_ARR, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["drop"])(currDef)),
                ruleStack: newRuleStack,
                occurrenceStack: newOccurrenceStack
            };
            possiblePaths.push(nextPath);
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Option"]) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            var nextPathWithout = {
                idx: currIdx,
                def: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["drop"])(currDef),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout);
            // required marker to avoid backtracking paths whose higher priority alternatives already matched
            possiblePaths.push(EXIT_ALTERNATIVE);
            var nextPathWith = {
                idx: currIdx,
                def: prod.definition.concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["drop"])(currDef)),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["RepetitionMandatory"]) {
            // TODO:(THE NEW operators here take a while...) (convert once?)
            var secondIteration = new _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Repetition"]({
                definition: prod.definition,
                idx: prod.idx
            });
            var nextDef = prod.definition.concat([secondIteration], Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["drop"])(currDef));
            var nextPath = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPath);
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["RepetitionMandatoryWithSeparator"]) {
            // TODO:(THE NEW operators here take a while...) (convert once?)
            var separatorGast = new _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Terminal"]({
                terminalType: prod.separator
            });
            var secondIteration = new _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Repetition"]({
                definition: [separatorGast].concat(prod.definition),
                idx: prod.idx
            });
            var nextDef = prod.definition.concat([secondIteration], Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["drop"])(currDef));
            var nextPath = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPath);
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["RepetitionWithSeparator"]) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            var nextPathWithout = {
                idx: currIdx,
                def: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["drop"])(currDef),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout);
            // required marker to avoid backtracking paths whose higher priority alternatives already matched
            possiblePaths.push(EXIT_ALTERNATIVE);
            var separatorGast = new _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Terminal"]({
                terminalType: prod.separator
            });
            var nthRepetition = new _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Repetition"]({
                definition: [separatorGast].concat(prod.definition),
                idx: prod.idx
            });
            var nextDef = prod.definition.concat([nthRepetition], Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["drop"])(currDef));
            var nextPathWith = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Repetition"]) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            var nextPathWithout = {
                idx: currIdx,
                def: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["drop"])(currDef),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWithout);
            // required marker to avoid backtracking paths whose higher priority alternatives already matched
            possiblePaths.push(EXIT_ALTERNATIVE);
            // TODO: an empty repetition will cause infinite loops here, will the parser detect this in selfAnalysis?
            var nthRepetition = new _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Repetition"]({
                definition: prod.definition,
                idx: prod.idx
            });
            var nextDef = prod.definition.concat([nthRepetition], Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["drop"])(currDef));
            var nextPathWith = {
                idx: currIdx,
                def: nextDef,
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPathWith);
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Alternation"]) {
            // the order of alternatives is meaningful, FILO (Last path will be traversed first).
            for (var i = prod.definition.length - 1; i >= 0; i--) {
                var currAlt = prod.definition[i];
                var currAltPath = {
                    idx: currIdx,
                    def: currAlt.definition.concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["drop"])(currDef)),
                    ruleStack: currRuleStack,
                    occurrenceStack: currOccurrenceStack
                };
                possiblePaths.push(currAltPath);
                possiblePaths.push(EXIT_ALTERNATIVE);
            }
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Flat"]) {
            possiblePaths.push({
                idx: currIdx,
                def: prod.definition.concat(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["drop"])(currDef)),
                ruleStack: currRuleStack,
                occurrenceStack: currOccurrenceStack
            });
        }
        else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_3__["Rule"]) {
            // last because we should only encounter at most a single one of these per invocation.
            possiblePaths.push(expandTopLevelRule(prod, currIdx, currRuleStack, currOccurrenceStack));
        }
        else {
            throw Error("non exhaustive match");
        }
    }
    return result;
}
function expandTopLevelRule(topRule, currIdx, currRuleStack, currOccurrenceStack) {
    var newRuleStack = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["cloneArr"])(currRuleStack);
    newRuleStack.push(topRule.name);
    var newCurrOccurrenceStack = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["cloneArr"])(currOccurrenceStack);
    // top rule is always assumed to have been called with occurrence index 1
    newCurrOccurrenceStack.push(1);
    return {
        idx: currIdx,
        def: topRule.definition,
        ruleStack: newRuleStack,
        occurrenceStack: newCurrOccurrenceStack
    };
}
//# sourceMappingURL=interpreter.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/grammar/keys.js":
/*!*******************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/grammar/keys.js ***!
  \*******************************************************************/
/*! exports provided: BITS_FOR_METHOD_TYPE, BITS_FOR_OCCURRENCE_IDX, BITS_FOR_RULE_IDX, BITS_FOR_ALT_IDX, OR_IDX, OPTION_IDX, MANY_IDX, AT_LEAST_ONE_IDX, MANY_SEP_IDX, AT_LEAST_ONE_SEP_IDX, getKeyForAutomaticLookahead, getKeyForAltIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITS_FOR_METHOD_TYPE", function() { return BITS_FOR_METHOD_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITS_FOR_OCCURRENCE_IDX", function() { return BITS_FOR_OCCURRENCE_IDX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITS_FOR_RULE_IDX", function() { return BITS_FOR_RULE_IDX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BITS_FOR_ALT_IDX", function() { return BITS_FOR_ALT_IDX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OR_IDX", function() { return OR_IDX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTION_IDX", function() { return OPTION_IDX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANY_IDX", function() { return MANY_IDX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AT_LEAST_ONE_IDX", function() { return AT_LEAST_ONE_IDX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANY_SEP_IDX", function() { return MANY_SEP_IDX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AT_LEAST_ONE_SEP_IDX", function() { return AT_LEAST_ONE_SEP_IDX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeyForAutomaticLookahead", function() { return getKeyForAutomaticLookahead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeyForAltIndex", function() { return getKeyForAltIndex; });
// Lookahead keys are 32Bit integers in the form
// TTTTTTTT-ZZZZZZZZZZZZ-YYYY-XXXXXXXX
// XXXX -> Occurrence Index bitmap.
// YYYY -> DSL Method Type bitmap.
// ZZZZZZZZZZZZZZZ -> Rule short Index bitmap.
// TTTTTTTTT -> alternation alternative index bitmap
var BITS_FOR_METHOD_TYPE = 4;
var BITS_FOR_OCCURRENCE_IDX = 8;
var BITS_FOR_RULE_IDX = 12;
// TODO: validation, this means that there may at most 2^8 --> 256 alternatives for an alternation.
var BITS_FOR_ALT_IDX = 8;
// short string used as part of mapping keys.
// being short improves the performance when composing KEYS for maps out of these
// The 5 - 8 bits (16 possible values, are reserved for the DSL method indices)
/* tslint:disable */
var OR_IDX = 1 << BITS_FOR_OCCURRENCE_IDX;
var OPTION_IDX = 2 << BITS_FOR_OCCURRENCE_IDX;
var MANY_IDX = 3 << BITS_FOR_OCCURRENCE_IDX;
var AT_LEAST_ONE_IDX = 4 << BITS_FOR_OCCURRENCE_IDX;
var MANY_SEP_IDX = 5 << BITS_FOR_OCCURRENCE_IDX;
var AT_LEAST_ONE_SEP_IDX = 6 << BITS_FOR_OCCURRENCE_IDX;
/* tslint:enable */
// this actually returns a number, but it is always used as a string (object prop key)
function getKeyForAutomaticLookahead(ruleIdx, dslMethodIdx, occurrence) {
    /* tslint:disable */
    return occurrence | dslMethodIdx | ruleIdx;
    /* tslint:enable */
}
var BITS_START_FOR_ALT_IDX = 32 - BITS_FOR_ALT_IDX;
function getKeyForAltIndex(ruleIdx, dslMethodIdx, occurrence, altIdx) {
    /* tslint:disable */
    // alternative indices are zero based, thus must always add one (turn on one bit) to guarantee uniqueness.
    var altIdxBitMap = (altIdx + 1) << BITS_START_FOR_ALT_IDX;
    return (getKeyForAutomaticLookahead(ruleIdx, dslMethodIdx, occurrence) |
        altIdxBitMap);
    /* tslint:enable */
}
//# sourceMappingURL=keys.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/grammar/lookahead.js":
/*!************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/grammar/lookahead.js ***!
  \************************************************************************/
/*! exports provided: PROD_TYPE, getProdType, buildLookaheadFuncForOr, buildLookaheadFuncForOptionalProd, buildAlternativesLookAheadFunc, buildSingleAlternativeLookaheadFunction, lookAheadSequenceFromAlternatives, getLookaheadPathsForOr, getLookaheadPathsForOptionalProd, containsPath, isStrictPrefixOfPath, areTokenCategoriesNotUsed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROD_TYPE", function() { return PROD_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProdType", function() { return getProdType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildLookaheadFuncForOr", function() { return buildLookaheadFuncForOr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildLookaheadFuncForOptionalProd", function() { return buildLookaheadFuncForOptionalProd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildAlternativesLookAheadFunc", function() { return buildAlternativesLookAheadFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSingleAlternativeLookaheadFunction", function() { return buildSingleAlternativeLookaheadFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookAheadSequenceFromAlternatives", function() { return lookAheadSequenceFromAlternatives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLookaheadPathsForOr", function() { return getLookaheadPathsForOr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLookaheadPathsForOptionalProd", function() { return getLookaheadPathsForOptionalProd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsPath", function() { return containsPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStrictPrefixOfPath", function() { return isStrictPrefixOfPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areTokenCategoriesNotUsed", function() { return areTokenCategoriesNotUsed; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _interpreter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interpreter */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/interpreter.js");
/* harmony import */ var _rest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/rest.js");
/* harmony import */ var _scan_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../scan/tokens */ "./node_modules/chevrotain/lib_esm/src/scan/tokens.js");
/* harmony import */ var _gast_gast_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gast/gast_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js");
/* harmony import */ var _gast_gast_visitor_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gast/gast_visitor_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_visitor_public.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var PROD_TYPE;
(function (PROD_TYPE) {
    PROD_TYPE[PROD_TYPE["OPTION"] = 0] = "OPTION";
    PROD_TYPE[PROD_TYPE["REPETITION"] = 1] = "REPETITION";
    PROD_TYPE[PROD_TYPE["REPETITION_MANDATORY"] = 2] = "REPETITION_MANDATORY";
    PROD_TYPE[PROD_TYPE["REPETITION_MANDATORY_WITH_SEPARATOR"] = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR";
    PROD_TYPE[PROD_TYPE["REPETITION_WITH_SEPARATOR"] = 4] = "REPETITION_WITH_SEPARATOR";
    PROD_TYPE[PROD_TYPE["ALTERNATION"] = 5] = "ALTERNATION";
})(PROD_TYPE || (PROD_TYPE = {}));
function getProdType(prod) {
    /* istanbul ignore else */
    if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_4__["Option"]) {
        return PROD_TYPE.OPTION;
    }
    else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_4__["Repetition"]) {
        return PROD_TYPE.REPETITION;
    }
    else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_4__["RepetitionMandatory"]) {
        return PROD_TYPE.REPETITION_MANDATORY;
    }
    else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_4__["RepetitionMandatoryWithSeparator"]) {
        return PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR;
    }
    else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_4__["RepetitionWithSeparator"]) {
        return PROD_TYPE.REPETITION_WITH_SEPARATOR;
    }
    else if (prod instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_4__["Alternation"]) {
        return PROD_TYPE.ALTERNATION;
    }
    else {
        throw Error("non exhaustive match");
    }
}
function buildLookaheadFuncForOr(occurrence, ruleGrammar, maxLookahead, hasPredicates, dynamicTokensEnabled, laFuncBuilder) {
    var lookAheadPaths = getLookaheadPathsForOr(occurrence, ruleGrammar, maxLookahead);
    var tokenMatcher = areTokenCategoriesNotUsed(lookAheadPaths)
        ? _scan_tokens__WEBPACK_IMPORTED_MODULE_3__["tokenStructuredMatcherNoCategories"]
        : _scan_tokens__WEBPACK_IMPORTED_MODULE_3__["tokenStructuredMatcher"];
    return laFuncBuilder(lookAheadPaths, hasPredicates, tokenMatcher, dynamicTokensEnabled);
}
/**
 *  When dealing with an Optional production (OPTION/MANY/2nd iteration of AT_LEAST_ONE/...) we need to compare
 *  the lookahead "inside" the production and the lookahead immediately "after" it in the same top level rule (context free).
 *
 *  Example: given a production:
 *  ABC(DE)?DF
 *
 *  The optional '(DE)?' should only be entered if we see 'DE'. a single Token 'D' is not sufficient to distinguish between the two
 *  alternatives.
 *
 *  @returns A Lookahead function which will return true IFF the parser should parse the Optional production.
 */
function buildLookaheadFuncForOptionalProd(occurrence, ruleGrammar, k, dynamicTokensEnabled, prodType, lookaheadBuilder) {
    var lookAheadPaths = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k);
    var tokenMatcher = areTokenCategoriesNotUsed(lookAheadPaths)
        ? _scan_tokens__WEBPACK_IMPORTED_MODULE_3__["tokenStructuredMatcherNoCategories"]
        : _scan_tokens__WEBPACK_IMPORTED_MODULE_3__["tokenStructuredMatcher"];
    return lookaheadBuilder(lookAheadPaths[0], tokenMatcher, dynamicTokensEnabled);
}
function buildAlternativesLookAheadFunc(alts, hasPredicates, tokenMatcher, dynamicTokensEnabled) {
    var numOfAlts = alts.length;
    var areAllOneTokenLookahead = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["every"])(alts, function (currAlt) {
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["every"])(currAlt, function (currPath) {
            return currPath.length === 1;
        });
    });
    // This version takes into account the predicates as well.
    if (hasPredicates) {
        /**
         * @returns {number} - The chosen alternative index
         */
        return function (orAlts) {
            // unfortunately the predicates must be extracted every single time
            // as they cannot be cached due to references to parameters(vars) which are no longer valid.
            // note that in the common case of no predicates, no cpu time will be wasted on this (see else block)
            var predicates = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(orAlts, function (currAlt) { return currAlt.GATE; });
            for (var t = 0; t < numOfAlts; t++) {
                var currAlt = alts[t];
                var currNumOfPaths = currAlt.length;
                var currPredicate = predicates[t];
                if (currPredicate !== undefined &&
                    currPredicate.call(this) === false) {
                    // if the predicate does not match there is no point in checking the paths
                    continue;
                }
                nextPath: for (var j = 0; j < currNumOfPaths; j++) {
                    var currPath = currAlt[j];
                    var currPathLength = currPath.length;
                    for (var i = 0; i < currPathLength; i++) {
                        var nextToken = this.LA(i + 1);
                        if (tokenMatcher(nextToken, currPath[i]) === false) {
                            // mismatch in current path
                            // try the next pth
                            continue nextPath;
                        }
                    }
                    // found a full path that matches.
                    // this will also work for an empty ALT as the loop will be skipped
                    return t;
                }
                // none of the paths for the current alternative matched
                // try the next alternative
            }
            // none of the alternatives could be matched
            return undefined;
        };
    }
    else if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
        // optimized (common) case of all the lookaheads paths requiring only
        // a single token lookahead. These Optimizations cannot work if dynamically defined Tokens are used.
        var singleTokenAlts = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(alts, function (currAlt) {
            return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["flatten"])(currAlt);
        });
        var choiceToAlt_1 = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["reduce"])(singleTokenAlts, function (result, currAlt, idx) {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(currAlt, function (currTokType) {
                if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(result, currTokType.tokenTypeIdx)) {
                    result[currTokType.tokenTypeIdx] = idx;
                }
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(currTokType.categoryMatches, function (currExtendingType) {
                    if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(result, currExtendingType)) {
                        result[currExtendingType] = idx;
                    }
                });
            });
            return result;
        }, []);
        /**
         * @returns {number} - The chosen alternative index
         */
        return function () {
            var nextToken = this.LA(1);
            return choiceToAlt_1[nextToken.tokenTypeIdx];
        };
    }
    else {
        // optimized lookahead without needing to check the predicates at all.
        // this causes code duplication which is intentional to improve performance.
        /**
         * @returns {number} - The chosen alternative index
         */
        return function () {
            for (var t = 0; t < numOfAlts; t++) {
                var currAlt = alts[t];
                var currNumOfPaths = currAlt.length;
                nextPath: for (var j = 0; j < currNumOfPaths; j++) {
                    var currPath = currAlt[j];
                    var currPathLength = currPath.length;
                    for (var i = 0; i < currPathLength; i++) {
                        var nextToken = this.LA(i + 1);
                        if (tokenMatcher(nextToken, currPath[i]) === false) {
                            // mismatch in current path
                            // try the next pth
                            continue nextPath;
                        }
                    }
                    // found a full path that matches.
                    // this will also work for an empty ALT as the loop will be skipped
                    return t;
                }
                // none of the paths for the current alternative matched
                // try the next alternative
            }
            // none of the alternatives could be matched
            return undefined;
        };
    }
}
function buildSingleAlternativeLookaheadFunction(alt, tokenMatcher, dynamicTokensEnabled) {
    var areAllOneTokenLookahead = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["every"])(alt, function (currPath) {
        return currPath.length === 1;
    });
    var numOfPaths = alt.length;
    // optimized (common) case of all the lookaheads paths requiring only
    // a single token lookahead.
    if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
        var singleTokensTypes = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["flatten"])(alt);
        if (singleTokensTypes.length === 1 &&
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(singleTokensTypes[0].categoryMatches)) {
            var expectedTokenType = singleTokensTypes[0];
            var expectedTokenUniqueKey_1 = expectedTokenType.tokenTypeIdx;
            return function () {
                return this.LA(1).tokenTypeIdx === expectedTokenUniqueKey_1;
            };
        }
        else {
            var choiceToAlt_2 = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["reduce"])(singleTokensTypes, function (result, currTokType, idx) {
                result[currTokType.tokenTypeIdx] = true;
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(currTokType.categoryMatches, function (currExtendingType) {
                    result[currExtendingType] = true;
                });
                return result;
            }, []);
            return function () {
                var nextToken = this.LA(1);
                return choiceToAlt_2[nextToken.tokenTypeIdx] === true;
            };
        }
    }
    else {
        return function () {
            nextPath: for (var j = 0; j < numOfPaths; j++) {
                var currPath = alt[j];
                var currPathLength = currPath.length;
                for (var i = 0; i < currPathLength; i++) {
                    var nextToken = this.LA(i + 1);
                    if (tokenMatcher(nextToken, currPath[i]) === false) {
                        // mismatch in current path
                        // try the next pth
                        continue nextPath;
                    }
                }
                // found a full path that matches.
                return true;
            }
            // none of the paths matched
            return false;
        };
    }
}
var RestDefinitionFinderWalker = /** @class */ (function (_super) {
    __extends(RestDefinitionFinderWalker, _super);
    function RestDefinitionFinderWalker(topProd, targetOccurrence, targetProdType) {
        var _this = _super.call(this) || this;
        _this.topProd = topProd;
        _this.targetOccurrence = targetOccurrence;
        _this.targetProdType = targetProdType;
        return _this;
    }
    RestDefinitionFinderWalker.prototype.startWalking = function () {
        this.walk(this.topProd);
        return this.restDef;
    };
    RestDefinitionFinderWalker.prototype.checkIsTarget = function (node, expectedProdType, currRest, prevRest) {
        if (node.idx === this.targetOccurrence &&
            this.targetProdType === expectedProdType) {
            this.restDef = currRest.concat(prevRest);
            return true;
        }
        // performance optimization, do not iterate over the entire Grammar ast after we have found the target
        return false;
    };
    RestDefinitionFinderWalker.prototype.walkOption = function (optionProd, currRest, prevRest) {
        if (!this.checkIsTarget(optionProd, PROD_TYPE.OPTION, currRest, prevRest)) {
            _super.prototype.walkOption.call(this, optionProd, currRest, prevRest);
        }
    };
    RestDefinitionFinderWalker.prototype.walkAtLeastOne = function (atLeastOneProd, currRest, prevRest) {
        if (!this.checkIsTarget(atLeastOneProd, PROD_TYPE.REPETITION_MANDATORY, currRest, prevRest)) {
            _super.prototype.walkOption.call(this, atLeastOneProd, currRest, prevRest);
        }
    };
    RestDefinitionFinderWalker.prototype.walkAtLeastOneSep = function (atLeastOneSepProd, currRest, prevRest) {
        if (!this.checkIsTarget(atLeastOneSepProd, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, currRest, prevRest)) {
            _super.prototype.walkOption.call(this, atLeastOneSepProd, currRest, prevRest);
        }
    };
    RestDefinitionFinderWalker.prototype.walkMany = function (manyProd, currRest, prevRest) {
        if (!this.checkIsTarget(manyProd, PROD_TYPE.REPETITION, currRest, prevRest)) {
            _super.prototype.walkOption.call(this, manyProd, currRest, prevRest);
        }
    };
    RestDefinitionFinderWalker.prototype.walkManySep = function (manySepProd, currRest, prevRest) {
        if (!this.checkIsTarget(manySepProd, PROD_TYPE.REPETITION_WITH_SEPARATOR, currRest, prevRest)) {
            _super.prototype.walkOption.call(this, manySepProd, currRest, prevRest);
        }
    };
    return RestDefinitionFinderWalker;
}(_rest__WEBPACK_IMPORTED_MODULE_2__["RestWalker"]));
/**
 * Returns the definition of a target production in a top level level rule.
 */
var InsideDefinitionFinderVisitor = /** @class */ (function (_super) {
    __extends(InsideDefinitionFinderVisitor, _super);
    function InsideDefinitionFinderVisitor(targetOccurrence, targetProdType, targetRef) {
        var _this = _super.call(this) || this;
        _this.targetOccurrence = targetOccurrence;
        _this.targetProdType = targetProdType;
        _this.targetRef = targetRef;
        _this.result = [];
        return _this;
    }
    InsideDefinitionFinderVisitor.prototype.checkIsTarget = function (node, expectedProdName) {
        if (node.idx === this.targetOccurrence &&
            this.targetProdType === expectedProdName &&
            (this.targetRef === undefined || node === this.targetRef)) {
            this.result = node.definition;
        }
    };
    InsideDefinitionFinderVisitor.prototype.visitOption = function (node) {
        this.checkIsTarget(node, PROD_TYPE.OPTION);
    };
    InsideDefinitionFinderVisitor.prototype.visitRepetition = function (node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION);
    };
    InsideDefinitionFinderVisitor.prototype.visitRepetitionMandatory = function (node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY);
    };
    InsideDefinitionFinderVisitor.prototype.visitRepetitionMandatoryWithSeparator = function (node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);
    };
    InsideDefinitionFinderVisitor.prototype.visitRepetitionWithSeparator = function (node) {
        this.checkIsTarget(node, PROD_TYPE.REPETITION_WITH_SEPARATOR);
    };
    InsideDefinitionFinderVisitor.prototype.visitAlternation = function (node) {
        this.checkIsTarget(node, PROD_TYPE.ALTERNATION);
    };
    return InsideDefinitionFinderVisitor;
}(_gast_gast_visitor_public__WEBPACK_IMPORTED_MODULE_5__["GAstVisitor"]));
function initializeArrayOfArrays(size) {
    var result = new Array(size);
    for (var i = 0; i < size; i++) {
        result[i] = [];
    }
    return result;
}
/**
 * A sort of hash function between a Path in the grammar and a string.
 * Note that this returns multiple "hashes" to support the scenario of token categories.
 * -  A single path with categories may match multiple **actual** paths.
 */
function pathToHashKeys(path) {
    var keys = [""];
    for (var i = 0; i < path.length; i++) {
        var tokType = path[i];
        var longerKeys = [];
        for (var j = 0; j < keys.length; j++) {
            var currShorterKey = keys[j];
            longerKeys.push(currShorterKey + "_" + tokType.tokenTypeIdx);
            for (var t = 0; t < tokType.categoryMatches.length; t++) {
                var categoriesKeySuffix = "_" + tokType.categoryMatches[t];
                longerKeys.push(currShorterKey + categoriesKeySuffix);
            }
        }
        keys = longerKeys;
    }
    return keys;
}
/**
 * Imperative style due to being called from a hot spot
 */
function isUniquePrefixHash(altKnownPathsKeys, searchPathKeys, idx) {
    for (var currAltIdx = 0; currAltIdx < altKnownPathsKeys.length; currAltIdx++) {
        // We only want to test vs the other alternatives
        if (currAltIdx === idx) {
            continue;
        }
        var otherAltKnownPathsKeys = altKnownPathsKeys[currAltIdx];
        for (var searchIdx = 0; searchIdx < searchPathKeys.length; searchIdx++) {
            var searchKey = searchPathKeys[searchIdx];
            if (otherAltKnownPathsKeys[searchKey] === true) {
                return false;
            }
        }
    }
    // None of the SearchPathKeys were found in any of the other alternatives
    return true;
}
function lookAheadSequenceFromAlternatives(altsDefs, k) {
    var partialAlts = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(altsDefs, function (currAlt) { return Object(_interpreter__WEBPACK_IMPORTED_MODULE_1__["possiblePathsFrom"])([currAlt], 1); });
    var finalResult = initializeArrayOfArrays(partialAlts.length);
    var altsHashes = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(partialAlts, function (currAltPaths) {
        var dict = {};
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(currAltPaths, function (item) {
            var keys = pathToHashKeys(item.partialPath);
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(keys, function (currKey) {
                dict[currKey] = true;
            });
        });
        return dict;
    });
    var newData = partialAlts;
    // maxLookahead loop
    for (var pathLength = 1; pathLength <= k; pathLength++) {
        var currDataset = newData;
        newData = initializeArrayOfArrays(currDataset.length);
        var _loop_1 = function (altIdx) {
            var currAltPathsAndSuffixes = currDataset[altIdx];
            // paths in current alternative loop
            for (var currPathIdx = 0; currPathIdx < currAltPathsAndSuffixes.length; currPathIdx++) {
                var currPathPrefix = currAltPathsAndSuffixes[currPathIdx].partialPath;
                var suffixDef = currAltPathsAndSuffixes[currPathIdx].suffixDef;
                var prefixKeys = pathToHashKeys(currPathPrefix);
                var isUnique = isUniquePrefixHash(altsHashes, prefixKeys, altIdx);
                // End of the line for this path.
                if (isUnique ||
                    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(suffixDef) ||
                    currPathPrefix.length === k) {
                    var currAltResult = finalResult[altIdx];
                    // TODO: Can we implement a containsPath using Maps/Dictionaries?
                    if (containsPath(currAltResult, currPathPrefix) === false) {
                        currAltResult.push(currPathPrefix);
                        // Update all new  keys for the current path.
                        for (var j = 0; j < prefixKeys.length; j++) {
                            var currKey = prefixKeys[j];
                            altsHashes[altIdx][currKey] = true;
                        }
                    }
                }
                // Expand longer paths
                else {
                    var newPartialPathsAndSuffixes = Object(_interpreter__WEBPACK_IMPORTED_MODULE_1__["possiblePathsFrom"])(suffixDef, pathLength + 1, currPathPrefix);
                    newData[altIdx] = newData[altIdx].concat(newPartialPathsAndSuffixes);
                    // Update keys for new known paths
                    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(newPartialPathsAndSuffixes, function (item) {
                        var prefixKeys = pathToHashKeys(item.partialPath);
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(prefixKeys, function (key) {
                            altsHashes[altIdx][key] = true;
                        });
                    });
                }
            }
        };
        // alternatives loop
        for (var altIdx = 0; altIdx < currDataset.length; altIdx++) {
            _loop_1(altIdx);
        }
    }
    return finalResult;
}
function getLookaheadPathsForOr(occurrence, ruleGrammar, k, orProd) {
    var visitor = new InsideDefinitionFinderVisitor(occurrence, PROD_TYPE.ALTERNATION, orProd);
    ruleGrammar.accept(visitor);
    return lookAheadSequenceFromAlternatives(visitor.result, k);
}
function getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k) {
    var insideDefVisitor = new InsideDefinitionFinderVisitor(occurrence, prodType);
    ruleGrammar.accept(insideDefVisitor);
    var insideDef = insideDefVisitor.result;
    var afterDefWalker = new RestDefinitionFinderWalker(ruleGrammar, occurrence, prodType);
    var afterDef = afterDefWalker.startWalking();
    var insideFlat = new _gast_gast_public__WEBPACK_IMPORTED_MODULE_4__["Flat"]({ definition: insideDef });
    var afterFlat = new _gast_gast_public__WEBPACK_IMPORTED_MODULE_4__["Flat"]({ definition: afterDef });
    return lookAheadSequenceFromAlternatives([insideFlat, afterFlat], k);
}
function containsPath(alternative, searchPath) {
    compareOtherPath: for (var i = 0; i < alternative.length; i++) {
        var otherPath = alternative[i];
        if (otherPath.length !== searchPath.length) {
            continue;
        }
        for (var j = 0; j < otherPath.length; j++) {
            var searchTok = searchPath[j];
            var otherTok = otherPath[j];
            var matchingTokens = searchTok === otherTok ||
                otherTok.categoryMatchesMap[searchTok.tokenTypeIdx] !==
                    undefined;
            if (matchingTokens === false) {
                continue compareOtherPath;
            }
        }
        return true;
    }
    return false;
}
function isStrictPrefixOfPath(prefix, other) {
    return (prefix.length < other.length &&
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["every"])(prefix, function (tokType, idx) {
            var otherTokType = other[idx];
            return (tokType === otherTokType ||
                otherTokType.categoryMatchesMap[tokType.tokenTypeIdx]);
        }));
}
function areTokenCategoriesNotUsed(lookAheadPaths) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["every"])(lookAheadPaths, function (singleAltPaths) {
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["every"])(singleAltPaths, function (singlePath) {
            return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["every"])(singlePath, function (token) { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(token.categoryMatches); });
        });
    });
}
//# sourceMappingURL=lookahead.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/grammar/resolver.js":
/*!***********************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/grammar/resolver.js ***!
  \***********************************************************************/
/*! exports provided: resolveGrammar, GastRefResolverVisitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveGrammar", function() { return resolveGrammar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GastRefResolverVisitor", function() { return GastRefResolverVisitor; });
/* harmony import */ var _parser_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parser/parser */ "./node_modules/chevrotain/lib_esm/src/parse/parser/parser.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _gast_gast_visitor_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gast/gast_visitor_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_visitor_public.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



function resolveGrammar(topLevels, errMsgProvider) {
    var refResolver = new GastRefResolverVisitor(topLevels, errMsgProvider);
    refResolver.resolveRefs();
    return refResolver.errors;
}
var GastRefResolverVisitor = /** @class */ (function (_super) {
    __extends(GastRefResolverVisitor, _super);
    function GastRefResolverVisitor(nameToTopRule, errMsgProvider) {
        var _this = _super.call(this) || this;
        _this.nameToTopRule = nameToTopRule;
        _this.errMsgProvider = errMsgProvider;
        _this.errors = [];
        return _this;
    }
    GastRefResolverVisitor.prototype.resolveRefs = function () {
        var _this = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["forEach"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["values"])(this.nameToTopRule), function (prod) {
            _this.currTopLevel = prod;
            prod.accept(_this);
        });
    };
    GastRefResolverVisitor.prototype.visitNonTerminal = function (node) {
        var ref = this.nameToTopRule[node.nonTerminalName];
        if (!ref) {
            var msg = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, node);
            this.errors.push({
                message: msg,
                type: _parser_parser__WEBPACK_IMPORTED_MODULE_0__["ParserDefinitionErrorType"].UNRESOLVED_SUBRULE_REF,
                ruleName: this.currTopLevel.name,
                unresolvedRefName: node.nonTerminalName
            });
        }
        else {
            node.referencedRule = ref;
        }
    };
    return GastRefResolverVisitor;
}(_gast_gast_visitor_public__WEBPACK_IMPORTED_MODULE_2__["GAstVisitor"]));

//# sourceMappingURL=resolver.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/grammar/rest.js":
/*!*******************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/grammar/rest.js ***!
  \*******************************************************************/
/*! exports provided: RestWalker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestWalker", function() { return RestWalker; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gast/gast_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js");


/**
 *  A Grammar Walker that computes the "remaining" grammar "after" a productions in the grammar.
 */
var RestWalker = /** @class */ (function () {
    function RestWalker() {
    }
    RestWalker.prototype.walk = function (prod, prevRest) {
        var _this = this;
        if (prevRest === void 0) { prevRest = []; }
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(prod.definition, function (subProd, index) {
            var currRest = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["drop"])(prod.definition, index + 1);
            /* istanbul ignore else */
            if (subProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["NonTerminal"]) {
                _this.walkProdRef(subProd, currRest, prevRest);
            }
            else if (subProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Terminal"]) {
                _this.walkTerminal(subProd, currRest, prevRest);
            }
            else if (subProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Flat"]) {
                _this.walkFlat(subProd, currRest, prevRest);
            }
            else if (subProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Option"]) {
                _this.walkOption(subProd, currRest, prevRest);
            }
            else if (subProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["RepetitionMandatory"]) {
                _this.walkAtLeastOne(subProd, currRest, prevRest);
            }
            else if (subProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["RepetitionMandatoryWithSeparator"]) {
                _this.walkAtLeastOneSep(subProd, currRest, prevRest);
            }
            else if (subProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["RepetitionWithSeparator"]) {
                _this.walkManySep(subProd, currRest, prevRest);
            }
            else if (subProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Repetition"]) {
                _this.walkMany(subProd, currRest, prevRest);
            }
            else if (subProd instanceof _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Alternation"]) {
                _this.walkOr(subProd, currRest, prevRest);
            }
            else {
                throw Error("non exhaustive match");
            }
        });
    };
    RestWalker.prototype.walkTerminal = function (terminal, currRest, prevRest) { };
    RestWalker.prototype.walkProdRef = function (refProd, currRest, prevRest) { };
    RestWalker.prototype.walkFlat = function (flatProd, currRest, prevRest) {
        // ABCDEF => after the D the rest is EF
        var fullOrRest = currRest.concat(prevRest);
        this.walk(flatProd, fullOrRest);
    };
    RestWalker.prototype.walkOption = function (optionProd, currRest, prevRest) {
        // ABC(DE)?F => after the (DE)? the rest is F
        var fullOrRest = currRest.concat(prevRest);
        this.walk(optionProd, fullOrRest);
    };
    RestWalker.prototype.walkAtLeastOne = function (atLeastOneProd, currRest, prevRest) {
        // ABC(DE)+F => after the (DE)+ the rest is (DE)?F
        var fullAtLeastOneRest = [
            new _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Option"]({ definition: atLeastOneProd.definition })
        ].concat(currRest, prevRest);
        this.walk(atLeastOneProd, fullAtLeastOneRest);
    };
    RestWalker.prototype.walkAtLeastOneSep = function (atLeastOneSepProd, currRest, prevRest) {
        // ABC DE(,DE)* F => after the (,DE)+ the rest is (,DE)?F
        var fullAtLeastOneSepRest = restForRepetitionWithSeparator(atLeastOneSepProd, currRest, prevRest);
        this.walk(atLeastOneSepProd, fullAtLeastOneSepRest);
    };
    RestWalker.prototype.walkMany = function (manyProd, currRest, prevRest) {
        // ABC(DE)*F => after the (DE)* the rest is (DE)?F
        var fullManyRest = [
            new _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Option"]({ definition: manyProd.definition })
        ].concat(currRest, prevRest);
        this.walk(manyProd, fullManyRest);
    };
    RestWalker.prototype.walkManySep = function (manySepProd, currRest, prevRest) {
        // ABC (DE(,DE)*)? F => after the (,DE)* the rest is (,DE)?F
        var fullManySepRest = restForRepetitionWithSeparator(manySepProd, currRest, prevRest);
        this.walk(manySepProd, fullManySepRest);
    };
    RestWalker.prototype.walkOr = function (orProd, currRest, prevRest) {
        var _this = this;
        // ABC(D|E|F)G => when finding the (D|E|F) the rest is G
        var fullOrRest = currRest.concat(prevRest);
        // walk all different alternatives
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(orProd.definition, function (alt) {
            // wrapping each alternative in a single definition wrapper
            // to avoid errors in computing the rest of that alternative in the invocation to computeInProdFollows
            // (otherwise for OR([alt1,alt2]) alt2 will be considered in 'rest' of alt1
            var prodWrapper = new _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Flat"]({ definition: [alt] });
            _this.walk(prodWrapper, fullOrRest);
        });
    };
    return RestWalker;
}());

function restForRepetitionWithSeparator(repSepProd, currRest, prevRest) {
    var repSepRest = [
        new _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Option"]({
            definition: [
                new _gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Terminal"]({ terminalType: repSepProd.separator })
            ].concat(repSepProd.definition)
        })
    ];
    var fullRepSepRest = repSepRest.concat(currRest, prevRest);
    return fullRepSepRest;
}
//# sourceMappingURL=rest.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/parser/parser.js":
/*!********************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/parser/parser.js ***!
  \********************************************************************/
/*! exports provided: END_OF_FILE, DEFAULT_PARSER_CONFIG, DEFAULT_RULE_CONFIG, ParserDefinitionErrorType, EMPTY_ALT, Parser, CstParser, EmbeddedActionsParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_OF_FILE", function() { return END_OF_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PARSER_CONFIG", function() { return DEFAULT_PARSER_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RULE_CONFIG", function() { return DEFAULT_RULE_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParserDefinitionErrorType", function() { return ParserDefinitionErrorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_ALT", function() { return EMPTY_ALT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CstParser", function() { return CstParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddedActionsParser", function() { return EmbeddedActionsParser; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _grammar_follow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../grammar/follow */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/follow.js");
/* harmony import */ var _scan_tokens_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scan/tokens_public */ "./node_modules/chevrotain/lib_esm/src/scan/tokens_public.js");
/* harmony import */ var _cst_cst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cst/cst */ "./node_modules/chevrotain/lib_esm/src/parse/cst/cst.js");
/* harmony import */ var _errors_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../errors_public */ "./node_modules/chevrotain/lib_esm/src/parse/errors_public.js");
/* harmony import */ var _grammar_gast_gast_resolver_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../grammar/gast/gast_resolver_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_resolver_public.js");
/* harmony import */ var _traits_recoverable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./traits/recoverable */ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/recoverable.js");
/* harmony import */ var _traits_looksahead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./traits/looksahead */ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/looksahead.js");
/* harmony import */ var _traits_tree_builder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./traits/tree_builder */ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/tree_builder.js");
/* harmony import */ var _traits_lexer_adapter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./traits/lexer_adapter */ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/lexer_adapter.js");
/* harmony import */ var _traits_recognizer_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./traits/recognizer_api */ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/recognizer_api.js");
/* harmony import */ var _traits_recognizer_engine__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./traits/recognizer_engine */ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/recognizer_engine.js");
/* harmony import */ var _traits_error_handler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./traits/error_handler */ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/error_handler.js");
/* harmony import */ var _traits_context_assist__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./traits/context_assist */ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/context_assist.js");
/* harmony import */ var _traits_gast_recorder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./traits/gast_recorder */ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/gast_recorder.js");
/* harmony import */ var _traits_perf_tracer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./traits/perf_tracer */ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/perf_tracer.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
















var END_OF_FILE = Object(_scan_tokens_public__WEBPACK_IMPORTED_MODULE_2__["createTokenInstance"])(_scan_tokens_public__WEBPACK_IMPORTED_MODULE_2__["EOF"], "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(END_OF_FILE);
var DEFAULT_PARSER_CONFIG = Object.freeze({
    recoveryEnabled: false,
    maxLookahead: 4,
    ignoredIssues: {},
    dynamicTokensEnabled: false,
    outputCst: true,
    errorMessageProvider: _errors_public__WEBPACK_IMPORTED_MODULE_4__["defaultParserErrorProvider"],
    nodeLocationTracking: "none",
    traceInitPerf: false,
    skipValidations: false
});
var DEFAULT_RULE_CONFIG = Object.freeze({
    recoveryValueFunc: function () { return undefined; },
    resyncEnabled: true
});
var ParserDefinitionErrorType;
(function (ParserDefinitionErrorType) {
    ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_RULE_NAME"] = 0] = "INVALID_RULE_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["DUPLICATE_RULE_NAME"] = 1] = "DUPLICATE_RULE_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_RULE_OVERRIDE"] = 2] = "INVALID_RULE_OVERRIDE";
    ParserDefinitionErrorType[ParserDefinitionErrorType["DUPLICATE_PRODUCTIONS"] = 3] = "DUPLICATE_PRODUCTIONS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["UNRESOLVED_SUBRULE_REF"] = 4] = "UNRESOLVED_SUBRULE_REF";
    ParserDefinitionErrorType[ParserDefinitionErrorType["LEFT_RECURSION"] = 5] = "LEFT_RECURSION";
    ParserDefinitionErrorType[ParserDefinitionErrorType["NONE_LAST_EMPTY_ALT"] = 6] = "NONE_LAST_EMPTY_ALT";
    ParserDefinitionErrorType[ParserDefinitionErrorType["AMBIGUOUS_ALTS"] = 7] = "AMBIGUOUS_ALTS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["CONFLICT_TOKENS_RULES_NAMESPACE"] = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE";
    ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_TOKEN_NAME"] = 9] = "INVALID_TOKEN_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["INVALID_NESTED_RULE_NAME"] = 10] = "INVALID_NESTED_RULE_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["DUPLICATE_NESTED_NAME"] = 11] = "DUPLICATE_NESTED_NAME";
    ParserDefinitionErrorType[ParserDefinitionErrorType["NO_NON_EMPTY_LOOKAHEAD"] = 12] = "NO_NON_EMPTY_LOOKAHEAD";
    ParserDefinitionErrorType[ParserDefinitionErrorType["AMBIGUOUS_PREFIX_ALTS"] = 13] = "AMBIGUOUS_PREFIX_ALTS";
    ParserDefinitionErrorType[ParserDefinitionErrorType["TOO_MANY_ALTS"] = 14] = "TOO_MANY_ALTS";
})(ParserDefinitionErrorType || (ParserDefinitionErrorType = {}));
function EMPTY_ALT(value) {
    if (value === void 0) { value = undefined; }
    return function () {
        return value;
    };
}
var Parser = /** @class */ (function () {
    function Parser(tokenVocabulary, config) {
        if (config === void 0) { config = DEFAULT_PARSER_CONFIG; }
        this.ignoredIssues = DEFAULT_PARSER_CONFIG.ignoredIssues;
        this.definitionErrors = [];
        this.selfAnalysisDone = false;
        var that = this;
        that.initErrorHandler(config);
        that.initLexerAdapter();
        that.initLooksAhead(config);
        that.initRecognizerEngine(tokenVocabulary, config);
        that.initRecoverable(config);
        that.initTreeBuilder(config);
        that.initContentAssist();
        that.initGastRecorder(config);
        that.initPerformanceTracer(config);
        /* istanbul ignore if - complete over-kill to test this, we should only add a test when we actually hard deprecate it and throw an error... */
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(config, "ignoredIssues") &&
            config.ignoredIssues !== DEFAULT_PARSER_CONFIG.ignoredIssues) {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["PRINT_WARNING"])("The <ignoredIssues> IParserConfig property is soft-deprecated and will be removed in future versions.\n\t" +
                "Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.");
        }
        this.ignoredIssues = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(config, "ignoredIssues")
            ? config.ignoredIssues
            : DEFAULT_PARSER_CONFIG.ignoredIssues;
        this.skipValidations = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(config, "skipValidations")
            ? config.skipValidations
            : DEFAULT_PARSER_CONFIG.skipValidations;
    }
    /**
     *  @deprecated use the **instance** method with the same name instead
     */
    Parser.performSelfAnalysis = function (parserInstance) {
        ;
        parserInstance.performSelfAnalysis();
    };
    Parser.prototype.performSelfAnalysis = function () {
        var _this = this;
        this.TRACE_INIT("performSelfAnalysis", function () {
            var defErrorsMsgs;
            _this.selfAnalysisDone = true;
            var className = _this.className;
            _this.TRACE_INIT("toFastProps", function () {
                // Without this voodoo magic the parser would be x3-x4 slower
                // It seems it is better to invoke `toFastProperties` **before**
                // Any manipulations of the `this` object done during the recording phase.
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["toFastProperties"])(_this);
            });
            _this.TRACE_INIT("Grammar Recording", function () {
                try {
                    _this.enableRecording();
                    // Building the GAST
                    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(_this.definedRulesNames, function (currRuleName) {
                        var wrappedRule = _this[currRuleName];
                        var originalGrammarAction = wrappedRule["originalGrammarAction"];
                        var recordedRuleGast = undefined;
                        _this.TRACE_INIT(currRuleName + " Rule", function () {
                            recordedRuleGast = _this.topLevelRuleRecord(currRuleName, originalGrammarAction);
                        });
                        _this.gastProductionsCache[currRuleName] = recordedRuleGast;
                    });
                }
                finally {
                    _this.disableRecording();
                }
            });
            var resolverErrors = [];
            _this.TRACE_INIT("Grammar Resolving", function () {
                resolverErrors = Object(_grammar_gast_gast_resolver_public__WEBPACK_IMPORTED_MODULE_5__["resolveGrammar"])({
                    rules: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["values"])(_this.gastProductionsCache)
                });
                _this.definitionErrors.push.apply(_this.definitionErrors, resolverErrors); // mutability for the win?
            });
            _this.TRACE_INIT("Grammar Validations", function () {
                // only perform additional grammar validations IFF no resolving errors have occurred.
                // as unresolved grammar may lead to unhandled runtime exceptions in the follow up validations.
                if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(resolverErrors) && _this.skipValidations === false) {
                    var validationErrors = Object(_grammar_gast_gast_resolver_public__WEBPACK_IMPORTED_MODULE_5__["validateGrammar"])({
                        rules: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["values"])(_this.gastProductionsCache),
                        maxLookahead: _this.maxLookahead,
                        tokenTypes: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["values"])(_this.tokensMap),
                        ignoredIssues: _this.ignoredIssues,
                        errMsgProvider: _errors_public__WEBPACK_IMPORTED_MODULE_4__["defaultGrammarValidatorErrorProvider"],
                        grammarName: className
                    });
                    _this.definitionErrors.push.apply(_this.definitionErrors, validationErrors); // mutability for the win?
                }
            });
            // this analysis may fail if the grammar is not perfectly valid
            if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(_this.definitionErrors)) {
                // The results of these computations are not needed unless error recovery is enabled.
                if (_this.recoveryEnabled) {
                    _this.TRACE_INIT("computeAllProdsFollows", function () {
                        var allFollows = Object(_grammar_follow__WEBPACK_IMPORTED_MODULE_1__["computeAllProdsFollows"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["values"])(_this.gastProductionsCache));
                        _this.resyncFollows = allFollows;
                    });
                }
                _this.TRACE_INIT("ComputeLookaheadFunctions", function () {
                    _this.preComputeLookaheadFunctions(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["values"])(_this.gastProductionsCache));
                });
            }
            _this.TRACE_INIT("expandAllNestedRuleNames", function () {
                // TODO: is this needed for EmbeddedActionsParser?
                var cstAnalysisResult = Object(_cst_cst__WEBPACK_IMPORTED_MODULE_3__["expandAllNestedRuleNames"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["values"])(_this.gastProductionsCache), _this.fullRuleNameToShort);
                _this.allRuleNames = cstAnalysisResult.allRuleNames;
            });
            if (!Parser.DEFER_DEFINITION_ERRORS_HANDLING &&
                !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(_this.definitionErrors)) {
                defErrorsMsgs = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(_this.definitionErrors, function (defError) { return defError.message; });
                throw new Error("Parser Definition Errors detected:\n " + defErrorsMsgs.join("\n-------------------------------\n"));
            }
        });
    };
    // Set this flag to true if you don't want the Parser to throw error when problems in it's definition are detected.
    // (normally during the parser's constructor).
    // This is a design time flag, it will not affect the runtime error handling of the parser, just design time errors,
    // for example: duplicate rule names, referencing an unresolved subrule, ect...
    // This flag should not be enabled during normal usage, it is used in special situations, for example when
    // needing to display the parser definition errors in some GUI(online playground).
    Parser.DEFER_DEFINITION_ERRORS_HANDLING = false;
    return Parser;
}());

Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["applyMixins"])(Parser, [
    _traits_recoverable__WEBPACK_IMPORTED_MODULE_6__["Recoverable"],
    _traits_looksahead__WEBPACK_IMPORTED_MODULE_7__["LooksAhead"],
    _traits_tree_builder__WEBPACK_IMPORTED_MODULE_8__["TreeBuilder"],
    _traits_lexer_adapter__WEBPACK_IMPORTED_MODULE_9__["LexerAdapter"],
    _traits_recognizer_engine__WEBPACK_IMPORTED_MODULE_11__["RecognizerEngine"],
    _traits_recognizer_api__WEBPACK_IMPORTED_MODULE_10__["RecognizerApi"],
    _traits_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorHandler"],
    _traits_context_assist__WEBPACK_IMPORTED_MODULE_13__["ContentAssist"],
    _traits_gast_recorder__WEBPACK_IMPORTED_MODULE_14__["GastRecorder"],
    _traits_perf_tracer__WEBPACK_IMPORTED_MODULE_15__["PerformanceTracer"]
]);
var CstParser = /** @class */ (function (_super) {
    __extends(CstParser, _super);
    function CstParser(tokenVocabulary, config) {
        if (config === void 0) { config = DEFAULT_PARSER_CONFIG; }
        var _this = this;
        var configClone = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["cloneObj"])(config);
        configClone.outputCst = true;
        _this = _super.call(this, tokenVocabulary, configClone) || this;
        return _this;
    }
    return CstParser;
}(Parser));

var EmbeddedActionsParser = /** @class */ (function (_super) {
    __extends(EmbeddedActionsParser, _super);
    function EmbeddedActionsParser(tokenVocabulary, config) {
        if (config === void 0) { config = DEFAULT_PARSER_CONFIG; }
        var _this = this;
        var configClone = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["cloneObj"])(config);
        configClone.outputCst = false;
        _this = _super.call(this, tokenVocabulary, configClone) || this;
        return _this;
    }
    return EmbeddedActionsParser;
}(Parser));

//# sourceMappingURL=parser.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/context_assist.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/parser/traits/context_assist.js ***!
  \***********************************************************************************/
/*! exports provided: ContentAssist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentAssist", function() { return ContentAssist; });
/* harmony import */ var _grammar_interpreter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../grammar/interpreter */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/interpreter.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");


var ContentAssist = /** @class */ (function () {
    function ContentAssist() {
    }
    ContentAssist.prototype.initContentAssist = function () { };
    ContentAssist.prototype.computeContentAssist = function (startRuleName, precedingInput) {
        var startRuleGast = this.gastProductionsCache[startRuleName];
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(startRuleGast)) {
            throw Error("Rule ->" + startRuleName + "<- does not exist in this grammar.");
        }
        return Object(_grammar_interpreter__WEBPACK_IMPORTED_MODULE_0__["nextPossibleTokensAfter"])([startRuleGast], precedingInput, this.tokenMatcher, this.maxLookahead);
    };
    // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
    // TODO: should this be more explicitly part of the public API?
    ContentAssist.prototype.getNextPossibleTokenTypes = function (grammarPath) {
        var topRuleName = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["first"])(grammarPath.ruleStack);
        var gastProductions = this.getGAstProductions();
        var topProduction = gastProductions[topRuleName];
        var nextPossibleTokenTypes = new _grammar_interpreter__WEBPACK_IMPORTED_MODULE_0__["NextAfterTokenWalker"](topProduction, grammarPath).startWalking();
        return nextPossibleTokenTypes;
    };
    return ContentAssist;
}());

//# sourceMappingURL=context_assist.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/error_handler.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/parser/traits/error_handler.js ***!
  \**********************************************************************************/
/*! exports provided: ErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony import */ var _exceptions_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../exceptions_public */ "./node_modules/chevrotain/lib_esm/src/parse/exceptions_public.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _grammar_lookahead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../grammar/lookahead */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/lookahead.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parser */ "./node_modules/chevrotain/lib_esm/src/parse/parser/parser.js");




/**
 * Trait responsible for runtime parsing errors.
 */
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.initErrorHandler = function (config) {
        this._errors = [];
        this.errorMessageProvider = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["defaults"])(config.errorMessageProvider, _parser__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_PARSER_CONFIG"].errorMessageProvider);
    };
    ErrorHandler.prototype.SAVE_ERROR = function (error) {
        if (Object(_exceptions_public__WEBPACK_IMPORTED_MODULE_0__["isRecognitionException"])(error)) {
            error.context = {
                ruleStack: this.getHumanReadableRuleStack(),
                ruleOccurrenceStack: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["cloneArr"])(this.RULE_OCCURRENCE_STACK)
            };
            this._errors.push(error);
            return error;
        }
        else {
            throw Error("Trying to save an Error which is not a RecognitionException");
        }
    };
    Object.defineProperty(ErrorHandler.prototype, "errors", {
        // TODO: extract these methods to ErrorHandler Trait?
        get: function () {
            return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["cloneArr"])(this._errors);
        },
        set: function (newErrors) {
            this._errors = newErrors;
        },
        enumerable: true,
        configurable: true
    });
    // TODO: consider caching the error message computed information
    ErrorHandler.prototype.raiseEarlyExitException = function (occurrence, prodType, userDefinedErrMsg) {
        var ruleName = this.getCurrRuleFullName();
        var ruleGrammar = this.getGAstProductions()[ruleName];
        var lookAheadPathsPerAlternative = Object(_grammar_lookahead__WEBPACK_IMPORTED_MODULE_2__["getLookaheadPathsForOptionalProd"])(occurrence, ruleGrammar, prodType, this.maxLookahead);
        var insideProdPaths = lookAheadPathsPerAlternative[0];
        var actualTokens = [];
        for (var i = 1; i <= this.maxLookahead; i++) {
            actualTokens.push(this.LA(i));
        }
        var msg = this.errorMessageProvider.buildEarlyExitMessage({
            expectedIterationPaths: insideProdPaths,
            actual: actualTokens,
            previous: this.LA(0),
            customUserDescription: userDefinedErrMsg,
            ruleName: ruleName
        });
        throw this.SAVE_ERROR(new _exceptions_public__WEBPACK_IMPORTED_MODULE_0__["EarlyExitException"](msg, this.LA(1), this.LA(0)));
    };
    // TODO: consider caching the error message computed information
    ErrorHandler.prototype.raiseNoAltException = function (occurrence, errMsgTypes) {
        var ruleName = this.getCurrRuleFullName();
        var ruleGrammar = this.getGAstProductions()[ruleName];
        // TODO: getLookaheadPathsForOr can be slow for large enough maxLookahead and certain grammars, consider caching ?
        var lookAheadPathsPerAlternative = Object(_grammar_lookahead__WEBPACK_IMPORTED_MODULE_2__["getLookaheadPathsForOr"])(occurrence, ruleGrammar, this.maxLookahead);
        var actualTokens = [];
        for (var i = 1; i <= this.maxLookahead; i++) {
            actualTokens.push(this.LA(i));
        }
        var previousToken = this.LA(0);
        var errMsg = this.errorMessageProvider.buildNoViableAltMessage({
            expectedPathsPerAlt: lookAheadPathsPerAlternative,
            actual: actualTokens,
            previous: previousToken,
            customUserDescription: errMsgTypes,
            ruleName: this.getCurrRuleFullName()
        });
        throw this.SAVE_ERROR(new _exceptions_public__WEBPACK_IMPORTED_MODULE_0__["NoViableAltException"](errMsg, this.LA(1), previousToken));
    };
    return ErrorHandler;
}());

//# sourceMappingURL=error_handler.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/gast_recorder.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/parser/traits/gast_recorder.js ***!
  \**********************************************************************************/
/*! exports provided: GastRecorder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GastRecorder", function() { return GastRecorder; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../grammar/gast/gast_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js");
/* harmony import */ var _scan_lexer_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../scan/lexer_public */ "./node_modules/chevrotain/lib_esm/src/scan/lexer_public.js");
/* harmony import */ var _scan_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../scan/tokens */ "./node_modules/chevrotain/lib_esm/src/scan/tokens.js");
/* harmony import */ var _scan_tokens_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../scan/tokens_public */ "./node_modules/chevrotain/lib_esm/src/scan/tokens_public.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parser */ "./node_modules/chevrotain/lib_esm/src/parse/parser/parser.js");
/* harmony import */ var _grammar_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../grammar/keys */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/keys.js");







var RECORDING_NULL_OBJECT = {
    description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(RECORDING_NULL_OBJECT);
var HANDLE_SEPARATOR = true;
var MAX_METHOD_IDX = Math.pow(2, _grammar_keys__WEBPACK_IMPORTED_MODULE_6__["BITS_FOR_OCCURRENCE_IDX"]) - 1;
var RFT = Object(_scan_tokens_public__WEBPACK_IMPORTED_MODULE_4__["createToken"])({ name: "RECORDING_PHASE_TOKEN", pattern: _scan_lexer_public__WEBPACK_IMPORTED_MODULE_2__["Lexer"].NA });
Object(_scan_tokens__WEBPACK_IMPORTED_MODULE_3__["augmentTokenTypes"])([RFT]);
var RECORDING_PHASE_TOKEN = Object(_scan_tokens_public__WEBPACK_IMPORTED_MODULE_4__["createTokenInstance"])(RFT, "This IToken indicates the Parser is in Recording Phase\n\t" +
    "" +
    "See: https://sap.github.io/chevrotain/docs/guide/internals.html#grammar-recording for details", 
// Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
// cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
-1, -1, -1, -1, -1, -1);
Object.freeze(RECORDING_PHASE_TOKEN);
var RECORDING_PHASE_CSTNODE = {
    name: "This CSTNode indicates the Parser is in Recording Phase\n\t" +
        "See: https://sap.github.io/chevrotain/docs/guide/internals.html#grammar-recording for details",
    children: {}
};
/**
 * This trait handles the creation of the GAST structure for Chevrotain Grammars
 */
var GastRecorder = /** @class */ (function () {
    function GastRecorder() {
    }
    GastRecorder.prototype.initGastRecorder = function (config) {
        this.recordingProdStack = [];
        this.RECORDING_PHASE = false;
    };
    GastRecorder.prototype.enableRecording = function () {
        var _this = this;
        this.RECORDING_PHASE = true;
        this.TRACE_INIT("Enable Recording", function () {
            var _loop_1 = function (i) {
                var idx = i > 0 ? i : "";
                _this["CONSUME" + idx] = function (arg1, arg2) {
                    return this.consumeInternalRecord(arg1, i, arg2);
                };
                _this["SUBRULE" + idx] = function (arg1, arg2) {
                    return this.subruleInternalRecord(arg1, i, arg2);
                };
                _this["OPTION" + idx] = function (arg1) {
                    return this.optionInternalRecord(arg1, i);
                };
                _this["OR" + idx] = function (arg1) {
                    return this.orInternalRecord(arg1, i);
                };
                _this["MANY" + idx] = function (arg1) {
                    this.manyInternalRecord(i, arg1);
                };
                _this["MANY_SEP" + idx] = function (arg1) {
                    this.manySepFirstInternalRecord(i, arg1);
                };
                _this["AT_LEAST_ONE" + idx] = function (arg1) {
                    this.atLeastOneInternalRecord(i, arg1);
                };
                _this["AT_LEAST_ONE_SEP" + idx] = function (arg1) {
                    this.atLeastOneSepFirstInternalRecord(i, arg1);
                };
            };
            /**
             * Warning Dark Voodoo Magic upcoming!
             * We are "replacing" the public parsing DSL methods API
             * With **new** alternative implementations on the Parser **instance**
             *
             * So far this is the only way I've found to avoid performance regressions during parsing time.
             * - Approx 30% performance regression was measured on Chrome 75 Canary when attempting to replace the "internal"
             *   implementations directly instead.
             */
            for (var i = 0; i < 10; i++) {
                _loop_1(i);
            }
            // DSL methods with the idx(suffix) as an argument
            _this["consume"] = function (idx, arg1, arg2) {
                return this.consumeInternalRecord(arg1, idx, arg2);
            };
            _this["subrule"] = function (idx, arg1, arg2) {
                return this.subruleInternalRecord(arg1, idx, arg2);
            };
            _this["option"] = function (idx, arg1) {
                return this.optionInternalRecord(arg1, idx);
            };
            _this["or"] = function (idx, arg1) {
                return this.orInternalRecord(arg1, idx);
            };
            _this["many"] = function (idx, arg1) {
                this.manyInternalRecord(idx, arg1);
            };
            _this["atLeastOne"] = function (idx, arg1) {
                this.atLeastOneInternalRecord(idx, arg1);
            };
            _this.ACTION = _this.ACTION_RECORD;
            _this.BACKTRACK = _this.BACKTRACK_RECORD;
            _this.LA = _this.LA_RECORD;
        });
    };
    GastRecorder.prototype.disableRecording = function () {
        var _this = this;
        this.RECORDING_PHASE = false;
        // By deleting these **instance** properties, any future invocation
        // will be deferred to the original methods on the **prototype** object
        // This seems to get rid of any incorrect optimizations that V8 may
        // do during the recording phase.
        this.TRACE_INIT("Deleting Recording methods", function () {
            for (var i = 0; i < 10; i++) {
                var idx = i > 0 ? i : "";
                delete _this["CONSUME" + idx];
                delete _this["SUBRULE" + idx];
                delete _this["OPTION" + idx];
                delete _this["OR" + idx];
                delete _this["MANY" + idx];
                delete _this["MANY_SEP" + idx];
                delete _this["AT_LEAST_ONE" + idx];
                delete _this["AT_LEAST_ONE_SEP" + idx];
            }
            delete _this["consume"];
            delete _this["subrule"];
            delete _this["option"];
            delete _this["or"];
            delete _this["many"];
            delete _this["atLeastOne"];
            delete _this.ACTION;
            delete _this.BACKTRACK;
            delete _this.LA;
        });
    };
    // TODO: is there any way to use this method to check no
    //   Parser methods are called inside an ACTION?
    //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
    GastRecorder.prototype.ACTION_RECORD = function (impl) {
        // NO-OP during recording
        return;
    };
    // Executing backtracking logic will break our recording logic assumptions
    GastRecorder.prototype.BACKTRACK_RECORD = function (grammarRule, args) {
        return function () { return true; };
    };
    // LA is part of the official API and may be used for custom lookahead logic
    // by end users who may forget to wrap it in ACTION or inside a GATE
    GastRecorder.prototype.LA_RECORD = function (howMuch) {
        // We cannot use the RECORD_PHASE_TOKEN here because someone may depend
        // On LA return EOF at the end of the input so an infinite loop may occur.
        return _parser__WEBPACK_IMPORTED_MODULE_5__["END_OF_FILE"];
    };
    GastRecorder.prototype.topLevelRuleRecord = function (name, def) {
        try {
            var newTopLevelRule = new _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Rule"]({ definition: [], name: name });
            newTopLevelRule.name = name;
            this.recordingProdStack.push(newTopLevelRule);
            def.call(this);
            this.recordingProdStack.pop();
            return newTopLevelRule;
        }
        catch (originalError) {
            if (originalError.KNOWN_RECORDER_ERROR !== true) {
                try {
                    originalError.message =
                        originalError.message +
                            '\n\t This error was thrown during the "grammar recording phase" For more info see:\n\t' +
                            "https://sap.github.io/chevrotain/docs/guide/internals.html#grammar-recording";
                }
                catch (mutabilityError) {
                    // We may not be able to modify the original error object
                    throw originalError;
                }
            }
            throw originalError;
        }
    };
    // Implementation of parsing DSL
    GastRecorder.prototype.optionInternalRecord = function (actionORMethodDef, occurrence) {
        return recordProd.call(this, _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Option"], actionORMethodDef, occurrence);
    };
    GastRecorder.prototype.atLeastOneInternalRecord = function (occurrence, actionORMethodDef) {
        recordProd.call(this, _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["RepetitionMandatory"], actionORMethodDef, occurrence);
    };
    GastRecorder.prototype.atLeastOneSepFirstInternalRecord = function (occurrence, options) {
        recordProd.call(this, _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["RepetitionMandatoryWithSeparator"], options, occurrence, HANDLE_SEPARATOR);
    };
    GastRecorder.prototype.manyInternalRecord = function (occurrence, actionORMethodDef) {
        recordProd.call(this, _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Repetition"], actionORMethodDef, occurrence);
    };
    GastRecorder.prototype.manySepFirstInternalRecord = function (occurrence, options) {
        recordProd.call(this, _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["RepetitionWithSeparator"], options, occurrence, HANDLE_SEPARATOR);
    };
    GastRecorder.prototype.orInternalRecord = function (altsOrOpts, occurrence) {
        return recordOrProd.call(this, altsOrOpts, occurrence);
    };
    GastRecorder.prototype.subruleInternalRecord = function (ruleToCall, occurrence, options) {
        assertMethodIdxIsValid(occurrence);
        if (!ruleToCall || Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(ruleToCall, "ruleName") === false) {
            var error = new Error("<SUBRULE" + getIdxSuffix(occurrence) + "> argument is invalid" +
                (" expecting a Parser method reference but got: <" + JSON.stringify(ruleToCall) + ">") +
                ("\n inside top level rule: <" + this.recordingProdStack[0].name + ">"));
            error.KNOWN_RECORDER_ERROR = true;
            throw error;
        }
        var prevProd = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["peek"])(this.recordingProdStack);
        var ruleName = ruleToCall["ruleName"];
        var newNoneTerminal = new _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["NonTerminal"]({
            idx: occurrence,
            nonTerminalName: ruleName,
            // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
            referencedRule: undefined
        });
        prevProd.definition.push(newNoneTerminal);
        return this.outputCst
            ? RECORDING_PHASE_CSTNODE
            : RECORDING_NULL_OBJECT;
    };
    GastRecorder.prototype.consumeInternalRecord = function (tokType, occurrence, options) {
        assertMethodIdxIsValid(occurrence);
        if (!Object(_scan_tokens__WEBPACK_IMPORTED_MODULE_3__["hasShortKeyProperty"])(tokType)) {
            var error = new Error("<CONSUME" + getIdxSuffix(occurrence) + "> argument is invalid" +
                (" expecting a TokenType reference but got: <" + JSON.stringify(tokType) + ">") +
                ("\n inside top level rule: <" + this.recordingProdStack[0].name + ">"));
            error.KNOWN_RECORDER_ERROR = true;
            throw error;
        }
        var prevProd = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["peek"])(this.recordingProdStack);
        var newNoneTerminal = new _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Terminal"]({
            idx: occurrence,
            terminalType: tokType
        });
        prevProd.definition.push(newNoneTerminal);
        return RECORDING_PHASE_TOKEN;
    };
    return GastRecorder;
}());

function recordProd(prodConstructor, mainProdArg, occurrence, handleSep) {
    if (handleSep === void 0) { handleSep = false; }
    assertMethodIdxIsValid(occurrence);
    var prevProd = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["peek"])(this.recordingProdStack);
    var grammarAction = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(mainProdArg)
        ? mainProdArg
        : mainProdArg.DEF;
    var newProd = new prodConstructor({ definition: [], idx: occurrence });
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(mainProdArg, "NAME")) {
        newProd.name = mainProdArg.NAME;
    }
    if (handleSep) {
        newProd.separator = mainProdArg.SEP;
    }
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(mainProdArg, "MAX_LOOKAHEAD")) {
        newProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
    }
    this.recordingProdStack.push(newProd);
    grammarAction.call(this);
    prevProd.definition.push(newProd);
    this.recordingProdStack.pop();
    return RECORDING_NULL_OBJECT;
}
function recordOrProd(mainProdArg, occurrence) {
    var _this = this;
    assertMethodIdxIsValid(occurrence);
    var prevProd = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["peek"])(this.recordingProdStack);
    // Only an array of alternatives
    var hasOptions = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(mainProdArg) === false;
    var alts = hasOptions === false ? mainProdArg : mainProdArg.DEF;
    var newOrProd = new _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Alternation"]({
        definition: [],
        idx: occurrence,
        ignoreAmbiguities: hasOptions && mainProdArg.IGNORE_AMBIGUITIES === true
    });
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(mainProdArg, "NAME")) {
        newOrProd.name = mainProdArg.NAME;
    }
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(mainProdArg, "MAX_LOOKAHEAD")) {
        newOrProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
    }
    var hasPredicates = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["some"])(alts, function (currAlt) { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(currAlt.GATE); });
    newOrProd.hasPredicates = hasPredicates;
    prevProd.definition.push(newOrProd);
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(alts, function (currAlt) {
        var currAltFlat = new _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_1__["Flat"]({ definition: [] });
        newOrProd.definition.push(currAltFlat);
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(currAlt, "NAME")) {
            currAltFlat.name = currAlt.NAME;
        }
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(currAlt, "IGNORE_AMBIGUITIES")) {
            currAltFlat.ignoreAmbiguities = currAlt.IGNORE_AMBIGUITIES;
        }
        // **implicit** ignoreAmbiguities due to usage of gate
        else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(currAlt, "GATE")) {
            currAltFlat.ignoreAmbiguities = true;
        }
        _this.recordingProdStack.push(currAltFlat);
        currAlt.ALT.call(_this);
        _this.recordingProdStack.pop();
    });
    return RECORDING_NULL_OBJECT;
}
function getIdxSuffix(idx) {
    return idx === 0 ? "" : "" + idx;
}
function assertMethodIdxIsValid(idx) {
    if (idx < 0 || idx > MAX_METHOD_IDX) {
        var error = new Error(
        // The stack trace will contain all the needed details
        "Invalid DSL Method idx value: <" + idx + ">\n\t" +
            ("Idx value must be a none negative value smaller than " + (MAX_METHOD_IDX +
                1)));
        error.KNOWN_RECORDER_ERROR = true;
        throw error;
    }
}
//# sourceMappingURL=gast_recorder.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/lexer_adapter.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/parser/traits/lexer_adapter.js ***!
  \**********************************************************************************/
/*! exports provided: LexerAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LexerAdapter", function() { return LexerAdapter; });
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parser */ "./node_modules/chevrotain/lib_esm/src/parse/parser/parser.js");

/**
 * Trait responsible abstracting over the interaction with Lexer output (Token vector).
 *
 * This could be generalized to support other kinds of lexers, e.g.
 * - Just in Time Lexing / Lexer-Less parsing.
 * - Streaming Lexer.
 */
var LexerAdapter = /** @class */ (function () {
    function LexerAdapter() {
    }
    LexerAdapter.prototype.initLexerAdapter = function () {
        this.tokVector = [];
        this.tokVectorLength = 0;
        this.currIdx = -1;
    };
    Object.defineProperty(LexerAdapter.prototype, "input", {
        get: function () {
            return this.tokVector;
        },
        set: function (newInput) {
            if (this.selfAnalysisDone !== true) {
                throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
            }
            this.reset();
            this.tokVector = newInput;
            this.tokVectorLength = newInput.length;
        },
        enumerable: true,
        configurable: true
    });
    // skips a token and returns the next token
    LexerAdapter.prototype.SKIP_TOKEN = function () {
        if (this.currIdx <= this.tokVector.length - 2) {
            this.consumeToken();
            return this.LA(1);
        }
        else {
            return _parser__WEBPACK_IMPORTED_MODULE_0__["END_OF_FILE"];
        }
    };
    // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
    // or lexers dependent on parser context.
    LexerAdapter.prototype.LA = function (howMuch) {
        var soughtIdx = this.currIdx + howMuch;
        if (soughtIdx < 0 || this.tokVectorLength <= soughtIdx) {
            return _parser__WEBPACK_IMPORTED_MODULE_0__["END_OF_FILE"];
        }
        else {
            return this.tokVector[soughtIdx];
        }
    };
    LexerAdapter.prototype.consumeToken = function () {
        this.currIdx++;
    };
    LexerAdapter.prototype.exportLexerState = function () {
        return this.currIdx;
    };
    LexerAdapter.prototype.importLexerState = function (newState) {
        this.currIdx = newState;
    };
    LexerAdapter.prototype.resetLexerState = function () {
        this.currIdx = -1;
    };
    LexerAdapter.prototype.moveToTerminatedState = function () {
        this.currIdx = this.tokVector.length - 1;
    };
    LexerAdapter.prototype.getLexerPosition = function () {
        return this.exportLexerState();
    };
    return LexerAdapter;
}());

//# sourceMappingURL=lexer_adapter.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/looksahead.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/parser/traits/looksahead.js ***!
  \*******************************************************************************/
/*! exports provided: LooksAhead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LooksAhead", function() { return LooksAhead; });
/* harmony import */ var _grammar_lookahead__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../grammar/lookahead */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/lookahead.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parser */ "./node_modules/chevrotain/lib_esm/src/parse/parser/parser.js");
/* harmony import */ var _grammar_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../grammar/keys */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/keys.js");
/* harmony import */ var _grammar_gast_gast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../grammar/gast/gast */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast.js");





/**
 * Trait responsible for the lookahead related utilities and optimizations.
 */
var LooksAhead = /** @class */ (function () {
    function LooksAhead() {
    }
    LooksAhead.prototype.initLooksAhead = function (config) {
        this.dynamicTokensEnabled = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["has"])(config, "dynamicTokensEnabled")
            ? config.dynamicTokensEnabled
            : _parser__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_PARSER_CONFIG"].dynamicTokensEnabled;
        this.maxLookahead = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["has"])(config, "maxLookahead")
            ? config.maxLookahead
            : _parser__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_PARSER_CONFIG"].maxLookahead;
        /* istanbul ignore next - Using plain array as dictionary will be tested on older node.js versions and IE11 */
        this.lookAheadFuncsCache = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isES2015MapSupported"])() ? new Map() : [];
        // Performance optimization on newer engines that support ES6 Map
        // For larger Maps this is slightly faster than using a plain object (array in our case).
        /* istanbul ignore else - The else branch will be tested on older node.js versions and IE11 */
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isES2015MapSupported"])()) {
            this.getLaFuncFromCache = this.getLaFuncFromMap;
            this.setLaFuncCache = this.setLaFuncCacheUsingMap;
        }
        else {
            this.getLaFuncFromCache = this.getLaFuncFromObj;
            this.setLaFuncCache = this.setLaFuncUsingObj;
        }
    };
    LooksAhead.prototype.preComputeLookaheadFunctions = function (rules) {
        var _this = this;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["forEach"])(rules, function (currRule) {
            _this.TRACE_INIT(currRule.name + " Rule Lookahead", function () {
                var _a = Object(_grammar_gast_gast__WEBPACK_IMPORTED_MODULE_4__["collectMethods"])(currRule), alternation = _a.alternation, repetition = _a.repetition, option = _a.option, repetitionMandatory = _a.repetitionMandatory, repetitionMandatoryWithSeparator = _a.repetitionMandatoryWithSeparator, repetitionWithSeparator = _a.repetitionWithSeparator;
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["forEach"])(alternation, function (currProd) {
                    var prodIdx = currProd.idx === 0 ? "" : currProd.idx;
                    _this.TRACE_INIT("" + Object(_grammar_gast_gast__WEBPACK_IMPORTED_MODULE_4__["getProductionDslName"])(currProd) + prodIdx, function () {
                        var laFunc = Object(_grammar_lookahead__WEBPACK_IMPORTED_MODULE_0__["buildLookaheadFuncForOr"])(currProd.idx, currRule, currProd.maxLookahead || _this.maxLookahead, currProd.hasPredicates, _this.dynamicTokensEnabled, _this.lookAheadBuilderForAlternatives);
                        var key = Object(_grammar_keys__WEBPACK_IMPORTED_MODULE_3__["getKeyForAutomaticLookahead"])(_this.fullRuleNameToShort[currRule.name], _grammar_keys__WEBPACK_IMPORTED_MODULE_3__["OR_IDX"], currProd.idx);
                        _this.setLaFuncCache(key, laFunc);
                    });
                });
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["forEach"])(repetition, function (currProd) {
                    _this.computeLookaheadFunc(currRule, currProd.idx, _grammar_keys__WEBPACK_IMPORTED_MODULE_3__["MANY_IDX"], _grammar_lookahead__WEBPACK_IMPORTED_MODULE_0__["PROD_TYPE"].REPETITION, currProd.maxLookahead, Object(_grammar_gast_gast__WEBPACK_IMPORTED_MODULE_4__["getProductionDslName"])(currProd));
                });
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["forEach"])(option, function (currProd) {
                    _this.computeLookaheadFunc(currRule, currProd.idx, _grammar_keys__WEBPACK_IMPORTED_MODULE_3__["OPTION_IDX"], _grammar_lookahead__WEBPACK_IMPORTED_MODULE_0__["PROD_TYPE"].OPTION, currProd.maxLookahead, Object(_grammar_gast_gast__WEBPACK_IMPORTED_MODULE_4__["getProductionDslName"])(currProd));
                });
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["forEach"])(repetitionMandatory, function (currProd) {
                    _this.computeLookaheadFunc(currRule, currProd.idx, _grammar_keys__WEBPACK_IMPORTED_MODULE_3__["AT_LEAST_ONE_IDX"], _grammar_lookahead__WEBPACK_IMPORTED_MODULE_0__["PROD_TYPE"].REPETITION_MANDATORY, currProd.maxLookahead, Object(_grammar_gast_gast__WEBPACK_IMPORTED_MODULE_4__["getProductionDslName"])(currProd));
                });
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["forEach"])(repetitionMandatoryWithSeparator, function (currProd) {
                    _this.computeLookaheadFunc(currRule, currProd.idx, _grammar_keys__WEBPACK_IMPORTED_MODULE_3__["AT_LEAST_ONE_SEP_IDX"], _grammar_lookahead__WEBPACK_IMPORTED_MODULE_0__["PROD_TYPE"].REPETITION_MANDATORY_WITH_SEPARATOR, currProd.maxLookahead, Object(_grammar_gast_gast__WEBPACK_IMPORTED_MODULE_4__["getProductionDslName"])(currProd));
                });
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["forEach"])(repetitionWithSeparator, function (currProd) {
                    _this.computeLookaheadFunc(currRule, currProd.idx, _grammar_keys__WEBPACK_IMPORTED_MODULE_3__["MANY_SEP_IDX"], _grammar_lookahead__WEBPACK_IMPORTED_MODULE_0__["PROD_TYPE"].REPETITION_WITH_SEPARATOR, currProd.maxLookahead, Object(_grammar_gast_gast__WEBPACK_IMPORTED_MODULE_4__["getProductionDslName"])(currProd));
                });
            });
        });
    };
    LooksAhead.prototype.computeLookaheadFunc = function (rule, prodOccurrence, prodKey, prodType, prodMaxLookahead, dslMethodName) {
        var _this = this;
        this.TRACE_INIT("" + dslMethodName + (prodOccurrence === 0 ? "" : prodOccurrence), function () {
            var laFunc = Object(_grammar_lookahead__WEBPACK_IMPORTED_MODULE_0__["buildLookaheadFuncForOptionalProd"])(prodOccurrence, rule, prodMaxLookahead || _this.maxLookahead, _this.dynamicTokensEnabled, prodType, _this.lookAheadBuilderForOptional);
            var key = Object(_grammar_keys__WEBPACK_IMPORTED_MODULE_3__["getKeyForAutomaticLookahead"])(_this.fullRuleNameToShort[rule.name], prodKey, prodOccurrence);
            _this.setLaFuncCache(key, laFunc);
        });
    };
    LooksAhead.prototype.lookAheadBuilderForOptional = function (alt, tokenMatcher, dynamicTokensEnabled) {
        return Object(_grammar_lookahead__WEBPACK_IMPORTED_MODULE_0__["buildSingleAlternativeLookaheadFunction"])(alt, tokenMatcher, dynamicTokensEnabled);
    };
    LooksAhead.prototype.lookAheadBuilderForAlternatives = function (alts, hasPredicates, tokenMatcher, dynamicTokensEnabled) {
        return Object(_grammar_lookahead__WEBPACK_IMPORTED_MODULE_0__["buildAlternativesLookAheadFunc"])(alts, hasPredicates, tokenMatcher, dynamicTokensEnabled);
    };
    // this actually returns a number, but it is always used as a string (object prop key)
    LooksAhead.prototype.getKeyForAutomaticLookahead = function (dslMethodIdx, occurrence) {
        var currRuleShortName = this.getLastExplicitRuleShortName();
        return Object(_grammar_keys__WEBPACK_IMPORTED_MODULE_3__["getKeyForAutomaticLookahead"])(currRuleShortName, dslMethodIdx, occurrence);
    };
    /* istanbul ignore next */
    LooksAhead.prototype.getLaFuncFromCache = function (key) {
        return undefined;
    };
    LooksAhead.prototype.getLaFuncFromMap = function (key) {
        return this.lookAheadFuncsCache.get(key);
    };
    /* istanbul ignore next - Using plain array as dictionary will be tested on older node.js versions and IE11 */
    LooksAhead.prototype.getLaFuncFromObj = function (key) {
        return this.lookAheadFuncsCache[key];
    };
    /* istanbul ignore next */
    LooksAhead.prototype.setLaFuncCache = function (key, value) { };
    LooksAhead.prototype.setLaFuncCacheUsingMap = function (key, value) {
        this.lookAheadFuncsCache.set(key, value);
    };
    /* istanbul ignore next - Using plain array as dictionary will be tested on older node.js versions and IE11 */
    LooksAhead.prototype.setLaFuncUsingObj = function (key, value) {
        this.lookAheadFuncsCache[key] = value;
    };
    return LooksAhead;
}());

//# sourceMappingURL=looksahead.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/perf_tracer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/parser/traits/perf_tracer.js ***!
  \********************************************************************************/
/*! exports provided: PerformanceTracer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceTracer", function() { return PerformanceTracer; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parser */ "./node_modules/chevrotain/lib_esm/src/parse/parser/parser.js");


/**
 * Trait responsible for runtime parsing errors.
 */
var PerformanceTracer = /** @class */ (function () {
    function PerformanceTracer() {
    }
    PerformanceTracer.prototype.initPerformanceTracer = function (config) {
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(config, "traceInitPerf")) {
            var userTraceInitPerf = config.traceInitPerf;
            var traceIsNumber = typeof userTraceInitPerf === "number";
            this.traceInitMaxIdent = traceIsNumber
                ? userTraceInitPerf
                : Infinity;
            this.traceInitPerf = traceIsNumber
                ? userTraceInitPerf > 0
                : userTraceInitPerf;
        }
        else {
            this.traceInitMaxIdent = 0;
            this.traceInitPerf = _parser__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_PARSER_CONFIG"].traceInitPerf;
        }
        this.traceInitIndent = -1;
    };
    PerformanceTracer.prototype.TRACE_INIT = function (phaseDesc, phaseImpl) {
        // No need to optimize this using NOOP pattern because
        // It is not called in a hot spot...
        if (this.traceInitPerf === true) {
            this.traceInitIndent++;
            var indent = new Array(this.traceInitIndent + 1).join("\t");
            if (this.traceInitIndent < this.traceInitMaxIdent) {
                console.log(indent + "--> <" + phaseDesc + ">");
            }
            var _a = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["timer"])(phaseImpl), time = _a.time, value = _a.value;
            /* istanbul ignore next - Difficult to reproduce specific performance behavior (>10ms) in tests */
            var traceMethod = time > 10 ? console.warn : console.log;
            if (this.traceInitIndent < this.traceInitMaxIdent) {
                traceMethod(indent + "<-- <" + phaseDesc + "> time: " + time + "ms");
            }
            this.traceInitIndent--;
            return value;
        }
        else {
            return phaseImpl();
        }
    };
    return PerformanceTracer;
}());

//# sourceMappingURL=perf_tracer.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/recognizer_api.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/parser/traits/recognizer_api.js ***!
  \***********************************************************************************/
/*! exports provided: RecognizerApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecognizerApi", function() { return RecognizerApi; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _exceptions_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../exceptions_public */ "./node_modules/chevrotain/lib_esm/src/parse/exceptions_public.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parser */ "./node_modules/chevrotain/lib_esm/src/parse/parser/parser.js");
/* harmony import */ var _errors_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../errors_public */ "./node_modules/chevrotain/lib_esm/src/parse/errors_public.js");
/* harmony import */ var _grammar_checks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../grammar/checks */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/checks.js");
/* harmony import */ var _grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../grammar/gast/gast_public */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/gast/gast_public.js");






/**
 * This trait is responsible for implementing the public API
 * for defining Chevrotain parsers, i.e:
 * - CONSUME
 * - RULE
 * - OPTION
 * - ...
 */
var RecognizerApi = /** @class */ (function () {
    function RecognizerApi() {
    }
    RecognizerApi.prototype.ACTION = function (impl) {
        return impl.call(this);
    };
    RecognizerApi.prototype.consume = function (idx, tokType, options) {
        return this.consumeInternal(tokType, idx, options);
    };
    RecognizerApi.prototype.subrule = function (idx, ruleToCall, options) {
        return this.subruleInternal(ruleToCall, idx, options);
    };
    RecognizerApi.prototype.option = function (idx, actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, idx);
    };
    RecognizerApi.prototype.or = function (idx, altsOrOpts) {
        return this.orInternal(altsOrOpts, idx);
    };
    RecognizerApi.prototype.many = function (idx, actionORMethodDef) {
        return this.manyInternal(idx, actionORMethodDef);
    };
    RecognizerApi.prototype.atLeastOne = function (idx, actionORMethodDef) {
        return this.atLeastOneInternal(idx, actionORMethodDef);
    };
    RecognizerApi.prototype.CONSUME = function (tokType, options) {
        return this.consumeInternal(tokType, 0, options);
    };
    RecognizerApi.prototype.CONSUME1 = function (tokType, options) {
        return this.consumeInternal(tokType, 1, options);
    };
    RecognizerApi.prototype.CONSUME2 = function (tokType, options) {
        return this.consumeInternal(tokType, 2, options);
    };
    RecognizerApi.prototype.CONSUME3 = function (tokType, options) {
        return this.consumeInternal(tokType, 3, options);
    };
    RecognizerApi.prototype.CONSUME4 = function (tokType, options) {
        return this.consumeInternal(tokType, 4, options);
    };
    RecognizerApi.prototype.CONSUME5 = function (tokType, options) {
        return this.consumeInternal(tokType, 5, options);
    };
    RecognizerApi.prototype.CONSUME6 = function (tokType, options) {
        return this.consumeInternal(tokType, 6, options);
    };
    RecognizerApi.prototype.CONSUME7 = function (tokType, options) {
        return this.consumeInternal(tokType, 7, options);
    };
    RecognizerApi.prototype.CONSUME8 = function (tokType, options) {
        return this.consumeInternal(tokType, 8, options);
    };
    RecognizerApi.prototype.CONSUME9 = function (tokType, options) {
        return this.consumeInternal(tokType, 9, options);
    };
    RecognizerApi.prototype.SUBRULE = function (ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 0, options);
    };
    RecognizerApi.prototype.SUBRULE1 = function (ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 1, options);
    };
    RecognizerApi.prototype.SUBRULE2 = function (ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 2, options);
    };
    RecognizerApi.prototype.SUBRULE3 = function (ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 3, options);
    };
    RecognizerApi.prototype.SUBRULE4 = function (ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 4, options);
    };
    RecognizerApi.prototype.SUBRULE5 = function (ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 5, options);
    };
    RecognizerApi.prototype.SUBRULE6 = function (ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 6, options);
    };
    RecognizerApi.prototype.SUBRULE7 = function (ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 7, options);
    };
    RecognizerApi.prototype.SUBRULE8 = function (ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 8, options);
    };
    RecognizerApi.prototype.SUBRULE9 = function (ruleToCall, options) {
        return this.subruleInternal(ruleToCall, 9, options);
    };
    RecognizerApi.prototype.OPTION = function (actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 0);
    };
    RecognizerApi.prototype.OPTION1 = function (actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 1);
    };
    RecognizerApi.prototype.OPTION2 = function (actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 2);
    };
    RecognizerApi.prototype.OPTION3 = function (actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 3);
    };
    RecognizerApi.prototype.OPTION4 = function (actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 4);
    };
    RecognizerApi.prototype.OPTION5 = function (actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 5);
    };
    RecognizerApi.prototype.OPTION6 = function (actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 6);
    };
    RecognizerApi.prototype.OPTION7 = function (actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 7);
    };
    RecognizerApi.prototype.OPTION8 = function (actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 8);
    };
    RecognizerApi.prototype.OPTION9 = function (actionORMethodDef) {
        return this.optionInternal(actionORMethodDef, 9);
    };
    RecognizerApi.prototype.OR = function (altsOrOpts) {
        return this.orInternal(altsOrOpts, 0);
    };
    RecognizerApi.prototype.OR1 = function (altsOrOpts) {
        return this.orInternal(altsOrOpts, 1);
    };
    RecognizerApi.prototype.OR2 = function (altsOrOpts) {
        return this.orInternal(altsOrOpts, 2);
    };
    RecognizerApi.prototype.OR3 = function (altsOrOpts) {
        return this.orInternal(altsOrOpts, 3);
    };
    RecognizerApi.prototype.OR4 = function (altsOrOpts) {
        return this.orInternal(altsOrOpts, 4);
    };
    RecognizerApi.prototype.OR5 = function (altsOrOpts) {
        return this.orInternal(altsOrOpts, 5);
    };
    RecognizerApi.prototype.OR6 = function (altsOrOpts) {
        return this.orInternal(altsOrOpts, 6);
    };
    RecognizerApi.prototype.OR7 = function (altsOrOpts) {
        return this.orInternal(altsOrOpts, 7);
    };
    RecognizerApi.prototype.OR8 = function (altsOrOpts) {
        return this.orInternal(altsOrOpts, 8);
    };
    RecognizerApi.prototype.OR9 = function (altsOrOpts) {
        return this.orInternal(altsOrOpts, 9);
    };
    RecognizerApi.prototype.MANY = function (actionORMethodDef) {
        this.manyInternal(0, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY1 = function (actionORMethodDef) {
        this.manyInternal(1, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY2 = function (actionORMethodDef) {
        this.manyInternal(2, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY3 = function (actionORMethodDef) {
        this.manyInternal(3, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY4 = function (actionORMethodDef) {
        this.manyInternal(4, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY5 = function (actionORMethodDef) {
        this.manyInternal(5, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY6 = function (actionORMethodDef) {
        this.manyInternal(6, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY7 = function (actionORMethodDef) {
        this.manyInternal(7, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY8 = function (actionORMethodDef) {
        this.manyInternal(8, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY9 = function (actionORMethodDef) {
        this.manyInternal(9, actionORMethodDef);
    };
    RecognizerApi.prototype.MANY_SEP = function (options) {
        this.manySepFirstInternal(0, options);
    };
    RecognizerApi.prototype.MANY_SEP1 = function (options) {
        this.manySepFirstInternal(1, options);
    };
    RecognizerApi.prototype.MANY_SEP2 = function (options) {
        this.manySepFirstInternal(2, options);
    };
    RecognizerApi.prototype.MANY_SEP3 = function (options) {
        this.manySepFirstInternal(3, options);
    };
    RecognizerApi.prototype.MANY_SEP4 = function (options) {
        this.manySepFirstInternal(4, options);
    };
    RecognizerApi.prototype.MANY_SEP5 = function (options) {
        this.manySepFirstInternal(5, options);
    };
    RecognizerApi.prototype.MANY_SEP6 = function (options) {
        this.manySepFirstInternal(6, options);
    };
    RecognizerApi.prototype.MANY_SEP7 = function (options) {
        this.manySepFirstInternal(7, options);
    };
    RecognizerApi.prototype.MANY_SEP8 = function (options) {
        this.manySepFirstInternal(8, options);
    };
    RecognizerApi.prototype.MANY_SEP9 = function (options) {
        this.manySepFirstInternal(9, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE = function (actionORMethodDef) {
        this.atLeastOneInternal(0, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE1 = function (actionORMethodDef) {
        return this.atLeastOneInternal(1, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE2 = function (actionORMethodDef) {
        this.atLeastOneInternal(2, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE3 = function (actionORMethodDef) {
        this.atLeastOneInternal(3, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE4 = function (actionORMethodDef) {
        this.atLeastOneInternal(4, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE5 = function (actionORMethodDef) {
        this.atLeastOneInternal(5, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE6 = function (actionORMethodDef) {
        this.atLeastOneInternal(6, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE7 = function (actionORMethodDef) {
        this.atLeastOneInternal(7, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE8 = function (actionORMethodDef) {
        this.atLeastOneInternal(8, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE9 = function (actionORMethodDef) {
        this.atLeastOneInternal(9, actionORMethodDef);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP = function (options) {
        this.atLeastOneSepFirstInternal(0, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP1 = function (options) {
        this.atLeastOneSepFirstInternal(1, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP2 = function (options) {
        this.atLeastOneSepFirstInternal(2, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP3 = function (options) {
        this.atLeastOneSepFirstInternal(3, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP4 = function (options) {
        this.atLeastOneSepFirstInternal(4, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP5 = function (options) {
        this.atLeastOneSepFirstInternal(5, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP6 = function (options) {
        this.atLeastOneSepFirstInternal(6, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP7 = function (options) {
        this.atLeastOneSepFirstInternal(7, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP8 = function (options) {
        this.atLeastOneSepFirstInternal(8, options);
    };
    RecognizerApi.prototype.AT_LEAST_ONE_SEP9 = function (options) {
        this.atLeastOneSepFirstInternal(9, options);
    };
    RecognizerApi.prototype.RULE = function (name, implementation, config) {
        if (config === void 0) { config = _parser__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_RULE_CONFIG"]; }
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["contains"])(this.definedRulesNames, name)) {
            var errMsg = _errors_public__WEBPACK_IMPORTED_MODULE_3__["defaultGrammarValidatorErrorProvider"].buildDuplicateRuleNameError({
                topLevelRule: name,
                grammarName: this.className
            });
            var error = {
                message: errMsg,
                type: _parser__WEBPACK_IMPORTED_MODULE_2__["ParserDefinitionErrorType"].DUPLICATE_RULE_NAME,
                ruleName: name
            };
            this.definitionErrors.push(error);
        }
        this.definedRulesNames.push(name);
        var ruleImplementation = this.defineRule(name, implementation, config);
        this[name] = ruleImplementation;
        return ruleImplementation;
    };
    RecognizerApi.prototype.OVERRIDE_RULE = function (name, impl, config) {
        if (config === void 0) { config = _parser__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_RULE_CONFIG"]; }
        var ruleErrors = [];
        ruleErrors = ruleErrors.concat(Object(_grammar_checks__WEBPACK_IMPORTED_MODULE_4__["validateRuleIsOverridden"])(name, this.definedRulesNames, this.className));
        this.definitionErrors.push.apply(this.definitionErrors, ruleErrors); // mutability for the win
        var ruleImplementation = this.defineRule(name, impl, config);
        this[name] = ruleImplementation;
        return ruleImplementation;
    };
    RecognizerApi.prototype.BACKTRACK = function (grammarRule, args) {
        return function () {
            // save org state
            this.isBackTrackingStack.push(1);
            var orgState = this.saveRecogState();
            try {
                grammarRule.apply(this, args);
                // if no exception was thrown we have succeed parsing the rule.
                return true;
            }
            catch (e) {
                if (Object(_exceptions_public__WEBPACK_IMPORTED_MODULE_1__["isRecognitionException"])(e)) {
                    return false;
                }
                else {
                    throw e;
                }
            }
            finally {
                this.reloadRecogState(orgState);
                this.isBackTrackingStack.pop();
            }
        };
    };
    // GAST export APIs
    RecognizerApi.prototype.getGAstProductions = function () {
        return this.gastProductionsCache;
    };
    RecognizerApi.prototype.getSerializedGastProductions = function () {
        return Object(_grammar_gast_gast_public__WEBPACK_IMPORTED_MODULE_5__["serializeGrammar"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["values"])(this.gastProductionsCache));
    };
    return RecognizerApi;
}());

//# sourceMappingURL=recognizer_api.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/recognizer_engine.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/parser/traits/recognizer_engine.js ***!
  \**************************************************************************************/
/*! exports provided: RecognizerEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecognizerEngine", function() { return RecognizerEngine; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _grammar_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../grammar/keys */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/keys.js");
/* harmony import */ var _exceptions_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../exceptions_public */ "./node_modules/chevrotain/lib_esm/src/parse/exceptions_public.js");
/* harmony import */ var _grammar_lookahead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../grammar/lookahead */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/lookahead.js");
/* harmony import */ var _grammar_interpreter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../grammar/interpreter */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/interpreter.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parser */ "./node_modules/chevrotain/lib_esm/src/parse/parser/parser.js");
/* harmony import */ var _recoverable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recoverable */ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/recoverable.js");
/* harmony import */ var _scan_tokens_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../scan/tokens_public */ "./node_modules/chevrotain/lib_esm/src/scan/tokens_public.js");
/* harmony import */ var _scan_tokens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../scan/tokens */ "./node_modules/chevrotain/lib_esm/src/scan/tokens.js");
/* harmony import */ var _lang_lang_extensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../lang/lang_extensions */ "./node_modules/chevrotain/lib_esm/src/lang/lang_extensions.js");










/**
 * This trait is responsible for the runtime parsing engine
 * Used by the official API (recognizer_api.ts)
 */
var RecognizerEngine = /** @class */ (function () {
    function RecognizerEngine() {
    }
    RecognizerEngine.prototype.initRecognizerEngine = function (tokenVocabulary, config) {
        this.className = Object(_lang_lang_extensions__WEBPACK_IMPORTED_MODULE_9__["classNameFromInstance"])(this);
        // TODO: would using an ES6 Map or plain object be faster (CST building scenario)
        this.shortRuleNameToFull = {};
        this.fullRuleNameToShort = {};
        this.ruleShortNameIdx = 256;
        this.tokenMatcher = _scan_tokens__WEBPACK_IMPORTED_MODULE_8__["tokenStructuredMatcherNoCategories"];
        this.definedRulesNames = [];
        this.tokensMap = {};
        this.allRuleNames = [];
        this.isBackTrackingStack = [];
        this.RULE_STACK = [];
        this.RULE_OCCURRENCE_STACK = [];
        this.gastProductionsCache = {};
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(config, "serializedGrammar")) {
            throw Error("The Parser's configuration can no longer contain a <serializedGrammar> property.\n" +
                "\tSee: https://sap.github.io/chevrotain/docs/changes/BREAKING_CHANGES.html#_6-0-0\n" +
                "\tFor Further details.");
        }
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(tokenVocabulary)) {
            // This only checks for Token vocabularies provided as arrays.
            // That is good enough because the main objective is to detect users of pre-V4.0 APIs
            // rather than all edge cases of empty Token vocabularies.
            if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(tokenVocabulary)) {
                throw Error("A Token Vocabulary cannot be empty.\n" +
                    "\tNote that the first argument for the parser constructor\n" +
                    "\tis no longer a Token vector (since v4.0).");
            }
            if (typeof tokenVocabulary[0].startOffset === "number") {
                throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n" +
                    "\tSee: https://sap.github.io/chevrotain/docs/changes/BREAKING_CHANGES.html#_4-0-0\n" +
                    "\tFor Further details.");
            }
        }
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(tokenVocabulary)) {
            this.tokensMap = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["reduce"])(tokenVocabulary, function (acc, tokType) {
                acc[tokType.name] = tokType;
                return acc;
            }, {});
        }
        else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(tokenVocabulary, "modes") &&
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["every"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["flatten"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["values"])(tokenVocabulary.modes)), _scan_tokens__WEBPACK_IMPORTED_MODULE_8__["isTokenType"])) {
            var allTokenTypes = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["flatten"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["values"])(tokenVocabulary.modes));
            var uniqueTokens = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["uniq"])(allTokenTypes);
            this.tokensMap = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["reduce"])(uniqueTokens, function (acc, tokType) {
                acc[tokType.name] = tokType;
                return acc;
            }, {});
        }
        else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(tokenVocabulary)) {
            this.tokensMap = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["cloneObj"])(tokenVocabulary);
        }
        else {
            throw new Error("<tokensDictionary> argument must be An Array of Token constructors," +
                " A dictionary of Token constructors or an IMultiModeLexerDefinition");
        }
        // always add EOF to the tokenNames -> constructors map. it is useful to assure all the input has been
        // parsed with a clear error message ("expecting EOF but found ...")
        /* tslint:disable */
        this.tokensMap["EOF"] = _scan_tokens_public__WEBPACK_IMPORTED_MODULE_7__["EOF"];
        // TODO: This check may not be accurate for multi mode lexers
        var noTokenCategoriesUsed = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["every"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["values"])(tokenVocabulary), function (tokenConstructor) { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(tokenConstructor.categoryMatches); });
        this.tokenMatcher = noTokenCategoriesUsed
            ? _scan_tokens__WEBPACK_IMPORTED_MODULE_8__["tokenStructuredMatcherNoCategories"]
            : _scan_tokens__WEBPACK_IMPORTED_MODULE_8__["tokenStructuredMatcher"];
        // Because ES2015+ syntax should be supported for creating Token classes
        // We cannot assume that the Token classes were created using the "extendToken" utilities
        // Therefore we must augment the Token classes both on Lexer initialization and on Parser initialization
        Object(_scan_tokens__WEBPACK_IMPORTED_MODULE_8__["augmentTokenTypes"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["values"])(this.tokensMap));
    };
    RecognizerEngine.prototype.defineRule = function (ruleName, impl, config) {
        if (this.selfAnalysisDone) {
            throw Error("Grammar rule <" + ruleName + "> may not be defined after the 'performSelfAnalysis' method has been called'\n" +
                "Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.");
        }
        var resyncEnabled = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(config, "resyncEnabled")
            ? config.resyncEnabled
            : _parser__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_RULE_CONFIG"].resyncEnabled;
        var recoveryValueFunc = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(config, "recoveryValueFunc")
            ? config.recoveryValueFunc
            : _parser__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_RULE_CONFIG"].recoveryValueFunc;
        // performance optimization: Use small integers as keys for the longer human readable "full" rule names.
        // this greatly improves Map access time (as much as 8% for some performance benchmarks).
        /* tslint:disable */
        var shortName = this.ruleShortNameIdx <<
            (_grammar_keys__WEBPACK_IMPORTED_MODULE_1__["BITS_FOR_METHOD_TYPE"] + _grammar_keys__WEBPACK_IMPORTED_MODULE_1__["BITS_FOR_OCCURRENCE_IDX"]);
        /* tslint:enable */
        this.ruleShortNameIdx++;
        this.shortRuleNameToFull[shortName] = ruleName;
        this.fullRuleNameToShort[ruleName] = shortName;
        function invokeRuleWithTry(args) {
            try {
                if (this.outputCst === true) {
                    impl.apply(this, args);
                    var cst = this.CST_STACK[this.CST_STACK.length - 1];
                    this.cstPostRule(cst);
                    return cst;
                }
                else {
                    return impl.apply(this, args);
                }
            }
            catch (e) {
                return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
            }
            finally {
                this.ruleFinallyStateUpdate();
            }
        }
        var wrappedGrammarRule;
        wrappedGrammarRule = function (idxInCallingRule, args) {
            if (idxInCallingRule === void 0) { idxInCallingRule = 0; }
            this.ruleInvocationStateUpdate(shortName, ruleName, idxInCallingRule);
            return invokeRuleWithTry.call(this, args);
        };
        var ruleNamePropName = "ruleName";
        wrappedGrammarRule[ruleNamePropName] = ruleName;
        wrappedGrammarRule["originalGrammarAction"] = impl;
        return wrappedGrammarRule;
    };
    RecognizerEngine.prototype.invokeRuleCatch = function (e, resyncEnabledConfig, recoveryValueFunc) {
        var isFirstInvokedRule = this.RULE_STACK.length === 1;
        // note the reSync is always enabled for the first rule invocation, because we must always be able to
        // reSync with EOF and just output some INVALID ParseTree
        // during backtracking reSync recovery is disabled, otherwise we can't be certain the backtracking
        // path is really the most valid one
        var reSyncEnabled = resyncEnabledConfig &&
            !this.isBackTracking() &&
            this.recoveryEnabled;
        if (Object(_exceptions_public__WEBPACK_IMPORTED_MODULE_2__["isRecognitionException"])(e)) {
            var recogError = e;
            if (reSyncEnabled) {
                var reSyncTokType = this.findReSyncTokenType();
                if (this.isInCurrentRuleReSyncSet(reSyncTokType)) {
                    recogError.resyncedTokens = this.reSyncTo(reSyncTokType);
                    if (this.outputCst) {
                        var partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
                        partialCstResult.recoveredNode = true;
                        return partialCstResult;
                    }
                    else {
                        return recoveryValueFunc();
                    }
                }
                else {
                    if (this.outputCst) {
                        var partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
                        partialCstResult.recoveredNode = true;
                        recogError.partialCstResult = partialCstResult;
                    }
                    // to be handled Further up the call stack
                    throw recogError;
                }
            }
            else if (isFirstInvokedRule) {
                // otherwise a Redundant input error will be created as well and we cannot guarantee that this is indeed the case
                this.moveToTerminatedState();
                // the parser should never throw one of its own errors outside its flow.
                // even if error recovery is disabled
                return recoveryValueFunc();
            }
            else {
                // to be recovered Further up the call stack
                throw recogError;
            }
        }
        else {
            // some other Error type which we don't know how to handle (for example a built in JavaScript Error)
            throw e;
        }
    };
    // Implementation of parsing DSL
    RecognizerEngine.prototype.optionInternal = function (actionORMethodDef, occurrence) {
        var key = this.getKeyForAutomaticLookahead(_grammar_keys__WEBPACK_IMPORTED_MODULE_1__["OPTION_IDX"], occurrence);
        var nestedName = this.nestedRuleBeforeClause(actionORMethodDef, key);
        try {
            return this.optionInternalLogic(actionORMethodDef, occurrence, key);
        }
        finally {
            if (nestedName !== undefined) {
                this.nestedRuleFinallyClause(key, nestedName);
            }
        }
    };
    RecognizerEngine.prototype.optionInternalNoCst = function (actionORMethodDef, occurrence) {
        var key = this.getKeyForAutomaticLookahead(_grammar_keys__WEBPACK_IMPORTED_MODULE_1__["OPTION_IDX"], occurrence);
        return this.optionInternalLogic(actionORMethodDef, occurrence, key);
    };
    RecognizerEngine.prototype.optionInternalLogic = function (actionORMethodDef, occurrence, key) {
        var _this = this;
        var lookAheadFunc = this.getLaFuncFromCache(key);
        var action;
        var predicate;
        if (actionORMethodDef.DEF !== undefined) {
            action = actionORMethodDef.DEF;
            predicate = actionORMethodDef.GATE;
            // predicate present
            if (predicate !== undefined) {
                var orgLookaheadFunction_1 = lookAheadFunc;
                lookAheadFunc = function () {
                    return (predicate.call(_this) && orgLookaheadFunction_1.call(_this));
                };
            }
        }
        else {
            action = actionORMethodDef;
        }
        if (lookAheadFunc.call(this) === true) {
            return action.call(this);
        }
        return undefined;
    };
    RecognizerEngine.prototype.atLeastOneInternal = function (prodOccurrence, actionORMethodDef) {
        var laKey = this.getKeyForAutomaticLookahead(_grammar_keys__WEBPACK_IMPORTED_MODULE_1__["AT_LEAST_ONE_IDX"], prodOccurrence);
        var nestedName = this.nestedRuleBeforeClause(actionORMethodDef, laKey);
        try {
            return this.atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, laKey);
        }
        finally {
            if (nestedName !== undefined) {
                this.nestedRuleFinallyClause(laKey, nestedName);
            }
        }
    };
    RecognizerEngine.prototype.atLeastOneInternalNoCst = function (prodOccurrence, actionORMethodDef) {
        var key = this.getKeyForAutomaticLookahead(_grammar_keys__WEBPACK_IMPORTED_MODULE_1__["AT_LEAST_ONE_IDX"], prodOccurrence);
        this.atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, key);
    };
    RecognizerEngine.prototype.atLeastOneInternalLogic = function (prodOccurrence, actionORMethodDef, key) {
        var _this = this;
        var lookAheadFunc = this.getLaFuncFromCache(key);
        var action;
        var predicate;
        if (actionORMethodDef.DEF !== undefined) {
            action = actionORMethodDef.DEF;
            predicate = actionORMethodDef.GATE;
            // predicate present
            if (predicate !== undefined) {
                var orgLookaheadFunction_2 = lookAheadFunc;
                lookAheadFunc = function () {
                    return (predicate.call(_this) && orgLookaheadFunction_2.call(_this));
                };
            }
        }
        else {
            action = actionORMethodDef;
        }
        if (lookAheadFunc.call(this) === true) {
            var notStuck = this.doSingleRepetition(action);
            while (lookAheadFunc.call(this) === true &&
                notStuck === true) {
                notStuck = this.doSingleRepetition(action);
            }
        }
        else {
            throw this.raiseEarlyExitException(prodOccurrence, _grammar_lookahead__WEBPACK_IMPORTED_MODULE_3__["PROD_TYPE"].REPETITION_MANDATORY, actionORMethodDef.ERR_MSG);
        }
        // note that while it may seem that this can cause an error because by using a recursive call to
        // AT_LEAST_ONE we change the grammar to AT_LEAST_TWO, AT_LEAST_THREE ... , the possible recursive call
        // from the tryInRepetitionRecovery(...) will only happen IFF there really are TWO/THREE/.... items.
        // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
        this.attemptInRepetitionRecovery(this.atLeastOneInternal, [prodOccurrence, actionORMethodDef], lookAheadFunc, _grammar_keys__WEBPACK_IMPORTED_MODULE_1__["AT_LEAST_ONE_IDX"], prodOccurrence, _grammar_interpreter__WEBPACK_IMPORTED_MODULE_4__["NextTerminalAfterAtLeastOneWalker"]);
    };
    RecognizerEngine.prototype.atLeastOneSepFirstInternal = function (prodOccurrence, options) {
        var laKey = this.getKeyForAutomaticLookahead(_grammar_keys__WEBPACK_IMPORTED_MODULE_1__["AT_LEAST_ONE_SEP_IDX"], prodOccurrence);
        var nestedName = this.nestedRuleBeforeClause(options, laKey);
        try {
            this.atLeastOneSepFirstInternalLogic(prodOccurrence, options, laKey);
        }
        finally {
            if (nestedName !== undefined) {
                this.nestedRuleFinallyClause(laKey, nestedName);
            }
        }
    };
    RecognizerEngine.prototype.atLeastOneSepFirstInternalNoCst = function (prodOccurrence, options) {
        var laKey = this.getKeyForAutomaticLookahead(_grammar_keys__WEBPACK_IMPORTED_MODULE_1__["AT_LEAST_ONE_SEP_IDX"], prodOccurrence);
        this.atLeastOneSepFirstInternalLogic(prodOccurrence, options, laKey);
    };
    RecognizerEngine.prototype.atLeastOneSepFirstInternalLogic = function (prodOccurrence, options, key) {
        var _this = this;
        var action = options.DEF;
        var separator = options.SEP;
        var firstIterationLookaheadFunc = this.getLaFuncFromCache(key);
        // 1st iteration
        if (firstIterationLookaheadFunc.call(this) === true) {
            ;
            action.call(this);
            //  TODO: Optimization can move this function construction into "attemptInRepetitionRecovery"
            //  because it is only needed in error recovery scenarios.
            var separatorLookAheadFunc = function () {
                return _this.tokenMatcher(_this.LA(1), separator);
            };
            // 2nd..nth iterations
            while (this.tokenMatcher(this.LA(1), separator) === true) {
                // note that this CONSUME will never enter recovery because
                // the separatorLookAheadFunc checks that the separator really does exist.
                this.CONSUME(separator);
                action.call(this);
            }
            // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
                prodOccurrence,
                separator,
                separatorLookAheadFunc,
                action,
                _grammar_interpreter__WEBPACK_IMPORTED_MODULE_4__["NextTerminalAfterAtLeastOneSepWalker"]
            ], separatorLookAheadFunc, _grammar_keys__WEBPACK_IMPORTED_MODULE_1__["AT_LEAST_ONE_SEP_IDX"], prodOccurrence, _grammar_interpreter__WEBPACK_IMPORTED_MODULE_4__["NextTerminalAfterAtLeastOneSepWalker"]);
        }
        else {
            throw this.raiseEarlyExitException(prodOccurrence, _grammar_lookahead__WEBPACK_IMPORTED_MODULE_3__["PROD_TYPE"].REPETITION_MANDATORY_WITH_SEPARATOR, options.ERR_MSG);
        }
    };
    RecognizerEngine.prototype.manyInternal = function (prodOccurrence, actionORMethodDef) {
        var laKey = this.getKeyForAutomaticLookahead(_grammar_keys__WEBPACK_IMPORTED_MODULE_1__["MANY_IDX"], prodOccurrence);
        var nestedName = this.nestedRuleBeforeClause(actionORMethodDef, laKey);
        try {
            return this.manyInternalLogic(prodOccurrence, actionORMethodDef, laKey);
        }
        finally {
            if (nestedName !== undefined) {
                this.nestedRuleFinallyClause(laKey, nestedName);
            }
        }
    };
    RecognizerEngine.prototype.manyInternalNoCst = function (prodOccurrence, actionORMethodDef) {
        var laKey = this.getKeyForAutomaticLookahead(_grammar_keys__WEBPACK_IMPORTED_MODULE_1__["MANY_IDX"], prodOccurrence);
        return this.manyInternalLogic(prodOccurrence, actionORMethodDef, laKey);
    };
    RecognizerEngine.prototype.manyInternalLogic = function (prodOccurrence, actionORMethodDef, key) {
        var _this = this;
        var lookaheadFunction = this.getLaFuncFromCache(key);
        var action;
        var predicate;
        if (actionORMethodDef.DEF !== undefined) {
            action = actionORMethodDef.DEF;
            predicate = actionORMethodDef.GATE;
            // predicate present
            if (predicate !== undefined) {
                var orgLookaheadFunction_3 = lookaheadFunction;
                lookaheadFunction = function () {
                    return (predicate.call(_this) && orgLookaheadFunction_3.call(_this));
                };
            }
        }
        else {
            action = actionORMethodDef;
        }
        var notStuck = true;
        while (lookaheadFunction.call(this) === true && notStuck === true) {
            notStuck = this.doSingleRepetition(action);
        }
        // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
        this.attemptInRepetitionRecovery(this.manyInternal, [prodOccurrence, actionORMethodDef], lookaheadFunction, _grammar_keys__WEBPACK_IMPORTED_MODULE_1__["MANY_IDX"], prodOccurrence, _grammar_interpreter__WEBPACK_IMPORTED_MODULE_4__["NextTerminalAfterManyWalker"], 
        // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
        // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
        // An infinite loop cannot occur as:
        // - Either the lookahead is guaranteed to consume something (Single Token Separator)
        // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
        notStuck);
    };
    RecognizerEngine.prototype.manySepFirstInternal = function (prodOccurrence, options) {
        var laKey = this.getKeyForAutomaticLookahead(_grammar_keys__WEBPACK_IMPORTED_MODULE_1__["MANY_SEP_IDX"], prodOccurrence);
        var nestedName = this.nestedRuleBeforeClause(options, laKey);
        try {
            this.manySepFirstInternalLogic(prodOccurrence, options, laKey);
        }
        finally {
            if (nestedName !== undefined) {
                this.nestedRuleFinallyClause(laKey, nestedName);
            }
        }
    };
    RecognizerEngine.prototype.manySepFirstInternalNoCst = function (prodOccurrence, options) {
        var laKey = this.getKeyForAutomaticLookahead(_grammar_keys__WEBPACK_IMPORTED_MODULE_1__["MANY_SEP_IDX"], prodOccurrence);
        this.manySepFirstInternalLogic(prodOccurrence, options, laKey);
    };
    RecognizerEngine.prototype.manySepFirstInternalLogic = function (prodOccurrence, options, key) {
        var _this = this;
        var action = options.DEF;
        var separator = options.SEP;
        var firstIterationLaFunc = this.getLaFuncFromCache(key);
        // 1st iteration
        if (firstIterationLaFunc.call(this) === true) {
            action.call(this);
            var separatorLookAheadFunc = function () {
                return _this.tokenMatcher(_this.LA(1), separator);
            };
            // 2nd..nth iterations
            while (this.tokenMatcher(this.LA(1), separator) === true) {
                // note that this CONSUME will never enter recovery because
                // the separatorLookAheadFunc checks that the separator really does exist.
                this.CONSUME(separator);
                // No need for checking infinite loop here due to consuming the separator.
                action.call(this);
            }
            // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
            this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
                prodOccurrence,
                separator,
                separatorLookAheadFunc,
                action,
                _grammar_interpreter__WEBPACK_IMPORTED_MODULE_4__["NextTerminalAfterManySepWalker"]
            ], separatorLookAheadFunc, _grammar_keys__WEBPACK_IMPORTED_MODULE_1__["MANY_SEP_IDX"], prodOccurrence, _grammar_interpreter__WEBPACK_IMPORTED_MODULE_4__["NextTerminalAfterManySepWalker"]);
        }
    };
    RecognizerEngine.prototype.repetitionSepSecondInternal = function (prodOccurrence, separator, separatorLookAheadFunc, action, nextTerminalAfterWalker) {
        while (separatorLookAheadFunc()) {
            // note that this CONSUME will never enter recovery because
            // the separatorLookAheadFunc checks that the separator really does exist.
            this.CONSUME(separator);
            action.call(this);
        }
        // we can only arrive to this function after an error
        // has occurred (hence the name 'second') so the following
        // IF will always be entered, its possible to remove it...
        // however it is kept to avoid confusion and be consistent.
        // Performance optimization: "attemptInRepetitionRecovery" will be defined as NOOP unless recovery is enabled
        /* istanbul ignore else */
        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
            prodOccurrence,
            separator,
            separatorLookAheadFunc,
            action,
            nextTerminalAfterWalker
        ], separatorLookAheadFunc, _grammar_keys__WEBPACK_IMPORTED_MODULE_1__["AT_LEAST_ONE_SEP_IDX"], prodOccurrence, nextTerminalAfterWalker);
    };
    RecognizerEngine.prototype.doSingleRepetition = function (action) {
        var beforeIteration = this.getLexerPosition();
        action.call(this);
        var afterIteration = this.getLexerPosition();
        // This boolean will indicate if this repetition progressed
        // or if we are "stuck" (potential infinite loop in the repetition).
        return afterIteration > beforeIteration;
    };
    RecognizerEngine.prototype.orInternalNoCst = function (altsOrOpts, occurrence) {
        var alts = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(altsOrOpts)
            ? altsOrOpts
            : altsOrOpts.DEF;
        var laKey = this.getKeyForAutomaticLookahead(_grammar_keys__WEBPACK_IMPORTED_MODULE_1__["OR_IDX"], occurrence);
        var laFunc = this.getLaFuncFromCache(laKey);
        var altIdxToTake = laFunc.call(this, alts);
        if (altIdxToTake !== undefined) {
            var chosenAlternative = alts[altIdxToTake];
            return chosenAlternative.ALT.call(this);
        }
        this.raiseNoAltException(occurrence, altsOrOpts.ERR_MSG);
    };
    RecognizerEngine.prototype.orInternal = function (altsOrOpts, occurrence) {
        var laKey = this.getKeyForAutomaticLookahead(_grammar_keys__WEBPACK_IMPORTED_MODULE_1__["OR_IDX"], occurrence);
        var nestedName = this.nestedRuleBeforeClause(altsOrOpts, laKey);
        try {
            var alts = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(altsOrOpts)
                ? altsOrOpts
                : altsOrOpts.DEF;
            var laFunc = this.getLaFuncFromCache(laKey);
            var altIdxToTake = laFunc.call(this, alts);
            if (altIdxToTake !== undefined) {
                var chosenAlternative = alts[altIdxToTake];
                var nestedAltBeforeClauseResult = this.nestedAltBeforeClause(chosenAlternative, occurrence, _grammar_keys__WEBPACK_IMPORTED_MODULE_1__["OR_IDX"], altIdxToTake);
                try {
                    return chosenAlternative.ALT.call(this);
                }
                finally {
                    if (nestedAltBeforeClauseResult !== undefined) {
                        this.nestedRuleFinallyClause(nestedAltBeforeClauseResult.shortName, nestedAltBeforeClauseResult.nestedName);
                    }
                }
            }
            this.raiseNoAltException(occurrence, altsOrOpts.ERR_MSG);
        }
        finally {
            if (nestedName !== undefined) {
                this.nestedRuleFinallyClause(laKey, nestedName);
            }
        }
    };
    RecognizerEngine.prototype.ruleFinallyStateUpdate = function () {
        this.RULE_STACK.pop();
        this.RULE_OCCURRENCE_STACK.pop();
        // NOOP when cst is disabled
        this.cstFinallyStateUpdate();
        if (this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
            var firstRedundantTok = this.LA(1);
            var errMsg = this.errorMessageProvider.buildNotAllInputParsedMessage({
                firstRedundant: firstRedundantTok,
                ruleName: this.getCurrRuleFullName()
            });
            this.SAVE_ERROR(new _exceptions_public__WEBPACK_IMPORTED_MODULE_2__["NotAllInputParsedException"](errMsg, firstRedundantTok));
        }
    };
    RecognizerEngine.prototype.subruleInternal = function (ruleToCall, idx, options) {
        var ruleResult;
        try {
            var args = options !== undefined ? options.ARGS : undefined;
            ruleResult = ruleToCall.call(this, idx, args);
            this.cstPostNonTerminal(ruleResult, options !== undefined && options.LABEL !== undefined
                ? options.LABEL
                : ruleToCall.ruleName);
            return ruleResult;
        }
        catch (e) {
            this.subruleInternalError(e, options, ruleToCall.ruleName);
        }
    };
    RecognizerEngine.prototype.subruleInternalError = function (e, options, ruleName) {
        if (Object(_exceptions_public__WEBPACK_IMPORTED_MODULE_2__["isRecognitionException"])(e) && e.partialCstResult !== undefined) {
            this.cstPostNonTerminal(e.partialCstResult, options !== undefined && options.LABEL !== undefined
                ? options.LABEL
                : ruleName);
            delete e.partialCstResult;
        }
        throw e;
    };
    RecognizerEngine.prototype.consumeInternal = function (tokType, idx, options) {
        var consumedToken;
        try {
            var nextToken = this.LA(1);
            if (this.tokenMatcher(nextToken, tokType) === true) {
                this.consumeToken();
                consumedToken = nextToken;
            }
            else {
                this.consumeInternalError(tokType, nextToken, options);
            }
        }
        catch (eFromConsumption) {
            consumedToken = this.consumeInternalRecovery(tokType, idx, eFromConsumption);
        }
        this.cstPostTerminal(options !== undefined && options.LABEL !== undefined
            ? options.LABEL
            : tokType.name, consumedToken);
        return consumedToken;
    };
    RecognizerEngine.prototype.consumeInternalError = function (tokType, nextToken, options) {
        var msg;
        var previousToken = this.LA(0);
        if (options !== undefined && options.ERR_MSG) {
            msg = options.ERR_MSG;
        }
        else {
            msg = this.errorMessageProvider.buildMismatchTokenMessage({
                expected: tokType,
                actual: nextToken,
                previous: previousToken,
                ruleName: this.getCurrRuleFullName()
            });
        }
        throw this.SAVE_ERROR(new _exceptions_public__WEBPACK_IMPORTED_MODULE_2__["MismatchedTokenException"](msg, nextToken, previousToken));
    };
    RecognizerEngine.prototype.consumeInternalRecovery = function (tokType, idx, eFromConsumption) {
        // no recovery allowed during backtracking, otherwise backtracking may recover invalid syntax and accept it
        // but the original syntax could have been parsed successfully without any backtracking + recovery
        if (this.recoveryEnabled &&
            // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
            eFromConsumption.name === "MismatchedTokenException" &&
            !this.isBackTracking()) {
            var follows = this.getFollowsForInRuleRecovery(tokType, idx);
            try {
                return this.tryInRuleRecovery(tokType, follows);
            }
            catch (eFromInRuleRecovery) {
                if (eFromInRuleRecovery.name === _recoverable__WEBPACK_IMPORTED_MODULE_6__["IN_RULE_RECOVERY_EXCEPTION"]) {
                    // failed in RuleRecovery.
                    // throw the original error in order to trigger reSync error recovery
                    throw eFromConsumption;
                }
                else {
                    throw eFromInRuleRecovery;
                }
            }
        }
        else {
            throw eFromConsumption;
        }
    };
    RecognizerEngine.prototype.saveRecogState = function () {
        // errors is a getter which will clone the errors array
        var savedErrors = this.errors;
        var savedRuleStack = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["cloneArr"])(this.RULE_STACK);
        return {
            errors: savedErrors,
            lexerState: this.exportLexerState(),
            RULE_STACK: savedRuleStack,
            CST_STACK: this.CST_STACK,
            LAST_EXPLICIT_RULE_STACK: this.LAST_EXPLICIT_RULE_STACK
        };
    };
    RecognizerEngine.prototype.reloadRecogState = function (newState) {
        this.errors = newState.errors;
        this.importLexerState(newState.lexerState);
        this.RULE_STACK = newState.RULE_STACK;
    };
    RecognizerEngine.prototype.ruleInvocationStateUpdate = function (shortName, fullName, idxInCallingRule) {
        this.RULE_OCCURRENCE_STACK.push(idxInCallingRule);
        this.RULE_STACK.push(shortName);
        // NOOP when cst is disabled
        this.cstInvocationStateUpdate(fullName, shortName);
    };
    RecognizerEngine.prototype.isBackTracking = function () {
        return this.isBackTrackingStack.length !== 0;
    };
    RecognizerEngine.prototype.getCurrRuleFullName = function () {
        var shortName = this.getLastExplicitRuleShortName();
        return this.shortRuleNameToFull[shortName];
    };
    RecognizerEngine.prototype.shortRuleNameToFullName = function (shortName) {
        return this.shortRuleNameToFull[shortName];
    };
    RecognizerEngine.prototype.isAtEndOfInput = function () {
        return this.tokenMatcher(this.LA(1), _scan_tokens_public__WEBPACK_IMPORTED_MODULE_7__["EOF"]);
    };
    RecognizerEngine.prototype.reset = function () {
        this.resetLexerState();
        this.isBackTrackingStack = [];
        this.errors = [];
        this.RULE_STACK = [];
        this.LAST_EXPLICIT_RULE_STACK = [];
        // TODO: extract a specific rest for TreeBuilder trait
        this.CST_STACK = [];
        this.RULE_OCCURRENCE_STACK = [];
    };
    return RecognizerEngine;
}());

//# sourceMappingURL=recognizer_engine.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/recoverable.js":
/*!********************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/parser/traits/recoverable.js ***!
  \********************************************************************************/
/*! exports provided: EOF_FOLLOW_KEY, IN_RULE_RECOVERY_EXCEPTION, InRuleRecoveryException, Recoverable, attemptInRepetitionRecovery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EOF_FOLLOW_KEY", function() { return EOF_FOLLOW_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IN_RULE_RECOVERY_EXCEPTION", function() { return IN_RULE_RECOVERY_EXCEPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InRuleRecoveryException", function() { return InRuleRecoveryException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recoverable", function() { return Recoverable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attemptInRepetitionRecovery", function() { return attemptInRepetitionRecovery; });
/* harmony import */ var _scan_tokens_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../scan/tokens_public */ "./node_modules/chevrotain/lib_esm/src/scan/tokens_public.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _exceptions_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../exceptions_public */ "./node_modules/chevrotain/lib_esm/src/parse/exceptions_public.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./node_modules/chevrotain/lib_esm/src/parse/constants.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parser */ "./node_modules/chevrotain/lib_esm/src/parse/parser/parser.js");





var EOF_FOLLOW_KEY = {};
var IN_RULE_RECOVERY_EXCEPTION = "InRuleRecoveryException";
function InRuleRecoveryException(message) {
    this.name = IN_RULE_RECOVERY_EXCEPTION;
    this.message = message;
}
InRuleRecoveryException.prototype = Error.prototype;
/**
 * This trait is responsible for the error recovery and fault tolerant logic
 */
var Recoverable = /** @class */ (function () {
    function Recoverable() {
    }
    Recoverable.prototype.initRecoverable = function (config) {
        this.firstAfterRepMap = {};
        this.resyncFollows = {};
        this.recoveryEnabled = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["has"])(config, "recoveryEnabled")
            ? config.recoveryEnabled
            : _parser__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_PARSER_CONFIG"].recoveryEnabled;
        // performance optimization, NOOP will be inlined which
        // effectively means that this optional feature does not exist
        // when not used.
        if (this.recoveryEnabled) {
            this.attemptInRepetitionRecovery = attemptInRepetitionRecovery;
        }
    };
    Recoverable.prototype.getTokenToInsert = function (tokType) {
        var tokToInsert = Object(_scan_tokens_public__WEBPACK_IMPORTED_MODULE_0__["createTokenInstance"])(tokType, "", NaN, NaN, NaN, NaN, NaN, NaN);
        tokToInsert.isInsertedInRecovery = true;
        return tokToInsert;
    };
    Recoverable.prototype.canTokenTypeBeInsertedInRecovery = function (tokType) {
        return true;
    };
    Recoverable.prototype.tryInRepetitionRecovery = function (grammarRule, grammarRuleArgs, lookAheadFunc, expectedTokType) {
        var _this = this;
        // TODO: can the resyncTokenType be cached?
        var reSyncTokType = this.findReSyncTokenType();
        var savedLexerState = this.exportLexerState();
        var resyncedTokens = [];
        var passedResyncPoint = false;
        var nextTokenWithoutResync = this.LA(1);
        var currToken = this.LA(1);
        var generateErrorMessage = function () {
            var previousToken = _this.LA(0);
            // we are preemptively re-syncing before an error has been detected, therefor we must reproduce
            // the error that would have been thrown
            var msg = _this.errorMessageProvider.buildMismatchTokenMessage({
                expected: expectedTokType,
                actual: nextTokenWithoutResync,
                previous: previousToken,
                ruleName: _this.getCurrRuleFullName()
            });
            var error = new _exceptions_public__WEBPACK_IMPORTED_MODULE_2__["MismatchedTokenException"](msg, nextTokenWithoutResync, _this.LA(0));
            // the first token here will be the original cause of the error, this is not part of the resyncedTokens property.
            error.resyncedTokens = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["dropRight"])(resyncedTokens);
            _this.SAVE_ERROR(error);
        };
        while (!passedResyncPoint) {
            // re-synced to a point where we can safely exit the repetition/
            if (this.tokenMatcher(currToken, expectedTokType)) {
                generateErrorMessage();
                return; // must return here to avoid reverting the inputIdx
            }
            else if (lookAheadFunc.call(this)) {
                // we skipped enough tokens so we can resync right back into another iteration of the repetition grammar rule
                generateErrorMessage();
                // recursive invocation in other to support multiple re-syncs in the same top level repetition grammar rule
                grammarRule.apply(this, grammarRuleArgs);
                return; // must return here to avoid reverting the inputIdx
            }
            else if (this.tokenMatcher(currToken, reSyncTokType)) {
                passedResyncPoint = true;
            }
            else {
                currToken = this.SKIP_TOKEN();
                this.addToResyncTokens(currToken, resyncedTokens);
            }
        }
        // we were unable to find a CLOSER point to resync inside the Repetition, reset the state.
        // The parsing exception we were trying to prevent will happen in the NEXT parsing step. it may be handled by
        // "between rules" resync recovery later in the flow.
        this.importLexerState(savedLexerState);
    };
    Recoverable.prototype.shouldInRepetitionRecoveryBeTried = function (expectTokAfterLastMatch, nextTokIdx, notStuck) {
        // Edge case of arriving from a MANY repetition which is stuck
        // Attempting recovery in this case could cause an infinite loop
        if (notStuck === false) {
            return false;
        }
        // arguments to try and perform resync into the next iteration of the many are missing
        if (expectTokAfterLastMatch === undefined || nextTokIdx === undefined) {
            return false;
        }
        // no need to recover, next token is what we expect...
        if (this.tokenMatcher(this.LA(1), expectTokAfterLastMatch)) {
            return false;
        }
        // error recovery is disabled during backtracking as it can make the parser ignore a valid grammar path
        // and prefer some backtracking path that includes recovered errors.
        if (this.isBackTracking()) {
            return false;
        }
        // if we can perform inRule recovery (single token insertion or deletion) we always prefer that recovery algorithm
        // because if it works, it makes the least amount of changes to the input stream (greedy algorithm)
        //noinspection RedundantIfStatementJS
        if (this.canPerformInRuleRecovery(expectTokAfterLastMatch, this.getFollowsForInRuleRecovery(expectTokAfterLastMatch, nextTokIdx))) {
            return false;
        }
        return true;
    };
    // Error Recovery functionality
    Recoverable.prototype.getFollowsForInRuleRecovery = function (tokType, tokIdxInRule) {
        var grammarPath = this.getCurrentGrammarPath(tokType, tokIdxInRule);
        var follows = this.getNextPossibleTokenTypes(grammarPath);
        return follows;
    };
    Recoverable.prototype.tryInRuleRecovery = function (expectedTokType, follows) {
        if (this.canRecoverWithSingleTokenInsertion(expectedTokType, follows)) {
            var tokToInsert = this.getTokenToInsert(expectedTokType);
            return tokToInsert;
        }
        if (this.canRecoverWithSingleTokenDeletion(expectedTokType)) {
            var nextTok = this.SKIP_TOKEN();
            this.consumeToken();
            return nextTok;
        }
        throw new InRuleRecoveryException("sad sad panda");
    };
    Recoverable.prototype.canPerformInRuleRecovery = function (expectedToken, follows) {
        return (this.canRecoverWithSingleTokenInsertion(expectedToken, follows) ||
            this.canRecoverWithSingleTokenDeletion(expectedToken));
    };
    Recoverable.prototype.canRecoverWithSingleTokenInsertion = function (expectedTokType, follows) {
        var _this = this;
        if (!this.canTokenTypeBeInsertedInRecovery(expectedTokType)) {
            return false;
        }
        // must know the possible following tokens to perform single token insertion
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(follows)) {
            return false;
        }
        var mismatchedTok = this.LA(1);
        var isMisMatchedTokInFollows = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["find"])(follows, function (possibleFollowsTokType) {
            return _this.tokenMatcher(mismatchedTok, possibleFollowsTokType);
        }) !== undefined;
        return isMisMatchedTokInFollows;
    };
    Recoverable.prototype.canRecoverWithSingleTokenDeletion = function (expectedTokType) {
        var isNextTokenWhatIsExpected = this.tokenMatcher(this.LA(2), expectedTokType);
        return isNextTokenWhatIsExpected;
    };
    Recoverable.prototype.isInCurrentRuleReSyncSet = function (tokenTypeIdx) {
        var followKey = this.getCurrFollowKey();
        var currentRuleReSyncSet = this.getFollowSetFromFollowKey(followKey);
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["contains"])(currentRuleReSyncSet, tokenTypeIdx);
    };
    Recoverable.prototype.findReSyncTokenType = function () {
        var allPossibleReSyncTokTypes = this.flattenFollowSet();
        // this loop will always terminate as EOF is always in the follow stack and also always (virtually) in the input
        var nextToken = this.LA(1);
        var k = 2;
        while (true) {
            var nextTokenType = nextToken.tokenType;
            if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["contains"])(allPossibleReSyncTokTypes, nextTokenType)) {
                return nextTokenType;
            }
            nextToken = this.LA(k);
            k++;
        }
    };
    Recoverable.prototype.getCurrFollowKey = function () {
        // the length is at least one as we always add the ruleName to the stack before invoking the rule.
        if (this.RULE_STACK.length === 1) {
            return EOF_FOLLOW_KEY;
        }
        var currRuleShortName = this.getLastExplicitRuleShortName();
        var currRuleIdx = this.getLastExplicitRuleOccurrenceIndex();
        var prevRuleShortName = this.getPreviousExplicitRuleShortName();
        return {
            ruleName: this.shortRuleNameToFullName(currRuleShortName),
            idxInCallingRule: currRuleIdx,
            inRule: this.shortRuleNameToFullName(prevRuleShortName)
        };
    };
    Recoverable.prototype.buildFullFollowKeyStack = function () {
        var _this = this;
        var explicitRuleStack = this.RULE_STACK;
        var explicitOccurrenceStack = this.RULE_OCCURRENCE_STACK;
        if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(this.LAST_EXPLICIT_RULE_STACK)) {
            explicitRuleStack = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(this.LAST_EXPLICIT_RULE_STACK, function (idx) { return _this.RULE_STACK[idx]; });
            explicitOccurrenceStack = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(this.LAST_EXPLICIT_RULE_STACK, function (idx) { return _this.RULE_OCCURRENCE_STACK[idx]; });
        }
        // TODO: only iterate over explicit rules here
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(explicitRuleStack, function (ruleName, idx) {
            if (idx === 0) {
                return EOF_FOLLOW_KEY;
            }
            return {
                ruleName: _this.shortRuleNameToFullName(ruleName),
                idxInCallingRule: explicitOccurrenceStack[idx],
                inRule: _this.shortRuleNameToFullName(explicitRuleStack[idx - 1])
            };
        });
    };
    Recoverable.prototype.flattenFollowSet = function () {
        var _this = this;
        var followStack = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(this.buildFullFollowKeyStack(), function (currKey) {
            return _this.getFollowSetFromFollowKey(currKey);
        });
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["flatten"])(followStack);
    };
    Recoverable.prototype.getFollowSetFromFollowKey = function (followKey) {
        if (followKey === EOF_FOLLOW_KEY) {
            return [_scan_tokens_public__WEBPACK_IMPORTED_MODULE_0__["EOF"]];
        }
        var followName = followKey.ruleName +
            followKey.idxInCallingRule +
            _constants__WEBPACK_IMPORTED_MODULE_3__["IN"] +
            followKey.inRule;
        return this.resyncFollows[followName];
    };
    // It does not make any sense to include a virtual EOF token in the list of resynced tokens
    // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
    Recoverable.prototype.addToResyncTokens = function (token, resyncTokens) {
        if (!this.tokenMatcher(token, _scan_tokens_public__WEBPACK_IMPORTED_MODULE_0__["EOF"])) {
            resyncTokens.push(token);
        }
        return resyncTokens;
    };
    Recoverable.prototype.reSyncTo = function (tokType) {
        var resyncedTokens = [];
        var nextTok = this.LA(1);
        while (this.tokenMatcher(nextTok, tokType) === false) {
            nextTok = this.SKIP_TOKEN();
            this.addToResyncTokens(nextTok, resyncedTokens);
        }
        // the last token is not part of the error.
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["dropRight"])(resyncedTokens);
    };
    Recoverable.prototype.attemptInRepetitionRecovery = function (prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
        // by default this is a NO-OP
        // The actual implementation is with the function(not method) below
    };
    Recoverable.prototype.getCurrentGrammarPath = function (tokType, tokIdxInRule) {
        var pathRuleStack = this.getHumanReadableRuleStack();
        var pathOccurrenceStack = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["cloneArr"])(this.RULE_OCCURRENCE_STACK);
        var grammarPath = {
            ruleStack: pathRuleStack,
            occurrenceStack: pathOccurrenceStack,
            lastTok: tokType,
            lastTokOccurrence: tokIdxInRule
        };
        return grammarPath;
    };
    Recoverable.prototype.getHumanReadableRuleStack = function () {
        var _this = this;
        if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(this.LAST_EXPLICIT_RULE_STACK)) {
            return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(this.LAST_EXPLICIT_RULE_STACK, function (currIdx) {
                return _this.shortRuleNameToFullName(_this.RULE_STACK[currIdx]);
            });
        }
        else {
            return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(this.RULE_STACK, function (currShortName) {
                return _this.shortRuleNameToFullName(currShortName);
            });
        }
    };
    return Recoverable;
}());

function attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
    var key = this.getKeyForAutomaticLookahead(dslMethodIdx, prodOccurrence);
    var firstAfterRepInfo = this.firstAfterRepMap[key];
    if (firstAfterRepInfo === undefined) {
        var currRuleName = this.getCurrRuleFullName();
        var ruleGrammar = this.getGAstProductions()[currRuleName];
        var walker = new nextToksWalker(ruleGrammar, prodOccurrence);
        firstAfterRepInfo = walker.startWalking();
        this.firstAfterRepMap[key] = firstAfterRepInfo;
    }
    var expectTokAfterLastMatch = firstAfterRepInfo.token;
    var nextTokIdx = firstAfterRepInfo.occurrence;
    var isEndOfRule = firstAfterRepInfo.isEndOfRule;
    // special edge case of a TOP most repetition after which the input should END.
    // this will force an attempt for inRule recovery in that scenario.
    if (this.RULE_STACK.length === 1 &&
        isEndOfRule &&
        expectTokAfterLastMatch === undefined) {
        expectTokAfterLastMatch = _scan_tokens_public__WEBPACK_IMPORTED_MODULE_0__["EOF"];
        nextTokIdx = 1;
    }
    if (this.shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck)) {
        // TODO: performance optimization: instead of passing the original args here, we modify
        // the args param (or create a new one) and make sure the lookahead func is explicitly provided
        // to avoid searching the cache for it once more.
        this.tryInRepetitionRecovery(prodFunc, args, lookaheadFunc, expectTokAfterLastMatch);
    }
}
//# sourceMappingURL=recoverable.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/parse/parser/traits/tree_builder.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/parse/parser/traits/tree_builder.js ***!
  \*********************************************************************************/
/*! exports provided: TreeBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeBuilder", function() { return TreeBuilder; });
/* harmony import */ var _cst_cst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../cst/cst */ "./node_modules/chevrotain/lib_esm/src/parse/cst/cst.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _cst_cst_visitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cst/cst_visitor */ "./node_modules/chevrotain/lib_esm/src/parse/cst/cst_visitor.js");
/* harmony import */ var _grammar_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../grammar/keys */ "./node_modules/chevrotain/lib_esm/src/parse/grammar/keys.js");
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parser */ "./node_modules/chevrotain/lib_esm/src/parse/parser/parser.js");





/**
 * This trait is responsible for the CST building logic.
 */
var TreeBuilder = /** @class */ (function () {
    function TreeBuilder() {
    }
    TreeBuilder.prototype.initTreeBuilder = function (config) {
        this.LAST_EXPLICIT_RULE_STACK = [];
        this.CST_STACK = [];
        this.outputCst = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["has"])(config, "outputCst")
            ? config.outputCst
            : _parser__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_PARSER_CONFIG"].outputCst;
        this.nodeLocationTracking = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["has"])(config, "nodeLocationTracking")
            ? config.nodeLocationTracking
            : _parser__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_PARSER_CONFIG"].nodeLocationTracking;
        if (!this.outputCst) {
            this.cstInvocationStateUpdate = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
            this.cstFinallyStateUpdate = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
            this.cstPostTerminal = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
            this.cstPostNonTerminal = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
            this.cstPostRule = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
            this.getLastExplicitRuleShortName = this.getLastExplicitRuleShortNameNoCst;
            this.getPreviousExplicitRuleShortName = this.getPreviousExplicitRuleShortNameNoCst;
            this.getLastExplicitRuleOccurrenceIndex = this.getLastExplicitRuleOccurrenceIndexNoCst;
            this.manyInternal = this.manyInternalNoCst;
            this.orInternal = this.orInternalNoCst;
            this.optionInternal = this.optionInternalNoCst;
            this.atLeastOneInternal = this.atLeastOneInternalNoCst;
            this.manySepFirstInternal = this.manySepFirstInternalNoCst;
            this.atLeastOneSepFirstInternal = this.atLeastOneSepFirstInternalNoCst;
        }
        else {
            if (/full/i.test(this.nodeLocationTracking)) {
                if (this.recoveryEnabled) {
                    this.setNodeLocationFromToken = _cst_cst__WEBPACK_IMPORTED_MODULE_0__["setNodeLocationFull"];
                    this.setNodeLocationFromNode = _cst_cst__WEBPACK_IMPORTED_MODULE_0__["setNodeLocationFull"];
                    this.cstPostRule = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
                    this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery;
                }
                else {
                    this.setNodeLocationFromToken = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
                    this.setNodeLocationFromNode = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
                    this.cstPostRule = this.cstPostRuleFull;
                    this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular;
                }
            }
            else if (/onlyOffset/i.test(this.nodeLocationTracking)) {
                if (this.recoveryEnabled) {
                    this.setNodeLocationFromToken = (_cst_cst__WEBPACK_IMPORTED_MODULE_0__["setNodeLocationOnlyOffset"]);
                    this.setNodeLocationFromNode = (_cst_cst__WEBPACK_IMPORTED_MODULE_0__["setNodeLocationOnlyOffset"]);
                    this.cstPostRule = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
                    this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery;
                }
                else {
                    this.setNodeLocationFromToken = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
                    this.setNodeLocationFromNode = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
                    this.cstPostRule = this.cstPostRuleOnlyOffset;
                    this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular;
                }
            }
            else if (/none/i.test(this.nodeLocationTracking)) {
                this.setNodeLocationFromToken = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
                this.setNodeLocationFromNode = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
                this.cstPostRule = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
                this.setInitialNodeLocation = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
            }
            else {
                throw Error("Invalid <nodeLocationTracking> config option: \"" + config.nodeLocationTracking + "\"");
            }
        }
    };
    TreeBuilder.prototype.setInitialNodeLocationOnlyOffsetRecovery = function (cstNode) {
        cstNode.location = {
            startOffset: NaN,
            endOffset: NaN
        };
    };
    TreeBuilder.prototype.setInitialNodeLocationOnlyOffsetRegular = function (cstNode) {
        cstNode.location = {
            // without error recovery the starting Location of a new CstNode is guaranteed
            // To be the next Token's startOffset (for valid inputs).
            // For invalid inputs there won't be any CSTOutput so this potential
            // inaccuracy does not matter
            startOffset: this.LA(1).startOffset,
            endOffset: NaN
        };
    };
    TreeBuilder.prototype.setInitialNodeLocationFullRecovery = function (cstNode) {
        cstNode.location = {
            startOffset: NaN,
            startLine: NaN,
            startColumn: NaN,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN
        };
    };
    /**
     *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work

     * @param cstNode
     */
    TreeBuilder.prototype.setInitialNodeLocationFullRegular = function (cstNode) {
        var nextToken = this.LA(1);
        cstNode.location = {
            startOffset: nextToken.startOffset,
            startLine: nextToken.startLine,
            startColumn: nextToken.startColumn,
            endOffset: NaN,
            endLine: NaN,
            endColumn: NaN
        };
    };
    // CST
    TreeBuilder.prototype.cstNestedInvocationStateUpdate = function (nestedName, shortName) {
        var cstNode = {
            name: nestedName,
            fullName: this.shortRuleNameToFull[this.getLastExplicitRuleShortName()] +
                nestedName,
            children: {}
        };
        this.setInitialNodeLocation(cstNode);
        this.CST_STACK.push(cstNode);
    };
    TreeBuilder.prototype.cstInvocationStateUpdate = function (fullRuleName, shortName) {
        this.LAST_EXPLICIT_RULE_STACK.push(this.RULE_STACK.length - 1);
        var cstNode = {
            name: fullRuleName,
            children: {}
        };
        this.setInitialNodeLocation(cstNode);
        this.CST_STACK.push(cstNode);
    };
    TreeBuilder.prototype.cstFinallyStateUpdate = function () {
        this.LAST_EXPLICIT_RULE_STACK.pop();
        this.CST_STACK.pop();
    };
    TreeBuilder.prototype.cstNestedFinallyStateUpdate = function () {
        var lastCstNode = this.CST_STACK.pop();
        // TODO: the naming is bad, this should go directly to the
        //       (correct) cstLocation update method
        //       e.g if we put other logic in postRule...
        this.cstPostRule(lastCstNode);
    };
    TreeBuilder.prototype.cstPostRuleFull = function (ruleCstNode) {
        var prevToken = this.LA(0);
        var loc = ruleCstNode.location;
        // If this condition is true it means we consumed at least one Token
        // In this CstNode or its nested children.
        if (loc.startOffset <= prevToken.startOffset === true) {
            loc.endOffset = prevToken.endOffset;
            loc.endLine = prevToken.endLine;
            loc.endColumn = prevToken.endColumn;
        }
        // "empty" CstNode edge case
        else {
            loc.startOffset = NaN;
            loc.startLine = NaN;
            loc.startColumn = NaN;
        }
    };
    TreeBuilder.prototype.cstPostRuleOnlyOffset = function (ruleCstNode) {
        var prevToken = this.LA(0);
        var loc = ruleCstNode.location;
        // If this condition is true it means we consumed at least one Token
        // In this CstNode or its nested children.
        if (loc.startOffset <= prevToken.startOffset === true) {
            loc.endOffset = prevToken.endOffset;
        }
        // "empty" CstNode edge case
        else {
            loc.startOffset = NaN;
        }
    };
    TreeBuilder.prototype.cstPostTerminal = function (key, consumedToken) {
        var rootCst = this.CST_STACK[this.CST_STACK.length - 1];
        Object(_cst_cst__WEBPACK_IMPORTED_MODULE_0__["addTerminalToCst"])(rootCst, consumedToken, key);
        // This is only used when **both** error recovery and CST Output are enabled.
        this.setNodeLocationFromToken(rootCst.location, consumedToken);
    };
    TreeBuilder.prototype.cstPostNonTerminal = function (ruleCstResult, ruleName) {
        // Avoid side effects due to back tracking
        // TODO: This costs a 2-3% in performance, A flag on IParserConfig
        //   could be used to get rid of this conditional, but not sure its worth the effort
        //   and API complexity.
        if (this.isBackTracking() !== true) {
            var preCstNode = this.CST_STACK[this.CST_STACK.length - 1];
            Object(_cst_cst__WEBPACK_IMPORTED_MODULE_0__["addNoneTerminalToCst"])(preCstNode, ruleName, ruleCstResult);
            // This is only used when **both** error recovery and CST Output are enabled.
            this.setNodeLocationFromNode(preCstNode.location, ruleCstResult.location);
        }
    };
    TreeBuilder.prototype.getBaseCstVisitorConstructor = function () {
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(this.baseCstVisitorConstructor)) {
            var newBaseCstVisitorConstructor = Object(_cst_cst_visitor__WEBPACK_IMPORTED_MODULE_2__["createBaseSemanticVisitorConstructor"])(this.className, this.allRuleNames);
            this.baseCstVisitorConstructor = newBaseCstVisitorConstructor;
            return newBaseCstVisitorConstructor;
        }
        return this.baseCstVisitorConstructor;
    };
    TreeBuilder.prototype.getBaseCstVisitorConstructorWithDefaults = function () {
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(this.baseCstVisitorWithDefaultsConstructor)) {
            var newConstructor = Object(_cst_cst_visitor__WEBPACK_IMPORTED_MODULE_2__["createBaseVisitorConstructorWithDefaults"])(this.className, this.allRuleNames, this.getBaseCstVisitorConstructor());
            this.baseCstVisitorWithDefaultsConstructor = newConstructor;
            return newConstructor;
        }
        return this.baseCstVisitorWithDefaultsConstructor;
    };
    TreeBuilder.prototype.nestedRuleBeforeClause = function (methodOpts, laKey) {
        var nestedName;
        if (methodOpts.NAME !== undefined) {
            nestedName = methodOpts.NAME;
            this.nestedRuleInvocationStateUpdate(nestedName, laKey);
            return nestedName;
        }
        else {
            return undefined;
        }
    };
    TreeBuilder.prototype.nestedAltBeforeClause = function (methodOpts, occurrence, methodKeyIdx, altIdx) {
        var ruleIdx = this.getLastExplicitRuleShortName();
        var shortName = Object(_grammar_keys__WEBPACK_IMPORTED_MODULE_3__["getKeyForAltIndex"])(ruleIdx, methodKeyIdx, occurrence, altIdx);
        var nestedName;
        if (methodOpts.NAME !== undefined) {
            nestedName = methodOpts.NAME;
            this.nestedRuleInvocationStateUpdate(nestedName, shortName);
            return {
                shortName: shortName,
                nestedName: nestedName
            };
        }
        else {
            return undefined;
        }
    };
    TreeBuilder.prototype.nestedRuleFinallyClause = function (laKey, nestedName) {
        var cstStack = this.CST_STACK;
        var nestedRuleCst = cstStack[cstStack.length - 1];
        this.nestedRuleFinallyStateUpdate();
        // this return a different result than the previous invocation because "nestedRuleFinallyStateUpdate" pops the cst stack
        var parentCstNode = cstStack[cstStack.length - 1];
        Object(_cst_cst__WEBPACK_IMPORTED_MODULE_0__["addNoneTerminalToCst"])(parentCstNode, nestedName, nestedRuleCst);
        this.setNodeLocationFromNode(parentCstNode.location, nestedRuleCst.location);
    };
    TreeBuilder.prototype.getLastExplicitRuleShortName = function () {
        var lastExplictIndex = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 1];
        return this.RULE_STACK[lastExplictIndex];
    };
    TreeBuilder.prototype.getLastExplicitRuleShortNameNoCst = function () {
        var ruleStack = this.RULE_STACK;
        return ruleStack[ruleStack.length - 1];
    };
    TreeBuilder.prototype.getPreviousExplicitRuleShortName = function () {
        var lastExplicitIndex = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 2];
        return this.RULE_STACK[lastExplicitIndex];
    };
    TreeBuilder.prototype.getPreviousExplicitRuleShortNameNoCst = function () {
        var ruleStack = this.RULE_STACK;
        return ruleStack[ruleStack.length - 2];
    };
    TreeBuilder.prototype.getLastExplicitRuleOccurrenceIndex = function () {
        var lastExplicitIndex = this.LAST_EXPLICIT_RULE_STACK[this.LAST_EXPLICIT_RULE_STACK.length - 1];
        return this.RULE_OCCURRENCE_STACK[lastExplicitIndex];
    };
    TreeBuilder.prototype.getLastExplicitRuleOccurrenceIndexNoCst = function () {
        var occurrenceStack = this.RULE_OCCURRENCE_STACK;
        return occurrenceStack[occurrenceStack.length - 1];
    };
    TreeBuilder.prototype.nestedRuleInvocationStateUpdate = function (nestedRuleName, shortNameKey) {
        this.RULE_OCCURRENCE_STACK.push(1);
        this.RULE_STACK.push(shortNameKey);
        this.cstNestedInvocationStateUpdate(nestedRuleName, shortNameKey);
    };
    TreeBuilder.prototype.nestedRuleFinallyStateUpdate = function () {
        this.RULE_STACK.pop();
        this.RULE_OCCURRENCE_STACK.pop();
        // NOOP when cst is disabled
        this.cstNestedFinallyStateUpdate();
    };
    return TreeBuilder;
}());

//# sourceMappingURL=tree_builder.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/scan/lexer.js":
/*!***********************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/scan/lexer.js ***!
  \***********************************************************/
/*! exports provided: DEFAULT_MODE, MODES, SUPPORT_STICKY, disableSticky, enableSticky, analyzeTokenTypes, validatePatterns, findMissingPatterns, findInvalidPatterns, findEndOfInputAnchor, findEmptyMatchRegExps, findStartOfInputAnchor, findUnsupportedFlags, findDuplicatePatterns, findInvalidGroupType, findModesThatDoNotExist, findUnreachablePatterns, addStartOfInput, addStickyFlag, performRuntimeChecks, performWarningRuntimeChecks, cloneEmptyGroups, isCustomPattern, isShortPattern, LineTerminatorOptimizedTester, buildLineBreakIssueMessage, minOptimizationVal, charCodeToOptimizedIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MODE", function() { return DEFAULT_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODES", function() { return MODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_STICKY", function() { return SUPPORT_STICKY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableSticky", function() { return disableSticky; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableSticky", function() { return enableSticky; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analyzeTokenTypes", function() { return analyzeTokenTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePatterns", function() { return validatePatterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findMissingPatterns", function() { return findMissingPatterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findInvalidPatterns", function() { return findInvalidPatterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findEndOfInputAnchor", function() { return findEndOfInputAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findEmptyMatchRegExps", function() { return findEmptyMatchRegExps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findStartOfInputAnchor", function() { return findStartOfInputAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findUnsupportedFlags", function() { return findUnsupportedFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDuplicatePatterns", function() { return findDuplicatePatterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findInvalidGroupType", function() { return findInvalidGroupType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findModesThatDoNotExist", function() { return findModesThatDoNotExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findUnreachablePatterns", function() { return findUnreachablePatterns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStartOfInput", function() { return addStartOfInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStickyFlag", function() { return addStickyFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performRuntimeChecks", function() { return performRuntimeChecks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performWarningRuntimeChecks", function() { return performWarningRuntimeChecks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneEmptyGroups", function() { return cloneEmptyGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCustomPattern", function() { return isCustomPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShortPattern", function() { return isShortPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineTerminatorOptimizedTester", function() { return LineTerminatorOptimizedTester; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildLineBreakIssueMessage", function() { return buildLineBreakIssueMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minOptimizationVal", function() { return minOptimizationVal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charCodeToOptimizedIndex", function() { return charCodeToOptimizedIndex; });
/* harmony import */ var regexp_to_ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regexp-to-ast */ "./node_modules/regexp-to-ast/lib/regexp-to-ast.js");
/* harmony import */ var regexp_to_ast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regexp_to_ast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lexer_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lexer_public */ "./node_modules/chevrotain/lib_esm/src/scan/lexer_public.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _reg_exp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reg_exp */ "./node_modules/chevrotain/lib_esm/src/scan/reg_exp.js");
/* harmony import */ var _reg_exp_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reg_exp_parser */ "./node_modules/chevrotain/lib_esm/src/scan/reg_exp_parser.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var PATTERN = "PATTERN";
var DEFAULT_MODE = "defaultMode";
var MODES = "modes";
var SUPPORT_STICKY = typeof new RegExp("(?:)").sticky === "boolean";
function disableSticky() {
    SUPPORT_STICKY = false;
}
function enableSticky() {
    SUPPORT_STICKY = true;
}
function analyzeTokenTypes(tokenTypes, options) {
    options = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["defaults"])(options, {
        useSticky: SUPPORT_STICKY,
        debug: false,
        safeMode: false,
        positionTracking: "full",
        lineTerminatorCharacters: ["\r", "\n"],
        tracer: function (msg, action) { return action(); }
    });
    var tracer = options.tracer;
    tracer("initCharCodeToOptimizedIndexMap", function () {
        initCharCodeToOptimizedIndexMap();
    });
    var onlyRelevantTypes;
    tracer("Reject Lexer.NA", function () {
        onlyRelevantTypes = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["reject"])(tokenTypes, function (currType) {
            return currType[PATTERN] === _lexer_public__WEBPACK_IMPORTED_MODULE_1__["Lexer"].NA;
        });
    });
    var hasCustom = false;
    var allTransformedPatterns;
    tracer("Transform Patterns", function () {
        hasCustom = false;
        allTransformedPatterns = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(onlyRelevantTypes, function (currType) {
            var currPattern = currType[PATTERN];
            /* istanbul ignore else */
            if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isRegExp"])(currPattern)) {
                var regExpSource = currPattern.source;
                if (regExpSource.length === 1 &&
                    // only these regExp meta characters which can appear in a length one regExp
                    regExpSource !== "^" &&
                    regExpSource !== "$" &&
                    regExpSource !== ".") {
                    return regExpSource;
                }
                else if (regExpSource.length === 2 &&
                    regExpSource[0] === "\\" &&
                    // not a meta character
                    !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["contains"])([
                        "d",
                        "D",
                        "s",
                        "S",
                        "t",
                        "r",
                        "n",
                        "t",
                        "0",
                        "c",
                        "b",
                        "B",
                        "f",
                        "v",
                        "w",
                        "W"
                    ], regExpSource[1])) {
                    // escaped meta Characters: /\+/ /\[/
                    // or redundant escaping: /\a/
                    // without the escaping "\"
                    return regExpSource[1];
                }
                else {
                    return options.useSticky
                        ? addStickyFlag(currPattern)
                        : addStartOfInput(currPattern);
                }
            }
            else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(currPattern)) {
                hasCustom = true;
                // CustomPatternMatcherFunc - custom patterns do not require any transformations, only wrapping in a RegExp Like object
                return { exec: currPattern };
            }
            else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["has"])(currPattern, "exec")) {
                hasCustom = true;
                // ICustomPattern
                return currPattern;
            }
            else if (typeof currPattern === "string") {
                if (currPattern.length === 1) {
                    return currPattern;
                }
                else {
                    var escapedRegExpString = currPattern.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
                    var wrappedRegExp = new RegExp(escapedRegExpString);
                    return options.useSticky
                        ? addStickyFlag(wrappedRegExp)
                        : addStartOfInput(wrappedRegExp);
                }
            }
            else {
                throw Error("non exhaustive match");
            }
        });
    });
    var patternIdxToType;
    var patternIdxToGroup;
    var patternIdxToLongerAltIdx;
    var patternIdxToPushMode;
    var patternIdxToPopMode;
    tracer("misc mapping", function () {
        patternIdxToType = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(onlyRelevantTypes, function (currType) { return currType.tokenTypeIdx; });
        patternIdxToGroup = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(onlyRelevantTypes, function (clazz) {
            var groupName = clazz.GROUP;
            /* istanbul ignore next */
            if (groupName === _lexer_public__WEBPACK_IMPORTED_MODULE_1__["Lexer"].SKIPPED) {
                return undefined;
            }
            else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isString"])(groupName)) {
                return groupName;
            }
            else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(groupName)) {
                return false;
            }
            else {
                throw Error("non exhaustive match");
            }
        });
        patternIdxToLongerAltIdx = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(onlyRelevantTypes, function (clazz) {
            var longerAltType = clazz.LONGER_ALT;
            if (longerAltType) {
                var longerAltIdx = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["indexOf"])(onlyRelevantTypes, longerAltType);
                return longerAltIdx;
            }
        });
        patternIdxToPushMode = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(onlyRelevantTypes, function (clazz) { return clazz.PUSH_MODE; });
        patternIdxToPopMode = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(onlyRelevantTypes, function (clazz) {
            return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["has"])(clazz, "POP_MODE");
        });
    });
    var patternIdxToCanLineTerminator;
    tracer("Line Terminator Handling", function () {
        var lineTerminatorCharCodes = getCharCodes(options.lineTerminatorCharacters);
        patternIdxToCanLineTerminator = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(onlyRelevantTypes, function (tokType) { return false; });
        if (options.positionTracking !== "onlyOffset") {
            patternIdxToCanLineTerminator = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(onlyRelevantTypes, function (tokType) {
                if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["has"])(tokType, "LINE_BREAKS")) {
                    return tokType.LINE_BREAKS;
                }
                else {
                    if (checkLineBreaksIssues(tokType, lineTerminatorCharCodes) === false) {
                        return Object(_reg_exp__WEBPACK_IMPORTED_MODULE_3__["canMatchCharCode"])(lineTerminatorCharCodes, tokType.PATTERN);
                    }
                }
            });
        }
    });
    var patternIdxToIsCustom;
    var patternIdxToShort;
    var emptyGroups;
    var patternIdxToConfig;
    tracer("Misc Mapping #2", function () {
        patternIdxToIsCustom = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(onlyRelevantTypes, isCustomPattern);
        patternIdxToShort = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(allTransformedPatterns, isShortPattern);
        emptyGroups = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["reduce"])(onlyRelevantTypes, function (acc, clazz) {
            var groupName = clazz.GROUP;
            if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isString"])(groupName) && !(groupName === _lexer_public__WEBPACK_IMPORTED_MODULE_1__["Lexer"].SKIPPED)) {
                acc[groupName] = [];
            }
            return acc;
        }, {});
        patternIdxToConfig = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(allTransformedPatterns, function (x, idx) {
            return {
                pattern: allTransformedPatterns[idx],
                longerAlt: patternIdxToLongerAltIdx[idx],
                canLineTerminator: patternIdxToCanLineTerminator[idx],
                isCustom: patternIdxToIsCustom[idx],
                short: patternIdxToShort[idx],
                group: patternIdxToGroup[idx],
                push: patternIdxToPushMode[idx],
                pop: patternIdxToPopMode[idx],
                tokenTypeIdx: patternIdxToType[idx],
                tokenType: onlyRelevantTypes[idx]
            };
        });
    });
    var canBeOptimized = true;
    var charCodeToPatternIdxToConfig = [];
    if (!options.safeMode) {
        tracer("First Char Optimization", function () {
            charCodeToPatternIdxToConfig = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["reduce"])(onlyRelevantTypes, function (result, currTokType, idx) {
                if (typeof currTokType.PATTERN === "string") {
                    var charCode = currTokType.PATTERN.charCodeAt(0);
                    var optimizedIdx = charCodeToOptimizedIndex(charCode);
                    addToMapOfArrays(result, optimizedIdx, patternIdxToConfig[idx]);
                }
                else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isArray"])(currTokType.START_CHARS_HINT)) {
                    var lastOptimizedIdx_1;
                    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["forEach"])(currTokType.START_CHARS_HINT, function (charOrInt) {
                        var charCode = typeof charOrInt === "string"
                            ? charOrInt.charCodeAt(0)
                            : charOrInt;
                        var currOptimizedIdx = charCodeToOptimizedIndex(charCode);
                        // Avoid adding the config multiple times
                        if (lastOptimizedIdx_1 !== currOptimizedIdx) {
                            lastOptimizedIdx_1 = currOptimizedIdx;
                            addToMapOfArrays(result, currOptimizedIdx, patternIdxToConfig[idx]);
                        }
                    });
                }
                else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isRegExp"])(currTokType.PATTERN)) {
                    if (currTokType.PATTERN.unicode) {
                        canBeOptimized = false;
                        if (options.ensureOptimizations) {
                            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["PRINT_ERROR"])("" + _reg_exp__WEBPACK_IMPORTED_MODULE_3__["failedOptimizationPrefixMsg"] +
                                ("\tUnable to analyze < " + currTokType.PATTERN.toString() + " > pattern.\n") +
                                "\tThe regexp unicode flag is not currently supported by the regexp-to-ast library.\n" +
                                "\tThis will disable the lexer's first char optimizations.\n" +
                                "\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE");
                        }
                    }
                    else {
                        var optimizedCodes = Object(_reg_exp__WEBPACK_IMPORTED_MODULE_3__["getOptimizedStartCodesIndices"])(currTokType.PATTERN, options.ensureOptimizations);
                        /* istanbul ignore if */
                        // start code will only be empty given an empty regExp or failure of regexp-to-ast library
                        // the first should be a different validation and the second cannot be tested.
                        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(optimizedCodes)) {
                            // we cannot understand what codes may start possible matches
                            // The optimization correctness requires knowing start codes for ALL patterns.
                            // Not actually sure this is an error, no debug message
                            canBeOptimized = false;
                        }
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["forEach"])(optimizedCodes, function (code) {
                            addToMapOfArrays(result, code, patternIdxToConfig[idx]);
                        });
                    }
                }
                else {
                    if (options.ensureOptimizations) {
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["PRINT_ERROR"])("" + _reg_exp__WEBPACK_IMPORTED_MODULE_3__["failedOptimizationPrefixMsg"] +
                            ("\tTokenType: <" + currTokType.name + "> is using a custom token pattern without providing <start_chars_hint> parameter.\n") +
                            "\tThis will disable the lexer's first char optimizations.\n" +
                            "\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE");
                    }
                    canBeOptimized = false;
                }
                return result;
            }, []);
        });
    }
    tracer("ArrayPacking", function () {
        charCodeToPatternIdxToConfig = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["packArray"])(charCodeToPatternIdxToConfig);
    });
    return {
        emptyGroups: emptyGroups,
        patternIdxToConfig: patternIdxToConfig,
        charCodeToPatternIdxToConfig: charCodeToPatternIdxToConfig,
        hasCustom: hasCustom,
        canBeOptimized: canBeOptimized
    };
}
function validatePatterns(tokenTypes, validModesNames) {
    var errors = [];
    var missingResult = findMissingPatterns(tokenTypes);
    errors = errors.concat(missingResult.errors);
    var invalidResult = findInvalidPatterns(missingResult.valid);
    var validTokenTypes = invalidResult.valid;
    errors = errors.concat(invalidResult.errors);
    errors = errors.concat(validateRegExpPattern(validTokenTypes));
    errors = errors.concat(findInvalidGroupType(validTokenTypes));
    errors = errors.concat(findModesThatDoNotExist(validTokenTypes, validModesNames));
    errors = errors.concat(findUnreachablePatterns(validTokenTypes));
    return errors;
}
function validateRegExpPattern(tokenTypes) {
    var errors = [];
    var withRegExpPatterns = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["filter"])(tokenTypes, function (currTokType) {
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isRegExp"])(currTokType[PATTERN]);
    });
    errors = errors.concat(findEndOfInputAnchor(withRegExpPatterns));
    errors = errors.concat(findStartOfInputAnchor(withRegExpPatterns));
    errors = errors.concat(findUnsupportedFlags(withRegExpPatterns));
    errors = errors.concat(findDuplicatePatterns(withRegExpPatterns));
    errors = errors.concat(findEmptyMatchRegExps(withRegExpPatterns));
    return errors;
}
function findMissingPatterns(tokenTypes) {
    var tokenTypesWithMissingPattern = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["filter"])(tokenTypes, function (currType) {
        return !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["has"])(currType, PATTERN);
    });
    var errors = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(tokenTypesWithMissingPattern, function (currType) {
        return {
            message: "Token Type: ->" +
                currType.name +
                "<- missing static 'PATTERN' property",
            type: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].MISSING_PATTERN,
            tokenTypes: [currType]
        };
    });
    var valid = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["difference"])(tokenTypes, tokenTypesWithMissingPattern);
    return { errors: errors, valid: valid };
}
function findInvalidPatterns(tokenTypes) {
    var tokenTypesWithInvalidPattern = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["filter"])(tokenTypes, function (currType) {
        var pattern = currType[PATTERN];
        return (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isRegExp"])(pattern) &&
            !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(pattern) &&
            !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["has"])(pattern, "exec") &&
            !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isString"])(pattern));
    });
    var errors = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(tokenTypesWithInvalidPattern, function (currType) {
        return {
            message: "Token Type: ->" +
                currType.name +
                "<- static 'PATTERN' can only be a RegExp, a" +
                " Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
            type: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].INVALID_PATTERN,
            tokenTypes: [currType]
        };
    });
    var valid = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["difference"])(tokenTypes, tokenTypesWithInvalidPattern);
    return { errors: errors, valid: valid };
}
var end_of_input = /[^\\][\$]/;
function findEndOfInputAnchor(tokenTypes) {
    var EndAnchorFinder = /** @class */ (function (_super) {
        __extends(EndAnchorFinder, _super);
        function EndAnchorFinder() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.found = false;
            return _this;
        }
        EndAnchorFinder.prototype.visitEndAnchor = function (node) {
            this.found = true;
        };
        return EndAnchorFinder;
    }(regexp_to_ast__WEBPACK_IMPORTED_MODULE_0__["BaseRegExpVisitor"]));
    var invalidRegex = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["filter"])(tokenTypes, function (currType) {
        var pattern = currType[PATTERN];
        try {
            var regexpAst = Object(_reg_exp_parser__WEBPACK_IMPORTED_MODULE_4__["getRegExpAst"])(pattern);
            var endAnchorVisitor = new EndAnchorFinder();
            endAnchorVisitor.visit(regexpAst);
            return endAnchorVisitor.found;
        }
        catch (e) {
            // old behavior in case of runtime exceptions with regexp-to-ast.
            /* istanbul ignore next - cannot ensure an error in regexp-to-ast*/
            return end_of_input.test(pattern.source);
        }
    });
    var errors = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(invalidRegex, function (currType) {
        return {
            message: "Unexpected RegExp Anchor Error:\n" +
                "\tToken Type: ->" +
                currType.name +
                "<- static 'PATTERN' cannot contain end of input anchor '$'\n" +
                "\tSee sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#ANCHORS" +
                "\tfor details.",
            type: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].EOI_ANCHOR_FOUND,
            tokenTypes: [currType]
        };
    });
    return errors;
}
function findEmptyMatchRegExps(tokenTypes) {
    var matchesEmptyString = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["filter"])(tokenTypes, function (currType) {
        var pattern = currType[PATTERN];
        return pattern.test("");
    });
    var errors = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(matchesEmptyString, function (currType) {
        return {
            message: "Token Type: ->" +
                currType.name +
                "<- static 'PATTERN' must not match an empty string",
            type: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].EMPTY_MATCH_PATTERN,
            tokenTypes: [currType]
        };
    });
    return errors;
}
var start_of_input = /[^\\[][\^]|^\^/;
function findStartOfInputAnchor(tokenTypes) {
    var StartAnchorFinder = /** @class */ (function (_super) {
        __extends(StartAnchorFinder, _super);
        function StartAnchorFinder() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.found = false;
            return _this;
        }
        StartAnchorFinder.prototype.visitStartAnchor = function (node) {
            this.found = true;
        };
        return StartAnchorFinder;
    }(regexp_to_ast__WEBPACK_IMPORTED_MODULE_0__["BaseRegExpVisitor"]));
    var invalidRegex = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["filter"])(tokenTypes, function (currType) {
        var pattern = currType[PATTERN];
        try {
            var regexpAst = Object(_reg_exp_parser__WEBPACK_IMPORTED_MODULE_4__["getRegExpAst"])(pattern);
            var startAnchorVisitor = new StartAnchorFinder();
            startAnchorVisitor.visit(regexpAst);
            return startAnchorVisitor.found;
        }
        catch (e) {
            // old behavior in case of runtime exceptions with regexp-to-ast.
            /* istanbul ignore next - cannot ensure an error in regexp-to-ast*/
            return start_of_input.test(pattern.source);
        }
    });
    var errors = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(invalidRegex, function (currType) {
        return {
            message: "Unexpected RegExp Anchor Error:\n" +
                "\tToken Type: ->" +
                currType.name +
                "<- static 'PATTERN' cannot contain start of input anchor '^'\n" +
                "\tSee https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#ANCHORS" +
                "\tfor details.",
            type: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].SOI_ANCHOR_FOUND,
            tokenTypes: [currType]
        };
    });
    return errors;
}
function findUnsupportedFlags(tokenTypes) {
    var invalidFlags = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["filter"])(tokenTypes, function (currType) {
        var pattern = currType[PATTERN];
        return (pattern instanceof RegExp && (pattern.multiline || pattern.global));
    });
    var errors = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(invalidFlags, function (currType) {
        return {
            message: "Token Type: ->" +
                currType.name +
                "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
            type: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].UNSUPPORTED_FLAGS_FOUND,
            tokenTypes: [currType]
        };
    });
    return errors;
}
// This can only test for identical duplicate RegExps, not semantically equivalent ones.
function findDuplicatePatterns(tokenTypes) {
    var found = [];
    var identicalPatterns = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(tokenTypes, function (outerType) {
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["reduce"])(tokenTypes, function (result, innerType) {
            if (outerType.PATTERN.source === innerType.PATTERN.source &&
                !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["contains"])(found, innerType) &&
                innerType.PATTERN !== _lexer_public__WEBPACK_IMPORTED_MODULE_1__["Lexer"].NA) {
                // this avoids duplicates in the result, each Token Type may only appear in one "set"
                // in essence we are creating Equivalence classes on equality relation.
                found.push(innerType);
                result.push(innerType);
                return result;
            }
            return result;
        }, []);
    });
    identicalPatterns = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["compact"])(identicalPatterns);
    var duplicatePatterns = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["filter"])(identicalPatterns, function (currIdenticalSet) {
        return currIdenticalSet.length > 1;
    });
    var errors = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(duplicatePatterns, function (setOfIdentical) {
        var tokenTypeNames = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(setOfIdentical, function (currType) {
            return currType.name;
        });
        var dupPatternSrc = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["first"])(setOfIdentical).PATTERN;
        return {
            message: "The same RegExp pattern ->" + dupPatternSrc + "<-" +
                ("has been used in all of the following Token Types: " + tokenTypeNames.join(", ") + " <-"),
            type: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].DUPLICATE_PATTERNS_FOUND,
            tokenTypes: setOfIdentical
        };
    });
    return errors;
}
function findInvalidGroupType(tokenTypes) {
    var invalidTypes = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["filter"])(tokenTypes, function (clazz) {
        if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["has"])(clazz, "GROUP")) {
            return false;
        }
        var group = clazz.GROUP;
        return group !== _lexer_public__WEBPACK_IMPORTED_MODULE_1__["Lexer"].SKIPPED && group !== _lexer_public__WEBPACK_IMPORTED_MODULE_1__["Lexer"].NA && !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isString"])(group);
    });
    var errors = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(invalidTypes, function (currType) {
        return {
            message: "Token Type: ->" +
                currType.name +
                "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
            type: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].INVALID_GROUP_TYPE_FOUND,
            tokenTypes: [currType]
        };
    });
    return errors;
}
function findModesThatDoNotExist(tokenTypes, validModes) {
    var invalidModes = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["filter"])(tokenTypes, function (clazz) {
        return (clazz.PUSH_MODE !== undefined &&
            !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["contains"])(validModes, clazz.PUSH_MODE));
    });
    var errors = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(invalidModes, function (tokType) {
        var msg = "Token Type: ->" + tokType.name + "<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->" + tokType.PUSH_MODE + "<-" +
            "which does not exist";
        return {
            message: msg,
            type: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].PUSH_MODE_DOES_NOT_EXIST,
            tokenTypes: [tokType]
        };
    });
    return errors;
}
function findUnreachablePatterns(tokenTypes) {
    var errors = [];
    var canBeTested = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["reduce"])(tokenTypes, function (result, tokType, idx) {
        var pattern = tokType.PATTERN;
        if (pattern === _lexer_public__WEBPACK_IMPORTED_MODULE_1__["Lexer"].NA) {
            return result;
        }
        // a more comprehensive validation for all forms of regExps would require
        // deeper regExp analysis capabilities
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isString"])(pattern)) {
            result.push({ str: pattern, idx: idx, tokenType: tokType });
        }
        else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isRegExp"])(pattern) && noMetaChar(pattern)) {
            result.push({ str: pattern.source, idx: idx, tokenType: tokType });
        }
        return result;
    }, []);
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["forEach"])(tokenTypes, function (tokType, testIdx) {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["forEach"])(canBeTested, function (_a) {
            var str = _a.str, idx = _a.idx, tokenType = _a.tokenType;
            if (testIdx < idx && testTokenType(str, tokType.PATTERN)) {
                var msg = "Token: ->" + tokenType.name + "<- can never be matched.\n" +
                    ("Because it appears AFTER the Token Type ->" + tokType.name + "<-") +
                    "in the lexer's definition.\n" +
                    "See https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#UNREACHABLE";
                errors.push({
                    message: msg,
                    type: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].UNREACHABLE_PATTERN,
                    tokenTypes: [tokType, tokenType]
                });
            }
        });
    });
    return errors;
}
function testTokenType(str, pattern) {
    /* istanbul ignore else */
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isRegExp"])(pattern)) {
        var regExpArray = pattern.exec(str);
        return regExpArray !== null && regExpArray.index === 0;
    }
    else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(pattern)) {
        // maintain the API of custom patterns
        return pattern(str, 0, [], {});
    }
    else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["has"])(pattern, "exec")) {
        // maintain the API of custom patterns
        return pattern.exec(str, 0, [], {});
    }
    else if (typeof pattern === "string") {
        return pattern === str;
    }
    else {
        throw Error("non exhaustive match");
    }
}
function noMetaChar(regExp) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    var metaChars = [
        ".",
        "\\",
        "[",
        "]",
        "|",
        "^",
        "$",
        "(",
        ")",
        "?",
        "*",
        "+",
        "{"
    ];
    return (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["find"])(metaChars, function (char) { return regExp.source.indexOf(char) !== -1; }) ===
        undefined);
}
function addStartOfInput(pattern) {
    var flags = pattern.ignoreCase ? "i" : "";
    // always wrapping in a none capturing group preceded by '^' to make sure matching can only work on start of input.
    // duplicate/redundant start of input markers have no meaning (/^^^^A/ === /^A/)
    return new RegExp("^(?:" + pattern.source + ")", flags);
}
function addStickyFlag(pattern) {
    var flags = pattern.ignoreCase ? "iy" : "y";
    // always wrapping in a none capturing group preceded by '^' to make sure matching can only work on start of input.
    // duplicate/redundant start of input markers have no meaning (/^^^^A/ === /^A/)
    return new RegExp("" + pattern.source, flags);
}
function performRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
    var errors = [];
    // some run time checks to help the end users.
    if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["has"])(lexerDefinition, DEFAULT_MODE)) {
        errors.push({
            message: "A MultiMode Lexer cannot be initialized without a <" +
                DEFAULT_MODE +
                "> property in its definition\n",
            type: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
        });
    }
    if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["has"])(lexerDefinition, MODES)) {
        errors.push({
            message: "A MultiMode Lexer cannot be initialized without a <" +
                MODES +
                "> property in its definition\n",
            type: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
        });
    }
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["has"])(lexerDefinition, MODES) &&
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["has"])(lexerDefinition, DEFAULT_MODE) &&
        !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["has"])(lexerDefinition.modes, lexerDefinition.defaultMode)) {
        errors.push({
            message: "A MultiMode Lexer cannot be initialized with a " + DEFAULT_MODE + ": <" + lexerDefinition.defaultMode + ">" +
                "which does not exist\n",
            type: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
        });
    }
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["has"])(lexerDefinition, MODES)) {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["forEach"])(lexerDefinition.modes, function (currModeValue, currModeName) {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["forEach"])(currModeValue, function (currTokType, currIdx) {
                if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(currTokType)) {
                    errors.push({
                        message: "A Lexer cannot be initialized using an undefined Token Type. Mode:" +
                            ("<" + currModeName + "> at index: <" + currIdx + ">\n"),
                        type: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
                    });
                }
            });
        });
    }
    return errors;
}
function performWarningRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
    var warnings = [];
    var hasAnyLineBreak = false;
    var allTokenTypes = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["compact"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["flatten"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["mapValues"])(lexerDefinition.modes, function (tokTypes) { return tokTypes; })));
    var concreteTokenTypes = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["reject"])(allTokenTypes, function (currType) { return currType[PATTERN] === _lexer_public__WEBPACK_IMPORTED_MODULE_1__["Lexer"].NA; });
    var terminatorCharCodes = getCharCodes(lineTerminatorCharacters);
    if (trackLines) {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["forEach"])(concreteTokenTypes, function (tokType) {
            var currIssue = checkLineBreaksIssues(tokType, terminatorCharCodes);
            if (currIssue !== false) {
                var message = buildLineBreakIssueMessage(tokType, currIssue);
                var warningDescriptor = {
                    message: message,
                    type: currIssue.issue,
                    tokenType: tokType
                };
                warnings.push(warningDescriptor);
            }
            else {
                // we don't want to attempt to scan if the user explicitly specified the line_breaks option.
                if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["has"])(tokType, "LINE_BREAKS")) {
                    if (tokType.LINE_BREAKS === true) {
                        hasAnyLineBreak = true;
                    }
                }
                else {
                    if (Object(_reg_exp__WEBPACK_IMPORTED_MODULE_3__["canMatchCharCode"])(terminatorCharCodes, tokType.PATTERN)) {
                        hasAnyLineBreak = true;
                    }
                }
            }
        });
    }
    if (trackLines && !hasAnyLineBreak) {
        warnings.push({
            message: "Warning: No LINE_BREAKS Found.\n" +
                "\tThis Lexer has been defined to track line and column information,\n" +
                "\tBut none of the Token Types can be identified as matching a line terminator.\n" +
                "\tSee https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n" +
                "\tfor details.",
            type: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].NO_LINE_BREAKS_FLAGS
        });
    }
    return warnings;
}
function cloneEmptyGroups(emptyGroups) {
    var clonedResult = {};
    var groupKeys = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["keys"])(emptyGroups);
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["forEach"])(groupKeys, function (currKey) {
        var currGroupValue = emptyGroups[currKey];
        /* istanbul ignore else */
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isArray"])(currGroupValue)) {
            clonedResult[currKey] = [];
        }
        else {
            throw Error("non exhaustive match");
        }
    });
    return clonedResult;
}
// TODO: refactor to avoid duplication
function isCustomPattern(tokenType) {
    var pattern = tokenType.PATTERN;
    /* istanbul ignore else */
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isRegExp"])(pattern)) {
        return false;
    }
    else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(pattern)) {
        // CustomPatternMatcherFunc - custom patterns do not require any transformations, only wrapping in a RegExp Like object
        return true;
    }
    else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["has"])(pattern, "exec")) {
        // ICustomPattern
        return true;
    }
    else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isString"])(pattern)) {
        return false;
    }
    else {
        throw Error("non exhaustive match");
    }
}
function isShortPattern(pattern) {
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isString"])(pattern) && pattern.length === 1) {
        return pattern.charCodeAt(0);
    }
    else {
        return false;
    }
}
/**
 * Faster than using a RegExp for default newline detection during lexing.
 */
var LineTerminatorOptimizedTester = {
    // implements /\n|\r\n?/g.test
    test: function (text) {
        var len = text.length;
        for (var i = this.lastIndex; i < len; i++) {
            var c = text.charCodeAt(i);
            if (c === 10) {
                this.lastIndex = i + 1;
                return true;
            }
            else if (c === 13) {
                if (text.charCodeAt(i + 1) === 10) {
                    this.lastIndex = i + 2;
                }
                else {
                    this.lastIndex = i + 1;
                }
                return true;
            }
        }
        return false;
    },
    lastIndex: 0
};
function checkLineBreaksIssues(tokType, lineTerminatorCharCodes) {
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["has"])(tokType, "LINE_BREAKS")) {
        // if the user explicitly declared the line_breaks option we will respect their choice
        // and assume it is correct.
        return false;
    }
    else {
        /* istanbul ignore else */
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isRegExp"])(tokType.PATTERN)) {
            try {
                Object(_reg_exp__WEBPACK_IMPORTED_MODULE_3__["canMatchCharCode"])(lineTerminatorCharCodes, tokType.PATTERN);
            }
            catch (e) {
                /* istanbul ignore next - to test this we would have to mock <canMatchCharCode> to throw an error */
                return {
                    issue: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].IDENTIFY_TERMINATOR,
                    errMsg: e.message
                };
            }
            return false;
        }
        else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isString"])(tokType.PATTERN)) {
            // string literal patterns can always be analyzed to detect line terminator usage
            return false;
        }
        else if (isCustomPattern(tokType)) {
            // custom token types
            return { issue: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].CUSTOM_LINE_BREAK };
        }
        else {
            throw Error("non exhaustive match");
        }
    }
}
function buildLineBreakIssueMessage(tokType, details) {
    /* istanbul ignore else */
    if (details.issue === _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].IDENTIFY_TERMINATOR) {
        return ("Warning: unable to identify line terminator usage in pattern.\n" +
            ("\tThe problem is in the <" + tokType.name + "> Token Type\n") +
            ("\t Root cause: " + details.errMsg + ".\n") +
            "\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR");
    }
    else if (details.issue === _lexer_public__WEBPACK_IMPORTED_MODULE_1__["LexerDefinitionErrorType"].CUSTOM_LINE_BREAK) {
        return ("Warning: A Custom Token Pattern should specify the <line_breaks> option.\n" +
            ("\tThe problem is in the <" + tokType.name + "> Token Type\n") +
            "\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK");
    }
    else {
        throw Error("non exhaustive match");
    }
}
function getCharCodes(charsOrCodes) {
    var charCodes = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["map"])(charsOrCodes, function (numOrString) {
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isString"])(numOrString) && numOrString.length > 0) {
            return numOrString.charCodeAt(0);
        }
        else {
            return numOrString;
        }
    });
    return charCodes;
}
function addToMapOfArrays(map, key, value) {
    if (map[key] === undefined) {
        map[key] = [value];
    }
    else {
        map[key].push(value);
    }
}
var minOptimizationVal = 256;
/**
 * We ae mapping charCode above ASCI (256) into buckets each in the size of 256.
 * This is because ASCI are the most common start chars so each one of those will get its own
 * possible token configs vector.
 *
 * Tokens starting with charCodes "above" ASCI are uncommon, so we can "afford"
 * to place these into buckets of possible token configs, What we gain from
 * this is avoiding the case of creating an optimization 'charCodeToPatternIdxToConfig'
 * which would contain 10,000+ arrays of small size (e.g unicode Identifiers scenario).
 * Our 'charCodeToPatternIdxToConfig' max size will now be:
 * 256 + (2^16 / 2^8) - 1 === 511
 *
 * note the hack for fast division integer part extraction
 * See: https://stackoverflow.com/a/4228528
 */
function charCodeToOptimizedIndex(charCode) {
    return charCode < minOptimizationVal
        ? charCode
        : charCodeToOptimizedIdxMap[charCode];
}
/**
 * This is a compromise between cold start / hot running performance
 * Creating this array takes ~3ms on a modern machine,
 * But if we perform the computation at runtime as needed the CSS Lexer benchmark
 * performance degrades by ~10%
 *
 * TODO: Perhaps it should be lazy initialized only if a charCode > 255 is used.
 */
var charCodeToOptimizedIdxMap = [];
function initCharCodeToOptimizedIndexMap() {
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(charCodeToOptimizedIdxMap)) {
        charCodeToOptimizedIdxMap = new Array(65536);
        for (var i = 0; i < 65536; i++) {
            /* tslint:disable */
            charCodeToOptimizedIdxMap[i] = i > 255 ? 255 + ~~(i / 255) : i;
            /* tslint:enable */
        }
    }
}
//# sourceMappingURL=lexer.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/scan/lexer_errors_public.js":
/*!*************************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/scan/lexer_errors_public.js ***!
  \*************************************************************************/
/*! exports provided: defaultLexerErrorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLexerErrorProvider", function() { return defaultLexerErrorProvider; });
var defaultLexerErrorProvider = {
    buildUnableToPopLexerModeMessage: function (token) {
        return "Unable to pop Lexer Mode after encountering Token ->" + token.image + "<- The Mode Stack is empty";
    },
    buildUnexpectedCharactersMessage: function (fullText, startOffset, length, line, column) {
        return ("unexpected character: ->" + fullText.charAt(startOffset) + "<- at offset: " + startOffset + "," + (" skipped " + length + " characters."));
    }
};
//# sourceMappingURL=lexer_errors_public.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/scan/lexer_public.js":
/*!******************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/scan/lexer_public.js ***!
  \******************************************************************/
/*! exports provided: LexerDefinitionErrorType, Lexer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LexerDefinitionErrorType", function() { return LexerDefinitionErrorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lexer", function() { return Lexer; });
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lexer */ "./node_modules/chevrotain/lib_esm/src/scan/lexer.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens */ "./node_modules/chevrotain/lib_esm/src/scan/tokens.js");
/* harmony import */ var _scan_lexer_errors_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scan/lexer_errors_public */ "./node_modules/chevrotain/lib_esm/src/scan/lexer_errors_public.js");
/* harmony import */ var _reg_exp_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reg_exp_parser */ "./node_modules/chevrotain/lib_esm/src/scan/reg_exp_parser.js");





var LexerDefinitionErrorType;
(function (LexerDefinitionErrorType) {
    LexerDefinitionErrorType[LexerDefinitionErrorType["MISSING_PATTERN"] = 0] = "MISSING_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["INVALID_PATTERN"] = 1] = "INVALID_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["EOI_ANCHOR_FOUND"] = 2] = "EOI_ANCHOR_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["UNSUPPORTED_FLAGS_FOUND"] = 3] = "UNSUPPORTED_FLAGS_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["DUPLICATE_PATTERNS_FOUND"] = 4] = "DUPLICATE_PATTERNS_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["INVALID_GROUP_TYPE_FOUND"] = 5] = "INVALID_GROUP_TYPE_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["PUSH_MODE_DOES_NOT_EXIST"] = 6] = "PUSH_MODE_DOES_NOT_EXIST";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE"] = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY"] = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY";
    LexerDefinitionErrorType[LexerDefinitionErrorType["MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST"] = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST";
    LexerDefinitionErrorType[LexerDefinitionErrorType["LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED"] = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED";
    LexerDefinitionErrorType[LexerDefinitionErrorType["SOI_ANCHOR_FOUND"] = 11] = "SOI_ANCHOR_FOUND";
    LexerDefinitionErrorType[LexerDefinitionErrorType["EMPTY_MATCH_PATTERN"] = 12] = "EMPTY_MATCH_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["NO_LINE_BREAKS_FLAGS"] = 13] = "NO_LINE_BREAKS_FLAGS";
    LexerDefinitionErrorType[LexerDefinitionErrorType["UNREACHABLE_PATTERN"] = 14] = "UNREACHABLE_PATTERN";
    LexerDefinitionErrorType[LexerDefinitionErrorType["IDENTIFY_TERMINATOR"] = 15] = "IDENTIFY_TERMINATOR";
    LexerDefinitionErrorType[LexerDefinitionErrorType["CUSTOM_LINE_BREAK"] = 16] = "CUSTOM_LINE_BREAK";
})(LexerDefinitionErrorType || (LexerDefinitionErrorType = {}));
var DEFAULT_LEXER_CONFIG = {
    deferDefinitionErrorsHandling: false,
    positionTracking: "full",
    lineTerminatorsPattern: /\n|\r\n?/g,
    lineTerminatorCharacters: ["\n", "\r"],
    ensureOptimizations: false,
    safeMode: false,
    errorMessageProvider: _scan_lexer_errors_public__WEBPACK_IMPORTED_MODULE_3__["defaultLexerErrorProvider"],
    traceInitPerf: false,
    skipValidations: false
};
Object.freeze(DEFAULT_LEXER_CONFIG);
var Lexer = /** @class */ (function () {
    function Lexer(lexerDefinition, config) {
        var _this = this;
        if (config === void 0) { config = DEFAULT_LEXER_CONFIG; }
        this.lexerDefinition = lexerDefinition;
        this.lexerDefinitionErrors = [];
        this.lexerDefinitionWarning = [];
        this.patternIdxToConfig = {};
        this.charCodeToPatternIdxToConfig = {};
        this.modes = [];
        this.emptyGroups = {};
        this.config = undefined;
        this.trackStartLines = true;
        this.trackEndLines = true;
        this.hasCustom = false;
        this.canModeBeOptimized = {};
        if (typeof config === "boolean") {
            throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\n" +
                "a boolean 2nd argument is no longer supported");
        }
        // todo: defaults func?
        this.config = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["merge"])(DEFAULT_LEXER_CONFIG, config);
        var traceInitVal = this.config.traceInitPerf;
        if (traceInitVal === true) {
            this.traceInitMaxIdent = Infinity;
            this.traceInitPerf = true;
        }
        else if (typeof traceInitVal === "number") {
            this.traceInitMaxIdent = traceInitVal;
            this.traceInitPerf = true;
        }
        this.traceInitIndent = -1;
        this.TRACE_INIT("Lexer Constructor", function () {
            var actualDefinition;
            var hasOnlySingleMode = true;
            _this.TRACE_INIT("Lexer Config handling", function () {
                if (_this.config.lineTerminatorsPattern ===
                    DEFAULT_LEXER_CONFIG.lineTerminatorsPattern) {
                    // optimized built-in implementation for the defaults definition of lineTerminators
                    _this.config.lineTerminatorsPattern = _lexer__WEBPACK_IMPORTED_MODULE_0__["LineTerminatorOptimizedTester"];
                }
                else {
                    if (_this.config.lineTerminatorCharacters ===
                        DEFAULT_LEXER_CONFIG.lineTerminatorCharacters) {
                        throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n" +
                            "\tFor details See: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");
                    }
                }
                if (config.safeMode && config.ensureOptimizations) {
                    throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
                }
                _this.trackStartLines = /full|onlyStart/i.test(_this.config.positionTracking);
                _this.trackEndLines = /full/i.test(_this.config.positionTracking);
                // Convert SingleModeLexerDefinition into a IMultiModeLexerDefinition.
                if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(lexerDefinition)) {
                    actualDefinition = { modes: {} };
                    actualDefinition.modes[_lexer__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MODE"]] = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["cloneArr"])(lexerDefinition);
                    actualDefinition[_lexer__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MODE"]] = _lexer__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_MODE"];
                }
                else {
                    // no conversion needed, input should already be a IMultiModeLexerDefinition
                    hasOnlySingleMode = false;
                    actualDefinition = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["cloneObj"])((lexerDefinition));
                }
            });
            if (_this.config.skipValidations === false) {
                _this.TRACE_INIT("performRuntimeChecks", function () {
                    _this.lexerDefinitionErrors = _this.lexerDefinitionErrors.concat(Object(_lexer__WEBPACK_IMPORTED_MODULE_0__["performRuntimeChecks"])(actualDefinition, _this.trackStartLines, _this.config.lineTerminatorCharacters));
                });
                _this.TRACE_INIT("performWarningRuntimeChecks", function () {
                    _this.lexerDefinitionWarning = _this.lexerDefinitionWarning.concat(Object(_lexer__WEBPACK_IMPORTED_MODULE_0__["performWarningRuntimeChecks"])(actualDefinition, _this.trackStartLines, _this.config.lineTerminatorCharacters));
                });
            }
            // for extra robustness to avoid throwing an none informative error message
            actualDefinition.modes = actualDefinition.modes
                ? actualDefinition.modes
                : {};
            // an error of undefined TokenTypes will be detected in "performRuntimeChecks" above.
            // this transformation is to increase robustness in the case of partially invalid lexer definition.
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["forEach"])(actualDefinition.modes, function (currModeValue, currModeName) {
                actualDefinition.modes[currModeName] = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["reject"])(currModeValue, function (currTokType) { return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(currTokType); });
            });
            var allModeNames = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["keys"])(actualDefinition.modes);
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["forEach"])(actualDefinition.modes, function (currModDef, currModName) {
                _this.TRACE_INIT("Mode: <" + currModName + "> processing", function () {
                    _this.modes.push(currModName);
                    if (_this.config.skipValidations === false) {
                        _this.TRACE_INIT("validatePatterns", function () {
                            _this.lexerDefinitionErrors = _this.lexerDefinitionErrors.concat(Object(_lexer__WEBPACK_IMPORTED_MODULE_0__["validatePatterns"])(currModDef, allModeNames));
                        });
                    }
                    // If definition errors were encountered, the analysis phase may fail unexpectedly/
                    // Considering a lexer with definition errors may never be used, there is no point
                    // to performing the analysis anyhow...
                    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(_this.lexerDefinitionErrors)) {
                        Object(_tokens__WEBPACK_IMPORTED_MODULE_2__["augmentTokenTypes"])(currModDef);
                        var currAnalyzeResult_1;
                        _this.TRACE_INIT("analyzeTokenTypes", function () {
                            currAnalyzeResult_1 = Object(_lexer__WEBPACK_IMPORTED_MODULE_0__["analyzeTokenTypes"])(currModDef, {
                                lineTerminatorCharacters: _this.config
                                    .lineTerminatorCharacters,
                                positionTracking: config.positionTracking,
                                ensureOptimizations: config.ensureOptimizations,
                                safeMode: config.safeMode,
                                tracer: _this.TRACE_INIT.bind(_this)
                            });
                        });
                        _this.patternIdxToConfig[currModName] =
                            currAnalyzeResult_1.patternIdxToConfig;
                        _this.charCodeToPatternIdxToConfig[currModName] =
                            currAnalyzeResult_1.charCodeToPatternIdxToConfig;
                        _this.emptyGroups = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["merge"])(_this.emptyGroups, currAnalyzeResult_1.emptyGroups);
                        _this.hasCustom =
                            currAnalyzeResult_1.hasCustom || _this.hasCustom;
                        _this.canModeBeOptimized[currModName] =
                            currAnalyzeResult_1.canBeOptimized;
                    }
                });
            });
            _this.defaultMode = actualDefinition.defaultMode;
            if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(_this.lexerDefinitionErrors) &&
                !_this.config.deferDefinitionErrorsHandling) {
                var allErrMessages = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(_this.lexerDefinitionErrors, function (error) {
                    return error.message;
                });
                var allErrMessagesString = allErrMessages.join("-----------------------\n");
                throw new Error("Errors detected in definition of Lexer:\n" +
                    allErrMessagesString);
            }
            // Only print warning if there are no errors, This will avoid pl
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["forEach"])(_this.lexerDefinitionWarning, function (warningDescriptor) {
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["PRINT_WARNING"])(warningDescriptor.message);
            });
            _this.TRACE_INIT("Choosing sub-methods implementations", function () {
                // Choose the relevant internal implementations for this specific parser.
                // These implementations should be in-lined by the JavaScript engine
                // to provide optimal performance in each scenario.
                if (_lexer__WEBPACK_IMPORTED_MODULE_0__["SUPPORT_STICKY"]) {
                    _this.chopInput = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["IDENTITY"];
                    _this.match = _this.matchWithTest;
                }
                else {
                    _this.updateLastIndex = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
                    _this.match = _this.matchWithExec;
                }
                if (hasOnlySingleMode) {
                    _this.handleModes = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
                }
                if (_this.trackStartLines === false) {
                    _this.computeNewColumn = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["IDENTITY"];
                }
                if (_this.trackEndLines === false) {
                    _this.updateTokenEndLineColumnLocation = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["NOOP"];
                }
                if (/full/i.test(_this.config.positionTracking)) {
                    _this.createTokenInstance = _this.createFullToken;
                }
                else if (/onlyStart/i.test(_this.config.positionTracking)) {
                    _this.createTokenInstance = _this.createStartOnlyToken;
                }
                else if (/onlyOffset/i.test(_this.config.positionTracking)) {
                    _this.createTokenInstance = _this.createOffsetOnlyToken;
                }
                else {
                    throw Error("Invalid <positionTracking> config option: \"" + _this.config.positionTracking + "\"");
                }
                if (_this.hasCustom) {
                    _this.addToken = _this.addTokenUsingPush;
                    _this.handlePayload = _this.handlePayloadWithCustom;
                }
                else {
                    _this.addToken = _this.addTokenUsingMemberAccess;
                    _this.handlePayload = _this.handlePayloadNoCustom;
                }
            });
            _this.TRACE_INIT("Failed Optimization Warnings", function () {
                var unOptimizedModes = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["reduce"])(_this.canModeBeOptimized, function (cannotBeOptimized, canBeOptimized, modeName) {
                    if (canBeOptimized === false) {
                        cannotBeOptimized.push(modeName);
                    }
                    return cannotBeOptimized;
                }, []);
                if (config.ensureOptimizations && !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(unOptimizedModes)) {
                    throw Error("Lexer Modes: < " + unOptimizedModes.join(", ") + " > cannot be optimized.\n" +
                        '\t Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.\n' +
                        "\t Or inspect the console log for details on how to resolve these issues.");
                }
            });
            _this.TRACE_INIT("clearRegExpParserCache", function () {
                Object(_reg_exp_parser__WEBPACK_IMPORTED_MODULE_4__["clearRegExpParserCache"])();
            });
            _this.TRACE_INIT("toFastProperties", function () {
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["toFastProperties"])(_this);
            });
        });
    }
    Lexer.prototype.tokenize = function (text, initialMode) {
        if (initialMode === void 0) { initialMode = this.defaultMode; }
        if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(this.lexerDefinitionErrors)) {
            var allErrMessages = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["map"])(this.lexerDefinitionErrors, function (error) {
                return error.message;
            });
            var allErrMessagesString = allErrMessages.join("-----------------------\n");
            throw new Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" +
                allErrMessagesString);
        }
        var lexResult = this.tokenizeInternal(text, initialMode);
        return lexResult;
    };
    // There is quite a bit of duplication between this and "tokenizeInternalLazy"
    // This is intentional due to performance considerations.
    Lexer.prototype.tokenizeInternal = function (text, initialMode) {
        var _this = this;
        var i, j, matchAltImage, longerAltIdx, matchedImage, payload, altPayload, imageLength, group, tokType, newToken, errLength, droppedChar, msg, match;
        var orgText = text;
        var orgLength = orgText.length;
        var offset = 0;
        var matchedTokensIndex = 0;
        // initializing the tokensArray to the "guessed" size.
        // guessing too little will still reduce the number of array re-sizes on pushes.
        // guessing too large (Tested by guessing x4 too large) may cost a bit more of memory
        // but would still have a faster runtime by avoiding (All but one) array resizing.
        var guessedNumberOfTokens = this.hasCustom
            ? 0 // will break custom token pattern APIs the matchedTokens array will contain undefined elements.
            : Math.floor(text.length / 10);
        var matchedTokens = new Array(guessedNumberOfTokens);
        var errors = [];
        var line = this.trackStartLines ? 1 : undefined;
        var column = this.trackStartLines ? 1 : undefined;
        var groups = Object(_lexer__WEBPACK_IMPORTED_MODULE_0__["cloneEmptyGroups"])(this.emptyGroups);
        var trackLines = this.trackStartLines;
        var lineTerminatorPattern = this.config.lineTerminatorsPattern;
        var currModePatternsLength = 0;
        var patternIdxToConfig = [];
        var currCharCodeToPatternIdxToConfig = [];
        var modeStack = [];
        var emptyArray = [];
        Object.freeze(emptyArray);
        var getPossiblePatterns = undefined;
        function getPossiblePatternsSlow() {
            return patternIdxToConfig;
        }
        function getPossiblePatternsOptimized(charCode) {
            var optimizedCharIdx = Object(_lexer__WEBPACK_IMPORTED_MODULE_0__["charCodeToOptimizedIndex"])(charCode);
            var possiblePatterns = currCharCodeToPatternIdxToConfig[optimizedCharIdx];
            if (possiblePatterns === undefined) {
                return emptyArray;
            }
            else {
                return possiblePatterns;
            }
        }
        var pop_mode = function (popToken) {
            // TODO: perhaps avoid this error in the edge case there is no more input?
            if (modeStack.length === 1 &&
                // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
                // So no error should occur.
                popToken.tokenType.PUSH_MODE === undefined) {
                // if we try to pop the last mode there lexer will no longer have ANY mode.
                // thus the pop is ignored, an error will be created and the lexer will continue parsing in the previous mode.
                var msg_1 = _this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(popToken);
                errors.push({
                    offset: popToken.startOffset,
                    line: popToken.startLine !== undefined
                        ? popToken.startLine
                        : undefined,
                    column: popToken.startColumn !== undefined
                        ? popToken.startColumn
                        : undefined,
                    length: popToken.image.length,
                    message: msg_1
                });
            }
            else {
                modeStack.pop();
                var newMode = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["last"])(modeStack);
                patternIdxToConfig = _this.patternIdxToConfig[newMode];
                currCharCodeToPatternIdxToConfig = _this
                    .charCodeToPatternIdxToConfig[newMode];
                currModePatternsLength = patternIdxToConfig.length;
                var modeCanBeOptimized = _this.canModeBeOptimized[newMode] &&
                    _this.config.safeMode === false;
                if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
                    getPossiblePatterns = getPossiblePatternsOptimized;
                }
                else {
                    getPossiblePatterns = getPossiblePatternsSlow;
                }
            }
        };
        function push_mode(newMode) {
            modeStack.push(newMode);
            currCharCodeToPatternIdxToConfig = this
                .charCodeToPatternIdxToConfig[newMode];
            patternIdxToConfig = this.patternIdxToConfig[newMode];
            currModePatternsLength = patternIdxToConfig.length;
            currModePatternsLength = patternIdxToConfig.length;
            var modeCanBeOptimized = this.canModeBeOptimized[newMode] &&
                this.config.safeMode === false;
            if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
                getPossiblePatterns = getPossiblePatternsOptimized;
            }
            else {
                getPossiblePatterns = getPossiblePatternsSlow;
            }
        }
        // this pattern seems to avoid a V8 de-optimization, although that de-optimization does not
        // seem to matter performance wise.
        push_mode.call(this, initialMode);
        var currConfig;
        while (offset < orgLength) {
            matchedImage = null;
            var nextCharCode = orgText.charCodeAt(offset);
            var chosenPatternIdxToConfig = getPossiblePatterns(nextCharCode);
            var chosenPatternsLength = chosenPatternIdxToConfig.length;
            for (i = 0; i < chosenPatternsLength; i++) {
                currConfig = chosenPatternIdxToConfig[i];
                var currPattern = currConfig.pattern;
                payload = null;
                // manually in-lined because > 600 chars won't be in-lined in V8
                var singleCharCode = currConfig.short;
                if (singleCharCode !== false) {
                    if (nextCharCode === singleCharCode) {
                        // single character string
                        matchedImage = currPattern;
                    }
                }
                else if (currConfig.isCustom === true) {
                    match = currPattern.exec(orgText, offset, matchedTokens, groups);
                    if (match !== null) {
                        matchedImage = match[0];
                        if (match.payload !== undefined) {
                            payload = match.payload;
                        }
                    }
                    else {
                        matchedImage = null;
                    }
                }
                else {
                    this.updateLastIndex(currPattern, offset);
                    matchedImage = this.match(currPattern, text, offset);
                }
                if (matchedImage !== null) {
                    // even though this pattern matched we must try a another longer alternative.
                    // this can be used to prioritize keywords over identifiers
                    longerAltIdx = currConfig.longerAlt;
                    if (longerAltIdx !== undefined) {
                        // TODO: micro optimize, avoid extra prop access
                        // by saving/linking longerAlt on the original config?
                        var longerAltConfig = patternIdxToConfig[longerAltIdx];
                        var longerAltPattern = longerAltConfig.pattern;
                        altPayload = null;
                        // single Char can never be a longer alt so no need to test it.
                        // manually in-lined because > 600 chars won't be in-lined in V8
                        if (longerAltConfig.isCustom === true) {
                            match = longerAltPattern.exec(orgText, offset, matchedTokens, groups);
                            if (match !== null) {
                                matchAltImage = match[0];
                                if (match.payload !== undefined) {
                                    altPayload = match.payload;
                                }
                            }
                            else {
                                matchAltImage = null;
                            }
                        }
                        else {
                            this.updateLastIndex(longerAltPattern, offset);
                            matchAltImage = this.match(longerAltPattern, text, offset);
                        }
                        if (matchAltImage &&
                            matchAltImage.length > matchedImage.length) {
                            matchedImage = matchAltImage;
                            payload = altPayload;
                            currConfig = longerAltConfig;
                        }
                    }
                    break;
                }
            }
            // successful match
            if (matchedImage !== null) {
                imageLength = matchedImage.length;
                group = currConfig.group;
                if (group !== undefined) {
                    tokType = currConfig.tokenTypeIdx;
                    // TODO: "offset + imageLength" and the new column may be computed twice in case of "full" location information inside
                    // createFullToken method
                    newToken = this.createTokenInstance(matchedImage, offset, tokType, currConfig.tokenType, line, column, imageLength);
                    this.handlePayload(newToken, payload);
                    // TODO: optimize NOOP in case there are no special groups?
                    if (group === false) {
                        matchedTokensIndex = this.addToken(matchedTokens, matchedTokensIndex, newToken);
                    }
                    else {
                        groups[group].push(newToken);
                    }
                }
                text = this.chopInput(text, imageLength);
                offset = offset + imageLength;
                // TODO: with newlines the column may be assigned twice
                column = this.computeNewColumn(column, imageLength);
                if (trackLines === true &&
                    currConfig.canLineTerminator === true) {
                    var numOfLTsInMatch = 0;
                    var foundTerminator = void 0;
                    var lastLTEndOffset = void 0;
                    lineTerminatorPattern.lastIndex = 0;
                    do {
                        foundTerminator = lineTerminatorPattern.test(matchedImage);
                        if (foundTerminator === true) {
                            lastLTEndOffset =
                                lineTerminatorPattern.lastIndex - 1;
                            numOfLTsInMatch++;
                        }
                    } while (foundTerminator === true);
                    if (numOfLTsInMatch !== 0) {
                        line = line + numOfLTsInMatch;
                        column = imageLength - lastLTEndOffset;
                        this.updateTokenEndLineColumnLocation(newToken, group, lastLTEndOffset, numOfLTsInMatch, line, column, imageLength);
                    }
                }
                // will be NOOP if no modes present
                this.handleModes(currConfig, pop_mode, push_mode, newToken);
            }
            else {
                // error recovery, drop characters until we identify a valid token's start point
                var errorStartOffset = offset;
                var errorLine = line;
                var errorColumn = column;
                var foundResyncPoint = false;
                while (!foundResyncPoint && offset < orgLength) {
                    // drop chars until we succeed in matching something
                    droppedChar = orgText.charCodeAt(offset);
                    // Identity Func (when sticky flag is enabled)
                    text = this.chopInput(text, 1);
                    offset++;
                    for (j = 0; j < currModePatternsLength; j++) {
                        var currConfig_1 = patternIdxToConfig[j];
                        var currPattern = currConfig_1.pattern;
                        // manually in-lined because > 600 chars won't be in-lined in V8
                        var singleCharCode = currConfig_1.short;
                        if (singleCharCode !== false) {
                            if (orgText.charCodeAt(offset) === singleCharCode) {
                                // single character string
                                foundResyncPoint = true;
                            }
                        }
                        else if (currConfig_1.isCustom === true) {
                            foundResyncPoint =
                                currPattern.exec(orgText, offset, matchedTokens, groups) !== null;
                        }
                        else {
                            this.updateLastIndex(currPattern, offset);
                            foundResyncPoint = currPattern.exec(text) !== null;
                        }
                        if (foundResyncPoint === true) {
                            break;
                        }
                    }
                }
                errLength = offset - errorStartOffset;
                // at this point we either re-synced or reached the end of the input text
                msg = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(orgText, errorStartOffset, errLength, errorLine, errorColumn);
                errors.push({
                    offset: errorStartOffset,
                    line: errorLine,
                    column: errorColumn,
                    length: errLength,
                    message: msg
                });
            }
        }
        // if we do have custom patterns which push directly into the
        // TODO: custom tokens should not push directly??
        if (!this.hasCustom) {
            // if we guessed a too large size for the tokens array this will shrink it to the right size.
            matchedTokens.length = matchedTokensIndex;
        }
        return {
            tokens: matchedTokens,
            groups: groups,
            errors: errors
        };
    };
    Lexer.prototype.handleModes = function (config, pop_mode, push_mode, newToken) {
        if (config.pop === true) {
            // need to save the PUSH_MODE property as if the mode is popped
            // patternIdxToPopMode is updated to reflect the new mode after popping the stack
            var pushMode = config.push;
            pop_mode(newToken);
            if (pushMode !== undefined) {
                push_mode.call(this, pushMode);
            }
        }
        else if (config.push !== undefined) {
            push_mode.call(this, config.push);
        }
    };
    Lexer.prototype.chopInput = function (text, length) {
        return text.substring(length);
    };
    Lexer.prototype.updateLastIndex = function (regExp, newLastIndex) {
        regExp.lastIndex = newLastIndex;
    };
    // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
    Lexer.prototype.updateTokenEndLineColumnLocation = function (newToken, group, lastLTIdx, numOfLTsInMatch, line, column, imageLength) {
        var lastCharIsLT, fixForEndingInLT;
        if (group !== undefined) {
            // a none skipped multi line Token, need to update endLine/endColumn
            lastCharIsLT = lastLTIdx === imageLength - 1;
            fixForEndingInLT = lastCharIsLT ? -1 : 0;
            if (!(numOfLTsInMatch === 1 && lastCharIsLT === true)) {
                // if a token ends in a LT that last LT only affects the line numbering of following Tokens
                newToken.endLine = line + fixForEndingInLT;
                // the last LT in a token does not affect the endColumn either as the [columnStart ... columnEnd)
                // inclusive to exclusive range.
                newToken.endColumn = column - 1 + -fixForEndingInLT;
            }
            // else single LT in the last character of a token, no need to modify the endLine/EndColumn
        }
    };
    Lexer.prototype.computeNewColumn = function (oldColumn, imageLength) {
        return oldColumn + imageLength;
    };
    // Place holder, will be replaced by the correct variant according to the locationTracking option at runtime.
    /* istanbul ignore next - place holder */
    Lexer.prototype.createTokenInstance = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return null;
    };
    Lexer.prototype.createOffsetOnlyToken = function (image, startOffset, tokenTypeIdx, tokenType) {
        return {
            image: image,
            startOffset: startOffset,
            tokenTypeIdx: tokenTypeIdx,
            tokenType: tokenType
        };
    };
    Lexer.prototype.createStartOnlyToken = function (image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn) {
        return {
            image: image,
            startOffset: startOffset,
            startLine: startLine,
            startColumn: startColumn,
            tokenTypeIdx: tokenTypeIdx,
            tokenType: tokenType
        };
    };
    Lexer.prototype.createFullToken = function (image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn, imageLength) {
        return {
            image: image,
            startOffset: startOffset,
            endOffset: startOffset + imageLength - 1,
            startLine: startLine,
            endLine: startLine,
            startColumn: startColumn,
            endColumn: startColumn + imageLength - 1,
            tokenTypeIdx: tokenTypeIdx,
            tokenType: tokenType
        };
    };
    // Place holder, will be replaced by the correct variant according to the locationTracking option at runtime.
    /* istanbul ignore next - place holder */
    Lexer.prototype.addToken = function (tokenVector, index, tokenToAdd) {
        return 666;
    };
    Lexer.prototype.addTokenUsingPush = function (tokenVector, index, tokenToAdd) {
        tokenVector.push(tokenToAdd);
        return index;
    };
    Lexer.prototype.addTokenUsingMemberAccess = function (tokenVector, index, tokenToAdd) {
        tokenVector[index] = tokenToAdd;
        index++;
        return index;
    };
    // Place holder, will be replaced by the correct variant according to the hasCustom flag option at runtime.
    /* istanbul ignore next - place holder */
    Lexer.prototype.handlePayload = function (token, payload) { };
    Lexer.prototype.handlePayloadNoCustom = function (token, payload) { };
    Lexer.prototype.handlePayloadWithCustom = function (token, payload) {
        if (payload !== null) {
            token.payload = payload;
        }
    };
    /* istanbul ignore next - place holder to be replaced with chosen alternative at runtime */
    Lexer.prototype.match = function (pattern, text, offset) {
        return null;
    };
    Lexer.prototype.matchWithTest = function (pattern, text, offset) {
        var found = pattern.test(text);
        if (found === true) {
            return text.substring(offset, pattern.lastIndex);
        }
        return null;
    };
    Lexer.prototype.matchWithExec = function (pattern, text) {
        var regExpArray = pattern.exec(text);
        return regExpArray !== null ? regExpArray[0] : regExpArray;
    };
    // Duplicated from the parser's perf trace trait to allow future extraction
    // of the lexer to a separate package.
    Lexer.prototype.TRACE_INIT = function (phaseDesc, phaseImpl) {
        // No need to optimize this using NOOP pattern because
        // It is not called in a hot spot...
        if (this.traceInitPerf === true) {
            this.traceInitIndent++;
            var indent = new Array(this.traceInitIndent + 1).join("\t");
            if (this.traceInitIndent < this.traceInitMaxIdent) {
                console.log(indent + "--> <" + phaseDesc + ">");
            }
            var _a = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["timer"])(phaseImpl), time = _a.time, value = _a.value;
            /* istanbul ignore next - Difficult to reproduce specific performance behavior (>10ms) in tests */
            var traceMethod = time > 10 ? console.warn : console.log;
            if (this.traceInitIndent < this.traceInitMaxIdent) {
                traceMethod(indent + "<-- <" + phaseDesc + "> time: " + time + "ms");
            }
            this.traceInitIndent--;
            return value;
        }
        else {
            return phaseImpl();
        }
    };
    Lexer.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it will" +
        "be consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
    Lexer.NA = /NOT_APPLICABLE/;
    return Lexer;
}());

//# sourceMappingURL=lexer_public.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/scan/reg_exp.js":
/*!*************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/scan/reg_exp.js ***!
  \*************************************************************/
/*! exports provided: failedOptimizationPrefixMsg, getOptimizedStartCodesIndices, firstCharOptimizedIndices, canMatchCharCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failedOptimizationPrefixMsg", function() { return failedOptimizationPrefixMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptimizedStartCodesIndices", function() { return getOptimizedStartCodesIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstCharOptimizedIndices", function() { return firstCharOptimizedIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canMatchCharCode", function() { return canMatchCharCode; });
/* harmony import */ var regexp_to_ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regexp-to-ast */ "./node_modules/regexp-to-ast/lib/regexp-to-ast.js");
/* harmony import */ var regexp_to_ast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regexp_to_ast__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _reg_exp_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reg_exp_parser */ "./node_modules/chevrotain/lib_esm/src/scan/reg_exp_parser.js");
/* harmony import */ var _lexer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lexer */ "./node_modules/chevrotain/lib_esm/src/scan/lexer.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var complementErrorMessage = "Complement Sets are not supported for first char optimization";
var failedOptimizationPrefixMsg = 'Unable to use "first char" lexer optimizations:\n';
function getOptimizedStartCodesIndices(regExp, ensureOptimizations) {
    if (ensureOptimizations === void 0) { ensureOptimizations = false; }
    try {
        var ast = Object(_reg_exp_parser__WEBPACK_IMPORTED_MODULE_2__["getRegExpAst"])(regExp);
        var firstChars = firstCharOptimizedIndices(ast.value, {}, ast.flags.ignoreCase);
        return firstChars;
    }
    catch (e) {
        /* istanbul ignore next */
        // Testing this relies on the regexp-to-ast library having a bug... */
        // TODO: only the else branch needs to be ignored, try to fix with newer prettier / tsc
        if (e.message === complementErrorMessage) {
            if (ensureOptimizations) {
                Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["PRINT_WARNING"])("" + failedOptimizationPrefixMsg +
                    ("\tUnable to optimize: < " + regExp.toString() + " >\n") +
                    "\tComplement Sets cannot be automatically optimized.\n" +
                    "\tThis will disable the lexer's first char optimizations.\n" +
                    "\tSee: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.");
            }
        }
        else {
            var msgSuffix = "";
            if (ensureOptimizations) {
                msgSuffix =
                    "\n\tThis will disable the lexer's first char optimizations.\n" +
                        "\tSee: https://sap.github.io/chevrotain/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.";
            }
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["PRINT_ERROR"])(failedOptimizationPrefixMsg + "\n" +
                ("\tFailed parsing: < " + regExp.toString() + " >\n") +
                ("\tUsing the regexp-to-ast library version: " + regexp_to_ast__WEBPACK_IMPORTED_MODULE_0__["VERSION"] + "\n") +
                "\tPlease open an issue at: https://github.com/bd82/regexp-to-ast/issues" +
                msgSuffix);
        }
    }
    return [];
}
function firstCharOptimizedIndices(ast, result, ignoreCase) {
    switch (ast.type) {
        case "Disjunction":
            for (var i = 0; i < ast.value.length; i++) {
                firstCharOptimizedIndices(ast.value[i], result, ignoreCase);
            }
            break;
        case "Alternative":
            var terms = ast.value;
            for (var i = 0; i < terms.length; i++) {
                var term = terms[i];
                // skip terms that cannot effect the first char results
                switch (term.type) {
                    case "EndAnchor":
                    // A group back reference cannot affect potential starting char.
                    // because if a back reference is the first production than automatically
                    // the group being referenced has had to come BEFORE so its codes have already been added
                    case "GroupBackReference":
                    // assertions do not affect potential starting codes
                    case "Lookahead":
                    case "NegativeLookahead":
                    case "StartAnchor":
                    case "WordBoundary":
                    case "NonWordBoundary":
                        continue;
                }
                var atom = term;
                switch (atom.type) {
                    case "Character":
                        addOptimizedIdxToResult(atom.value, result, ignoreCase);
                        break;
                    case "Set":
                        if (atom.complement === true) {
                            throw Error(complementErrorMessage);
                        }
                        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["forEach"])(atom.value, function (code) {
                            if (typeof code === "number") {
                                addOptimizedIdxToResult(code, result, ignoreCase);
                            }
                            else {
                                // range
                                var range = code;
                                // cannot optimize when ignoreCase is
                                if (ignoreCase === true) {
                                    for (var rangeCode = range.from; rangeCode <= range.to; rangeCode++) {
                                        addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                                    }
                                }
                                // Optimization (2 orders of magnitude less work for very large ranges)
                                else {
                                    // handle unoptimized values
                                    for (var rangeCode = range.from; rangeCode <= range.to &&
                                        rangeCode < _lexer__WEBPACK_IMPORTED_MODULE_3__["minOptimizationVal"]; rangeCode++) {
                                        addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                                    }
                                    // Less common charCode where we optimize for faster init time, by using larger "buckets"
                                    if (range.to >= _lexer__WEBPACK_IMPORTED_MODULE_3__["minOptimizationVal"]) {
                                        var minUnOptVal = range.from >= _lexer__WEBPACK_IMPORTED_MODULE_3__["minOptimizationVal"]
                                            ? range.from
                                            : _lexer__WEBPACK_IMPORTED_MODULE_3__["minOptimizationVal"];
                                        var maxUnOptVal = range.to;
                                        var minOptIdx = Object(_lexer__WEBPACK_IMPORTED_MODULE_3__["charCodeToOptimizedIndex"])(minUnOptVal);
                                        var maxOptIdx = Object(_lexer__WEBPACK_IMPORTED_MODULE_3__["charCodeToOptimizedIndex"])(maxUnOptVal);
                                        for (var currOptIdx = minOptIdx; currOptIdx <= maxOptIdx; currOptIdx++) {
                                            result[currOptIdx] = currOptIdx;
                                        }
                                    }
                                }
                            }
                        });
                        break;
                    case "Group":
                        firstCharOptimizedIndices(atom.value, result, ignoreCase);
                        break;
                    /* istanbul ignore next */
                    default:
                        throw Error("Non Exhaustive Match");
                }
                // reached a mandatory production, no more **start** codes can be found on this alternative
                var isOptionalQuantifier = atom.quantifier !== undefined &&
                    atom.quantifier.atLeast === 0;
                if (
                // A group may be optional due to empty contents /(?:)/
                // or if everything inside it is optional /((a)?)/
                (atom.type === "Group" &&
                    isWholeOptional(atom) === false) ||
                    // If this term is not a group it may only be optional if it has an optional quantifier
                    (atom.type !== "Group" && isOptionalQuantifier === false)) {
                    break;
                }
            }
            break;
        /* istanbul ignore next */
        default:
            throw Error("non exhaustive match!");
    }
    // console.log(Object.keys(result).length)
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["values"])(result);
}
function addOptimizedIdxToResult(code, result, ignoreCase) {
    var optimizedCharIdx = Object(_lexer__WEBPACK_IMPORTED_MODULE_3__["charCodeToOptimizedIndex"])(code);
    result[optimizedCharIdx] = optimizedCharIdx;
    if (ignoreCase === true) {
        handleIgnoreCase(code, result);
    }
}
function handleIgnoreCase(code, result) {
    var char = String.fromCharCode(code);
    var upperChar = char.toUpperCase();
    /* istanbul ignore else */
    if (upperChar !== char) {
        var optimizedCharIdx = Object(_lexer__WEBPACK_IMPORTED_MODULE_3__["charCodeToOptimizedIndex"])(upperChar.charCodeAt(0));
        result[optimizedCharIdx] = optimizedCharIdx;
    }
    else {
        var lowerChar = char.toLowerCase();
        if (lowerChar !== char) {
            var optimizedCharIdx = Object(_lexer__WEBPACK_IMPORTED_MODULE_3__["charCodeToOptimizedIndex"])(lowerChar.charCodeAt(0));
            result[optimizedCharIdx] = optimizedCharIdx;
        }
    }
}
function findCode(setNode, targetCharCodes) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["find"])(setNode.value, function (codeOrRange) {
        if (typeof codeOrRange === "number") {
            return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["contains"])(targetCharCodes, codeOrRange);
        }
        else {
            // range
            var range_1 = codeOrRange;
            return (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["find"])(targetCharCodes, function (targetCode) {
                return range_1.from <= targetCode && targetCode <= range_1.to;
            }) !== undefined);
        }
    });
}
function isWholeOptional(ast) {
    if (ast.quantifier && ast.quantifier.atLeast === 0) {
        return true;
    }
    if (!ast.value) {
        return false;
    }
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(ast.value)
        ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["every"])(ast.value, isWholeOptional)
        : isWholeOptional(ast.value);
}
var CharCodeFinder = /** @class */ (function (_super) {
    __extends(CharCodeFinder, _super);
    function CharCodeFinder(targetCharCodes) {
        var _this = _super.call(this) || this;
        _this.targetCharCodes = targetCharCodes;
        _this.found = false;
        return _this;
    }
    CharCodeFinder.prototype.visitChildren = function (node) {
        // No need to keep looking...
        if (this.found === true) {
            return;
        }
        // switch lookaheads as they do not actually consume any characters thus
        // finding a charCode at lookahead context does not mean that regexp can actually contain it in a match.
        switch (node.type) {
            case "Lookahead":
                this.visitLookahead(node);
                return;
            case "NegativeLookahead":
                this.visitNegativeLookahead(node);
                return;
        }
        _super.prototype.visitChildren.call(this, node);
    };
    CharCodeFinder.prototype.visitCharacter = function (node) {
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["contains"])(this.targetCharCodes, node.value)) {
            this.found = true;
        }
    };
    CharCodeFinder.prototype.visitSet = function (node) {
        if (node.complement) {
            if (findCode(node, this.targetCharCodes) === undefined) {
                this.found = true;
            }
        }
        else {
            if (findCode(node, this.targetCharCodes) !== undefined) {
                this.found = true;
            }
        }
    };
    return CharCodeFinder;
}(regexp_to_ast__WEBPACK_IMPORTED_MODULE_0__["BaseRegExpVisitor"]));
function canMatchCharCode(charCodes, pattern) {
    if (pattern instanceof RegExp) {
        var ast = Object(_reg_exp_parser__WEBPACK_IMPORTED_MODULE_2__["getRegExpAst"])(pattern);
        var charCodeFinder = new CharCodeFinder(charCodes);
        charCodeFinder.visit(ast);
        return charCodeFinder.found;
    }
    else {
        return (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["find"])(pattern, function (char) {
            return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["contains"])(charCodes, char.charCodeAt(0));
        }) !== undefined);
    }
}
//# sourceMappingURL=reg_exp.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/scan/reg_exp_parser.js":
/*!********************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/scan/reg_exp_parser.js ***!
  \********************************************************************/
/*! exports provided: getRegExpAst, clearRegExpParserCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegExpAst", function() { return getRegExpAst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearRegExpParserCache", function() { return clearRegExpParserCache; });
/* harmony import */ var regexp_to_ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regexp-to-ast */ "./node_modules/regexp-to-ast/lib/regexp-to-ast.js");
/* harmony import */ var regexp_to_ast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regexp_to_ast__WEBPACK_IMPORTED_MODULE_0__);

var regExpAstCache = {};
var regExpParser = new regexp_to_ast__WEBPACK_IMPORTED_MODULE_0__["RegExpParser"]();
function getRegExpAst(regExp) {
    var regExpStr = regExp.toString();
    if (regExpAstCache.hasOwnProperty(regExpStr)) {
        return regExpAstCache[regExpStr];
    }
    else {
        var regExpAst = regExpParser.pattern(regExpStr);
        regExpAstCache[regExpStr] = regExpAst;
        return regExpAst;
    }
}
function clearRegExpParserCache() {
    regExpAstCache = {};
}
//# sourceMappingURL=reg_exp_parser.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/scan/tokens.js":
/*!************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/scan/tokens.js ***!
  \************************************************************/
/*! exports provided: tokenStructuredMatcher, tokenStructuredMatcherNoCategories, tokenShortNameIdx, tokenIdxToClass, augmentTokenTypes, expandCategories, assignTokenDefaultProps, assignCategoriesTokensProp, assignCategoriesMapProp, singleAssignCategoriesToksMap, hasShortKeyProperty, hasCategoriesProperty, hasExtendingTokensTypesProperty, hasExtendingTokensTypesMapProperty, isTokenType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenStructuredMatcher", function() { return tokenStructuredMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenStructuredMatcherNoCategories", function() { return tokenStructuredMatcherNoCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenShortNameIdx", function() { return tokenShortNameIdx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenIdxToClass", function() { return tokenIdxToClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "augmentTokenTypes", function() { return augmentTokenTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandCategories", function() { return expandCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignTokenDefaultProps", function() { return assignTokenDefaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignCategoriesTokensProp", function() { return assignCategoriesTokensProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignCategoriesMapProp", function() { return assignCategoriesMapProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleAssignCategoriesToksMap", function() { return singleAssignCategoriesToksMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasShortKeyProperty", function() { return hasShortKeyProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCategoriesProperty", function() { return hasCategoriesProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasExtendingTokensTypesProperty", function() { return hasExtendingTokensTypesProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasExtendingTokensTypesMapProperty", function() { return hasExtendingTokensTypesMapProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTokenType", function() { return isTokenType; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");

function tokenStructuredMatcher(tokInstance, tokConstructor) {
    var instanceType = tokInstance.tokenTypeIdx;
    if (instanceType === tokConstructor.tokenTypeIdx) {
        return true;
    }
    else {
        return (tokConstructor.isParent === true &&
            tokConstructor.categoryMatchesMap[instanceType] === true);
    }
}
// Optimized tokenMatcher in case our grammar does not use token categories
// Being so tiny it is much more likely to be in-lined and this avoid the function call overhead
function tokenStructuredMatcherNoCategories(token, tokType) {
    return token.tokenTypeIdx === tokType.tokenTypeIdx;
}
var tokenShortNameIdx = 1;
var tokenIdxToClass = {};
function augmentTokenTypes(tokenTypes) {
    // collect the parent Token Types as well.
    var tokenTypesAndParents = expandCategories(tokenTypes);
    // add required tokenType and categoryMatches properties
    assignTokenDefaultProps(tokenTypesAndParents);
    // fill up the categoryMatches
    assignCategoriesMapProp(tokenTypesAndParents);
    assignCategoriesTokensProp(tokenTypesAndParents);
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(tokenTypesAndParents, function (tokType) {
        tokType.isParent = tokType.categoryMatches.length > 0;
    });
}
function expandCategories(tokenTypes) {
    var result = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["cloneArr"])(tokenTypes);
    var categories = tokenTypes;
    var searching = true;
    while (searching) {
        categories = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["compact"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["flatten"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["map"])(categories, function (currTokType) { return currTokType.CATEGORIES; })));
        var newCategories = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["difference"])(categories, result);
        result = result.concat(newCategories);
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(newCategories)) {
            searching = false;
        }
        else {
            categories = newCategories;
        }
    }
    return result;
}
function assignTokenDefaultProps(tokenTypes) {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(tokenTypes, function (currTokType) {
        if (!hasShortKeyProperty(currTokType)) {
            tokenIdxToClass[tokenShortNameIdx] = currTokType;
            currTokType.tokenTypeIdx = tokenShortNameIdx++;
        }
        // CATEGORIES? : TokenType | TokenType[]
        if (hasCategoriesProperty(currTokType) &&
            !Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(currTokType.CATEGORIES)
        // &&
        // !isUndefined(currTokType.CATEGORIES.PATTERN)
        ) {
            currTokType.CATEGORIES = [currTokType.CATEGORIES];
        }
        if (!hasCategoriesProperty(currTokType)) {
            currTokType.CATEGORIES = [];
        }
        if (!hasExtendingTokensTypesProperty(currTokType)) {
            currTokType.categoryMatches = [];
        }
        if (!hasExtendingTokensTypesMapProperty(currTokType)) {
            currTokType.categoryMatchesMap = {};
        }
    });
}
function assignCategoriesTokensProp(tokenTypes) {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(tokenTypes, function (currTokType) {
        // avoid duplications
        currTokType.categoryMatches = [];
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(currTokType.categoryMatchesMap, function (val, key) {
            currTokType.categoryMatches.push(tokenIdxToClass[key].tokenTypeIdx);
        });
    });
}
function assignCategoriesMapProp(tokenTypes) {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(tokenTypes, function (currTokType) {
        singleAssignCategoriesToksMap([], currTokType);
    });
}
function singleAssignCategoriesToksMap(path, nextNode) {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(path, function (pathNode) {
        nextNode.categoryMatchesMap[pathNode.tokenTypeIdx] = true;
    });
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["forEach"])(nextNode.CATEGORIES, function (nextCategory) {
        var newPath = path.concat(nextNode);
        // avoids infinite loops due to cyclic categories.
        if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["contains"])(newPath, nextCategory)) {
            singleAssignCategoriesToksMap(newPath, nextCategory);
        }
    });
}
function hasShortKeyProperty(tokType) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(tokType, "tokenTypeIdx");
}
function hasCategoriesProperty(tokType) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(tokType, "CATEGORIES");
}
function hasExtendingTokensTypesProperty(tokType) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(tokType, "categoryMatches");
}
function hasExtendingTokensTypesMapProperty(tokType) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(tokType, "categoryMatchesMap");
}
function isTokenType(tokType) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(tokType, "tokenTypeIdx");
}
//# sourceMappingURL=tokens.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/scan/tokens_public.js":
/*!*******************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/scan/tokens_public.js ***!
  \*******************************************************************/
/*! exports provided: tokenLabel, tokenName, hasTokenLabel, createToken, EOF, createTokenInstance, tokenMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenLabel", function() { return tokenLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenName", function() { return tokenName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTokenLabel", function() { return hasTokenLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createToken", function() { return createToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EOF", function() { return EOF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTokenInstance", function() { return createTokenInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenMatcher", function() { return tokenMatcher; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./node_modules/chevrotain/lib_esm/src/utils/utils.js");
/* harmony import */ var _lexer_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lexer_public */ "./node_modules/chevrotain/lib_esm/src/scan/lexer_public.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens */ "./node_modules/chevrotain/lib_esm/src/scan/tokens.js");



function tokenLabel(tokType) {
    if (hasTokenLabel(tokType)) {
        return tokType.LABEL;
    }
    else {
        return tokType.name;
    }
}
function tokenName(tokType) {
    return tokType.name;
}
function hasTokenLabel(obj) {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isString"])(obj.LABEL) && obj.LABEL !== "";
}
var PARENT = "parent";
var CATEGORIES = "categories";
var LABEL = "label";
var GROUP = "group";
var PUSH_MODE = "push_mode";
var POP_MODE = "pop_mode";
var LONGER_ALT = "longer_alt";
var LINE_BREAKS = "line_breaks";
var START_CHARS_HINT = "start_chars_hint";
function createToken(config) {
    return createTokenInternal(config);
}
function createTokenInternal(config) {
    var pattern = config.pattern;
    var tokenType = {};
    tokenType.name = config.name;
    if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(pattern)) {
        tokenType.PATTERN = pattern;
    }
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(config, PARENT)) {
        throw "The parent property is no longer supported.\n" +
            "See: https://github.com/SAP/chevrotain/issues/564#issuecomment-349062346 for details.";
    }
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(config, CATEGORIES)) {
        // casting to ANY as this will be fixed inside `augmentTokenTypes``
        tokenType.CATEGORIES = config[CATEGORIES];
    }
    Object(_tokens__WEBPACK_IMPORTED_MODULE_2__["augmentTokenTypes"])([tokenType]);
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(config, LABEL)) {
        tokenType.LABEL = config[LABEL];
    }
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(config, GROUP)) {
        tokenType.GROUP = config[GROUP];
    }
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(config, POP_MODE)) {
        tokenType.POP_MODE = config[POP_MODE];
    }
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(config, PUSH_MODE)) {
        tokenType.PUSH_MODE = config[PUSH_MODE];
    }
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(config, LONGER_ALT)) {
        tokenType.LONGER_ALT = config[LONGER_ALT];
    }
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(config, LINE_BREAKS)) {
        tokenType.LINE_BREAKS = config[LINE_BREAKS];
    }
    if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["has"])(config, START_CHARS_HINT)) {
        tokenType.START_CHARS_HINT = config[START_CHARS_HINT];
    }
    return tokenType;
}
var EOF = createToken({ name: "EOF", pattern: _lexer_public__WEBPACK_IMPORTED_MODULE_1__["Lexer"].NA });
Object(_tokens__WEBPACK_IMPORTED_MODULE_2__["augmentTokenTypes"])([EOF]);
function createTokenInstance(tokType, image, startOffset, endOffset, startLine, endLine, startColumn, endColumn) {
    return {
        image: image,
        startOffset: startOffset,
        endOffset: endOffset,
        startLine: startLine,
        endLine: endLine,
        startColumn: startColumn,
        endColumn: endColumn,
        tokenTypeIdx: tokType.tokenTypeIdx,
        tokenType: tokType
    };
}
function tokenMatcher(token, tokType) {
    return Object(_tokens__WEBPACK_IMPORTED_MODULE_2__["tokenStructuredMatcher"])(token, tokType);
}
//# sourceMappingURL=tokens_public.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/utils/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/utils/utils.js ***!
  \************************************************************/
/*! exports provided: isEmpty, keys, values, mapValues, map, flatten, first, last, forEach, isString, isUndefined, isFunction, drop, dropRight, filter, reject, pick, has, contains, cloneArr, cloneObj, find, findAll, reduce, compact, uniq, partial, isArray, isRegExp, isObject, every, difference, some, indexOf, sortBy, zipObject, assign, assignNoOverwrite, defaults, groupBy, merge, NOOP, IDENTITY, packArray, PRINT_ERROR, PRINT_WARNING, isES2015MapSupported, applyMixins, toFastProperties, peek, timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapValues", function() { return mapValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return drop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropRight", function() { return dropRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return reject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneArr", function() { return cloneArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneObj", function() { return cloneObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAll", function() { return findAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return compact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return uniq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return partial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return every; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return difference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zipObject", function() { return zipObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignNoOverwrite", function() { return assignNoOverwrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOOP", function() { return NOOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDENTITY", function() { return IDENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packArray", function() { return packArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINT_ERROR", function() { return PRINT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINT_WARNING", function() { return PRINT_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isES2015MapSupported", function() { return isES2015MapSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMixins", function() { return applyMixins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFastProperties", function() { return toFastProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peek", function() { return peek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/*
 Utils using lodash style API. (not necessarily 100% compliant) for functional and other utils.
 These utils should replace usage of lodash in the production code base. not because they are any better...
 but for the purpose of being a dependency free library.

 The hotspots in the code are already written in imperative style for performance reasons.
 so writing several dozen utils which may be slower than the original lodash, does not matter as much
 considering they will not be invoked in hotspots...
 */
function isEmpty(arr) {
    return arr && arr.length === 0;
}
function keys(obj) {
    if (obj === undefined || obj === null) {
        return [];
    }
    return Object.keys(obj);
}
function values(obj) {
    var vals = [];
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        vals.push(obj[keys[i]]);
    }
    return vals;
}
function mapValues(obj, callback) {
    var result = [];
    var objKeys = keys(obj);
    for (var idx = 0; idx < objKeys.length; idx++) {
        var currKey = objKeys[idx];
        result.push(callback.call(null, obj[currKey], currKey));
    }
    return result;
}
function map(arr, callback) {
    var result = [];
    for (var idx = 0; idx < arr.length; idx++) {
        result.push(callback.call(null, arr[idx], idx));
    }
    return result;
}
function flatten(arr) {
    var result = [];
    for (var idx = 0; idx < arr.length; idx++) {
        var currItem = arr[idx];
        if (Array.isArray(currItem)) {
            result = result.concat(flatten(currItem));
        }
        else {
            result.push(currItem);
        }
    }
    return result;
}
function first(arr) {
    return isEmpty(arr) ? undefined : arr[0];
}
function last(arr) {
    var len = arr && arr.length;
    return len ? arr[len - 1] : undefined;
}
function forEach(collection, iteratorCallback) {
    /* istanbul ignore else */
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            iteratorCallback.call(null, collection[i], i);
        }
    }
    else if (isObject(collection)) {
        var colKeys = keys(collection);
        for (var i = 0; i < colKeys.length; i++) {
            var key = colKeys[i];
            var value = collection[key];
            iteratorCallback.call(null, value, key);
        }
    }
    else {
        throw Error("non exhaustive match");
    }
}
function isString(item) {
    return typeof item === "string";
}
function isUndefined(item) {
    return item === undefined;
}
function isFunction(item) {
    return item instanceof Function;
}
function drop(arr, howMuch) {
    if (howMuch === void 0) { howMuch = 1; }
    return arr.slice(howMuch, arr.length);
}
function dropRight(arr, howMuch) {
    if (howMuch === void 0) { howMuch = 1; }
    return arr.slice(0, arr.length - howMuch);
}
function filter(arr, predicate) {
    var result = [];
    if (Array.isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (predicate.call(null, item)) {
                result.push(item);
            }
        }
    }
    return result;
}
function reject(arr, predicate) {
    return filter(arr, function (item) { return !predicate(item); });
}
function pick(obj, predicate) {
    var keys = Object.keys(obj);
    var result = {};
    for (var i = 0; i < keys.length; i++) {
        var currKey = keys[i];
        var currItem = obj[currKey];
        if (predicate(currItem)) {
            result[currKey] = currItem;
        }
    }
    return result;
}
function has(obj, prop) {
    if (isObject(obj)) {
        return obj.hasOwnProperty(prop);
    }
    return false;
}
function contains(arr, item) {
    return find(arr, function (currItem) { return currItem === item; }) !== undefined ? true : false;
}
/**
 * shallow clone
 */
function cloneArr(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
/**
 * shallow clone
 */
function cloneObj(obj) {
    var clonedObj = {};
    for (var key in obj) {
        /* istanbul ignore else */
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clonedObj[key] = obj[key];
        }
    }
    return clonedObj;
}
function find(arr, predicate) {
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (predicate.call(null, item)) {
            return item;
        }
    }
    return undefined;
}
function findAll(arr, predicate) {
    var found = [];
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (predicate.call(null, item)) {
            found.push(item);
        }
    }
    return found;
}
function reduce(arrOrObj, iterator, initial) {
    var isArr = Array.isArray(arrOrObj);
    var vals = isArr ? arrOrObj : values(arrOrObj);
    var objKeys = isArr ? [] : keys(arrOrObj);
    var accumulator = initial;
    for (var i = 0; i < vals.length; i++) {
        accumulator = iterator.call(null, accumulator, vals[i], isArr ? i : objKeys[i]);
    }
    return accumulator;
}
function compact(arr) {
    return reject(arr, function (item) { return item === null || item === undefined; });
}
function uniq(arr, identity) {
    if (identity === void 0) { identity = function (item) { return item; }; }
    var identities = [];
    return reduce(arr, function (result, currItem) {
        var currIdentity = identity(currItem);
        if (contains(identities, currIdentity)) {
            return result;
        }
        else {
            identities.push(currIdentity);
            return result.concat(currItem);
        }
    }, []);
}
function partial(func) {
    var restArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restArgs[_i - 1] = arguments[_i];
    }
    var firstArg = [null];
    var allArgs = firstArg.concat(restArgs);
    return Function.bind.apply(func, allArgs);
}
function isArray(obj) {
    return Array.isArray(obj);
}
function isRegExp(obj) {
    return obj instanceof RegExp;
}
function isObject(obj) {
    return obj instanceof Object;
}
function every(arr, predicate) {
    for (var i = 0; i < arr.length; i++) {
        if (!predicate(arr[i], i)) {
            return false;
        }
    }
    return true;
}
function difference(arr, values) {
    return reject(arr, function (item) { return contains(values, item); });
}
function some(arr, predicate) {
    for (var i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
            return true;
        }
    }
    return false;
}
function indexOf(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
function sortBy(arr, orderFunc) {
    var result = cloneArr(arr);
    result.sort(function (a, b) { return orderFunc(a) - orderFunc(b); });
    return result;
}
function zipObject(keys, values) {
    if (keys.length !== values.length) {
        throw Error("can't zipObject with different number of keys and values!");
    }
    var result = {};
    for (var i = 0; i < keys.length; i++) {
        result[keys[i]] = values[i];
    }
    return result;
}
/**
 * mutates! (and returns) target
 */
function assign(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < sources.length; i++) {
        var curSource = sources[i];
        var currSourceKeys = keys(curSource);
        for (var j = 0; j < currSourceKeys.length; j++) {
            var currKey = currSourceKeys[j];
            target[currKey] = curSource[currKey];
        }
    }
    return target;
}
/**
 * mutates! (and returns) target
 */
function assignNoOverwrite(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < sources.length; i++) {
        var curSource = sources[i];
        if (isUndefined(curSource)) {
            continue;
        }
        var currSourceKeys = keys(curSource);
        for (var j = 0; j < currSourceKeys.length; j++) {
            var currKey = currSourceKeys[j];
            if (!has(target, currKey)) {
                target[currKey] = curSource[currKey];
            }
        }
    }
    return target;
}
function defaults() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return assignNoOverwrite.apply(null, [{}].concat(sources));
}
function groupBy(arr, groupKeyFunc) {
    var result = {};
    forEach(arr, function (item) {
        var currGroupKey = groupKeyFunc(item);
        var currGroupArr = result[currGroupKey];
        if (currGroupArr) {
            currGroupArr.push(item);
        }
        else {
            result[currGroupKey] = [item];
        }
    });
    return result;
}
/**
 * Merge obj2 into obj1.
 * Will overwrite existing properties with the same name
 */
function merge(obj1, obj2) {
    var result = cloneObj(obj1);
    var keys2 = keys(obj2);
    for (var i = 0; i < keys2.length; i++) {
        var key = keys2[i];
        var value = obj2[key];
        result[key] = value;
    }
    return result;
}
function NOOP() { }
function IDENTITY(item) {
    return item;
}
/**
 * Will return a new packed array with same values.
 */
function packArray(holeyArr) {
    var result = [];
    for (var i = 0; i < holeyArr.length; i++) {
        var orgValue = holeyArr[i];
        result.push(orgValue !== undefined ? orgValue : undefined);
    }
    return result;
}
function PRINT_ERROR(msg) {
    /* istanbul ignore else - can't override global.console in node.js */
    if (console && console.error) {
        console.error("Error: " + msg);
    }
}
function PRINT_WARNING(msg) {
    /* istanbul ignore else - can't override global.console in node.js*/
    if (console && console.warn) {
        // TODO: modify docs accordingly
        console.warn("Warning: " + msg);
    }
}
function isES2015MapSupported() {
    return typeof Map === "function";
}
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        var baseProto = baseCtor.prototype;
        Object.getOwnPropertyNames(baseProto).forEach(function (propName) {
            if (propName === "constructor") {
                return;
            }
            var basePropDescriptor = Object.getOwnPropertyDescriptor(baseProto, propName);
            // Handle Accessors
            if (basePropDescriptor &&
                (basePropDescriptor.get || basePropDescriptor.set)) {
                Object.defineProperty(derivedCtor.prototype, propName, basePropDescriptor);
            }
            else {
                derivedCtor.prototype[propName] = baseCtor.prototype[propName];
            }
        });
    });
}
// base on: https://github.com/petkaantonov/bluebird/blob/b97c0d2d487e8c5076e8bd897e0dcd4622d31846/src/util.js#L201-L216
function toFastProperties(toBecomeFast) {
    function FakeConstructor() { }
    // If our object is used as a constructor it would receive
    FakeConstructor.prototype = toBecomeFast;
    var fakeInstance = new FakeConstructor();
    function fakeAccess() {
        return typeof fakeInstance.bar;
    }
    // help V8 understand this is a "real" prototype by actually using
    // the fake instance.
    fakeAccess();
    fakeAccess();
    return toBecomeFast;
    // Eval prevents optimization of this method (even though this is dead code)
    /* istanbul ignore next */
    // tslint:disable-next-line
    eval(toBecomeFast);
}
function peek(arr) {
    return arr[arr.length - 1];
}
/* istanbul ignore next - for performance tracing*/
function timer(func) {
    var start = new Date().getTime();
    var val = func();
    var end = new Date().getTime();
    var total = end - start;
    return { time: total, value: val };
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/chevrotain/lib_esm/src/version.js":
/*!********************************************************!*\
  !*** ./node_modules/chevrotain/lib_esm/src/version.js ***!
  \********************************************************/
/*! exports provided: VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
// needs a separate module as this is required inside chevrotain productive code
// and also in the entry point for webpack(api.ts).
// A separate file avoids cyclic dependencies and webpack errors.
var VERSION = "6.5.0";
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/java-parser/src/comments.js":
/*!**************************************************!*\
  !*** ./node_modules/java-parser/src/comments.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const findLast = __webpack_require__(/*! lodash/findLast */ "./node_modules/lodash/findLast.js");

/**
 * Search where is the position of the comment in the token array by
 * using dichotomic search.
 * @param {*} tokens ordered array of tokens
 * @param {*} comment comment token
 * @return the position of the token next to the comment
 */
function findUpperBoundToken(tokens, comment) {
  let diff;
  let i;
  let current;

  let len = tokens.length;
  i = 0;

  while (len) {
    diff = len >>> 1;
    current = i + diff;
    if (tokens[current].startOffset > comment.startOffset) {
      len = diff;
    } else {
      i = current + 1;
      len -= diff + 1;
    }
  }
  return i;
}

function isPrettierIgnoreComment(comment) {
  return comment.image.match(
    /(\/\/(\s*)prettier-ignore(\s*))|(\/\*(\s*)prettier-ignore(\s*)\*\/)/gm
  );
}

function isFormatterOffOnComment(comment) {
  return comment.image.match(
    /(\/\/(\s*)@formatter:(off|on)(\s*))|(\/\*(\s*)@formatter:(off|on)(\s*)\*\/)/gm
  );
}

/**
 * Pre-processing of tokens in order to
 * complete the parser's mostEnclosiveCstNodeByStartOffset and mostEnclosiveCstNodeByEndOffset structures.
 *
 * @param {ITokens[]} tokens - array of tokens
 * @param {{[startOffset: number]: CSTNode}} mostEnclosiveCstNodeByStartOffset
 * @param {{[endOffset: number]: CSTNode}} mostEnclosiveCstNodeByEndOffset
 */
function completeMostEnclosiveCSTNodeByOffset(
  tokens,
  mostEnclosiveCstNodeByStartOffset,
  mostEnclosiveCstNodeByEndOffset
) {
  tokens.forEach(token => {
    if (mostEnclosiveCstNodeByStartOffset[token.startOffset] === undefined) {
      mostEnclosiveCstNodeByStartOffset[token.startOffset] = token;
    }

    if (mostEnclosiveCstNodeByEndOffset[token.endOffset] === undefined) {
      mostEnclosiveCstNodeByEndOffset[token.endOffset] = token;
    }
  });
}

function extendRangeOffset(comments, tokens) {
  let position;
  comments.forEach(comment => {
    position = findUpperBoundToken(tokens, comment);

    const extendedStartOffset =
      position - 1 < 0 ? comment.startOffset : tokens[position - 1].endOffset;
    const extendedEndOffset =
      position == tokens.length
        ? comment.endOffset
        : tokens[position].startOffset;
    comment.extendedOffset = {
      startOffset: extendedStartOffset,
      endOffset: extendedEndOffset
    };
  });
}

/**
 * Create two data structures we use to know at which offset a comment can be attached.
 * - commentsByExtendedStartOffset: map a comment by the endOffset of the previous token.
 * - commentsByExtendedEndOffset: map a comment by the startOffset of the next token
 *
 * @param {ITokens[]} tokens - array of tokens
 *
 * @return {{commentsByExtendedStartOffset: {[extendedStartOffset: number]: Comment[]}, commentsByExtendedEndOffset: {[extendedEndOffset: number]: Comment[]}}}
 */
function mapCommentsByExtendedRange(comments) {
  const commentsByExtendedEndOffset = {};
  const commentsByExtendedStartOffset = {};

  comments.forEach(comment => {
    const extendedStartOffset = comment.extendedOffset.startOffset;
    const extendedEndOffset = comment.extendedOffset.endOffset;

    if (commentsByExtendedEndOffset[extendedEndOffset] === undefined) {
      commentsByExtendedEndOffset[extendedEndOffset] = [comment];
    } else {
      commentsByExtendedEndOffset[extendedEndOffset].push(comment);
    }

    if (commentsByExtendedStartOffset[extendedStartOffset] === undefined) {
      commentsByExtendedStartOffset[extendedStartOffset] = [comment];
    } else {
      commentsByExtendedStartOffset[extendedStartOffset].push(comment);
    }
  });

  return { commentsByExtendedEndOffset, commentsByExtendedStartOffset };
}

/**
 * Determine if a comment should be attached as a trailing comment to a specific node.
 * A comment should be trailing if it is on the same line than the previous token and
 * not on the same line than the next token
 *
 * @param {*} comment
 * @param {CSTNode} node
 * @param {{[startOffset: number]: CSTNode}} mostEnclosiveCstNodeByStartOffset
 */
function shouldAttachTrailingComments(
  comment,
  node,
  mostEnclosiveCstNodeByStartOffset
) {
  if (isPrettierIgnoreComment(comment)) {
    return false;
  }

  const nextNode =
    mostEnclosiveCstNodeByStartOffset[comment.extendedOffset.endOffset];

  // Last node of the file
  if (nextNode === undefined) {
    return true;
  }

  const nodeEndLine =
    node.location !== undefined ? node.location.endLine : node.endLine;

  if (comment.startLine !== nodeEndLine) {
    return false;
  }

  const nextNodeStartLine =
    nextNode.location !== undefined
      ? nextNode.location.startLine
      : nextNode.startLine;
  return comment.endLine !== nextNodeStartLine;
}

/**
 * Attach comments to the most enclosive CSTNode (node or token)
 *
 * @param {ITokens[]} tokens
 * @param {*} comments
 * @param {{[startOffset: number]: CSTNode}} mostEnclosiveCstNodeByStartOffset
 * @param {{[endOffset: number]: CSTNode}} mostEnclosiveCstNodeByEndOffset
 */
function attachComments(
  tokens,
  comments,
  mostEnclosiveCstNodeByStartOffset,
  mostEnclosiveCstNodeByEndOffset
) {
  // Edge case: only comments in the file
  if (tokens.length === 0) {
    mostEnclosiveCstNodeByStartOffset[NaN].leadingComments = comments;
    return;
  }

  // Pre-processing phase to complete the data structures we need to attach
  // a comment to the right place
  completeMostEnclosiveCSTNodeByOffset(
    tokens,
    mostEnclosiveCstNodeByStartOffset,
    mostEnclosiveCstNodeByEndOffset
  );

  extendRangeOffset(comments, tokens);
  const { commentsByExtendedStartOffset, commentsByExtendedEndOffset } =
    mapCommentsByExtendedRange(comments);

  /*
    This set is here to ensure that we attach comments only once
    If a comment is attached to a node or token, we remove it from this set
  */
  const commentsToAttach = new Set(comments);

  // Attach comments as trailing comments if desirable
  Object.keys(mostEnclosiveCstNodeByEndOffset).forEach(endOffset => {
    // We look if some comments is directly following this node/token
    if (commentsByExtendedStartOffset[endOffset] !== undefined) {
      const nodeTrailingComments = commentsByExtendedStartOffset[
        endOffset
      ].filter(comment => {
        return (
          shouldAttachTrailingComments(
            comment,
            mostEnclosiveCstNodeByEndOffset[endOffset],
            mostEnclosiveCstNodeByStartOffset
          ) && commentsToAttach.has(comment)
        );
      });

      if (nodeTrailingComments.length > 0) {
        mostEnclosiveCstNodeByEndOffset[endOffset].trailingComments =
          nodeTrailingComments;
      }

      nodeTrailingComments.forEach(comment => {
        commentsToAttach.delete(comment);
      });
    }
  });

  // Attach rest of comments as leading comments
  Object.keys(mostEnclosiveCstNodeByStartOffset).forEach(startOffset => {
    // We look if some comments is directly preceding this node/token
    if (commentsByExtendedEndOffset[startOffset] !== undefined) {
      const nodeLeadingComments = commentsByExtendedEndOffset[
        startOffset
      ].filter(comment => commentsToAttach.has(comment));

      if (nodeLeadingComments.length > 0) {
        mostEnclosiveCstNodeByStartOffset[startOffset].leadingComments =
          nodeLeadingComments;
      }

      // prettier ignore support
      for (let i = 0; i < nodeLeadingComments.length; i++) {
        if (isPrettierIgnoreComment(nodeLeadingComments[i])) {
          mostEnclosiveCstNodeByStartOffset[startOffset].ignore = true;
          break;
        }
      }
    }
  });
}

/**
 * Create pairs of formatter:off and formatter:on
 * @param comments
 * @returns pairs of formatter:off and formatter:on
 */
function matchFormatterOffOnPairs(comments) {
  const onOffComments = comments.filter(comment =>
    isFormatterOffOnComment(comment)
  );

  let isPreviousCommentOff = false;
  let isCurrentCommentOff = true;
  const pairs = [];
  let paired = {};
  onOffComments.forEach(comment => {
    isCurrentCommentOff = comment.image.slice(-3) === "off";

    if (!isPreviousCommentOff) {
      if (isCurrentCommentOff) {
        paired.off = comment;
      }
    } else {
      if (!isCurrentCommentOff) {
        paired.on = comment;
        pairs.push(paired);
        paired = {};
      }
    }
    isPreviousCommentOff = isCurrentCommentOff;
  });

  if (onOffComments.length > 0 && isCurrentCommentOff) {
    paired.on = undefined;
    pairs.push(paired);
  }

  return pairs;
}

/**
 * Check if the node is between formatter:off and formatter:on and change his ignore state
 * @param node
 * @param commentPairs
 */
function shouldNotFormat(node, commentPairs) {
  const matchingPair = findLast(
    commentPairs,
    comment => comment.off.endOffset < node.location.startOffset
  );
  if (
    matchingPair !== undefined &&
    (matchingPair.on === undefined ||
      matchingPair.on.startOffset > node.location.endOffset)
  ) {
    node.ignore = true;
  }
}

module.exports = {
  matchFormatterOffOnPairs,
  shouldNotFormat,
  attachComments
};


/***/ }),

/***/ "./node_modules/java-parser/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/java-parser/src/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const JavaLexer = __webpack_require__(/*! ./lexer */ "./node_modules/java-parser/src/lexer.js");
const JavaParser = __webpack_require__(/*! ./parser */ "./node_modules/java-parser/src/parser.js");
const { attachComments, matchFormatterOffOnPairs } = __webpack_require__(/*! ./comments */ "./node_modules/java-parser/src/comments.js");

const parser = new JavaParser();

const BaseJavaCstVisitor = parser.getBaseCstVisitorConstructor();
const BaseJavaCstVisitorWithDefaults =
  parser.getBaseCstVisitorConstructorWithDefaults();

function parse(inputText, entryPoint = "compilationUnit") {
  // Lex
  const lexResult = JavaLexer.tokenize(inputText);

  if (lexResult.errors.length > 0) {
    const firstError = lexResult.errors[0];
    throw Error(
      "Sad sad panda, lexing errors detected in line: " +
        firstError.line +
        ", column: " +
        firstError.column +
        "!\n" +
        firstError.message
    );
  }

  parser.input = lexResult.tokens;
  parser.mostEnclosiveCstNodeByStartOffset = {};
  parser.mostEnclosiveCstNodeByEndOffset = {};

  parser.setOnOffCommentPairs(
    matchFormatterOffOnPairs(lexResult.groups.comments)
  );

  // Automatic CST created when parsing
  const cst = parser[entryPoint]();

  if (parser.errors.length > 0) {
    const error = parser.errors[0];
    throw Error(
      "Sad sad panda, parsing errors detected in line: " +
        error.token.startLine +
        ", column: " +
        error.token.startColumn +
        "!\n" +
        error.message +
        "!\n\t->" +
        error.context.ruleStack.join("\n\t->")
    );
  }

  attachComments(
    lexResult.tokens,
    lexResult.groups.comments,
    parser.mostEnclosiveCstNodeByStartOffset,
    parser.mostEnclosiveCstNodeByEndOffset
  );

  return cst;
}

module.exports = {
  parse,
  BaseJavaCstVisitor,
  BaseJavaCstVisitorWithDefaults
};


/***/ }),

/***/ "./node_modules/java-parser/src/lexer.js":
/*!***********************************************!*\
  !*** ./node_modules/java-parser/src/lexer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const chevrotain = __webpack_require__(/*! chevrotain */ "./node_modules/chevrotain/lib_esm/src/api.js");
const { allTokens } = __webpack_require__(/*! ./tokens */ "./node_modules/java-parser/src/tokens.js");
const { getSkipValidations } = __webpack_require__(/*! ./utils */ "./node_modules/java-parser/src/utils.js");

const Lexer = chevrotain.Lexer;
const JavaLexer = new Lexer(allTokens, {
  ensureOptimizations: true,
  skipValidations: getSkipValidations()
});

module.exports = JavaLexer;


/***/ }),

/***/ "./node_modules/java-parser/src/parser.js":
/*!************************************************!*\
  !*** ./node_modules/java-parser/src/parser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const { Parser, isRecognitionException } = __webpack_require__(/*! chevrotain */ "./node_modules/chevrotain/lib_esm/src/api.js");
const { allTokens, tokens: t } = __webpack_require__(/*! ./tokens */ "./node_modules/java-parser/src/tokens.js");
const lexicalStructure = __webpack_require__(/*! ./productions/lexical-structure */ "./node_modules/java-parser/src/productions/lexical-structure.js");
const typesValuesVariables = __webpack_require__(/*! ./productions/types-values-and-variables */ "./node_modules/java-parser/src/productions/types-values-and-variables.js");
const names = __webpack_require__(/*! ./productions/names */ "./node_modules/java-parser/src/productions/names.js");
const packagesModules = __webpack_require__(/*! ./productions/packages-and-modules */ "./node_modules/java-parser/src/productions/packages-and-modules.js");
const classes = __webpack_require__(/*! ./productions/classes */ "./node_modules/java-parser/src/productions/classes.js");
const interfaces = __webpack_require__(/*! ./productions/interfaces */ "./node_modules/java-parser/src/productions/interfaces.js");
const arrays = __webpack_require__(/*! ./productions/arrays */ "./node_modules/java-parser/src/productions/arrays.js");
const blocksStatements = __webpack_require__(/*! ./productions/blocks-and-statements */ "./node_modules/java-parser/src/productions/blocks-and-statements.js");
const expressions = __webpack_require__(/*! ./productions/expressions */ "./node_modules/java-parser/src/productions/expressions.js");
const { getSkipValidations } = __webpack_require__(/*! ./utils */ "./node_modules/java-parser/src/utils.js");
const { shouldNotFormat } = __webpack_require__(/*! ./comments */ "./node_modules/java-parser/src/comments.js");

/**
 * This parser attempts to strongly align with the specs style at:
 * -  https://docs.oracle.com/javase/specs/jls/se11/html/jls-19.html
 *
 * Deviations from the spec will be marked.
 *
 * Note that deviations from the spec do not mean deviations from Java Grammar.
 * Rather it means an **equivalent** grammar which was written differently, e.g:
 * - LL(k) vs LR(K)
 * - Left Recursions vs Repetitions
 * - NonTerminals combined together or divided to sub-NonTerminals
 * - ...
 *
 * A special type of spec deviations are the "super grammar" kind.
 * This means that the parser has been defined in such a way that it accept a
 * **strict superset** of the inputs the official grammar accepts.
 *
 * This technique is used to simplify the parser when narrowing the set
 * of accepted inputs can more easily be done in a post parsing phase.
 *
 * TODO: document guide lines for using back tracking
 *
 */
class JavaParser extends Parser {
  constructor() {
    super(allTokens, {
      maxLookahead: 1,
      nodeLocationTracking: "full",
      // traceInitPerf: 2,
      skipValidations: getSkipValidations()
    });

    const $ = this;

    this.mostEnclosiveCstNodeByStartOffset = {};
    this.mostEnclosiveCstNodeByEndOffset = {};

    // ---------------------
    // Productions from §3 (Lexical Structure)
    // ---------------------
    // TODO: move this rule to the correct file
    $.RULE("typeIdentifier", () => {
      // TODO: implement: Identifier but not var in the lexer
      $.CONSUME(t.Identifier);
    });

    // Include the productions from all "chapters".
    lexicalStructure.defineRules.call(this, $, t);
    typesValuesVariables.defineRules.call(this, $, t);
    names.defineRules.call(this, $, t);
    classes.defineRules.call(this, $, t);
    packagesModules.defineRules.call(this, $, t);
    interfaces.defineRules.call(this, $, t);
    arrays.defineRules.call(this, $, t);
    blocksStatements.defineRules.call(this, $, t);
    expressions.defineRules.call(this, $, t);

    this.firstForUnaryExpressionNotPlusMinus = [];
    this.performSelfAnalysis();
    this.firstForUnaryExpressionNotPlusMinus =
      expressions.computeFirstForUnaryExpressionNotPlusMinus.call(this);
  }

  cstPostNonTerminal(ruleCstResult, ruleName) {
    super.cstPostNonTerminal(ruleCstResult, ruleName);
    if (this.isBackTracking() === false) {
      this.mostEnclosiveCstNodeByStartOffset[
        ruleCstResult.location.startOffset
      ] = ruleCstResult;
      this.mostEnclosiveCstNodeByEndOffset[ruleCstResult.location.endOffset] =
        ruleCstResult;

      shouldNotFormat(ruleCstResult, this.onOffCommentPairs);
    }
  }

  BACKTRACK_LOOKAHEAD(production, errValue = false) {
    return this.ACTION(() => {
      this.isBackTrackingStack.push(1);
      // TODO: "saveRecogState" does not handle the occurrence stack
      const orgState = this.saveRecogState();
      try {
        // hack to enable outputting none CST values from grammar rules.
        this.outputCst = false;
        return production.call(this);
      } catch (e) {
        if (isRecognitionException(e)) {
          return errValue;
        }
        throw e;
      } finally {
        this.outputCst = true;
        this.reloadRecogState(orgState);
        this.isBackTrackingStack.pop();
      }
    });
  }

  setOnOffCommentPairs(onOffCommentPairs) {
    this.onOffCommentPairs = onOffCommentPairs;
  }
}

module.exports = JavaParser;


/***/ }),

/***/ "./node_modules/java-parser/src/productions/arrays.js":
/*!************************************************************!*\
  !*** ./node_modules/java-parser/src/productions/arrays.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { tokenMatcher } = __webpack_require__(/*! chevrotain */ "./node_modules/chevrotain/lib_esm/src/api.js");

function defineRules($, t) {
  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-10.html#jls-ArrayInitializer
  $.RULE("arrayInitializer", () => {
    $.CONSUME(t.LCurly);
    $.OPTION(() => {
      $.SUBRULE($.variableInitializerList);
    });
    $.OPTION2(() => {
      $.CONSUME(t.Comma);
    });
    $.CONSUME(t.RCurly);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-10.html#jls-VariableInitializerList
  $.RULE("variableInitializerList", () => {
    $.SUBRULE($.variableInitializer);
    $.MANY({
      // The optional last "Comma" of an "arrayInitializer"
      GATE: () => tokenMatcher(this.LA(2).tokenType, t.RCurly) === false,
      DEF: () => {
        $.CONSUME(t.Comma);
        $.SUBRULE2($.variableInitializer);
      }
    });
  });
}

module.exports = {
  defineRules
};


/***/ }),

/***/ "./node_modules/java-parser/src/productions/blocks-and-statements.js":
/*!***************************************************************************!*\
  !*** ./node_modules/java-parser/src/productions/blocks-and-statements.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { tokenMatcher } = __webpack_require__(/*! chevrotain */ "./node_modules/chevrotain/lib_esm/src/api.js");

// Spec Deviation: The "*NoShortIf" variations were removed as the ambiguity of
//                 the dangling else is resolved by attaching an "else" block
//                 to the nearest "if"
function defineRules($, t) {
  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-Block
  $.RULE("block", () => {
    $.CONSUME(t.LCurly);
    $.OPTION(() => {
      $.SUBRULE($.blockStatements);
    });
    $.CONSUME(t.RCurly);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-BlockStatements
  $.RULE("blockStatements", () => {
    $.SUBRULE($.blockStatement);
    $.MANY(() => {
      $.SUBRULE2($.blockStatement);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-BlockStatement
  $.RULE("blockStatement", () => {
    const isLocalVariableDeclaration = this.BACKTRACK_LOOKAHEAD(
      $.isLocalVariableDeclaration
    );

    const isClassDeclaration = this.BACKTRACK_LOOKAHEAD($.isClassDeclaration);

    $.OR({
      DEF: [
        {
          GATE: () => isLocalVariableDeclaration,
          ALT: () => $.SUBRULE($.localVariableDeclarationStatement)
        },
        {
          GATE: () => isClassDeclaration,
          ALT: () => $.SUBRULE($.classDeclaration)
        },
        {
          ALT: () => $.SUBRULE($.interfaceDeclaration)
        },
        { ALT: () => $.SUBRULE($.statement) }
      ],
      IGNORE_AMBIGUITIES: true
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-LocalVariableDeclarationStatement
  $.RULE("localVariableDeclarationStatement", () => {
    $.SUBRULE($.localVariableDeclaration);
    $.CONSUME(t.Semicolon);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-LocalVariableDeclaration
  $.RULE("localVariableDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.variableModifier);
    });
    $.SUBRULE($.localVariableType);
    $.SUBRULE($.variableDeclaratorList);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-LocalVariableType
  $.RULE("localVariableType", () => {
    $.OR({
      DEF: [
        { ALT: () => $.SUBRULE($.unannType) },
        { ALT: () => $.CONSUME(t.Var) }
      ],
      IGNORE_AMBIGUITIES: true
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-Statement
  $.RULE("statement", () => {
    $.OR({
      DEF: [
        {
          ALT: () => $.SUBRULE($.statementWithoutTrailingSubstatement)
        },
        { ALT: () => $.SUBRULE($.labeledStatement) },
        // Spec deviation: combined "IfThenStatement" and "IfThenElseStatement"
        { ALT: () => $.SUBRULE($.ifStatement) },
        { ALT: () => $.SUBRULE($.whileStatement) },
        { ALT: () => $.SUBRULE($.forStatement) }
      ],
      MAX_LOOKAHEAD: 2
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-StatementWithoutTrailingSubstatement
  $.RULE("statementWithoutTrailingSubstatement", () => {
    $.OR({
      DEF: [
        { ALT: () => $.SUBRULE($.block) },
        {
          GATE: () => this.BACKTRACK_LOOKAHEAD($.yieldStatement),
          ALT: () => $.SUBRULE($.yieldStatement)
        },
        { ALT: () => $.SUBRULE($.emptyStatement) },
        {
          GATE: () => !tokenMatcher(this.LA(1).tokenType, t.Switch),
          ALT: () => $.SUBRULE($.expressionStatement)
        },
        { ALT: () => $.SUBRULE($.assertStatement) },
        { ALT: () => $.SUBRULE($.switchStatement) },
        { ALT: () => $.SUBRULE($.doStatement) },
        { ALT: () => $.SUBRULE($.breakStatement) },
        { ALT: () => $.SUBRULE($.continueStatement) },
        { ALT: () => $.SUBRULE($.returnStatement) },
        { ALT: () => $.SUBRULE($.synchronizedStatement) },
        { ALT: () => $.SUBRULE($.throwStatement) },
        { ALT: () => $.SUBRULE($.tryStatement) }
      ],
      IGNORE_AMBIGUITIES: true
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-EmptyStatement
  $.RULE("emptyStatement", () => {
    $.CONSUME(t.Semicolon);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-LabeledStatement
  $.RULE("labeledStatement", () => {
    $.CONSUME(t.Identifier);
    $.CONSUME(t.Colon);
    $.SUBRULE($.statement);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-ExpressionStatement
  $.RULE("expressionStatement", () => {
    $.SUBRULE($.statementExpression);
    $.CONSUME(t.Semicolon);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-StatementExpression
  $.RULE("statementExpression", () => {
    // Spec deviation: The many alternatives here were replaced with
    //                 the "expression" rule as it contains them all,
    //                 and distinguishing between the alternatives cannot be done
    //                 using a fixed lookahead.
    // TODO: verify the resulting expression is one of the valid alternatives?
    $.SUBRULE($.expression);
  });

  // Spec deviation: combined "IfThenStatement" and "IfThenElseStatement"
  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-IfThenStatement
  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-IfThenElseStatement
  $.RULE("ifStatement", () => {
    $.CONSUME(t.If);
    $.CONSUME(t.LBrace);
    $.SUBRULE($.expression);
    $.CONSUME(t.RBrace);
    $.SUBRULE($.statement);
    $.OPTION(() => {
      $.CONSUME(t.Else);
      $.SUBRULE2($.statement);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-AssertStatement
  $.RULE("assertStatement", () => {
    $.CONSUME(t.Assert);
    $.SUBRULE($.expression);
    $.OPTION(() => {
      $.CONSUME(t.Colon);
      $.SUBRULE2($.expression);
    });
    $.CONSUME(t.Semicolon);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-SwitchStatement
  $.RULE("switchStatement", () => {
    $.CONSUME(t.Switch);
    $.CONSUME(t.LBrace);
    $.SUBRULE($.expression);
    $.CONSUME(t.RBrace);
    $.SUBRULE($.switchBlock);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-SwitchBlock
  $.RULE("switchBlock", () => {
    $.CONSUME(t.LCurly);
    $.OR([
      {
        GATE: () => this.BACKTRACK_LOOKAHEAD($.isClassicSwitchLabel),
        ALT: () => $.MANY(() => $.SUBRULE($.switchBlockStatementGroup))
      },
      {
        ALT: () => $.MANY2(() => $.SUBRULE($.switchRule))
      }
    ]);
    $.CONSUME(t.RCurly);
  });

  $.RULE("switchBlockStatementGroup", () => {
    $.SUBRULE($.switchLabel);
    $.CONSUME(t.Colon);
    $.OPTION(() => {
      $.SUBRULE($.blockStatements);
    });
  });

  $.RULE("switchLabel", () => {
    $.SUBRULE($.caseOrDefaultLabel);
    $.MANY({
      GATE: () =>
        tokenMatcher($.LA(1).tokenType, t.Colon) &&
        (tokenMatcher($.LA(2).tokenType, t.Case) ||
          tokenMatcher($.LA(2).tokenType, t.Default)),
      DEF: () => {
        $.CONSUME(t.Colon);
        $.SUBRULE2($.caseOrDefaultLabel);
      }
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-SwitchLabel
  $.RULE("caseOrDefaultLabel", () => {
    $.OR([
      {
        ALT: () => {
          $.CONSUME(t.Case);
          $.SUBRULE($.caseLabelElement);
          $.MANY(() => {
            $.CONSUME(t.Comma);
            $.SUBRULE2($.caseLabelElement);
          });
        }
      },
      {
        ALT: () => $.CONSUME(t.Default)
      }
    ]);
  });

  $.RULE("caseLabelElement", () => {
    $.OR([
      { ALT: () => $.CONSUME(t.Null) },
      { ALT: () => $.CONSUME(t.Default) },
      {
        GATE: () => this.BACKTRACK_LOOKAHEAD($.pattern),
        ALT: () => $.SUBRULE($.pattern)
      },
      {
        GATE: () => tokenMatcher($.LA(1).tokenType, t.Null) === false,
        ALT: () => $.SUBRULE($.caseConstant)
      }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-SwitchRule
  $.RULE("switchRule", () => {
    $.SUBRULE($.switchLabel);
    $.CONSUME(t.Arrow);
    $.OR([
      { ALT: () => $.SUBRULE($.throwStatement) },
      { ALT: () => $.SUBRULE($.block) },
      {
        ALT: () => {
          $.SUBRULE($.expression);
          $.CONSUME(t.Semicolon);
        }
      }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-EnumConstantName
  $.RULE("caseConstant", () => {
    $.SUBRULE($.ternaryExpression);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-WhileStatement
  $.RULE("whileStatement", () => {
    $.CONSUME(t.While);
    $.CONSUME(t.LBrace);
    $.SUBRULE($.expression);
    $.CONSUME(t.RBrace);
    $.SUBRULE($.statement);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-DoStatement
  $.RULE("doStatement", () => {
    $.CONSUME(t.Do);
    $.SUBRULE($.statement);
    $.CONSUME(t.While);
    $.CONSUME(t.LBrace);
    $.SUBRULE($.expression);
    $.CONSUME(t.RBrace);
    $.CONSUME(t.Semicolon);
  });
  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-ForStatement
  $.RULE("forStatement", () => {
    $.OR([
      {
        GATE: () => this.BACKTRACK_LOOKAHEAD($.isBasicForStatement),
        ALT: () => $.SUBRULE($.basicForStatement)
      },
      { ALT: () => $.SUBRULE($.enhancedForStatement) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-BasicForStatement
  $.RULE("basicForStatement", () => {
    $.CONSUME(t.For);
    $.CONSUME(t.LBrace);
    $.OPTION(() => {
      $.SUBRULE($.forInit);
    });
    $.CONSUME(t.Semicolon);
    $.OPTION2(() => {
      $.SUBRULE($.expression);
    });
    $.CONSUME2(t.Semicolon);
    $.OPTION3(() => {
      $.SUBRULE($.forUpdate);
    });
    $.CONSUME(t.RBrace);
    $.SUBRULE($.statement);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-ForInit
  $.RULE("forInit", () => {
    $.OR([
      {
        GATE: () => $.BACKTRACK_LOOKAHEAD($.isLocalVariableDeclaration),
        ALT: () => $.SUBRULE($.localVariableDeclaration)
      },
      { ALT: () => $.SUBRULE($.statementExpressionList) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-ForUpdate
  $.RULE("forUpdate", () => {
    $.SUBRULE($.statementExpressionList);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-StatementExpressionList
  $.RULE("statementExpressionList", () => {
    $.SUBRULE($.statementExpression);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.statementExpression);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-EnhancedForStatement
  $.RULE("enhancedForStatement", () => {
    $.CONSUME(t.For);
    $.CONSUME(t.LBrace);
    $.MANY(() => {
      $.SUBRULE($.variableModifier);
    });
    $.SUBRULE($.localVariableType);
    $.SUBRULE($.variableDeclaratorId);
    $.CONSUME(t.Colon);
    $.SUBRULE($.expression);
    $.CONSUME(t.RBrace);
    $.SUBRULE($.statement);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-BreakStatement
  $.RULE("breakStatement", () => {
    $.CONSUME(t.Break);
    $.OPTION(() => {
      $.CONSUME(t.Identifier);
    });
    $.CONSUME(t.Semicolon);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-ContinueStatement
  $.RULE("continueStatement", () => {
    $.CONSUME(t.Continue);
    $.OPTION(() => {
      $.CONSUME(t.Identifier);
    });
    $.CONSUME(t.Semicolon);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-ReturnStatement
  $.RULE("returnStatement", () => {
    $.CONSUME(t.Return);
    $.OPTION(() => {
      $.SUBRULE($.expression);
    });
    $.CONSUME(t.Semicolon);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-ThrowStatement
  $.RULE("throwStatement", () => {
    $.CONSUME(t.Throw);
    $.SUBRULE($.expression);
    $.CONSUME(t.Semicolon);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-SynchronizedStatement
  $.RULE("synchronizedStatement", () => {
    $.CONSUME(t.Synchronized);
    $.CONSUME(t.LBrace);
    $.SUBRULE($.expression);
    $.CONSUME(t.RBrace);
    $.SUBRULE($.block);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-TryStatement
  $.RULE("tryStatement", () => {
    $.OR({
      DEF: [
        {
          ALT: () => {
            $.CONSUME(t.Try);
            $.SUBRULE($.block);
            $.OR2([
              {
                ALT: () => {
                  $.SUBRULE($.catches);
                  $.OPTION(() => {
                    $.SUBRULE($.finally);
                  });
                }
              },
              { ALT: () => $.SUBRULE2($.finally) }
            ]);
          }
        },
        { ALT: () => $.SUBRULE($.tryWithResourcesStatement) }
      ],
      MAX_LOOKAHEAD: 2
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-Catches
  $.RULE("catches", () => {
    $.SUBRULE($.catchClause);
    $.MANY(() => {
      $.SUBRULE2($.catchClause);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-CatchClause
  $.RULE("catchClause", () => {
    $.CONSUME(t.Catch);
    $.CONSUME(t.LBrace);
    $.SUBRULE($.catchFormalParameter);
    $.CONSUME(t.RBrace);
    $.SUBRULE($.block);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-CatchFormalParameter
  $.RULE("catchFormalParameter", () => {
    $.MANY(() => {
      $.SUBRULE($.variableModifier);
    });
    $.SUBRULE($.catchType);
    $.SUBRULE($.variableDeclaratorId);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-CatchType
  $.RULE("catchType", () => {
    $.SUBRULE($.unannClassType);
    $.MANY(() => {
      $.CONSUME(t.Or);
      $.SUBRULE2($.classType);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-Finally
  $.RULE("finally", () => {
    $.CONSUME(t.Finally);
    $.SUBRULE($.block);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-TryWithResourcesStatement
  $.RULE("tryWithResourcesStatement", () => {
    $.CONSUME(t.Try);
    $.SUBRULE($.resourceSpecification);
    $.SUBRULE($.block);
    $.OPTION(() => {
      $.SUBRULE($.catches);
    });
    $.OPTION2(() => {
      $.SUBRULE($.finally);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-ResourceSpecification
  $.RULE("resourceSpecification", () => {
    $.CONSUME(t.LBrace);
    $.SUBRULE($.resourceList);
    $.OPTION(() => {
      $.CONSUME(t.Semicolon);
    });
    $.CONSUME(t.RBrace);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-ResourceList
  $.RULE("resourceList", () => {
    $.SUBRULE($.resource);
    $.MANY({
      GATE: () => tokenMatcher($.LA(2).tokenType, t.RBrace) === false,
      DEF: () => {
        $.CONSUME(t.Semicolon);
        $.SUBRULE2($.resource);
      }
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-Resource
  $.RULE("resource", () => {
    $.OR([
      {
        GATE: $.BACKTRACK($.resourceInit),
        // Spec Deviation: extracted this alternative to "resourceInit"
        //                 to enable backtracking.
        ALT: () => $.SUBRULE($.resourceInit)
      },
      { ALT: () => $.SUBRULE($.variableAccess) }
    ]);
  });

  // Spec Deviation: extracted from "resource"
  $.RULE("resourceInit", () => {
    $.MANY(() => {
      $.SUBRULE($.variableModifier);
    });
    $.SUBRULE($.localVariableType);
    $.CONSUME(t.Identifier);
    $.CONSUME(t.Equals);
    $.SUBRULE($.expression);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-YieldStatement
  $.RULE("yieldStatement", () => {
    $.CONSUME(t.Yield);
    $.SUBRULE($.expression);
    $.CONSUME(t.Semicolon);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-14.html#jls-VariableAccess
  $.RULE("variableAccess", () => {
    // Spec Deviation: both "expressionName" and "fieldAccess" can be parsed
    //                 by the "primary" rule
    // TODO: verify that the primary is a fieldAccess or an expressionName.
    $.SUBRULE($.primary);
  });

  // ------------------------------------
  // Special optimized backtracking rules.
  // ------------------------------------
  $.RULE("isBasicForStatement", () => {
    $.CONSUME(t.For);
    $.CONSUME(t.LBrace);
    $.OPTION(() => {
      $.SUBRULE($.forInit);
    });
    $.CONSUME(t.Semicolon);
    // consuming the first semiColon distinguishes between
    // "basic" and "enhanced" for statements
    return true;
  });

  $.RULE("isLocalVariableDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.variableModifier);
    });
    $.SUBRULE($.localVariableType);
    $.SUBRULE($.variableDeclaratorId);

    const nextTokenType = this.LA(1).tokenType;
    switch (nextTokenType) {
      // Int x;
      case t.Semicolon:
      // Int x, y, z;
      case t.Comma:
      // Int x = 5;
      case t.Equals:
        return true;
      default:
        return false;
    }
  });

  $.RULE("isClassicSwitchLabel", () => {
    $.SUBRULE($.switchLabel);
    $.CONSUME(t.Colon);
  });
}

module.exports = {
  defineRules
};


/***/ }),

/***/ "./node_modules/java-parser/src/productions/classes.js":
/*!*************************************************************!*\
  !*** ./node_modules/java-parser/src/productions/classes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { isRecognitionException, tokenMatcher } = __webpack_require__(/*! chevrotain */ "./node_modules/chevrotain/lib_esm/src/api.js");

function defineRules($, t) {
  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-ClassDeclaration
  $.RULE("classDeclaration", () => {
    // Spec Deviation: extracted common "{classModifier}" prefix
    //      extraction is safe because there are no other references to
    //      "normalClassDeclaration" and "enumDeclaration"
    $.MANY(() => {
      $.SUBRULE($.classModifier);
    });
    $.OR([
      { ALT: () => $.SUBRULE($.normalClassDeclaration) },
      { ALT: () => $.SUBRULE($.enumDeclaration) },
      { ALT: () => $.SUBRULE($.recordDeclaration) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-NormalClassDeclaration
  $.RULE("normalClassDeclaration", () => {
    // Spec Deviation: extracted common "{classModifier}" to "classDeclaration"
    $.CONSUME(t.Class);
    $.SUBRULE($.typeIdentifier);
    $.OPTION(() => {
      $.SUBRULE($.typeParameters);
    });
    $.OPTION2(() => {
      $.SUBRULE($.superclass);
    });
    $.OPTION3(() => {
      $.SUBRULE($.superinterfaces);
    });
    $.OPTION4(() => {
      $.SUBRULE($.classPermits);
    });
    $.SUBRULE($.classBody);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-ClassModifier
  $.RULE("classModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Public) },
      { ALT: () => $.CONSUME(t.Protected) },
      { ALT: () => $.CONSUME(t.Private) },
      { ALT: () => $.CONSUME(t.Abstract) },
      { ALT: () => $.CONSUME(t.Static) },
      { ALT: () => $.CONSUME(t.Final) },
      { ALT: () => $.CONSUME(t.Sealed) },
      { ALT: () => $.CONSUME(t.NonSealed) },
      { ALT: () => $.CONSUME(t.Strictfp) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-TypeParameters
  $.RULE("typeParameters", () => {
    $.CONSUME(t.Less);
    $.SUBRULE($.typeParameterList);
    $.CONSUME(t.Greater);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-TypeParameterList
  $.RULE("typeParameterList", () => {
    $.SUBRULE($.typeParameter);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.typeParameter);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-ClassExtends
  $.RULE("superclass", () => {
    $.CONSUME(t.Extends);
    $.SUBRULE($.classType);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-ClassImplements
  $.RULE("superinterfaces", () => {
    $.CONSUME(t.Implements);
    $.SUBRULE($.interfaceTypeList);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-InterfaceTypeList
  $.RULE("interfaceTypeList", () => {
    $.SUBRULE($.interfaceType);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.interfaceType);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/preview/specs/sealed-classes-jls.html
  $.RULE("classPermits", () => {
    $.CONSUME(t.Permits);
    $.SUBRULE($.typeName);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.typeName);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-ClassBody
  $.RULE("classBody", () => {
    $.CONSUME(t.LCurly);
    $.MANY(() => {
      $.SUBRULE($.classBodyDeclaration);
    });
    $.CONSUME(t.RCurly);
  });

  const classBodyTypes = {
    unknown: 0,
    fieldDeclaration: 1,
    methodDeclaration: 2,
    classDeclaration: 3,
    interfaceDeclaration: 4,
    semiColon: 5,
    instanceInitializer: 6,
    staticInitializer: 7,
    constructorDeclaration: 8
  };

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-ClassBodyDeclaration
  $.RULE("classBodyDeclaration", () => {
    const nextRuleType = $.BACKTRACK_LOOKAHEAD(
      $.identifyClassBodyDeclarationType
    );

    $.OR([
      {
        GATE: () =>
          nextRuleType >= classBodyTypes.fieldDeclaration &&
          nextRuleType <= classBodyTypes.semiColon,
        ALT: () =>
          $.SUBRULE($.classMemberDeclaration, {
            ARGS: [nextRuleType]
          })
      },
      // no gate needed for the initializers because these are LL(1) rules.
      { ALT: () => $.SUBRULE($.instanceInitializer) },
      { ALT: () => $.SUBRULE($.staticInitializer) },
      {
        GATE: () =>
          tokenMatcher(nextRuleType, classBodyTypes.constructorDeclaration),
        ALT: () => $.SUBRULE($.constructorDeclaration)
      }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-ClassMemberDeclaration
  $.RULE("classMemberDeclaration", nextRuleType => {
    $.OR([
      {
        GATE: () => nextRuleType === classBodyTypes.fieldDeclaration,
        ALT: () => $.SUBRULE($.fieldDeclaration)
      },
      {
        GATE: () => nextRuleType === classBodyTypes.methodDeclaration,
        ALT: () => $.SUBRULE($.methodDeclaration)
      },
      {
        GATE: () => nextRuleType === classBodyTypes.classDeclaration,
        ALT: () => $.SUBRULE($.classDeclaration)
      },
      {
        GATE: () => nextRuleType === classBodyTypes.interfaceDeclaration,
        ALT: () => $.SUBRULE($.interfaceDeclaration)
      },
      {
        // No GATE is needed as this is LL(1)
        ALT: () => $.CONSUME(t.Semicolon)
      }
    ]);
  });

  // // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-FieldDeclaration
  $.RULE("fieldDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.fieldModifier);
    });
    $.SUBRULE($.unannType);
    $.SUBRULE($.variableDeclaratorList);
    $.CONSUME(t.Semicolon);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-FieldModifier
  $.RULE("fieldModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Public) },
      { ALT: () => $.CONSUME(t.Protected) },
      { ALT: () => $.CONSUME(t.Private) },
      { ALT: () => $.CONSUME(t.Static) },
      { ALT: () => $.CONSUME(t.Final) },
      { ALT: () => $.CONSUME(t.Transient) },
      { ALT: () => $.CONSUME(t.Volatile) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-VariableDeclaratorList
  $.RULE("variableDeclaratorList", () => {
    $.SUBRULE($.variableDeclarator);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.variableDeclarator);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-VariableDeclarator
  $.RULE("variableDeclarator", () => {
    $.SUBRULE($.variableDeclaratorId);
    $.OPTION(() => {
      $.CONSUME(t.Equals);
      $.SUBRULE($.variableInitializer);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-VariableDeclaratorId
  $.RULE("variableDeclaratorId", () => {
    $.CONSUME(t.Identifier);
    $.OPTION(() => {
      $.SUBRULE($.dims);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-VariableInitializer
  $.RULE("variableInitializer", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.expression) },
      { ALT: () => $.SUBRULE($.arrayInitializer) }
    ]);
  });

  // // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-UnannType
  $.RULE("unannType", () => {
    $.OR([
      // Spec Deviation: The array type "dims" suffix was extracted to this rule
      // to avoid backtracking for performance reasons.
      { ALT: () => $.SUBRULE($.unannPrimitiveTypeWithOptionalDimsSuffix) },
      { ALT: () => $.SUBRULE($.unannReferenceType) }
    ]);
  });

  $.RULE("unannPrimitiveTypeWithOptionalDimsSuffix", () => {
    $.SUBRULE($.unannPrimitiveType);
    $.OPTION({
      GATE: () => this.BACKTRACK_LOOKAHEAD($.isDims),
      DEF: () => $.SUBRULE2($.dims)
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-UnannPrimitiveType
  $.RULE("unannPrimitiveType", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.numericType) },
      { ALT: () => $.CONSUME(t.Boolean) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-UnannReferenceType
  $.RULE("unannReferenceType", () => {
    $.SUBRULE($.unannClassOrInterfaceType);
    $.OPTION({
      GATE: () => this.BACKTRACK_LOOKAHEAD($.isDims),
      DEF: () => $.SUBRULE2($.dims)
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-UnannClassType
  $.RULE("unannClassOrInterfaceType", () => {
    // Spec Deviation: The spec says: "UnannClassType  | UnannInterfaceType" but "UnannInterfaceType"
    //                 is not mentioned in the parser because it is identical to "UnannClassType"
    //                 The distinction is **semantic** not syntactic.
    $.SUBRULE($.unannClassType);
  });

  $.RULE("unannClassType", () => {
    // Spec Deviation: Refactored left recursion and alternation to iterations
    $.CONSUME(t.Identifier);
    $.OPTION(() => {
      $.SUBRULE($.typeArguments);
    });
    $.MANY2(() => {
      $.CONSUME(t.Dot);
      $.MANY3(() => {
        $.SUBRULE2($.annotation);
      });
      // TODO: Semantic Check: This Identifier cannot be "var"
      $.CONSUME2(t.Identifier);
      $.OPTION2(() => {
        $.SUBRULE2($.typeArguments);
      });
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-UnannInterfaceType
  $.RULE("unannInterfaceType", () => {
    $.SUBRULE($.unannClassType);
  });

  $.RULE("unannTypeVariable", () => {
    // TODO: Semantic Check: This Identifier cannot be "var"
    // TODO: or define as token type?
    $.CONSUME(t.Identifier);
  });

  // // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-MethodDeclaration
  $.RULE("methodDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.methodModifier);
    });
    $.SUBRULE($.methodHeader);
    $.SUBRULE($.methodBody);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-MethodModifier
  $.RULE("methodModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Public) },
      { ALT: () => $.CONSUME(t.Protected) },
      { ALT: () => $.CONSUME(t.Private) },
      { ALT: () => $.CONSUME(t.Abstract) },
      { ALT: () => $.CONSUME(t.Static) },
      { ALT: () => $.CONSUME(t.Final) },
      { ALT: () => $.CONSUME(t.Synchronized) },
      { ALT: () => $.CONSUME(t.Native) },
      { ALT: () => $.CONSUME(t.Strictfp) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-MethodHeader
  $.RULE("methodHeader", () => {
    // Spec Deviation: extracted common prefix from both alternatives
    $.OPTION(() => {
      $.SUBRULE($.typeParameters);
      $.MANY(() => {
        $.SUBRULE($.annotation);
      });
    });
    $.SUBRULE($.result);
    $.SUBRULE($.methodDeclarator);
    $.OPTION2(() => {
      $.SUBRULE($.throws);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-Result
  $.RULE("result", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.unannType) },
      { ALT: () => $.CONSUME(t.Void) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-MethodDeclarator
  $.RULE("methodDeclarator", () => {
    $.CONSUME(t.Identifier);
    $.CONSUME(t.LBrace);
    $.OPTION(() => {
      $.SUBRULE($.formalParameterList);
    });
    $.CONSUME(t.RBrace);
    $.OPTION2(() => {
      $.SUBRULE($.dims);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-ReceiverParameter
  $.RULE("receiverParameter", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.SUBRULE($.unannType);
    $.OPTION(() => {
      $.CONSUME(t.Identifier);
      $.CONSUME(t.Dot);
    });
    $.CONSUME(t.This);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-FormalParameterList
  $.RULE("formalParameterList", () => {
    $.SUBRULE($.formalParameter);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.formalParameter);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-FormalParameter
  $.RULE("formalParameter", () => {
    $.OR([
      // Spec Deviation: extracted to "variableParaRegularParameter"
      {
        GATE: $.BACKTRACK($.variableParaRegularParameter),
        ALT: () => $.SUBRULE($.variableParaRegularParameter)
      },
      { ALT: () => $.SUBRULE($.variableArityParameter) }
    ]);
  });

  // Spec Deviation: extracted from "formalParameter"
  $.RULE("variableParaRegularParameter", () => {
    $.MANY(() => {
      $.SUBRULE($.variableModifier);
    });
    $.SUBRULE($.unannType);
    $.SUBRULE($.variableDeclaratorId);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-VariableArityParameter
  $.RULE("variableArityParameter", () => {
    $.MANY(() => {
      $.SUBRULE($.variableModifier);
    });
    $.SUBRULE($.unannType);
    $.MANY2(() => {
      $.SUBRULE($.annotation);
    });
    $.CONSUME(t.DotDotDot);
    $.CONSUME(t.Identifier);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-VariableModifier
  $.RULE("variableModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Final) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-Throws
  $.RULE("throws", () => {
    $.CONSUME(t.Throws);
    $.SUBRULE($.exceptionTypeList);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-ExceptionTypeList
  $.RULE("exceptionTypeList", () => {
    $.SUBRULE($.exceptionType);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.exceptionType);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-ExceptionType
  $.RULE("exceptionType", () => {
    // Spec Deviation: "typeVariable" alternative is missing because
    //                 it is contained in classType.
    $.SUBRULE($.classType);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-MethodBody
  $.RULE("methodBody", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.block) },
      { ALT: () => $.CONSUME(t.Semicolon) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-InstanceInitializer
  $.RULE("instanceInitializer", () => {
    $.SUBRULE($.block);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-StaticInitializer
  $.RULE("staticInitializer", () => {
    $.CONSUME(t.Static);
    $.SUBRULE($.block);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-ConstructorDeclaration
  $.RULE("constructorDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.constructorModifier);
    });
    $.SUBRULE($.constructorDeclarator);
    $.OPTION(() => {
      $.SUBRULE($.throws);
    });
    $.SUBRULE($.constructorBody);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-ConstructorModifier
  $.RULE("constructorModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Public) },
      { ALT: () => $.CONSUME(t.Protected) },
      { ALT: () => $.CONSUME(t.Private) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-ConstructorDeclarator
  $.RULE("constructorDeclarator", () => {
    $.OPTION(() => {
      $.SUBRULE($.typeParameters);
    });
    $.SUBRULE($.simpleTypeName);
    $.CONSUME(t.LBrace);
    $.OPTION2({
      // a "formalParameterList" and a "receiverParameter"
      // cannot be distinguished using fixed lookahead.
      GATE: $.BACKTRACK($.receiverParameter),
      DEF: () => {
        $.SUBRULE($.receiverParameter);
        $.CONSUME(t.Comma);
      }
    });
    $.OPTION3(() => {
      $.SUBRULE($.formalParameterList);
    });
    $.CONSUME(t.RBrace);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-SimpleTypeName
  $.RULE("simpleTypeName", () => {
    // TODO: implement: Identifier but not var
    $.CONSUME(t.Identifier);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-ConstructorBody
  $.RULE("constructorBody", () => {
    $.CONSUME(t.LCurly);
    $.OPTION({
      GATE: $.BACKTRACK($.explicitConstructorInvocation),
      DEF: () => {
        $.SUBRULE($.explicitConstructorInvocation);
      }
    });
    $.OPTION2(() => {
      $.SUBRULE($.blockStatements);
    });
    $.CONSUME(t.RCurly);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-ExplicitConstructorInvocation
  $.RULE("explicitConstructorInvocation", () => {
    // Spec Deviation: split into two separate sub rules.
    $.OR([
      {
        ALT: () => $.SUBRULE($.unqualifiedExplicitConstructorInvocation)
      },
      { ALT: () => $.SUBRULE($.qualifiedExplicitConstructorInvocation) }
    ]);
  });

  $.RULE("unqualifiedExplicitConstructorInvocation", () => {
    $.OPTION(() => {
      $.SUBRULE($.typeArguments);
    });
    $.OR([
      {
        ALT: () => $.CONSUME(t.This)
      },
      {
        ALT: () => $.CONSUME(t.Super)
      }
    ]);
    $.CONSUME(t.LBrace);
    $.OPTION2(() => {
      $.SUBRULE($.argumentList);
    });
    $.CONSUME(t.RBrace);
    $.CONSUME(t.Semicolon);
  });

  $.RULE("qualifiedExplicitConstructorInvocation", () => {
    // Spec Deviation: According to the spec the prefix may be a "primary' as well,
    //                 however, most primary variants don't make sense here
    // TODO: discover which primary forms could be valid here
    //       and handle only those specific cases.
    //       It is best if we avoid referencing "primary" rule from
    //       outside the expressions rules as the expressions rules are not aligned
    //       to the spec style, so we want the smallest possible "external api"
    //       for the expressions rules.
    $.SUBRULE($.expressionName);
    $.CONSUME(t.Dot);
    $.OPTION(() => {
      $.SUBRULE($.typeArguments);
    });
    $.CONSUME(t.Super);
    $.CONSUME(t.LBrace);
    $.OPTION2(() => {
      $.SUBRULE($.argumentList);
    });
    $.CONSUME(t.RBrace);
    $.CONSUME(t.Semicolon);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-EnumDeclaration
  $.RULE("enumDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.classModifier);
    });
    $.CONSUME(t.Enum);
    $.SUBRULE($.typeIdentifier);
    $.OPTION(() => {
      $.SUBRULE($.superinterfaces);
    });
    $.SUBRULE($.enumBody);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-EnumBody
  $.RULE("enumBody", () => {
    $.CONSUME(t.LCurly);
    $.OPTION(() => {
      $.SUBRULE($.enumConstantList);
    });
    $.OPTION2(() => {
      $.CONSUME(t.Comma);
    });
    $.OPTION3(() => {
      $.SUBRULE($.enumBodyDeclarations);
    });
    $.CONSUME(t.RCurly);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-EnumConstantList
  $.RULE("enumConstantList", () => {
    $.SUBRULE($.enumConstant);
    $.MANY({
      GATE: () => {
        const nextToken = $.LA(2);
        return (
          tokenMatcher(nextToken, t.Identifier) || tokenMatcher(nextToken, t.At)
        );
      },
      DEF: () => {
        $.CONSUME(t.Comma);
        $.SUBRULE2($.enumConstant);
      }
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-EnumConstant
  $.RULE("enumConstant", () => {
    $.MANY(() => {
      $.SUBRULE($.enumConstantModifier);
    });
    $.CONSUME(t.Identifier);
    $.OPTION(() => {
      $.CONSUME(t.LBrace);
      $.OPTION2(() => {
        $.SUBRULE($.argumentList);
      });
      $.CONSUME(t.RBrace);
    });
    $.OPTION3(() => {
      $.SUBRULE($.classBody);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-EnumConstantModifier
  $.RULE("enumConstantModifier", () => {
    $.SUBRULE($.annotation);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-EnumBodyDeclarations
  $.RULE("enumBodyDeclarations", () => {
    $.CONSUME(t.Semicolon);
    $.MANY(() => {
      $.SUBRULE($.classBodyDeclaration);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-RecordHeader
  $.RULE("recordDeclaration", () => {
    $.CONSUME(t.Record);
    $.SUBRULE($.typeIdentifier);
    $.OPTION(() => {
      $.SUBRULE($.typeParameters);
    });
    $.SUBRULE($.recordHeader);
    $.OPTION2(() => {
      $.SUBRULE($.superinterfaces);
    });
    $.SUBRULE($.recordBody);
  });

  $.RULE("recordHeader", () => {
    $.CONSUME(t.LBrace);
    $.OPTION(() => {
      $.SUBRULE($.recordComponentList);
    });
    $.CONSUME(t.RBrace);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-RecordComponentList
  $.RULE("recordComponentList", () => {
    $.SUBRULE($.recordComponent);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.recordComponent);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-RecordComponent
  $.RULE("recordComponent", () => {
    // Spec Deviation: extracted common "{recordComponentModifier} unannType" prefix
    //      extraction is safe because there are no other references to
    //      "variableArityRecordComponent"
    $.MANY(() => {
      $.SUBRULE($.recordComponentModifier);
    });
    $.SUBRULE($.unannType);
    $.OR([
      { ALT: () => $.CONSUME(t.Identifier) },
      { ALT: () => $.SUBRULE($.variableArityRecordComponent) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-VariableArityRecordComponent
  // Spec Deviation: common "{recordComponentModifier} unannType" prefix was extracted in "recordComponent"
  $.RULE("variableArityRecordComponent", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.CONSUME(t.DotDotDot);
    $.CONSUME(t.Identifier);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-RecordComponentModifier
  $.RULE("recordComponentModifier", () => {
    $.SUBRULE($.annotation);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-RecordBody
  $.RULE("recordBody", () => {
    $.CONSUME(t.LCurly);
    $.MANY(() => {
      $.SUBRULE($.recordBodyDeclaration);
    });
    $.CONSUME(t.RCurly);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-RecordBodyDeclaration
  $.RULE("recordBodyDeclaration", () => {
    $.OR([
      {
        GATE: () => this.BACKTRACK_LOOKAHEAD($.isCompactConstructorDeclaration),
        ALT: () => $.SUBRULE($.compactConstructorDeclaration)
      },
      { ALT: () => $.SUBRULE($.classBodyDeclaration) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-8.html#jls-CompactConstructorDeclaration
  $.RULE("compactConstructorDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.constructorModifier);
    });
    $.SUBRULE($.simpleTypeName);
    $.SUBRULE($.constructorBody);
  });

  $.RULE("isClassDeclaration", () => {
    let isEmptyTypeDeclaration = false;

    if (
      $.OPTION(() => {
        $.CONSUME(t.Semicolon);
      })
    ) {
      // an empty "TypeDeclaration"
      isEmptyTypeDeclaration = true;
    }

    try {
      // The {classModifier} is a super grammar of the "interfaceModifier"
      // So we must parse all the "{classModifier}" before we can distinguish
      // between the alternatives.
      $.MANY({
        GATE: () =>
          (tokenMatcher($.LA(1).tokenType, t.At) &&
            tokenMatcher($.LA(2).tokenType, t.Interface)) === false,
        DEF: () => {
          $.SUBRULE($.classModifier);
        }
      });
    } catch (e) {
      if (isRecognitionException(e)) {
        // TODO: add original syntax error?
        throw "Cannot Identify if the <TypeDeclaration> is a <ClassDeclaration> or an <InterfaceDeclaration>";
      } else {
        throw e;
      }
    }

    if (isEmptyTypeDeclaration) {
      return false;
    }

    const nextTokenType = this.LA(1).tokenType;
    return (
      tokenMatcher(nextTokenType, t.Class) ||
      tokenMatcher(nextTokenType, t.Enum) ||
      (tokenMatcher(nextTokenType, t.Record) &&
        tokenMatcher(this.LA(2).tokenType, t.Identifier))
    );
  });

  $.RULE("identifyClassBodyDeclarationType", () => {
    try {
      let nextTokenType = this.LA(1).tokenType;
      let nextNextTokenType = this.LA(2).tokenType;

      switch (nextTokenType) {
        case t.Semicolon:
          return classBodyTypes.semiColon;
        case t.LCurly:
          return classBodyTypes.instanceInitializer;
        case t.Static:
          switch (nextNextTokenType) {
            case t.LCurly:
              return classBodyTypes.staticInitializer;
          }
      }

      // We have to look beyond the modifiers to distinguish between the declaration types.
      $.MANY({
        GATE: () =>
          (tokenMatcher($.LA(1).tokenType, t.At) &&
            tokenMatcher($.LA(2).tokenType, t.Interface)) === false,
        DEF: () => {
          // This alternation includes all possible modifiers for all types of "ClassBodyDeclaration"
          // Certain combinations are syntactically invalid, this is **not** checked here,
          // Invalid combinations will cause a descriptive parsing error message to be
          // Created inside the relevant parsing rules **after** this lookahead
          // analysis.
          $.OR([
            {
              GATE: () =>
                (tokenMatcher($.LA(1).tokenType, t.At) &&
                  tokenMatcher($.LA(2).tokenType, t.Interface)) === false,
              ALT: () => $.SUBRULE($.annotation)
            },
            { ALT: () => $.CONSUME(t.Public) },
            { ALT: () => $.CONSUME(t.Protected) },
            { ALT: () => $.CONSUME(t.Private) },
            { ALT: () => $.CONSUME(t.Abstract) },
            { ALT: () => $.CONSUME(t.Static) },
            { ALT: () => $.CONSUME(t.Final) },
            { ALT: () => $.CONSUME(t.Transient) },
            { ALT: () => $.CONSUME(t.Volatile) },
            { ALT: () => $.CONSUME(t.Synchronized) },
            { ALT: () => $.CONSUME(t.Native) },
            { ALT: () => $.CONSUME(t.Strictfp) }
          ]);
        }
      });

      nextTokenType = this.LA(1).tokenType;
      nextNextTokenType = this.LA(2).tokenType;
      if (
        tokenMatcher(nextTokenType, t.Identifier) &&
        tokenMatcher(nextNextTokenType, t.LBrace)
      ) {
        return classBodyTypes.constructorDeclaration;
      }

      if (
        tokenMatcher(nextTokenType, t.Class) ||
        tokenMatcher(nextTokenType, t.Enum) ||
        tokenMatcher(nextTokenType, t.Record)
      ) {
        return classBodyTypes.classDeclaration;
      }

      if (
        tokenMatcher(nextTokenType, t.Interface) ||
        tokenMatcher(nextTokenType, t.At)
      ) {
        return classBodyTypes.interfaceDeclaration;
      }

      if (tokenMatcher(nextTokenType, t.Void)) {
        // method with result type "void"
        return classBodyTypes.methodDeclaration;
      }

      // Type Arguments common prefix
      if (tokenMatcher(nextTokenType, t.Less)) {
        this.SUBRULE($.typeParameters);
        const nextTokenType = this.LA(1).tokenType;
        const nextNextTokenType = this.LA(2).tokenType;
        // "<T> foo(" -> constructor
        if (
          tokenMatcher(nextTokenType, t.Identifier) &&
          tokenMatcher(nextNextTokenType, t.LBrace)
        ) {
          return classBodyTypes.constructorDeclaration;
        }
        // typeParameters can only appear in method or constructor
        // declarations, so if it is not a constructor it must be a method
        return classBodyTypes.methodDeclaration;
      }

      // Only field or method declarations may be valid at this point.
      // All other alternatives should have been attempted.
      // **both** start with "unannType"
      this.SUBRULE($.unannType);

      const nextToken = this.LA(1);
      nextNextTokenType = this.LA(2).tokenType;
      // "foo(..." --> look like method start
      if (
        tokenMatcher(nextToken, t.Identifier) &&
        tokenMatcher(nextNextTokenType, t.LBrace)
      ) {
        return classBodyTypes.methodDeclaration;
      }

      // a valid field
      // TODO: because we use token categories we should use tokenMatcher everywhere.
      if (tokenMatcher(nextToken, t.Identifier)) {
        return classBodyTypes.fieldDeclaration;
      }

      return classBodyTypes.unknown;
    } catch (e) {
      // TODO: add info from the original error
      throw Error("Cannot Identify the type of a <classBodyDeclaration>");
    }
  });

  $.RULE("isDims", () => {
    $.MANY($.annotation);
    return (
      tokenMatcher(this.LA(1).tokenType, t.LSquare) &&
      tokenMatcher(this.LA(2).tokenType, t.RSquare)
    );
  });

  $.RULE("isCompactConstructorDeclaration", () => {
    $.MANY($.constructorModifier);
    $.SUBRULE($.simpleTypeName);
    $.CONSUME(t.LCurly);
  });
}

module.exports = {
  defineRules
};


/***/ }),

/***/ "./node_modules/java-parser/src/productions/expressions.js":
/*!*****************************************************************!*\
  !*** ./node_modules/java-parser/src/productions/expressions.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const { tokenMatcher } = __webpack_require__(/*! chevrotain */ "./node_modules/chevrotain/lib_esm/src/api.js");
function defineRules($, t) {
  $.RULE("expression", () => {
    $.OR([
      {
        GATE: () => this.BACKTRACK_LOOKAHEAD($.isLambdaExpression),
        ALT: () => $.SUBRULE($.lambdaExpression)
      },
      { ALT: () => $.SUBRULE($.ternaryExpression) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-15.html#jls-LambdaExpression
  $.RULE("lambdaExpression", () => {
    $.SUBRULE($.lambdaParameters);
    $.CONSUME(t.Arrow);
    $.SUBRULE($.lambdaBody);
  });

  $.RULE("lambdaParameters", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.lambdaParametersWithBraces) },
      { ALT: () => $.CONSUME(t.Identifier) }
    ]);
  });

  $.RULE("lambdaParametersWithBraces", () => {
    $.CONSUME(t.LBrace);
    $.OPTION(() => {
      $.SUBRULE($.lambdaParameterList);
    });
    $.CONSUME(t.RBrace);
  });

  $.RULE("lambdaParameterList", () => {
    $.OR([
      {
        GATE: () => {
          const nextTokType = this.LA(1).tokenType;
          const nextNextTokType = this.LA(2).tokenType;
          return (
            tokenMatcher(nextTokType, t.Identifier) &&
            (tokenMatcher(nextNextTokType, t.RBrace) ||
              tokenMatcher(nextNextTokType, t.Comma))
          );
        },
        ALT: () => $.SUBRULE($.inferredLambdaParameterList)
      },
      { ALT: () => $.SUBRULE($.explicitLambdaParameterList) }
    ]);
  });

  $.RULE("inferredLambdaParameterList", () => {
    $.CONSUME(t.Identifier);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.CONSUME2(t.Identifier);
    });
  });

  $.RULE("explicitLambdaParameterList", () => {
    $.SUBRULE($.lambdaParameter);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.lambdaParameter);
    });
  });

  $.RULE("lambdaParameter", () => {
    // TODO: performance, investigate the performance boost that could
    //       be gained by refactoring out the backtracking.
    $.OR([
      {
        GATE: $.BACKTRACK($.regularLambdaParameter),
        ALT: () => $.SUBRULE($.regularLambdaParameter)
      },
      { ALT: () => $.SUBRULE($.variableArityParameter) }
    ]);
  });

  $.RULE("regularLambdaParameter", () => {
    $.MANY(() => {
      $.SUBRULE($.variableModifier);
    });
    $.SUBRULE($.lambdaParameterType);
    $.SUBRULE($.variableDeclaratorId);
  });

  $.RULE("lambdaParameterType", () => {
    $.OR({
      DEF: [
        { ALT: () => $.SUBRULE($.unannType) },
        { ALT: () => $.CONSUME(t.Var) }
      ],
      IGNORE_AMBIGUITIES: true
    });
  });

  $.RULE("lambdaBody", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.expression) },
      { ALT: () => $.SUBRULE($.block) }
    ]);
  });

  $.RULE("ternaryExpression", () => {
    $.SUBRULE($.binaryExpression);
    $.OPTION(() => {
      $.CONSUME(t.QuestionMark);
      $.SUBRULE($.expression);
      $.CONSUME(t.Colon);
      // TODO: in the grammar this is limited to "lambdaExpression: or "conditionalExpression"
      $.SUBRULE2($.expression);
    });
  });

  $.RULE("binaryExpression", () => {
    $.SUBRULE($.unaryExpression);
    $.MANY(() => {
      $.OR({
        DEF: [
          {
            ALT: () => {
              $.CONSUME(t.Instanceof);
              $.OR1([
                {
                  GATE: () => this.BACKTRACK_LOOKAHEAD($.pattern),
                  ALT: () => $.SUBRULE($.pattern)
                },
                {
                  ALT: () => $.SUBRULE($.referenceType)
                }
              ]);
            }
          },
          {
            ALT: () => {
              $.CONSUME(t.AssignmentOperator);
              $.SUBRULE2($.expression);
            }
          },
          // This is an example of why Java does not have a well designed grammar
          // See: https://manas.tech/blog/2008/10/12/why-java-generics-dont-have-problems-with-right-shift-operator.html
          // TODO: ensure the LT/GT sequences have no whitespace between each other.
          {
            // TODO: this is a bug in Chevrotain lookahead calculation. the "BinaryOperator" token can match "Less" or "Greater"
            //   as well, but because it is a **token Category** Chevrotain does not understand it need to looks two tokens ahead.
            GATE: () =>
              tokenMatcher($.LA(2).tokenType, t.Less) ||
              tokenMatcher($.LA(2).tokenType, t.Greater),
            ALT: () => {
              $.OR2([
                {
                  GATE: () => $.LA(1).startOffset + 1 === $.LA(2).startOffset,
                  ALT: () => {
                    $.CONSUME(t.Less);
                    $.CONSUME2(t.Less);
                  }
                },
                {
                  GATE: () => $.LA(1).startOffset + 1 === $.LA(2).startOffset,
                  ALT: () => {
                    $.CONSUME(t.Greater);
                    $.CONSUME2(t.Greater);
                    $.OPTION({
                      GATE: () =>
                        $.LA(0).startOffset + 1 === $.LA(1).startOffset,
                      DEF: () => $.CONSUME3(t.Greater)
                    });
                  }
                }
              ]);
              $.SUBRULE2($.unaryExpression);
            }
          },
          {
            ALT: () => {
              $.CONSUME(t.BinaryOperator);
              $.SUBRULE3($.unaryExpression);
            }
          }
        ],
        IGNORE_AMBIGUITIES: true // the ambiguity between 1 and 4 options is resolved by the order (instanceOf is first)
      });
    });
  });

  $.RULE("unaryExpression", () => {
    $.MANY(() => {
      $.CONSUME(t.UnaryPrefixOperator);
    });
    $.SUBRULE($.primary);
    $.MANY2(() => {
      $.CONSUME(t.UnarySuffixOperator);
    });
  });

  $.RULE("unaryExpressionNotPlusMinus", () => {
    $.MANY(() => {
      $.CONSUME(t.UnaryPrefixOperatorNotPlusMinus);
    });
    $.SUBRULE($.primary);
    $.MANY2(() => {
      $.CONSUME(t.UnarySuffixOperator);
    });
  });

  $.RULE("primary", () => {
    $.SUBRULE($.primaryPrefix);
    $.MANY(() => {
      $.SUBRULE($.primarySuffix);
    });
  });

  $.RULE("primaryPrefix", () => {
    let isCastExpression = false;
    if (tokenMatcher($.LA(1).tokenType, t.LBrace)) {
      isCastExpression = this.BACKTRACK_LOOKAHEAD($.isCastExpression);
    }

    $.OR([
      { ALT: () => $.SUBRULE($.literal) },
      { ALT: () => $.CONSUME(t.This) },
      { ALT: () => $.CONSUME(t.Void) },
      { ALT: () => $.SUBRULE($.unannPrimitiveTypeWithOptionalDimsSuffix) },
      { ALT: () => $.SUBRULE($.fqnOrRefType) },
      {
        GATE: () => isCastExpression,
        ALT: () => $.SUBRULE($.castExpression)
      },
      { ALT: () => $.SUBRULE($.parenthesisExpression) },
      { ALT: () => $.SUBRULE($.newExpression) },
      { ALT: () => $.SUBRULE($.switchStatement) }
    ]);
  });

  $.RULE("primarySuffix", () => {
    $.OR({
      DEF: [
        {
          ALT: () => {
            $.CONSUME(t.Dot);
            $.OR2([
              { ALT: () => $.CONSUME(t.This) },
              {
                ALT: () =>
                  $.SUBRULE($.unqualifiedClassInstanceCreationExpression)
              },
              {
                ALT: () => {
                  $.OPTION(() => {
                    $.SUBRULE($.typeArguments);
                  });
                  $.CONSUME(t.Identifier);
                }
              }
            ]);
          }
        },
        { ALT: () => $.SUBRULE($.methodInvocationSuffix) },
        { ALT: () => $.SUBRULE($.classLiteralSuffix) },
        { ALT: () => $.SUBRULE($.arrayAccessSuffix) },
        { ALT: () => $.SUBRULE($.methodReferenceSuffix) }
      ],
      MAX_LOOKAHEAD: 2
    });
  });

  // See https://github.com/jhipster/prettier-java/pull/154 to understand
  // why fqnOrRefTypePart is split in two rules (First and Rest)
  $.RULE("fqnOrRefType", () => {
    $.SUBRULE($.fqnOrRefTypePartFirst);

    $.MANY2({
      // ".class" is a classLiteralSuffix
      GATE: () =>
        // avoids ambiguity with ".this" and ".new" which are parsed as a primary suffix.
        tokenMatcher(this.LA(2).tokenType, t.Class) === false &&
        tokenMatcher(this.LA(2).tokenType, t.This) === false &&
        tokenMatcher(this.LA(2).tokenType, t.New) === false,
      DEF: () => {
        $.CONSUME(t.Dot);
        $.SUBRULE2($.fqnOrRefTypePartRest);
      }
    });

    // in case of an arrayType
    $.OPTION({
      // it is not enough to check only the opening "[", we must avoid conflict with
      // arrayAccessSuffix
      GATE: () =>
        tokenMatcher($.LA(1).tokenType, t.At) ||
        tokenMatcher($.LA(2).tokenType, t.RSquare),
      DEF: () => {
        $.SUBRULE($.dims);
      }
    });
  });

  // TODO: validation:
  //       1. "annotation" cannot be mixed with "methodTypeArguments" or "Super".
  //       2. "methodTypeArguments" cannot be mixed with "classTypeArguments" or "annotation".
  //       3. "Super" cannot be mixed with "classTypeArguments" or "annotation".
  //       4. At most one "Super" may be used.
  //       5. "Super" may be last or one before last (last may also be first if there is only a single part).
  $.RULE("fqnOrRefTypePartRest", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });

    $.OPTION(() => $.SUBRULE2($.typeArguments));

    $.SUBRULE($.fqnOrRefTypePartCommon);
  });

  $.RULE("fqnOrRefTypePartCommon", () => {
    $.OR([
      { ALT: () => $.CONSUME(t.Identifier) },
      { ALT: () => $.CONSUME(t.Super) }
    ]);

    let isRefTypeInMethodRef = false;
    // Performance optimization, only perform this backtracking when a '<' is found
    // TODO: performance optimization evaluation: avoid doing this backtracking for every "<" encountered.
    //       we could do it once (using global state) per "fqnOrRefType"
    // We could do it only once for
    if (tokenMatcher($.LA(1).tokenType, t.Less)) {
      isRefTypeInMethodRef = this.BACKTRACK_LOOKAHEAD($.isRefTypeInMethodRef);
    }

    $.OPTION2({
      // unrestricted typeArguments here would create an ambiguity with "LessThan" operator
      // e.g: "var x = a < b;"
      // The "<" would be parsed as the beginning of a "typeArguments"
      // and we will get an error: "expecting '>' but found: ';'"
      GATE: () => isRefTypeInMethodRef,
      DEF: () => {
        $.SUBRULE3($.typeArguments);
      }
    });
  });

  $.RULE("fqnOrRefTypePartFirst", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });

    $.SUBRULE($.fqnOrRefTypePartCommon);
  });

  $.RULE("parenthesisExpression", () => {
    $.CONSUME(t.LBrace);
    $.SUBRULE($.expression);
    $.CONSUME(t.RBrace);
  });

  $.RULE("castExpression", () => {
    $.OR([
      {
        // TODO: performance: can avoid backtracking again here, parent rule could have this information
        //       when it checks isCastExpression (refactor needed)
        GATE: () => this.BACKTRACK_LOOKAHEAD($.isPrimitiveCastExpression),
        ALT: () => $.SUBRULE($.primitiveCastExpression)
      },
      { ALT: () => $.SUBRULE($.referenceTypeCastExpression) }
    ]);
  });

  $.RULE("primitiveCastExpression", () => {
    $.CONSUME(t.LBrace);
    $.SUBRULE($.primitiveType);
    $.CONSUME(t.RBrace);
    $.SUBRULE($.unaryExpression);
  });

  $.RULE("referenceTypeCastExpression", () => {
    $.CONSUME(t.LBrace);
    $.SUBRULE($.referenceType);
    $.MANY(() => {
      $.SUBRULE($.additionalBound);
    });
    $.CONSUME(t.RBrace);
    $.OR([
      {
        GATE: () => this.BACKTRACK_LOOKAHEAD($.isLambdaExpression),
        ALT: () => $.SUBRULE($.lambdaExpression)
      },
      { ALT: () => $.SUBRULE($.unaryExpressionNotPlusMinus) }
    ]);
  });

  const newExpressionTypes = {
    arrayCreationExpression: 1,
    unqualifiedClassInstanceCreationExpression: 2
  };
  $.RULE("newExpression", () => {
    const type = this.BACKTRACK_LOOKAHEAD($.identifyNewExpressionType);

    $.OR([
      {
        GATE: () => type === newExpressionTypes.arrayCreationExpression,
        ALT: () => $.SUBRULE($.arrayCreationExpression)
      },
      {
        GATE: () =>
          type ===
          newExpressionTypes.unqualifiedClassInstanceCreationExpression,
        ALT: () => $.SUBRULE($.unqualifiedClassInstanceCreationExpression)
      }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-15.html#jls-UnqualifiedClassInstanceCreationExpression
  $.RULE("unqualifiedClassInstanceCreationExpression", () => {
    $.CONSUME(t.New);
    $.OPTION(() => {
      $.SUBRULE($.typeArguments);
    });
    $.SUBRULE($.classOrInterfaceTypeToInstantiate);
    $.CONSUME(t.LBrace);
    $.OPTION2(() => {
      $.SUBRULE($.argumentList);
    });
    $.CONSUME(t.RBrace);
    $.OPTION3(() => {
      $.SUBRULE($.classBody);
    });
  });

  $.RULE("classOrInterfaceTypeToInstantiate", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.CONSUME(t.Identifier);
    $.MANY2(() => {
      $.CONSUME(t.Dot);
      $.MANY3(() => {
        $.SUBRULE2($.annotation);
      });
      $.CONSUME2(t.Identifier);
    });
    $.OPTION(() => {
      $.SUBRULE($.typeArgumentsOrDiamond);
    });
  });

  $.RULE("typeArgumentsOrDiamond", () => {
    $.OR({
      DEF: [
        { ALT: () => $.SUBRULE($.diamond) },
        { ALT: () => $.SUBRULE($.typeArguments) }
      ],
      MAX_LOOKAHEAD: 2
    });
  });

  $.RULE("diamond", () => {
    $.CONSUME(t.Less);
    $.CONSUME(t.Greater);
  });

  $.RULE("methodInvocationSuffix", () => {
    $.CONSUME(t.LBrace);
    $.OPTION2(() => {
      $.SUBRULE($.argumentList);
    });
    $.CONSUME(t.RBrace);
  });

  $.RULE("argumentList", () => {
    $.SUBRULE($.expression);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.expression);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-15.html#jls-15.10.1
  $.RULE("arrayCreationExpression", () => {
    $.CONSUME(t.New);
    $.OR([
      {
        GATE: $.BACKTRACK($.primitiveType),
        ALT: () => $.SUBRULE($.primitiveType)
      },
      { ALT: () => $.SUBRULE($.classOrInterfaceType) }
    ]);

    $.OR2([
      {
        GATE: $.BACKTRACK($.arrayCreationDefaultInitSuffix),
        ALT: () => $.SUBRULE($.arrayCreationDefaultInitSuffix)
      },
      { ALT: () => $.SUBRULE($.arrayCreationExplicitInitSuffix) }
    ]);
  });

  $.RULE("arrayCreationDefaultInitSuffix", () => {
    $.SUBRULE($.dimExprs);
    $.OPTION(() => {
      $.SUBRULE($.dims);
    });
  });

  $.RULE("arrayCreationExplicitInitSuffix", () => {
    $.SUBRULE($.dims);
    $.SUBRULE($.arrayInitializer);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-15.html#jls-DimExprs
  $.RULE("dimExprs", () => {
    $.SUBRULE($.dimExpr);
    $.MANY({
      // The GATE is to distinguish DimExpr from Dims :
      // the only difference between these two is the presence of an expression in the DimExpr
      // Example: If the GATE is not present double[3][] won't be parsed as the parser will try to parse "[]"
      // as a dimExpr instead of a dims
      GATE: () => tokenMatcher($.LA(2).tokenType, t.RSquare) === false,
      DEF: () => $.SUBRULE2($.dimExpr)
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-15.html#jls-DimExpr
  $.RULE("dimExpr", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.CONSUME(t.LSquare);
    $.SUBRULE($.expression);
    $.CONSUME(t.RSquare);
  });

  $.RULE("classLiteralSuffix", () => {
    $.MANY(() => {
      $.CONSUME(t.LSquare);
      $.CONSUME(t.RSquare);
    });
    $.CONSUME(t.Dot);
    $.CONSUME(t.Class);
  });

  $.RULE("arrayAccessSuffix", () => {
    $.CONSUME(t.LSquare);
    $.SUBRULE($.expression);
    $.CONSUME(t.RSquare);
  });

  $.RULE("methodReferenceSuffix", () => {
    $.CONSUME(t.ColonColon);
    $.OPTION(() => {
      $.SUBRULE($.typeArguments);
    });

    $.OR([
      { ALT: () => $.CONSUME(t.Identifier) },
      // TODO: a constructor method reference ("new") can only be used
      //   in specific contexts, but perhaps this verification is best left
      //   for a semantic analysis phase
      { ALT: () => $.CONSUME(t.New) }
    ]);
  });

  $.RULE("pattern", () => {
    $.SUBRULE($.typePattern);
  });

  $.RULE("typePattern", () => {
    $.SUBRULE($.localVariableDeclaration);
  });

  // backtracking lookahead logic
  $.RULE("identifyNewExpressionType", () => {
    $.CONSUME(t.New);
    const firstTokenAfterNew = this.LA(1).tokenType;

    // not an array initialization due to the prefix "TypeArguments"
    if (tokenMatcher(firstTokenAfterNew, t.Less)) {
      return newExpressionTypes.unqualifiedClassInstanceCreationExpression;
    }

    try {
      $.SUBRULE($.classOrInterfaceTypeToInstantiate);
    } catch (e) {
      // if it is not a "classOrInterfaceTypeToInstantiate" then
      // (assuming a valid input) we are looking at an "arrayCreationExpression"
      return newExpressionTypes.arrayCreationExpression;
    }

    const firstTokenAfterClassType = this.LA(1).tokenType;
    if (tokenMatcher(firstTokenAfterClassType, t.LBrace)) {
      return newExpressionTypes.unqualifiedClassInstanceCreationExpression;
    }

    // The LBrace above is mandatory in "classInstanceCreation..." so
    // it must be an "arrayCreationExp" (if the input is valid)
    // TODO: upgrade the logic to return "unknown" type if at this
    //       point it does not match "arrayCreation" either.
    //   - This will provide a better error message to the user
    //     in case of invalid inputs
    return newExpressionTypes.arrayCreationExpression;
  });

  // Optimized backtracking, only scan ahead until the arrow("->").
  $.RULE("isLambdaExpression", () => {
    // TODO: this check of next two tokens is probably redundant as the normal lookahead should take care of this.
    const firstTokenType = this.LA(1).tokenType;
    const secondTokenType = this.LA(2).tokenType;
    // no parent lambda "x -> x * 2"
    if (
      tokenMatcher(firstTokenType, t.Identifier) &&
      tokenMatcher(secondTokenType, t.Arrow)
    ) {
      return true;
    }
    // Performance optimizations, fail fast if it is not a LBrace.
    else if (tokenMatcher(firstTokenType, t.LBrace)) {
      $.SUBRULE($.lambdaParametersWithBraces);
      const followedByArrow = tokenMatcher(this.LA(1).tokenType, t.Arrow);
      return followedByArrow;
    }
    return false;
  });

  $.RULE("isCastExpression", () => {
    if (this.BACKTRACK_LOOKAHEAD($.isPrimitiveCastExpression)) {
      return true;
    }
    return this.BACKTRACK_LOOKAHEAD($.isReferenceTypeCastExpression);
  });

  $.RULE("isPrimitiveCastExpression", () => {
    $.CONSUME(t.LBrace);
    $.SUBRULE($.primitiveType);
    // No dims so this is not a reference Type
    $.CONSUME(t.RBrace);
    return true;
  });

  $.RULE("isReferenceTypeCastExpression", () => {
    $.CONSUME(t.LBrace);
    $.SUBRULE($.referenceType);
    $.MANY(() => {
      $.SUBRULE($.additionalBound);
    });
    $.CONSUME(t.RBrace);
    const firstTokTypeAfterRBrace = this.LA(1).tokenType;

    return (
      this.firstForUnaryExpressionNotPlusMinus.find(tokType =>
        tokenMatcher(firstTokTypeAfterRBrace, tokType)
      ) !== undefined
    );
  });

  $.RULE("isRefTypeInMethodRef", () => {
    let result = undefined;
    $.SUBRULE($.typeArguments);

    // arrayType
    const hasDims = $.OPTION(() => {
      $.SUBRULE($.dims);
    });

    const firstTokTypeAfterTypeArgs = this.LA(1).tokenType;
    if (tokenMatcher(firstTokTypeAfterTypeArgs, t.ColonColon)) {
      result = true;
    }
    // we must be at the end of a "referenceType" if "dims" were encountered
    // So there is not point to check farther
    else if (hasDims) {
      result = false;
    }

    // in the middle of a "classReferenceType"
    $.OPTION2(() => {
      $.CONSUME(t.Dot);
      $.SUBRULE($.classOrInterfaceType);
    });

    if (result !== undefined) {
      return result;
    }

    const firstTokTypeAfterRefType = this.LA(1).tokenType;
    return tokenMatcher(firstTokTypeAfterRefType, t.ColonColon);
  });
}

function computeFirstForUnaryExpressionNotPlusMinus() {
  const firstUnaryExpressionNotPlusMinus = this.computeContentAssist(
    "unaryExpressionNotPlusMinus",
    []
  );
  const nextTokTypes = firstUnaryExpressionNotPlusMinus.map(
    x => x.nextTokenType
  );
  // uniq
  return nextTokTypes.filter((v, i, a) => a.indexOf(v) === i);
}

module.exports = {
  defineRules,
  computeFirstForUnaryExpressionNotPlusMinus
};


/***/ }),

/***/ "./node_modules/java-parser/src/productions/interfaces.js":
/*!****************************************************************!*\
  !*** ./node_modules/java-parser/src/productions/interfaces.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const { tokenMatcher } = __webpack_require__(/*! chevrotain */ "./node_modules/chevrotain/lib_esm/src/api.js");

function defineRules($, t) {
  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-InterfaceDeclaration
  $.RULE("interfaceDeclaration", () => {
    // Spec Deviation: extracted the common "interfaceModifier" prefix to avoid backtracking.
    $.MANY({
      DEF: () => {
        $.SUBRULE($.interfaceModifier);
      },
      MAX_LOOKAHEAD: 2
    });

    $.OR([
      { ALT: () => $.SUBRULE($.normalInterfaceDeclaration) },
      { ALT: () => $.SUBRULE($.annotationTypeDeclaration) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-NormalInterfaceDeclaration
  $.RULE("normalInterfaceDeclaration", () => {
    // Spec Deviation: The "interfaceModifier" prefix was extracted to the "interfaceDeclaration"
    $.CONSUME(t.Interface);
    $.SUBRULE($.typeIdentifier);
    $.OPTION(() => {
      $.SUBRULE($.typeParameters);
    });
    $.OPTION2(() => {
      $.SUBRULE($.extendsInterfaces);
    });
    $.OPTION3(() => {
      $.SUBRULE($.interfacePermits);
    });
    $.SUBRULE($.interfaceBody);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-InterfaceModifier
  $.RULE("interfaceModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Public) },
      { ALT: () => $.CONSUME(t.Protected) },
      { ALT: () => $.CONSUME(t.Private) },
      { ALT: () => $.CONSUME(t.Abstract) },
      { ALT: () => $.CONSUME(t.Static) },
      { ALT: () => $.CONSUME(t.Sealed) },
      { ALT: () => $.CONSUME(t.NonSealed) },
      { ALT: () => $.CONSUME(t.Strictfp) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-InterfaceExtends
  $.RULE("extendsInterfaces", () => {
    $.CONSUME(t.Extends);
    $.SUBRULE($.interfaceTypeList);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/preview/specs/sealed-classes-jls.html
  $.RULE("interfacePermits", () => {
    $.CONSUME(t.Permits);
    $.SUBRULE($.typeName);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.typeName);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-InterfaceBody
  $.RULE("interfaceBody", () => {
    $.CONSUME(t.LCurly);
    $.MANY(() => {
      $.SUBRULE($.interfaceMemberDeclaration);
    });
    $.CONSUME(t.RCurly);
  });

  const InterfaceBodyTypes = {
    unknown: 0,
    constantDeclaration: 1,
    interfaceMethodDeclaration: 2,
    classDeclaration: 3,
    interfaceDeclaration: 4,
    semiColon: 5
  };

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-InterfaceMemberDeclaration
  $.RULE("interfaceMemberDeclaration", () => {
    const detectedType = this.BACKTRACK_LOOKAHEAD(
      $.identifyInterfaceBodyDeclarationType
    );

    $.OR([
      {
        GATE: () => detectedType === InterfaceBodyTypes.constantDeclaration,
        ALT: () => $.SUBRULE($.constantDeclaration)
      },
      {
        GATE: () =>
          detectedType === InterfaceBodyTypes.interfaceMethodDeclaration,
        ALT: () => $.SUBRULE($.interfaceMethodDeclaration)
      },
      {
        GATE: () => detectedType === InterfaceBodyTypes.classDeclaration,
        ALT: () => $.SUBRULE($.classDeclaration)
      },
      {
        GATE: () => detectedType === InterfaceBodyTypes.interfaceDeclaration,
        ALT: () => $.SUBRULE($.interfaceDeclaration)
      },
      {
        // No GATE is needed as this is LL(1)
        ALT: () => $.CONSUME(t.Semicolon)
      }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-ConstantDeclaration
  $.RULE("constantDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.constantModifier);
    });
    $.SUBRULE($.unannType);
    $.SUBRULE($.variableDeclaratorList);
    $.CONSUME(t.Semicolon);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-ConstantModifier
  $.RULE("constantModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Public) },
      { ALT: () => $.CONSUME(t.Static) },
      { ALT: () => $.CONSUME(t.Final) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-InterfaceMethodDeclaration
  $.RULE("interfaceMethodDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.interfaceMethodModifier);
    });
    $.SUBRULE($.methodHeader);
    $.SUBRULE($.methodBody);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-InterfaceMethodModifier
  $.RULE("interfaceMethodModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Public) },
      { ALT: () => $.CONSUME(t.Private) },
      { ALT: () => $.CONSUME(t.Abstract) },
      { ALT: () => $.CONSUME(t.Default) },
      { ALT: () => $.CONSUME(t.Static) },
      { ALT: () => $.CONSUME(t.Strictfp) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-AnnotationTypeDeclaration
  $.RULE("annotationTypeDeclaration", () => {
    // Spec Deviation: The "interfaceModifier" prefix was extracted to the "interfaceDeclaration"
    $.CONSUME(t.At);
    $.CONSUME(t.Interface);
    $.SUBRULE($.typeIdentifier);
    $.SUBRULE($.annotationTypeBody);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-AnnotationTypeBody
  $.RULE("annotationTypeBody", () => {
    $.CONSUME(t.LCurly);
    $.MANY(() => {
      $.SUBRULE($.annotationTypeMemberDeclaration);
    });
    $.CONSUME(t.RCurly);
  });

  const AnnotationBodyTypes = {
    unknown: 0,
    annotationTypeElementDeclaration: 2,
    constantDeclaration: 1,
    classDeclaration: 3,
    interfaceDeclaration: 4,
    semiColon: 5
  };

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-InterfaceMemberDeclaration
  $.RULE("annotationTypeMemberDeclaration", () => {
    const detectedType = this.BACKTRACK_LOOKAHEAD(
      $.identifyAnnotationBodyDeclarationType
    );

    $.OR([
      {
        GATE: () =>
          detectedType === AnnotationBodyTypes.annotationTypeElementDeclaration,
        ALT: () => $.SUBRULE($.annotationTypeElementDeclaration)
      },
      {
        GATE: () => detectedType === AnnotationBodyTypes.constantDeclaration,
        ALT: () => $.SUBRULE($.constantDeclaration)
      },
      {
        GATE: () => detectedType === AnnotationBodyTypes.classDeclaration,
        ALT: () => $.SUBRULE($.classDeclaration)
      },
      {
        GATE: () => detectedType === AnnotationBodyTypes.interfaceDeclaration,
        ALT: () => $.SUBRULE($.interfaceDeclaration)
      },
      {
        // No GATE is needed as this is LL(1)
        ALT: () => $.CONSUME(t.Semicolon)
      }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-AnnotationTypeElementDeclaration
  $.RULE("annotationTypeElementDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.annotationTypeElementModifier);
    });
    $.SUBRULE($.unannType);
    $.CONSUME(t.Identifier);
    $.CONSUME(t.LBrace);
    $.CONSUME(t.RBrace);
    $.OPTION(() => {
      $.SUBRULE($.dims);
    });
    $.OPTION2(() => {
      $.SUBRULE($.defaultValue);
    });
    $.CONSUME(t.Semicolon);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-AnnotationTypeElementModifier
  $.RULE("annotationTypeElementModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Public) },
      { ALT: () => $.CONSUME(t.Abstract) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-DefaultValue
  $.RULE("defaultValue", () => {
    $.CONSUME(t.Default);
    $.SUBRULE($.elementValue);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-Annotation
  $.RULE("annotation", () => {
    // Spec Deviation: The common prefix for all three annotation types was extracted to this rule.
    // This was done to avoid the use of backtracking for performance reasons.
    $.CONSUME(t.At);
    $.SUBRULE($.typeName);

    // If this optional grammar was not invoked we have a markerAnnotation
    // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-MarkerAnnotation
    $.OPTION(() => {
      $.CONSUME(t.LBrace);
      $.OR({
        DEF: [
          // normal annotation - https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-NormalAnnotation
          { ALT: () => $.SUBRULE($.elementValuePairList) },
          // Single Element Annotation - https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-SingleElementAnnotation
          {
            ALT: () => $.SUBRULE($.elementValue)
          },
          {
            ALT: () => {
              /* empty normal annotation contents */
            }
          }
        ],
        IGNORE_AMBIGUITIES: true,
        MAX_LOOKAHEAD: 2
      });
      $.CONSUME(t.RBrace);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-ElementValuePairList
  $.RULE("elementValuePairList", () => {
    $.SUBRULE($.elementValuePair);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.elementValuePair);
    });
  });

  $.RULE("elementValuePair", () => {
    $.CONSUME(t.Identifier);
    $.CONSUME(t.Equals);
    $.SUBRULE($.elementValue);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-ElementValue
  $.RULE("elementValue", () => {
    const isSimpleElementValueAnnotation = this.BACKTRACK_LOOKAHEAD(
      $.isSimpleElementValueAnnotation
    );

    $.OR([
      // Spec Deviation: "conditionalExpression" replaced with "expression"
      // Because we cannot differentiate between the two using fixed lookahead.
      {
        GATE: () => isSimpleElementValueAnnotation === false,
        ALT: () => $.SUBRULE($.expression)
      },
      { ALT: () => $.SUBRULE($.elementValueArrayInitializer) },
      {
        GATE: () => isSimpleElementValueAnnotation === true,
        ALT: () => $.SUBRULE($.annotation)
      }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-ElementValueArrayInitializer
  $.RULE("elementValueArrayInitializer", () => {
    $.CONSUME(t.LCurly);
    $.OPTION(() => {
      $.SUBRULE($.elementValueList);
    });
    $.OPTION2(() => {
      $.CONSUME(t.Comma);
    });
    $.CONSUME(t.RCurly);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-9.html#jls-ElementValueList
  $.RULE("elementValueList", () => {
    $.SUBRULE($.elementValue);
    $.MANY({
      GATE: () => tokenMatcher($.LA(2).tokenType, t.RCurly) === false,
      DEF: () => {
        $.CONSUME(t.Comma);
        $.SUBRULE2($.elementValue);
      }
    });
  });

  // ------------------------------------
  // Special optimized backtracking rules.
  // ------------------------------------
  $.RULE("identifyInterfaceBodyDeclarationType", () => {
    let nextTokenType = this.LA(1).tokenType;
    if (tokenMatcher(nextTokenType, t.Semicolon)) {
      return InterfaceBodyTypes.semiColon;
    }

    // We have to look beyond the modifiers to distinguish between the declaration types.
    $.MANY({
      // To avoid ambiguity with @interface ("AnnotationTypeDeclaration" vs "Annotaion")
      GATE: () =>
        (tokenMatcher($.LA(1).tokenType, t.At) &&
          tokenMatcher($.LA(2).tokenType, t.Interface)) === false,
      DEF: () => {
        // This alternation includes all possible modifiers for all types of "interfaceMemberDeclaration"
        // Certain combinations are syntactically invalid, this is **not** checked here,
        // Invalid combinations will cause a descriptive parsing error message to be
        // Created inside the relevant parsing rules **after** this lookahead
        // analysis.
        $.OR([
          { ALT: () => $.SUBRULE($.annotation) },
          { ALT: () => $.CONSUME(t.Public) },
          { ALT: () => $.CONSUME(t.Protected) },
          { ALT: () => $.CONSUME(t.Private) },
          { ALT: () => $.CONSUME(t.Static) },
          { ALT: () => $.CONSUME(t.Final) },
          { ALT: () => $.CONSUME(t.Abstract) },
          { ALT: () => $.CONSUME(t.Default) },
          { ALT: () => $.CONSUME(t.Strictfp) }
        ]);
      }
    });

    nextTokenType = this.LA(1).tokenType;
    if (
      tokenMatcher(nextTokenType, t.Class) ||
      tokenMatcher(nextTokenType, t.Enum) ||
      tokenMatcher(nextTokenType, t.Record)
    ) {
      return InterfaceBodyTypes.classDeclaration;
    }
    if (
      tokenMatcher(nextTokenType, t.Interface) ||
      tokenMatcher(nextTokenType, t.At)
    ) {
      return InterfaceBodyTypes.interfaceDeclaration;
    }
    if (
      tokenMatcher(nextTokenType, t.Void) ||
      tokenMatcher(nextTokenType, t.Less)
    ) {
      // method with result type "void"
      return InterfaceBodyTypes.interfaceMethodDeclaration;
    }

    // Only constant or interfaceMethod declarations may be valid at this point.
    // All other alternatives should have been attempted.
    // **both** start with "unannType"
    this.SUBRULE($.unannType);

    const nextToken = this.LA(1);
    const nextNextTokenType = this.LA(2).tokenType;
    // "foo(..." --> look like method start
    if (
      tokenMatcher(nextToken, t.Identifier) &&
      tokenMatcher(nextNextTokenType, t.LBrace)
    ) {
      return InterfaceBodyTypes.interfaceMethodDeclaration;
    }
    // a valid constant
    if (tokenMatcher(nextToken, t.Identifier)) {
      return InterfaceBodyTypes.constantDeclaration;
    }
    return InterfaceBodyTypes.unknown;
  });

  $.RULE("identifyAnnotationBodyDeclarationType", () => {
    let nextTokenType = this.LA(1).tokenType;
    if (tokenMatcher(nextTokenType, t.Semicolon)) {
      return AnnotationBodyTypes.semiColon;
    }

    // We have to look beyond the modifiers to distinguish between the declaration types.
    $.MANY({
      // To avoid ambiguity with @interface ("AnnotationTypeDeclaration" vs "Annotaion")
      GATE: () =>
        (tokenMatcher($.LA(1).tokenType, t.At) &&
          tokenMatcher($.LA(2).tokenType, t.Interface)) === false,
      DEF: () => {
        // This alternation includes all possible modifiers for all types of "annotationTypeMemberDeclaration"
        // Certain combinations are syntactically invalid, this is **not** checked here,
        // Invalid combinations will cause a descriptive parsing error message to be
        // Created inside the relevant parsing rules **after** this lookahead
        // analysis.
        $.OR([
          { ALT: () => $.SUBRULE($.annotation) },
          { ALT: () => $.CONSUME(t.Public) },
          { ALT: () => $.CONSUME(t.Protected) },
          { ALT: () => $.CONSUME(t.Private) },
          { ALT: () => $.CONSUME(t.Abstract) },
          { ALT: () => $.CONSUME(t.Static) },
          { ALT: () => $.CONSUME(t.Final) },
          { ALT: () => $.CONSUME(t.Strictfp) }
        ]);
      }
    });

    nextTokenType = this.LA(1).tokenType;
    if (
      tokenMatcher(nextTokenType, t.Class) ||
      tokenMatcher(nextTokenType, t.Enum)
    ) {
      return AnnotationBodyTypes.classDeclaration;
    }
    if (
      tokenMatcher(nextTokenType, t.Interface) ||
      tokenMatcher(nextTokenType, t.At)
    ) {
      return AnnotationBodyTypes.interfaceDeclaration;
    }

    // Only constant or annotationTypeElement declarations may be valid at this point.
    // All other alternatives should have been attempted.
    // **both** start with "unannType"
    this.SUBRULE($.unannType);

    nextTokenType = this.LA(1).tokenType;
    const nextNextTokenType = this.LA(2).tokenType;
    // "foo(..." --> look like annotationTypeElement start
    if (
      tokenMatcher(nextTokenType, t.Identifier) &&
      tokenMatcher(nextNextTokenType, t.LBrace)
    ) {
      return AnnotationBodyTypes.annotationTypeElementDeclaration;
    }
    // a valid constant
    if (tokenMatcher(nextTokenType, t.Identifier)) {
      return AnnotationBodyTypes.constantDeclaration;
    }
    return AnnotationBodyTypes.unknown;
  });

  $.RULE("isSimpleElementValueAnnotation", () => {
    $.SUBRULE($.annotation);
    const nextTokenType = this.LA(1).tokenType;
    switch (nextTokenType) {
      // annotation in "ElementValue" would be followed by one of those
      // any other TokenType would indicate it is an annotation in a "referenceType"
      // as part of a "methodReference" in "primary"
      case t.Comma:
      case t.Semicolon:
      case t.RCurly:
      case t.RBrace:
        return true;
      default:
        return false;
    }
  });
}

module.exports = {
  defineRules
};


/***/ }),

/***/ "./node_modules/java-parser/src/productions/lexical-structure.js":
/*!***********************************************************************!*\
  !*** ./node_modules/java-parser/src/productions/lexical-structure.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function defineRules($, t) {
  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-3.html#jls-Literal
  $.RULE("literal", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.integerLiteral) },
      { ALT: () => $.SUBRULE($.floatingPointLiteral) },
      { ALT: () => $.SUBRULE($.booleanLiteral) },
      { ALT: () => $.CONSUME(t.CharLiteral) },
      { ALT: () => $.CONSUME(t.TextBlock) },
      { ALT: () => $.CONSUME(t.StringLiteral) },
      { ALT: () => $.CONSUME(t.Null) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-3.html#jls-IntegerLiteral
  $.RULE("integerLiteral", () => {
    $.OR([
      { ALT: () => $.CONSUME(t.DecimalLiteral) },
      { ALT: () => $.CONSUME(t.HexLiteral) },
      { ALT: () => $.CONSUME(t.OctalLiteral) },
      { ALT: () => $.CONSUME(t.BinaryLiteral) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-3.html#jls-FloatingPointLiteral
  $.RULE("floatingPointLiteral", () => {
    $.OR([
      { ALT: () => $.CONSUME(t.FloatLiteral) },
      { ALT: () => $.CONSUME(t.HexFloatLiteral) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-3.html#jls-BooleanLiteral
  $.RULE("booleanLiteral", () => {
    $.OR([{ ALT: () => $.CONSUME(t.True) }, { ALT: () => $.CONSUME(t.False) }]);
  });
}

module.exports = {
  defineRules
};


/***/ }),

/***/ "./node_modules/java-parser/src/productions/names.js":
/*!***********************************************************!*\
  !*** ./node_modules/java-parser/src/productions/names.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const { tokenMatcher } = __webpack_require__(/*! chevrotain */ "./node_modules/chevrotain/lib_esm/src/api.js");
function defineRules($, t) {
  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-6.html#jls-ModuleName
  $.RULE("moduleName", () => {
    $.CONSUME(t.Identifier);
    $.MANY(() => {
      $.CONSUME(t.Dot);
      $.CONSUME2(t.Identifier);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-6.html#jls-PackageName
  $.RULE("packageName", () => {
    $.CONSUME(t.Identifier);
    $.MANY(() => {
      $.CONSUME(t.Dot);
      $.CONSUME2(t.Identifier);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-6.html#jls-TypeName
  $.RULE("typeName", () => {
    // Spec Deviation: The last Identifier in a "typeName" may not be be "var"
    //                 But the parser does not check for that.
    // TODO: post parsing semantic check: last "Identifier" in a "typeName"
    //                                    cannot be the "var" keyword
    // TODO: option 2 implement "Not Var" Ident using token categories?
    $.CONSUME(t.Identifier);
    $.MANY(() => {
      $.CONSUME(t.Dot);
      $.CONSUME2(t.Identifier);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-6.html#jls-ExpressionName
  $.RULE("expressionName", () => {
    // Spec Deviation: in-lined "ambiguousName" to be LL(K)
    $.CONSUME(t.Identifier);
    $.MANY({
      // expressionName could be called by "qualifiedExplicitConstructorInvocation"
      // in that case it may be followed by ".super" so we need to look two tokens
      // ahead.
      GATE: () => tokenMatcher(this.LA(2).tokenType, t.Identifier),
      DEF: () => {
        $.CONSUME(t.Dot);
        $.CONSUME2(t.Identifier);
      }
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-6.html#jls-MethodName
  $.RULE("methodName", () => {
    $.CONSUME(t.Identifier);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-6.html#jls-PackageOrTypeName
  $.RULE("packageOrTypeName", () => {
    $.CONSUME(t.Identifier);
    $.MANY({
      // In some contexts a "Dot Star" (.*) may appear
      // after a "packageOrTypeName", by default Chevrotain will
      // only look a single token ahead (Dot) to determine if another iteration
      // exists which will cause a parsing error for inputs such as:
      // "import a.b.c.*"
      GATE: () => tokenMatcher(this.LA(2).tokenType, t.Star) === false,
      DEF: () => {
        $.CONSUME(t.Dot);
        $.CONSUME2(t.Identifier);
      }
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-6.html#jls-AmbiguousName
  $.RULE("ambiguousName", () => {
    $.CONSUME(t.Identifier);
    $.MANY(() => {
      $.CONSUME(t.Dot);
      $.CONSUME2(t.Identifier);
    });
  });
}

module.exports = {
  defineRules
};


/***/ }),

/***/ "./node_modules/java-parser/src/productions/packages-and-modules.js":
/*!**************************************************************************!*\
  !*** ./node_modules/java-parser/src/productions/packages-and-modules.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const { isRecognitionException, tokenMatcher, EOF } = __webpack_require__(/*! chevrotain */ "./node_modules/chevrotain/lib_esm/src/api.js");

function defineRules($, t) {
  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-7.html#CompilationUnit
  $.RULE("compilationUnit", () => {
    // custom optimized backtracking lookahead logic
    const isModule = $.BACKTRACK_LOOKAHEAD($.isModuleCompilationUnit);

    $.OR([
      {
        GATE: () => isModule === false,
        ALT: () => $.SUBRULE($.ordinaryCompilationUnit)
      },
      {
        ALT: () => $.SUBRULE($.modularCompilationUnit)
      }
    ]);
    // https://github.com/jhipster/prettier-java/pull/217
    $.CONSUME(EOF);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-7.html#jls-OrdinaryCompilationUnit
  $.RULE("ordinaryCompilationUnit", () => {
    $.OPTION({
      GATE: $.BACKTRACK($.packageDeclaration),
      DEF: () => {
        $.SUBRULE($.packageDeclaration);
      }
    });
    $.MANY(() => {
      $.SUBRULE3($.importDeclaration);
    });
    $.MANY2(() => {
      $.SUBRULE($.typeDeclaration);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-7.html#jls-ModularCompilationUnit
  $.RULE("modularCompilationUnit", () => {
    $.MANY(() => {
      $.SUBRULE($.importDeclaration);
    });
    $.SUBRULE($.moduleDeclaration);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-7.html#jls-PackageDeclaration
  $.RULE("packageDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.packageModifier);
    });
    $.CONSUME(t.Package);
    $.CONSUME(t.Identifier);
    $.MANY2(() => {
      $.CONSUME(t.Dot);
      $.CONSUME2(t.Identifier);
    });
    $.CONSUME2(t.Semicolon);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-7.html#jls-PackageModifier
  $.RULE("packageModifier", () => {
    $.SUBRULE($.annotation);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-7.html#jls-ImportDeclaration
  $.RULE("importDeclaration", () => {
    // Spec Deviation: The spec defines four different kinds of import declarations.
    //                 Our grammar however combines those into a single rule due to difficulties
    //                 distinguishing between the alternatives due to unbound common prefix.
    // TODO: A post parsing step is required to align with the official specs.
    //       The Identifier "var" is not allowed in all positions and variations of the importDeclaration
    $.OR([
      {
        ALT: () => {
          $.CONSUME(t.Import);
          $.OPTION(() => {
            $.CONSUME(t.Static);
          });
          $.SUBRULE($.packageOrTypeName);
          $.OPTION2(() => {
            $.CONSUME(t.Dot);
            $.CONSUME(t.Star);
          });
          $.CONSUME(t.Semicolon);
        }
      },
      // Spec Deviation: The spec do not allow empty statement in between imports.
      //                 However Java compiler consider empty statements valid, we chose
      //                 to support that case, thus deviate from the spec.
      //                 See here: https://github.com/jhipster/prettier-java/pull/158
      {
        ALT: () => $.SUBRULE($.emptyStatement)
      }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-7.html#jls-TypeDeclaration
  $.RULE("typeDeclaration", () => {
    // TODO: consider extracting the prefix modifiers here to avoid backtracking
    const isClassDeclaration = this.BACKTRACK_LOOKAHEAD($.isClassDeclaration);

    $.OR([
      {
        GATE: () => isClassDeclaration,
        ALT: () => $.SUBRULE($.classDeclaration)
      },
      { ALT: () => $.SUBRULE($.interfaceDeclaration) },
      { ALT: () => $.CONSUME(t.Semicolon) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-7.html#jls-ModuleDeclaration
  $.RULE("moduleDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.OPTION(() => {
      $.CONSUME(t.Open);
    });
    $.CONSUME(t.Module);
    $.CONSUME(t.Identifier);
    $.MANY2(() => {
      $.CONSUME(t.Dot);
      $.CONSUME2(t.Identifier);
    });
    $.CONSUME(t.LCurly);
    $.MANY3(() => {
      $.SUBRULE($.moduleDirective);
    });
    $.CONSUME(t.RCurly);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-7.html#jls-ModuleDirective
  $.RULE("moduleDirective", () => {
    // Spec Deviation: Each of the alternatives of "moduleDirective" was extracted
    //                 to its own nonTerminal, to reduce verbosity.
    $.OR([
      { ALT: () => $.SUBRULE($.requiresModuleDirective) },
      { ALT: () => $.SUBRULE($.exportsModuleDirective) },
      { ALT: () => $.SUBRULE($.opensModuleDirective) },
      { ALT: () => $.SUBRULE($.usesModuleDirective) },
      { ALT: () => $.SUBRULE($.providesModuleDirective) }
    ]);
  });

  $.RULE("requiresModuleDirective", () => {
    // Spec Deviation: extracted from "moduleDirective"
    $.CONSUME(t.Requires);
    $.MANY({
      GATE: () => {
        /**
         * https://docs.oracle.com/javase/specs/jls/se16/html/jls-3.html#jls-3.9 -
         *   There is one exception: immediately to the right of the character sequence `requires` in the ModuleDirective production,
         *   the character sequence `transitive` is tokenized as a keyword unless it is followed by a separator,
         *   in which case it is tokenized as an identifier.
         */
        return (
          (tokenMatcher($.LA(1).tokenType, t.Transitive) &&
            tokenMatcher($.LA(2).tokenType, t.Separators)) === false
        );
      },
      DEF: () => {
        $.SUBRULE($.requiresModifier);
      }
    });
    $.SUBRULE($.moduleName);
    $.CONSUME(t.Semicolon);
  });

  $.RULE("exportsModuleDirective", () => {
    // Spec Deviation: extracted from "moduleDirective"
    $.CONSUME(t.Exports);
    $.SUBRULE($.packageName);
    $.OPTION(() => {
      $.CONSUME(t.To);
      $.SUBRULE($.moduleName);
      $.MANY(() => {
        $.CONSUME(t.Comma);
        $.SUBRULE2($.moduleName);
      });
    });
    $.CONSUME(t.Semicolon);
  });

  $.RULE("opensModuleDirective", () => {
    // Spec Deviation: extracted from "moduleDirective"
    $.CONSUME(t.Opens);
    $.SUBRULE($.packageName);
    $.OPTION(() => {
      $.CONSUME(t.To);
      $.SUBRULE($.moduleName);
      $.MANY(() => {
        $.CONSUME(t.Comma);
        $.SUBRULE2($.moduleName);
      });
    });
    $.CONSUME(t.Semicolon);
  });

  $.RULE("usesModuleDirective", () => {
    // Spec Deviation: extracted from "moduleDirective"
    $.CONSUME(t.Uses);
    $.SUBRULE($.typeName);
    $.CONSUME(t.Semicolon);
  });

  $.RULE("providesModuleDirective", () => {
    // Spec Deviation: extracted from "moduleDirective"
    $.CONSUME(t.Provides);
    $.SUBRULE($.typeName);
    $.CONSUME(t.With);
    $.SUBRULE2($.typeName);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE3($.typeName);
    });
    $.CONSUME(t.Semicolon);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-7.html#jls-RequiresModifier
  $.RULE("requiresModifier", () => {
    $.OR([
      { ALT: () => $.CONSUME(t.Transitive) },
      { ALT: () => $.CONSUME(t.Static) }
    ]);
  });

  $.RULE("isModuleCompilationUnit", () => {
    $.OPTION(() => {
      $.SUBRULE($.packageDeclaration);
      // TODO: this return must be outside the OPTION at the top level rule
      // a Java Module source code may not contain a package declaration.
      return false;
    });

    try {
      // the "{importDeclaration}" is a common prefix
      $.MANY(() => {
        $.SUBRULE2($.importDeclaration);
      });

      $.MANY2({
        // To avoid ambiguity with @interface ("AnnotationTypeDeclaration" vs "Annotaion")
        GATE: () =>
          (tokenMatcher($.LA(1).tokenType, t.At) &&
            tokenMatcher($.LA(2).tokenType, t.Interface)) === false,
        DEF: () => {
          $.SUBRULE($.annotation);
        }
      });
    } catch (e) {
      // This means we had a syntax error in the imports or annotations
      // So we can't keep parsing deep enough to make the decision
      if (isRecognitionException(e)) {
        // TODO: add original syntax error?
        throw "Cannot Identify if the source code is an OrdinaryCompilationUnit or  ModularCompilationUnit";
      } else {
        throw e;
      }
    }

    const nextTokenType = this.LA(1).tokenType;
    return (
      tokenMatcher(nextTokenType, t.Open) ||
      tokenMatcher(nextTokenType, t.Module)
    );
  });
}

module.exports = {
  defineRules
};


/***/ }),

/***/ "./node_modules/java-parser/src/productions/types-values-and-variables.js":
/*!********************************************************************************!*\
  !*** ./node_modules/java-parser/src/productions/types-values-and-variables.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { tokenMatcher } = __webpack_require__(/*! chevrotain */ "./node_modules/chevrotain/lib_esm/src/api.js");

function defineRules($, t) {
  // ---------------------
  // Productions from §4 (Types, Values, and Variables)
  // ---------------------

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-PrimitiveType
  $.RULE("primitiveType", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.OR([
      { ALT: () => $.SUBRULE($.numericType) },
      { ALT: () => $.CONSUME(t.Boolean) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-NumericType
  $.RULE("numericType", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.integralType) },
      { ALT: () => $.SUBRULE($.floatingPointType) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-IntegralType
  $.RULE("integralType", () => {
    $.OR([
      { ALT: () => $.CONSUME(t.Byte) },
      { ALT: () => $.CONSUME(t.Short) },
      { ALT: () => $.CONSUME(t.Int) },
      { ALT: () => $.CONSUME(t.Long) },
      { ALT: () => $.CONSUME(t.Char) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-FloatingPointType
  $.RULE("floatingPointType", () => {
    $.OR([
      { ALT: () => $.CONSUME(t.Float) },
      { ALT: () => $.CONSUME(t.Double) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-ReferenceType
  $.RULE("referenceType", () => {
    $.MANY(() => {
      // Spec Deviation: by extracting the common "annotation" prefix
      // we can avoid backtracking and thus improve performance.
      // Note that the annotation prefix is still present inside
      // "primitiveType" and "classOrInterfaceType"
      $.SUBRULE($.annotation);
    });
    // Spec Deviation: The array type "dims" suffix was extracted to this rule
    // to avoid backtracking for performance reasons.
    $.OR({
      DEF: [
        {
          ALT: () => {
            $.SUBRULE($.primitiveType);
            $.SUBRULE($.dims);
          }
        },
        {
          // Spec Deviation: "typeVariable" alternative is missing because
          //                 it is included in "classOrInterfaceType"
          ALT: () => {
            $.SUBRULE($.classOrInterfaceType);
            $.OPTION(() => {
              $.SUBRULE2($.dims);
            });
          }
        }
      ],
      IGNORE_AMBIGUITIES: true // annotation prefix was extracted to remove ambiguities
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-ClassOrInterfaceType
  $.RULE("classOrInterfaceType", () => {
    // Spec Deviation: The spec says: "classType | interfaceType" but "interfaceType"
    //                 is not mentioned in the parser because it is identical to "classType"
    //                 The distinction is **semantic** not syntactic.
    $.SUBRULE($.classType);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-ClassType
  $.RULE("classType", () => {
    // Spec Deviation: Refactored left recursion and alternation to iterations
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.CONSUME(t.Identifier);
    $.OPTION(() => {
      $.SUBRULE($.typeArguments);
    });
    $.MANY2(() => {
      $.CONSUME(t.Dot);
      $.MANY3(() => {
        $.SUBRULE2($.annotation);
      });
      // TODO: Semantic Check: This Identifier cannot be "var"
      $.CONSUME2(t.Identifier);
      $.OPTION2({
        // To avoid confusion with "TypeArgumentsOrDiamond" rule
        // as we use the "classType" rule in the "identifyNewExpressionType"
        // optimized lookahead rule.
        GATE: () => tokenMatcher($.LA(2).tokenType, t.Greater) === false,
        DEF: () => {
          $.SUBRULE2($.typeArguments);
        }
      });
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-InterfaceType
  $.RULE("interfaceType", () => {
    $.SUBRULE($.classType);
  });

  $.RULE("typeVariable", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    // TODO: Semantic Check: This Identifier cannot be "var"
    $.CONSUME(t.Identifier);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-Dims
  $.RULE("dims", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.CONSUME(t.LSquare);
    $.CONSUME(t.RSquare);
    $.MANY2({
      GATE: () => $.BACKTRACK_LOOKAHEAD($.isDims),
      DEF: () => {
        $.MANY3(() => {
          $.SUBRULE2($.annotation);
        });
        $.CONSUME2(t.LSquare);
        $.CONSUME2(t.RSquare);
      }
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-TypeParameter
  $.RULE("typeParameter", () => {
    $.MANY(() => {
      $.SUBRULE($.typeParameterModifier);
    });
    $.SUBRULE($.typeIdentifier);
    $.OPTION(() => {
      $.SUBRULE($.typeBound);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-TypeParameterModifier
  $.RULE("typeParameterModifier", () => {
    $.SUBRULE($.annotation);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-TypeBound
  $.RULE("typeBound", () => {
    $.CONSUME(t.Extends);
    // Spec Deviation: The alternative with "TypeVariable" is not specified
    //      because it's syntax is included in "classOrInterfaceType"
    $.SUBRULE($.classOrInterfaceType);
    $.MANY2(() => {
      $.SUBRULE($.additionalBound);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-AdditionalBound
  $.RULE("additionalBound", () => {
    $.CONSUME(t.And);
    $.SUBRULE($.interfaceType);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-TypeArguments
  $.RULE("typeArguments", () => {
    $.CONSUME(t.Less);
    $.SUBRULE($.typeArgumentList);
    $.CONSUME(t.Greater);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-TypeArgumentList
  $.RULE("typeArgumentList", () => {
    $.SUBRULE($.typeArgument);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.typeArgument);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-TypeArgument
  $.RULE("typeArgument", () => {
    // TODO: performance: evaluate flipping the order of alternatives
    $.OR([
      {
        GATE: $.BACKTRACK($.referenceType),
        ALT: () => $.SUBRULE($.referenceType)
      },
      { ALT: () => $.SUBRULE($.wildcard) }
    ]);
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-Wildcard
  $.RULE("wildcard", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.CONSUME(t.QuestionMark);
    $.OPTION(() => {
      $.SUBRULE($.wildcardBounds);
    });
  });

  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-4.html#jls-WildcardBounds
  $.RULE("wildcardBounds", () => {
    // TODO: consider in-lining suffix into the alternatives to match the spec more strongly
    $.OR([
      { ALT: () => $.CONSUME(t.Extends) },
      { ALT: () => $.CONSUME(t.Super) }
    ]);
    $.SUBRULE($.referenceType);
  });
}

module.exports = {
  defineRules
};


/***/ }),

/***/ "./node_modules/java-parser/src/tokens.js":
/*!************************************************!*\
  !*** ./node_modules/java-parser/src/tokens.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const { createToken: createTokenOrg, Lexer } = __webpack_require__(/*! chevrotain */ "./node_modules/chevrotain/lib_esm/src/api.js");
const camelCase = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");

let chars;
// A little mini DSL for easier lexer definition.
const fragments = {};
try {
  chars = __webpack_require__(/*! ./unicodesets */ "./node_modules/java-parser/src/unicodesets.js");
} catch (e) {
  throw Error(
    "unicodesets.js file could not be found. Did you try to run the command: yarn run build ?"
  );
}

function inlineFragments(def) {
  let inlinedDef = def;
  Object.keys(fragments).forEach(prevFragmentName => {
    const prevFragmentDef = fragments[prevFragmentName];
    const templateRegExp = new RegExp(`{{${prevFragmentName}}}`, "g");
    inlinedDef = inlinedDef.replace(templateRegExp, prevFragmentDef);
  });
  return inlinedDef;
}

function FRAGMENT(name, def) {
  fragments[name] = inlineFragments(def);
}

function MAKE_PATTERN(def, flags) {
  const inlinedDef = inlineFragments(def);
  return new RegExp(inlinedDef, flags);
}

// The order of fragments definitions is important
FRAGMENT("Digits", "[0-9]([0-9_]*[0-9])?");
FRAGMENT("ExponentPart", "[eE][+-]?{{Digits}}");
FRAGMENT("HexDigit", "[0-9a-fA-F]");
FRAGMENT("HexDigits", "{{HexDigit}}(({{HexDigit}}|'_')*{{HexDigit}})?");
FRAGMENT("FloatTypeSuffix", "[fFdD]");
FRAGMENT("LineTerminator", "(\\x0A|(\\x0D(\\x0A)?))");
FRAGMENT("UnicodeMarker", "uu*");
FRAGMENT("UnicodeEscape", "\\\\{{UnicodeMarker}}{{HexDigit}}{4}");
FRAGMENT("RawInputCharacter", "\\\\{{UnicodeMarker}}[0-9a-fA-F]{4}");
FRAGMENT("UnicodeInputCharacter", "({{UnicodeEscape}}|{{RawInputCharacter}})");
FRAGMENT("OctalDigit", "[0-7]");
FRAGMENT("ZeroToThree", "[0-3]");
FRAGMENT(
  "OctalEscape",
  "\\\\({{OctalDigit}}|{{ZeroToThree}}?{{OctalDigit}}{2})"
);
FRAGMENT("EscapeSequence", "\\\\[btnfr\"'\\\\]|{{OctalEscape}}");
// Not using InputCharacter terminology there because CR and LF are already captured in EscapeSequence
FRAGMENT(
  "StringCharacter",
  "(?:(?:{{EscapeSequence}})|{{UnicodeInputCharacter}})"
);

function matchJavaIdentifier(text, startOffset) {
  let endOffset = startOffset;
  let charCode = text.codePointAt(endOffset);

  // We verifiy if the first character is from one of these categories
  // Corresponds to the isJavaIdentifierStart function from Java
  if (chars.firstIdentChar.has(charCode)) {
    endOffset++;
    // If we encounter a surrogate pair (something that is beyond 65535/FFFF)
    // We skip another offset because a surrogate pair is of length 2.
    if (charCode > 65535) {
      endOffset++;
    }
    charCode = text.codePointAt(endOffset);
  }

  // We verify if the remaining characters is from one of these categories
  // Corresponds to the isJavaIdentifierPart function from Java
  while (chars.restIdentChar.has(charCode)) {
    endOffset++;
    // See above.
    if (charCode > 65535) {
      endOffset++;
    }
    charCode = text.codePointAt(endOffset);
  }

  // No match, must return null to conform with the RegExp.prototype.exec signature
  if (endOffset === startOffset) {
    return null;
  }
  const matchedString = text.substring(startOffset, endOffset);
  // according to the RegExp.prototype.exec API the first item in the returned array must be the whole matched string.
  return [matchedString];
}

const Identifier = createTokenOrg({
  name: "Identifier",
  pattern: { exec: matchJavaIdentifier },
  line_breaks: false,
  start_chars_hint: Array.from(chars.firstIdentChar, x =>
    String.fromCharCode(x)
  )
});

const allTokens = [];
const tokenDictionary = {};

function createToken(options) {
  // TODO create a test to check all the tokenbs have a label defined
  if (!options.label) {
    // simple token (e.g operator)
    if (typeof options.pattern === "string") {
      options.label = `'${options.pattern}'`;
    }
    // Complex token (e.g literal)
    else if (options.pattern instanceof RegExp) {
      options.label = `'${options.name}'`;
    }
  }

  const newTokenType = createTokenOrg(options);
  allTokens.push(newTokenType);
  tokenDictionary[options.name] = newTokenType;
  return newTokenType;
}

function createKeywordLikeToken(options) {
  // A keyword 'like' token uses the "longer_alt" config option
  // to resolve ambiguities, see: http://sap.github.io/chevrotain/docs/features/token_alternative_matches.html
  options.longer_alt = Identifier;
  return createToken(options);
}

// Token Categories
// Used a Token Category to mark all restricted keywords.
// This could be used in syntax highlights implementation.
const RestrictedKeyword = createToken({
  name: "RestrictedKeyword",
  pattern: Lexer.NA
});

// Used a Token Category to mark all keywords.
// This could be used in syntax highlights implementation.
const Keyword = createToken({
  name: "Keyword",
  pattern: Lexer.NA
});

const AssignmentOperator = createToken({
  name: "AssignmentOperator",
  pattern: Lexer.NA
});

const BinaryOperator = createToken({
  name: "BinaryOperator",
  pattern: Lexer.NA
});

const UnaryPrefixOperator = createToken({
  name: "UnaryPrefixOperator",
  pattern: Lexer.NA
});
const UnaryPrefixOperatorNotPlusMinus = createToken({
  name: "UnaryPrefixOperatorNotPlusMinus",
  pattern: Lexer.NA
});

const UnarySuffixOperator = createToken({
  name: "UnarySuffixOperator",
  pattern: Lexer.NA
});

// https://docs.oracle.com/javase/specs/jls/se11/html/jls-3.html#jls-3.11
const Separators = createToken({
  name: "Separators",
  pattern: Lexer.NA
});

// https://docs.oracle.com/javase/specs/jls/se11/html/jls-3.html#jls-3.6
// Note [\\x09\\x20\\x0C] is equivalent to [\\t\\x20\\f] and that \\x20 represents
// space character
createToken({
  name: "WhiteSpace",
  pattern: MAKE_PATTERN("[\\x09\\x20\\x0C]|{{LineTerminator}}"),
  group: Lexer.SKIPPED
});
createToken({
  name: "LineComment",
  pattern: /\/\/[^\n\r]*/,
  group: "comments"
});
createToken({
  name: "TraditionalComment",
  pattern: /\/\*([^*]|\*(?!\/))*\*\//,
  group: "comments"
});
createToken({ name: "BinaryLiteral", pattern: /0[bB][01]([01_]*[01])?[lL]?/ });
createToken({
  name: "FloatLiteral",
  pattern: MAKE_PATTERN(
    "{{Digits}}\\.({{Digits}})?({{ExponentPart}})?({{FloatTypeSuffix}})?|" +
      "\\.{{Digits}}({{ExponentPart}})?({{FloatTypeSuffix}})?|" +
      "{{Digits}}{{ExponentPart}}({{FloatTypeSuffix}})?|" +
      "{{Digits}}({{ExponentPart}})?{{FloatTypeSuffix}}"
  )
});
createToken({ name: "OctalLiteral", pattern: /0_*[0-7]([0-7_]*[0-7])?[lL]?/ });
createToken({
  name: "HexFloatLiteral",
  pattern: MAKE_PATTERN(
    "0[xX]({{HexDigits}}\\.?|({{HexDigits}})?\\.{{HexDigits}})[pP][+-]?{{Digits}}[fFdD]?"
  )
});
createToken({
  name: "HexLiteral",
  pattern: /0[xX][0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?[lL]?/
});
createToken({
  name: "DecimalLiteral",
  pattern: MAKE_PATTERN("(0|[1-9](_+{{Digits}}|({{Digits}})?))[lL]?")
});
// https://docs.oracle.com/javase/specs/jls/se11/html/jls-3.html#jls-3.10.4
createToken({
  name: "CharLiteral",
  // Not using SingleCharacter Terminology because ' and \ are captured in EscapeSequence
  pattern: MAKE_PATTERN(
    "'(?:[^\\\\']|(?:(?:{{EscapeSequence}})|{{UnicodeInputCharacter}}))'"
  )
});

createToken({
  name: "TextBlock",
  pattern: /"""\s*\n(\\"|\s|.)*?"""/
});

createToken({
  name: "StringLiteral",
  pattern: MAKE_PATTERN('"(?:[^\\\\"]|{{StringCharacter}})*"')
});

// https://docs.oracle.com/javase/specs/jls/se11/html/jls-3.html#jls-3.9
// TODO: how to handle the special rule (see spec above) for "requires" and "transitive"
const restrictedKeywords = [
  "open",
  "module",
  "requires",
  "transitive",
  "exports",
  "opens",
  "to",
  "uses",
  "provides",
  "with",
  "sealed",
  "non-sealed",
  "permits"
];

// By sorting the keywords in descending order we avoid ambiguities
// of common prefixes.
sortDescLength(restrictedKeywords).forEach(word => {
  createKeywordLikeToken({
    name: word[0].toUpperCase() + camelCase(word.substr(1)),
    pattern: word,
    // restricted keywords can also be used as an Identifiers according to the spec.
    // TODO: inspect this causes no ambiguities
    categories: [Identifier, RestrictedKeyword]
  });
});

// https://docs.oracle.com/javase/specs/jls/se11/html/jls-3.html#jls-3.9
const keywords = [
  "abstract",
  "continue",
  "for",
  "new",
  "switch",
  "assert",
  "default",
  "if",
  "package",
  "synchronized",
  "boolean",
  "do",
  "goto",
  "private",
  "this",
  "break",
  "double",
  "implements",
  "protected",
  "throw",
  "byte",
  "else",
  "import",
  "public",
  "throws",
  "case",
  "enum",
  // "instanceof", // special handling for "instanceof" operator below
  "return",
  "transient",
  "catch",
  "extends",
  "int",
  "short",
  "try",
  "char",
  "final",
  "interface",
  "static",
  "void",
  "class",
  "finally",
  "long",
  "strictfp",
  "volatile",
  "const",
  "float",
  "native",
  "super",
  "while",
  ["_", "underscore"]
];

sortDescLength(keywords).forEach(word => {
  // For handling symbols keywords (underscore)
  const isPair = Array.isArray(word);
  const actualName = isPair ? word[1] : word;
  const actualPattern = isPair ? word[0] : word;

  const options = {
    name: actualName[0].toUpperCase() + actualName.substr(1),
    pattern: actualPattern,
    categories: Keyword
  };

  if (isPair) {
    options.label = `'${actualName}'`;
  }
  createKeywordLikeToken(options);
});

createKeywordLikeToken({
  name: "Instanceof",
  pattern: "instanceof",
  categories: [Keyword, BinaryOperator]
});

createKeywordLikeToken({
  name: "Var",
  pattern: "var",
  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-3.html#jls-3.9
  // "var is not a keyword, but rather an identifier with special meaning as the type of a local variable declaration"
  categories: Identifier
});
createKeywordLikeToken({
  name: "Yield",
  pattern: "yield",
  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-3.html#jls-3.9
  // "yield is not a keyword, but rather an identifier with special meaning as the type of a local variable declaration"
  categories: Identifier
});
createKeywordLikeToken({
  name: "Record",
  pattern: "record",
  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-3.html#jls-3.9
  // "record is not a keyword, but rather an identifier with special meaning as the type of a local variable declaration"
  categories: Identifier
});
createKeywordLikeToken({ name: "True", pattern: "true" });
createKeywordLikeToken({ name: "False", pattern: "false" });
createKeywordLikeToken({ name: "Null", pattern: "null" });

// punctuation and symbols
createToken({ name: "At", pattern: "@", categories: [Separators] });
createToken({ name: "Arrow", pattern: "->" });
createToken({ name: "DotDotDot", pattern: "...", categories: [Separators] });
createToken({ name: "Dot", pattern: ".", categories: [Separators] });
createToken({ name: "Comma", pattern: ",", categories: [Separators] });
createToken({ name: "Semicolon", pattern: ";", categories: [Separators] });
createToken({ name: "ColonColon", pattern: "::", categories: [Separators] });
createToken({ name: "Colon", pattern: ":" });
createToken({ name: "QuestionMark", pattern: "?" });
createToken({ name: "LBrace", pattern: "(", categories: [Separators] });
createToken({ name: "RBrace", pattern: ")", categories: [Separators] });
createToken({ name: "LCurly", pattern: "{", categories: [Separators] });
createToken({ name: "RCurly", pattern: "}", categories: [Separators] });
createToken({ name: "LSquare", pattern: "[", categories: [Separators] });
createToken({ name: "RSquare", pattern: "]", categories: [Separators] });

// prefix and suffix operators
// must be defined before "-"
createToken({
  name: "MinusMinus",
  pattern: "--",
  categories: [
    UnaryPrefixOperator,
    UnarySuffixOperator,
    UnaryPrefixOperatorNotPlusMinus
  ]
});
// must be defined before "+"
createToken({
  name: "PlusPlus",
  pattern: "++",
  categories: [
    UnaryPrefixOperator,
    UnarySuffixOperator,
    UnaryPrefixOperatorNotPlusMinus
  ]
});
createToken({
  name: "Complement",
  pattern: "~",
  categories: [UnaryPrefixOperator, UnaryPrefixOperatorNotPlusMinus]
});

createToken({
  name: "LessEquals",
  pattern: "<=",
  categories: [BinaryOperator]
});
createToken({
  name: "LessLessEquals",
  pattern: "<<=",
  categories: [AssignmentOperator]
});
createToken({ name: "Less", pattern: "<", categories: [BinaryOperator] });
createToken({
  name: "GreaterEquals",
  pattern: ">=",
  categories: [BinaryOperator]
});
createToken({
  name: "GreaterGreaterEquals",
  pattern: ">>=",
  categories: [AssignmentOperator]
});
createToken({
  name: "GreaterGreaterGreaterEquals",
  pattern: ">>>=",
  categories: [AssignmentOperator]
});
createToken({ name: "Greater", pattern: ">", categories: [BinaryOperator] });
createToken({
  name: "EqualsEquals",
  pattern: "==",
  categories: [BinaryOperator]
});
createToken({
  name: "Equals",
  pattern: "=",
  categories: [BinaryOperator, AssignmentOperator]
});
createToken({
  name: "MinusEquals",
  pattern: "-=",
  categories: [AssignmentOperator]
});
createToken({
  name: "Minus",
  pattern: "-",
  categories: [BinaryOperator, UnaryPrefixOperator]
});
createToken({
  name: "PlusEquals",
  pattern: "+=",
  categories: [AssignmentOperator]
});
createToken({
  name: "Plus",
  pattern: "+",
  categories: [BinaryOperator, UnaryPrefixOperator]
});
createToken({ name: "AndAnd", pattern: "&&", categories: [BinaryOperator] });
createToken({
  name: "AndEquals",
  pattern: "&=",
  categories: [AssignmentOperator]
});
createToken({ name: "And", pattern: "&", categories: [BinaryOperator] });
createToken({
  name: "XorEquals",
  pattern: "^=",
  categories: [AssignmentOperator]
});
createToken({ name: "Xor", pattern: "^", categories: [BinaryOperator] });
createToken({ name: "NotEquals", pattern: "!=", categories: [BinaryOperator] });
createToken({ name: "OrOr", pattern: "||", categories: [BinaryOperator] });
createToken({
  name: "OrEquals",
  pattern: "|=",
  categories: [AssignmentOperator]
});
createToken({ name: "Or", pattern: "|", categories: [BinaryOperator] });
createToken({
  name: "MultiplyEquals",
  pattern: "*=",
  categories: [AssignmentOperator]
});
createToken({ name: "Star", pattern: "*", categories: [BinaryOperator] });
createToken({
  name: "DivideEquals",
  pattern: "/=",
  categories: [AssignmentOperator]
});
createToken({ name: "Divide", pattern: "/", categories: [BinaryOperator] });
createToken({
  name: "ModuloEquals",
  pattern: "%=",
  categories: [AssignmentOperator]
});
createToken({ name: "Modulo", pattern: "%", categories: [BinaryOperator] });

// must be defined after "!="
createToken({
  name: "Not",
  pattern: "!",
  categories: [UnaryPrefixOperator, UnaryPrefixOperatorNotPlusMinus]
});

// Identifier must appear AFTER all the keywords to avoid ambiguities.
// See: https://github.com/SAP/chevrotain/blob/master/examples/lexer/keywords_vs_identifiers/keywords_vs_identifiers.js
allTokens.push(Identifier);
tokenDictionary["Identifier"] = Identifier;

function sortDescLength(arr) {
  // sort is not stable, but that will not affect the lexing results.
  return arr.sort((a, b) => {
    return b.length - a.length;
  });
}
module.exports = {
  allTokens,
  tokens: tokenDictionary
};


/***/ }),

/***/ "./node_modules/java-parser/src/unicodesets.js":
/*!*****************************************************!*\
  !*** ./node_modules/java-parser/src/unicodesets.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*File generated with ../scripts/unicode.js using ../resources/Unicode/UnicodeData.txt.
 * As Java Identifiers may contains unicodes letters, this file defines two sets of unicode
 * characters, firstIdentChar used to help to determine if a character can be the first letter
 * of a JavaIdentifier and the other one (restIdentChar) to determine if it can be part of a
 * JavaIdentifier other than the first character.
 * Java uses the same file UnicodeData.txt as the unicode.js script to define the unicodes.
 * For more:
 *   https://github.com/jhipster/prettier-java/issues/116
 *   https://github.com/jhipster/prettier-java/pull/155
 */

const addRanges = (set, rangesArr) => {
  for (let i = 0; i < rangesArr.length; i++) {
    const range = rangesArr[i];
    const start = range[0];
    const end = range[1];
    for (let codePoint = start; codePoint <= end; codePoint++) {
      set.add(codePoint);
    }
  }
};
const fic = new Set([
  181, 257, 259, 261, 263, 265, 267, 269, 271, 273, 275, 277, 279, 281, 283,
  285, 287, 289, 291, 293, 295, 297, 299, 301, 303, 305, 307, 309, 314, 316,
  318, 320, 322, 324, 326, 331, 333, 335, 337, 339, 341, 343, 345, 347, 349,
  351, 353, 355, 357, 359, 361, 363, 365, 367, 369, 371, 373, 375, 378, 380,
  387, 389, 392, 402, 405, 414, 417, 419, 421, 424, 429, 432, 436, 438, 454,
  457, 460, 462, 464, 466, 468, 470, 472, 474, 479, 481, 483, 485, 487, 489,
  491, 493, 499, 501, 505, 507, 509, 511, 513, 515, 517, 519, 521, 523, 525,
  527, 529, 531, 533, 535, 537, 539, 541, 543, 545, 547, 549, 551, 553, 555,
  557, 559, 561, 572, 578, 583, 585, 587, 589, 881, 883, 887, 912, 985, 987,
  989, 991, 993, 995, 997, 999, 1001, 1003, 1005, 1013, 1016, 1121, 1123, 1125,
  1127, 1129, 1131, 1133, 1135, 1137, 1139, 1141, 1143, 1145, 1147, 1149, 1151,
  1153, 1163, 1165, 1167, 1169, 1171, 1173, 1175, 1177, 1179, 1181, 1183, 1185,
  1187, 1189, 1191, 1193, 1195, 1197, 1199, 1201, 1203, 1205, 1207, 1209, 1211,
  1213, 1215, 1218, 1220, 1222, 1224, 1226, 1228, 1233, 1235, 1237, 1239, 1241,
  1243, 1245, 1247, 1249, 1251, 1253, 1255, 1257, 1259, 1261, 1263, 1265, 1267,
  1269, 1271, 1273, 1275, 1277, 1279, 1281, 1283, 1285, 1287, 1289, 1291, 1293,
  1295, 1297, 1299, 1301, 1303, 1305, 1307, 1309, 1311, 1313, 1315, 1317, 1319,
  1321, 1323, 1325, 1327, 7681, 7683, 7685, 7687, 7689, 7691, 7693, 7695, 7697,
  7699, 7701, 7703, 7705, 7707, 7709, 7711, 7713, 7715, 7717, 7719, 7721, 7723,
  7725, 7727, 7729, 7731, 7733, 7735, 7737, 7739, 7741, 7743, 7745, 7747, 7749,
  7751, 7753, 7755, 7757, 7759, 7761, 7763, 7765, 7767, 7769, 7771, 7773, 7775,
  7777, 7779, 7781, 7783, 7785, 7787, 7789, 7791, 7793, 7795, 7797, 7799, 7801,
  7803, 7805, 7807, 7809, 7811, 7813, 7815, 7817, 7819, 7821, 7823, 7825, 7827,
  7839, 7841, 7843, 7845, 7847, 7849, 7851, 7853, 7855, 7857, 7859, 7861, 7863,
  7865, 7867, 7869, 7871, 7873, 7875, 7877, 7879, 7881, 7883, 7885, 7887, 7889,
  7891, 7893, 7895, 7897, 7899, 7901, 7903, 7905, 7907, 7909, 7911, 7913, 7915,
  7917, 7919, 7921, 7923, 7925, 7927, 7929, 7931, 7933, 8126, 8458, 8467, 8495,
  8500, 8505, 8526, 8580, 11361, 11368, 11370, 11372, 11377, 11393, 11395,
  11397, 11399, 11401, 11403, 11405, 11407, 11409, 11411, 11413, 11415, 11417,
  11419, 11421, 11423, 11425, 11427, 11429, 11431, 11433, 11435, 11437, 11439,
  11441, 11443, 11445, 11447, 11449, 11451, 11453, 11455, 11457, 11459, 11461,
  11463, 11465, 11467, 11469, 11471, 11473, 11475, 11477, 11479, 11481, 11483,
  11485, 11487, 11489, 11500, 11502, 11507, 11559, 11565, 42561, 42563, 42565,
  42567, 42569, 42571, 42573, 42575, 42577, 42579, 42581, 42583, 42585, 42587,
  42589, 42591, 42593, 42595, 42597, 42599, 42601, 42603, 42605, 42625, 42627,
  42629, 42631, 42633, 42635, 42637, 42639, 42641, 42643, 42645, 42647, 42649,
  42651, 42787, 42789, 42791, 42793, 42795, 42797, 42803, 42805, 42807, 42809,
  42811, 42813, 42815, 42817, 42819, 42821, 42823, 42825, 42827, 42829, 42831,
  42833, 42835, 42837, 42839, 42841, 42843, 42845, 42847, 42849, 42851, 42853,
  42855, 42857, 42859, 42861, 42863, 42874, 42876, 42879, 42881, 42883, 42885,
  42887, 42892, 42894, 42897, 42903, 42905, 42907, 42909, 42911, 42913, 42915,
  42917, 42919, 42921, 42927, 42933, 42935, 42937, 42939, 42941, 42943, 42947,
  43002, 119995, 120779, 748, 750, 884, 890, 1369, 1600, 2042, 2074, 2084, 2088,
  2417, 3654, 3782, 4348, 6103, 6211, 6823, 7544, 8305, 8319, 11631, 11823,
  12293, 12347, 40981, 42508, 42623, 42864, 42888, 43471, 43494, 43632, 43741,
  65392, 94179, 125259, 170, 186, 443, 660, 1749, 1791, 1808, 1969, 2365, 2384,
  2482, 2493, 2510, 2556, 2654, 2749, 2768, 2809, 2877, 2929, 2947, 2972, 3024,
  3133, 3200, 3261, 3294, 3389, 3406, 3517, 3716, 3749, 3773, 3840, 4159, 4193,
  4238, 4696, 4800, 6108, 6314, 7418, 12294, 12348, 12447, 12543, 13312, 19968,
  42606, 42895, 42999, 43259, 43642, 43697, 43712, 43714, 43762, 44032, 64285,
  64318, 67592, 67644, 68096, 69415, 69956, 70006, 70106, 70108, 70280, 70461,
  70480, 70751, 70855, 71236, 71352, 71935, 72161, 72163, 72192, 72250, 72272,
  72349, 72768, 73030, 73112, 94032, 94208, 123214, 126500, 126503, 126521,
  126523, 126530, 126535, 126537, 126539, 126548, 126551, 126553, 126555,
  126557, 126559, 126564, 126590, 131072, 173824, 177984, 178208, 183984, 453,
  456, 459, 498, 8124, 8140, 8188, 256, 258, 260, 262, 264, 266, 268, 270, 272,
  274, 276, 278, 280, 282, 284, 286, 288, 290, 292, 294, 296, 298, 300, 302,
  304, 306, 308, 310, 313, 315, 317, 319, 321, 323, 325, 327, 330, 332, 334,
  336, 338, 340, 342, 344, 346, 348, 350, 352, 354, 356, 358, 360, 362, 364,
  366, 368, 370, 372, 374, 379, 381, 388, 418, 420, 425, 428, 437, 444, 452,
  455, 458, 461, 463, 465, 467, 469, 471, 473, 475, 478, 480, 482, 484, 486,
  488, 490, 492, 494, 497, 500, 506, 508, 510, 512, 514, 516, 518, 520, 522,
  524, 526, 528, 530, 532, 534, 536, 538, 540, 542, 544, 546, 548, 550, 552,
  554, 556, 558, 560, 562, 577, 584, 586, 588, 590, 880, 882, 886, 895, 902,
  908, 975, 984, 986, 988, 990, 992, 994, 996, 998, 1000, 1002, 1004, 1006,
  1012, 1015, 1120, 1122, 1124, 1126, 1128, 1130, 1132, 1134, 1136, 1138, 1140,
  1142, 1144, 1146, 1148, 1150, 1152, 1162, 1164, 1166, 1168, 1170, 1172, 1174,
  1176, 1178, 1180, 1182, 1184, 1186, 1188, 1190, 1192, 1194, 1196, 1198, 1200,
  1202, 1204, 1206, 1208, 1210, 1212, 1214, 1219, 1221, 1223, 1225, 1227, 1229,
  1232, 1234, 1236, 1238, 1240, 1242, 1244, 1246, 1248, 1250, 1252, 1254, 1256,
  1258, 1260, 1262, 1264, 1266, 1268, 1270, 1272, 1274, 1276, 1278, 1280, 1282,
  1284, 1286, 1288, 1290, 1292, 1294, 1296, 1298, 1300, 1302, 1304, 1306, 1308,
  1310, 1312, 1314, 1316, 1318, 1320, 1322, 1324, 1326, 4295, 4301, 7680, 7682,
  7684, 7686, 7688, 7690, 7692, 7694, 7696, 7698, 7700, 7702, 7704, 7706, 7708,
  7710, 7712, 7714, 7716, 7718, 7720, 7722, 7724, 7726, 7728, 7730, 7732, 7734,
  7736, 7738, 7740, 7742, 7744, 7746, 7748, 7750, 7752, 7754, 7756, 7758, 7760,
  7762, 7764, 7766, 7768, 7770, 7772, 7774, 7776, 7778, 7780, 7782, 7784, 7786,
  7788, 7790, 7792, 7794, 7796, 7798, 7800, 7802, 7804, 7806, 7808, 7810, 7812,
  7814, 7816, 7818, 7820, 7822, 7824, 7826, 7828, 7838, 7840, 7842, 7844, 7846,
  7848, 7850, 7852, 7854, 7856, 7858, 7860, 7862, 7864, 7866, 7868, 7870, 7872,
  7874, 7876, 7878, 7880, 7882, 7884, 7886, 7888, 7890, 7892, 7894, 7896, 7898,
  7900, 7902, 7904, 7906, 7908, 7910, 7912, 7914, 7916, 7918, 7920, 7922, 7924,
  7926, 7928, 7930, 7932, 7934, 8025, 8027, 8029, 8031, 8450, 8455, 8469, 8484,
  8486, 8488, 8517, 8579, 11360, 11367, 11369, 11371, 11378, 11381, 11394,
  11396, 11398, 11400, 11402, 11404, 11406, 11408, 11410, 11412, 11414, 11416,
  11418, 11420, 11422, 11424, 11426, 11428, 11430, 11432, 11434, 11436, 11438,
  11440, 11442, 11444, 11446, 11448, 11450, 11452, 11454, 11456, 11458, 11460,
  11462, 11464, 11466, 11468, 11470, 11472, 11474, 11476, 11478, 11480, 11482,
  11484, 11486, 11488, 11490, 11499, 11501, 11506, 42560, 42562, 42564, 42566,
  42568, 42570, 42572, 42574, 42576, 42578, 42580, 42582, 42584, 42586, 42588,
  42590, 42592, 42594, 42596, 42598, 42600, 42602, 42604, 42624, 42626, 42628,
  42630, 42632, 42634, 42636, 42638, 42640, 42642, 42644, 42646, 42648, 42650,
  42786, 42788, 42790, 42792, 42794, 42796, 42798, 42802, 42804, 42806, 42808,
  42810, 42812, 42814, 42816, 42818, 42820, 42822, 42824, 42826, 42828, 42830,
  42832, 42834, 42836, 42838, 42840, 42842, 42844, 42846, 42848, 42850, 42852,
  42854, 42856, 42858, 42860, 42862, 42873, 42875, 42880, 42882, 42884, 42886,
  42891, 42893, 42896, 42898, 42902, 42904, 42906, 42908, 42910, 42912, 42914,
  42916, 42918, 42920, 42934, 42936, 42938, 42940, 42942, 42946, 119964, 119970,
  120134, 120778, 12295, 66369, 66378, 36, 1423, 1547, 2555, 2801, 3065, 3647,
  6107, 43064, 65020, 65129, 65284, 123647, 126128, 95, 8276, 65343
]);
const fic_a = [
  [97, 122],
  [223, 246],
  [248, 255],
  [311, 312],
  [328, 329],
  [382, 384],
  [396, 397],
  [409, 411],
  [426, 427],
  [441, 442],
  [445, 447],
  [476, 477],
  [495, 496],
  [563, 569],
  [575, 576],
  [591, 659],
  [661, 687],
  [891, 893],
  [940, 974],
  [976, 977],
  [981, 983],
  [1007, 1011],
  [1019, 1020],
  [1072, 1119],
  [1230, 1231],
  [1376, 1416],
  [4304, 4346],
  [4349, 4351],
  [5112, 5117],
  [7296, 7304],
  [7424, 7467],
  [7531, 7543],
  [7545, 7578],
  [7829, 7837],
  [7935, 7943],
  [7952, 7957],
  [7968, 7975],
  [7984, 7991],
  [8000, 8005],
  [8016, 8023],
  [8032, 8039],
  [8048, 8061],
  [8064, 8071],
  [8080, 8087],
  [8096, 8103],
  [8112, 8116],
  [8118, 8119],
  [8130, 8132],
  [8134, 8135],
  [8144, 8147],
  [8150, 8151],
  [8160, 8167],
  [8178, 8180],
  [8182, 8183],
  [8462, 8463],
  [8508, 8509],
  [8518, 8521],
  [11312, 11358],
  [11365, 11366],
  [11379, 11380],
  [11382, 11387],
  [11491, 11492],
  [11520, 11557],
  [42799, 42801],
  [42865, 42872],
  [42899, 42901],
  [43824, 43866],
  [43872, 43879],
  [43888, 43967],
  [64256, 64262],
  [64275, 64279],
  [65345, 65370],
  [66600, 66639],
  [66776, 66811],
  [68800, 68850],
  [71872, 71903],
  [93792, 93823],
  [119834, 119859],
  [119886, 119892],
  [119894, 119911],
  [119938, 119963],
  [119990, 119993],
  [119997, 120003],
  [120005, 120015],
  [120042, 120067],
  [120094, 120119],
  [120146, 120171],
  [120198, 120223],
  [120250, 120275],
  [120302, 120327],
  [120354, 120379],
  [120406, 120431],
  [120458, 120485],
  [120514, 120538],
  [120540, 120545],
  [120572, 120596],
  [120598, 120603],
  [120630, 120654],
  [120656, 120661],
  [120688, 120712],
  [120714, 120719],
  [120746, 120770],
  [120772, 120777],
  [125218, 125251],
  [688, 705],
  [710, 721],
  [736, 740],
  [1765, 1766],
  [2036, 2037],
  [7288, 7293],
  [7468, 7530],
  [7579, 7615],
  [8336, 8348],
  [11388, 11389],
  [12337, 12341],
  [12445, 12446],
  [12540, 12542],
  [42232, 42237],
  [42652, 42653],
  [42775, 42783],
  [43000, 43001],
  [43763, 43764],
  [43868, 43871],
  [65438, 65439],
  [92992, 92995],
  [94099, 94111],
  [94176, 94177],
  [123191, 123197],
  [13313, 19893],
  [19969, 40943],
  [44033, 55203],
  [94209, 100343],
  [131073, 173782],
  [173825, 177972],
  [177985, 178205],
  [178209, 183969],
  [183985, 191456],
  [448, 451],
  [1488, 1514],
  [1519, 1522],
  [1568, 1599],
  [1601, 1610],
  [1646, 1647],
  [1649, 1747],
  [1774, 1775],
  [1786, 1788],
  [1810, 1839],
  [1869, 1957],
  [1994, 2026],
  [2048, 2069],
  [2112, 2136],
  [2144, 2154],
  [2208, 2228],
  [2230, 2237],
  [2308, 2361],
  [2392, 2401],
  [2418, 2432],
  [2437, 2444],
  [2447, 2448],
  [2451, 2472],
  [2474, 2480],
  [2486, 2489],
  [2524, 2525],
  [2527, 2529],
  [2544, 2545],
  [2565, 2570],
  [2575, 2576],
  [2579, 2600],
  [2602, 2608],
  [2610, 2611],
  [2613, 2614],
  [2616, 2617],
  [2649, 2652],
  [2674, 2676],
  [2693, 2701],
  [2703, 2705],
  [2707, 2728],
  [2730, 2736],
  [2738, 2739],
  [2741, 2745],
  [2784, 2785],
  [2821, 2828],
  [2831, 2832],
  [2835, 2856],
  [2858, 2864],
  [2866, 2867],
  [2869, 2873],
  [2908, 2909],
  [2911, 2913],
  [2949, 2954],
  [2958, 2960],
  [2962, 2965],
  [2969, 2970],
  [2974, 2975],
  [2979, 2980],
  [2984, 2986],
  [2990, 3001],
  [3077, 3084],
  [3086, 3088],
  [3090, 3112],
  [3114, 3129],
  [3160, 3162],
  [3168, 3169],
  [3205, 3212],
  [3214, 3216],
  [3218, 3240],
  [3242, 3251],
  [3253, 3257],
  [3296, 3297],
  [3313, 3314],
  [3333, 3340],
  [3342, 3344],
  [3346, 3386],
  [3412, 3414],
  [3423, 3425],
  [3450, 3455],
  [3461, 3478],
  [3482, 3505],
  [3507, 3515],
  [3520, 3526],
  [3585, 3632],
  [3634, 3635],
  [3648, 3653],
  [3713, 3714],
  [3718, 3722],
  [3724, 3747],
  [3751, 3760],
  [3762, 3763],
  [3776, 3780],
  [3804, 3807],
  [3904, 3911],
  [3913, 3948],
  [3976, 3980],
  [4096, 4138],
  [4176, 4181],
  [4186, 4189],
  [4197, 4198],
  [4206, 4208],
  [4213, 4225],
  [4352, 4680],
  [4682, 4685],
  [4688, 4694],
  [4698, 4701],
  [4704, 4744],
  [4746, 4749],
  [4752, 4784],
  [4786, 4789],
  [4792, 4798],
  [4802, 4805],
  [4808, 4822],
  [4824, 4880],
  [4882, 4885],
  [4888, 4954],
  [4992, 5007],
  [5121, 5740],
  [5743, 5759],
  [5761, 5786],
  [5792, 5866],
  [5873, 5880],
  [5888, 5900],
  [5902, 5905],
  [5920, 5937],
  [5952, 5969],
  [5984, 5996],
  [5998, 6000],
  [6016, 6067],
  [6176, 6210],
  [6212, 6264],
  [6272, 6276],
  [6279, 6312],
  [6320, 6389],
  [6400, 6430],
  [6480, 6509],
  [6512, 6516],
  [6528, 6571],
  [6576, 6601],
  [6656, 6678],
  [6688, 6740],
  [6917, 6963],
  [6981, 6987],
  [7043, 7072],
  [7086, 7087],
  [7098, 7141],
  [7168, 7203],
  [7245, 7247],
  [7258, 7287],
  [7401, 7404],
  [7406, 7411],
  [7413, 7414],
  [8501, 8504],
  [11568, 11623],
  [11648, 11670],
  [11680, 11686],
  [11688, 11694],
  [11696, 11702],
  [11704, 11710],
  [11712, 11718],
  [11720, 11726],
  [11728, 11734],
  [11736, 11742],
  [12353, 12438],
  [12449, 12538],
  [12549, 12591],
  [12593, 12686],
  [12704, 12730],
  [12784, 12799],
  [40960, 40980],
  [40982, 42124],
  [42192, 42231],
  [42240, 42507],
  [42512, 42527],
  [42538, 42539],
  [42656, 42725],
  [43003, 43009],
  [43011, 43013],
  [43015, 43018],
  [43020, 43042],
  [43072, 43123],
  [43138, 43187],
  [43250, 43255],
  [43261, 43262],
  [43274, 43301],
  [43312, 43334],
  [43360, 43388],
  [43396, 43442],
  [43488, 43492],
  [43495, 43503],
  [43514, 43518],
  [43520, 43560],
  [43584, 43586],
  [43588, 43595],
  [43616, 43631],
  [43633, 43638],
  [43646, 43695],
  [43701, 43702],
  [43705, 43709],
  [43739, 43740],
  [43744, 43754],
  [43777, 43782],
  [43785, 43790],
  [43793, 43798],
  [43808, 43814],
  [43816, 43822],
  [43968, 44002],
  [55216, 55238],
  [55243, 55291],
  [63744, 64109],
  [64112, 64217],
  [64287, 64296],
  [64298, 64310],
  [64312, 64316],
  [64320, 64321],
  [64323, 64324],
  [64326, 64433],
  [64467, 64829],
  [64848, 64911],
  [64914, 64967],
  [65008, 65019],
  [65136, 65140],
  [65142, 65276],
  [65382, 65391],
  [65393, 65437],
  [65440, 65470],
  [65474, 65479],
  [65482, 65487],
  [65490, 65495],
  [65498, 65500],
  [65536, 65547],
  [65549, 65574],
  [65576, 65594],
  [65596, 65597],
  [65599, 65613],
  [65616, 65629],
  [65664, 65786],
  [66176, 66204],
  [66208, 66256],
  [66304, 66335],
  [66349, 66368],
  [66370, 66377],
  [66384, 66421],
  [66432, 66461],
  [66464, 66499],
  [66504, 66511],
  [66640, 66717],
  [66816, 66855],
  [66864, 66915],
  [67072, 67382],
  [67392, 67413],
  [67424, 67431],
  [67584, 67589],
  [67594, 67637],
  [67639, 67640],
  [67647, 67669],
  [67680, 67702],
  [67712, 67742],
  [67808, 67826],
  [67828, 67829],
  [67840, 67861],
  [67872, 67897],
  [67968, 68023],
  [68030, 68031],
  [68112, 68115],
  [68117, 68119],
  [68121, 68149],
  [68192, 68220],
  [68224, 68252],
  [68288, 68295],
  [68297, 68324],
  [68352, 68405],
  [68416, 68437],
  [68448, 68466],
  [68480, 68497],
  [68608, 68680],
  [68864, 68899],
  [69376, 69404],
  [69424, 69445],
  [69600, 69622],
  [69635, 69687],
  [69763, 69807],
  [69840, 69864],
  [69891, 69926],
  [69968, 70002],
  [70019, 70066],
  [70081, 70084],
  [70144, 70161],
  [70163, 70187],
  [70272, 70278],
  [70282, 70285],
  [70287, 70301],
  [70303, 70312],
  [70320, 70366],
  [70405, 70412],
  [70415, 70416],
  [70419, 70440],
  [70442, 70448],
  [70450, 70451],
  [70453, 70457],
  [70493, 70497],
  [70656, 70708],
  [70727, 70730],
  [70784, 70831],
  [70852, 70853],
  [71040, 71086],
  [71128, 71131],
  [71168, 71215],
  [71296, 71338],
  [71424, 71450],
  [71680, 71723],
  [72096, 72103],
  [72106, 72144],
  [72203, 72242],
  [72284, 72329],
  [72384, 72440],
  [72704, 72712],
  [72714, 72750],
  [72818, 72847],
  [72960, 72966],
  [72968, 72969],
  [72971, 73008],
  [73056, 73061],
  [73063, 73064],
  [73066, 73097],
  [73440, 73458],
  [73728, 74649],
  [74880, 75075],
  [77824, 78894],
  [82944, 83526],
  [92160, 92728],
  [92736, 92766],
  [92880, 92909],
  [92928, 92975],
  [93027, 93047],
  [93053, 93071],
  [93952, 94026],
  [100352, 101106],
  [110592, 110878],
  [110928, 110930],
  [110948, 110951],
  [110960, 111355],
  [113664, 113770],
  [113776, 113788],
  [113792, 113800],
  [113808, 113817],
  [123136, 123180],
  [123584, 123627],
  [124928, 125124],
  [126464, 126467],
  [126469, 126495],
  [126497, 126498],
  [126505, 126514],
  [126516, 126519],
  [126541, 126543],
  [126545, 126546],
  [126561, 126562],
  [126567, 126570],
  [126572, 126578],
  [126580, 126583],
  [126585, 126588],
  [126592, 126601],
  [126603, 126619],
  [126625, 126627],
  [126629, 126633],
  [126635, 126651],
  [194560, 195101],
  [8072, 8079],
  [8088, 8095],
  [8104, 8111],
  [65, 90],
  [192, 214],
  [216, 222],
  [376, 377],
  [385, 386],
  [390, 391],
  [393, 395],
  [398, 401],
  [403, 404],
  [406, 408],
  [412, 413],
  [415, 416],
  [422, 423],
  [430, 431],
  [433, 435],
  [439, 440],
  [502, 504],
  [570, 571],
  [573, 574],
  [579, 582],
  [904, 906],
  [910, 911],
  [913, 929],
  [931, 939],
  [978, 980],
  [1017, 1018],
  [1021, 1071],
  [1216, 1217],
  [1329, 1366],
  [4256, 4293],
  [5024, 5109],
  [7312, 7354],
  [7357, 7359],
  [7944, 7951],
  [7960, 7965],
  [7976, 7983],
  [7992, 7999],
  [8008, 8013],
  [8040, 8047],
  [8120, 8123],
  [8136, 8139],
  [8152, 8155],
  [8168, 8172],
  [8184, 8187],
  [8459, 8461],
  [8464, 8466],
  [8473, 8477],
  [8490, 8493],
  [8496, 8499],
  [8510, 8511],
  [11264, 11310],
  [11362, 11364],
  [11373, 11376],
  [11390, 11392],
  [42877, 42878],
  [42922, 42926],
  [42928, 42932],
  [42948, 42950],
  [65313, 65338],
  [66560, 66599],
  [66736, 66771],
  [68736, 68786],
  [71840, 71871],
  [93760, 93791],
  [119808, 119833],
  [119860, 119885],
  [119912, 119937],
  [119966, 119967],
  [119973, 119974],
  [119977, 119980],
  [119982, 119989],
  [120016, 120041],
  [120068, 120069],
  [120071, 120074],
  [120077, 120084],
  [120086, 120092],
  [120120, 120121],
  [120123, 120126],
  [120128, 120132],
  [120138, 120144],
  [120172, 120197],
  [120224, 120249],
  [120276, 120301],
  [120328, 120353],
  [120380, 120405],
  [120432, 120457],
  [120488, 120512],
  [120546, 120570],
  [120604, 120628],
  [120662, 120686],
  [120720, 120744],
  [125184, 125217],
  [5870, 5872],
  [8544, 8578],
  [8581, 8584],
  [12321, 12329],
  [12344, 12346],
  [42726, 42735],
  [65856, 65908],
  [66513, 66517],
  [74752, 74862],
  [162, 165],
  [2046, 2047],
  [2546, 2547],
  [8352, 8383],
  [65504, 65505],
  [65509, 65510],
  [73693, 73696],
  [8255, 8256],
  [65075, 65076],
  [65101, 65103]
];
addRanges(fic, fic_a);
const ricd = new Set([
  1471, 1479, 1648, 1809, 2045, 2362, 2364, 2381, 2433, 2492, 2509, 2558, 2620,
  2641, 2677, 2748, 2765, 2817, 2876, 2879, 2893, 2902, 2946, 3008, 3021, 3072,
  3076, 3201, 3260, 3263, 3270, 3405, 3530, 3542, 3633, 3761, 3893, 3895, 3897,
  4038, 4226, 4237, 4253, 6086, 6109, 6313, 6450, 6683, 6742, 6752, 6754, 6783,
  6964, 6972, 6978, 7142, 7149, 7405, 7412, 8417, 11647, 42607, 43010, 43014,
  43019, 43263, 43443, 43493, 43587, 43596, 43644, 43696, 43713, 43766, 44005,
  44008, 44013, 64286, 66045, 66272, 68159, 69633, 70003, 70196, 70206, 70367,
  70464, 70726, 70750, 70842, 71229, 71339, 71341, 71351, 72160, 72263, 72767,
  73018, 73031, 73109, 73111, 94031, 121461, 121476, 173, 1564, 1757, 1807,
  2274, 6158, 65279, 69821, 69837, 917505
]);
const ricd_a = [
  [768, 879],
  [1155, 1159],
  [1425, 1469],
  [1473, 1474],
  [1476, 1477],
  [1552, 1562],
  [1611, 1631],
  [1750, 1756],
  [1759, 1764],
  [1767, 1768],
  [1770, 1773],
  [1840, 1866],
  [1958, 1968],
  [2027, 2035],
  [2070, 2073],
  [2075, 2083],
  [2085, 2087],
  [2089, 2093],
  [2137, 2139],
  [2259, 2273],
  [2275, 2306],
  [2369, 2376],
  [2385, 2391],
  [2402, 2403],
  [2497, 2500],
  [2530, 2531],
  [2561, 2562],
  [2625, 2626],
  [2631, 2632],
  [2635, 2637],
  [2672, 2673],
  [2689, 2690],
  [2753, 2757],
  [2759, 2760],
  [2786, 2787],
  [2810, 2815],
  [2881, 2884],
  [2914, 2915],
  [3134, 3136],
  [3142, 3144],
  [3146, 3149],
  [3157, 3158],
  [3170, 3171],
  [3276, 3277],
  [3298, 3299],
  [3328, 3329],
  [3387, 3388],
  [3393, 3396],
  [3426, 3427],
  [3538, 3540],
  [3636, 3642],
  [3655, 3662],
  [3764, 3772],
  [3784, 3789],
  [3864, 3865],
  [3953, 3966],
  [3968, 3972],
  [3974, 3975],
  [3981, 3991],
  [3993, 4028],
  [4141, 4144],
  [4146, 4151],
  [4153, 4154],
  [4157, 4158],
  [4184, 4185],
  [4190, 4192],
  [4209, 4212],
  [4229, 4230],
  [4957, 4959],
  [5906, 5908],
  [5938, 5940],
  [5970, 5971],
  [6002, 6003],
  [6068, 6069],
  [6071, 6077],
  [6089, 6099],
  [6155, 6157],
  [6277, 6278],
  [6432, 6434],
  [6439, 6440],
  [6457, 6459],
  [6679, 6680],
  [6744, 6750],
  [6757, 6764],
  [6771, 6780],
  [6832, 6845],
  [6912, 6915],
  [6966, 6970],
  [7019, 7027],
  [7040, 7041],
  [7074, 7077],
  [7080, 7081],
  [7083, 7085],
  [7144, 7145],
  [7151, 7153],
  [7212, 7219],
  [7222, 7223],
  [7376, 7378],
  [7380, 7392],
  [7394, 7400],
  [7416, 7417],
  [7616, 7673],
  [7675, 7679],
  [8400, 8412],
  [8421, 8432],
  [11503, 11505],
  [11744, 11775],
  [12330, 12333],
  [12441, 12442],
  [42612, 42621],
  [42654, 42655],
  [42736, 42737],
  [43045, 43046],
  [43204, 43205],
  [43232, 43249],
  [43302, 43309],
  [43335, 43345],
  [43392, 43394],
  [43446, 43449],
  [43452, 43453],
  [43561, 43566],
  [43569, 43570],
  [43573, 43574],
  [43698, 43700],
  [43703, 43704],
  [43710, 43711],
  [43756, 43757],
  [65024, 65039],
  [65056, 65071],
  [66422, 66426],
  [68097, 68099],
  [68101, 68102],
  [68108, 68111],
  [68152, 68154],
  [68325, 68326],
  [68900, 68903],
  [69446, 69456],
  [69688, 69702],
  [69759, 69761],
  [69811, 69814],
  [69817, 69818],
  [69888, 69890],
  [69927, 69931],
  [69933, 69940],
  [70016, 70017],
  [70070, 70078],
  [70089, 70092],
  [70191, 70193],
  [70198, 70199],
  [70371, 70378],
  [70400, 70401],
  [70459, 70460],
  [70502, 70508],
  [70512, 70516],
  [70712, 70719],
  [70722, 70724],
  [70835, 70840],
  [70847, 70848],
  [70850, 70851],
  [71090, 71093],
  [71100, 71101],
  [71103, 71104],
  [71132, 71133],
  [71219, 71226],
  [71231, 71232],
  [71344, 71349],
  [71453, 71455],
  [71458, 71461],
  [71463, 71467],
  [71727, 71735],
  [71737, 71738],
  [72148, 72151],
  [72154, 72155],
  [72193, 72202],
  [72243, 72248],
  [72251, 72254],
  [72273, 72278],
  [72281, 72283],
  [72330, 72342],
  [72344, 72345],
  [72752, 72758],
  [72760, 72765],
  [72850, 72871],
  [72874, 72880],
  [72882, 72883],
  [72885, 72886],
  [73009, 73014],
  [73020, 73021],
  [73023, 73029],
  [73104, 73105],
  [73459, 73460],
  [92912, 92916],
  [92976, 92982],
  [94095, 94098],
  [113821, 113822],
  [119143, 119145],
  [119163, 119170],
  [119173, 119179],
  [119210, 119213],
  [119362, 119364],
  [121344, 121398],
  [121403, 121452],
  [121499, 121503],
  [121505, 121519],
  [122880, 122886],
  [122888, 122904],
  [122907, 122913],
  [122915, 122916],
  [122918, 122922],
  [123184, 123190],
  [123628, 123631],
  [125136, 125142],
  [125252, 125258],
  [917760, 917999],
  [1536, 1541],
  [8203, 8207],
  [8234, 8238],
  [8288, 8292],
  [8294, 8303],
  [65529, 65531],
  [78896, 78904],
  [113824, 113827],
  [119155, 119162],
  [917536, 917631]
];
addRanges(ricd, ricd_a);
const mac_a = [
  [0, 8],
  [14, 27],
  [127, 159],
  [768, 879],
  [6832, 6911],
  [7616, 7679],
  [8400, 8447],
  [65056, 65071],
  [48, 57]
];
addRanges(ricd, mac_a);
const ric = new Set(
  (function* () {
    yield* fic;
    yield* ricd;
  })()
);
module.exports = {
  firstIdentChar: fic,
  restIdentChar: ric
};


/***/ }),

/***/ "./node_modules/java-parser/src/utils.js":
/*!***********************************************!*\
  !*** ./node_modules/java-parser/src/utils.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Should Parser / Lexer Validations be skipped?
 *
 * By default (productive mode) the validations would be skipped to reduce parser initialization time.
 * But during development flows (e.g testing/CI) they should be enabled to detect possible issues.
 *
 * @returns {boolean}
 */
function getSkipValidations() {
  return (
    (process && // (not every runtime has a global `process` object
      process.env &&
      process.env["prettier-java-development-mode"] === "enabled") === false
  );
}

module.exports = {
  getSkipValidations
};


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arrayReduce.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_asciiToArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "./node_modules/lodash/_asciiWords.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_asciiWords.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_castSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createCaseFirst.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_createCaseFirst.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(/*! ./_castSlice */ "./node_modules/lodash/_castSlice.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ "./node_modules/lodash/_stringToArray.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),

/***/ "./node_modules/lodash/_createCompounder.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createCompounder.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ "./node_modules/lodash/_arrayReduce.js"),
    deburr = __webpack_require__(/*! ./deburr */ "./node_modules/lodash/deburr.js"),
    words = __webpack_require__(/*! ./words */ "./node_modules/lodash/words.js");

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),

/***/ "./node_modules/lodash/_createFind.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createFind.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ "./node_modules/lodash/_deburrLetter.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_deburrLetter.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ "./node_modules/lodash/_basePropertyOf.js");

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicodeWord.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_hasUnicodeWord.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ "./node_modules/lodash/_asciiToArray.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ "./node_modules/lodash/_unicodeToArray.js");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/_unicodeToArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "./node_modules/lodash/_unicodeWords.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_unicodeWords.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),

/***/ "./node_modules/lodash/camelCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/camelCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var capitalize = __webpack_require__(/*! ./capitalize */ "./node_modules/lodash/capitalize.js"),
    createCompounder = __webpack_require__(/*! ./_createCompounder */ "./node_modules/lodash/_createCompounder.js");

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

module.exports = camelCase;


/***/ }),

/***/ "./node_modules/lodash/capitalize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/capitalize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js"),
    upperFirst = __webpack_require__(/*! ./upperFirst */ "./node_modules/lodash/upperFirst.js");

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;


/***/ }),

/***/ "./node_modules/lodash/deburr.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/deburr.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(/*! ./_deburrLetter */ "./node_modules/lodash/_deburrLetter.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/findLast.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/findLast.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(/*! ./_createFind */ "./node_modules/lodash/_createFind.js"),
    findLastIndex = __webpack_require__(/*! ./findLastIndex */ "./node_modules/lodash/findLastIndex.js");

/**
 * This method is like `_.find` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=collection.length-1] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * _.findLast([1, 2, 3, 4], function(n) {
 *   return n % 2 == 1;
 * });
 * // => 3
 */
var findLast = createFind(findLastIndex);

module.exports = findLast;


/***/ }),

/***/ "./node_modules/lodash/findLastIndex.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/findLastIndex.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * This method is like `_.findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
 * // => 2
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastIndex(users, { 'user': 'barney', 'active': true });
 * // => 0
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastIndex(users, ['active', false]);
 * // => 2
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastIndex(users, 'active');
 * // => 0
 */
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length - 1;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index = fromIndex < 0
      ? nativeMax(length + index, 0)
      : nativeMin(index, length - 1);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
}

module.exports = findLastIndex;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/upperFirst.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/upperFirst.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(/*! ./_createCaseFirst */ "./node_modules/lodash/_createCaseFirst.js");

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),

/***/ "./node_modules/lodash/words.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/words.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(/*! ./_asciiWords */ "./node_modules/lodash/_asciiWords.js"),
    hasUnicodeWord = __webpack_require__(/*! ./_hasUnicodeWord */ "./node_modules/lodash/_hasUnicodeWord.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js"),
    unicodeWords = __webpack_require__(/*! ./_unicodeWords */ "./node_modules/lodash/_unicodeWords.js");

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),

/***/ "./node_modules/regexp-to-ast/lib/regexp-to-ast.js":
/*!*********************************************************!*\
  !*** ./node_modules/regexp-to-ast/lib/regexp-to-ast.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;;(function(root, factory) {
    // istanbul ignore next
    if (true) {
        // istanbul ignore next
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    } else {}
})(
    typeof self !== "undefined"
        ? // istanbul ignore next
          self
        : this,
    function() {
        // references
        // https://hackernoon.com/the-madness-of-parsing-real-world-javascript-regexps-d9ee336df983
        // https://www.ecma-international.org/ecma-262/8.0/index.html#prod-Pattern
        function RegExpParser() {}

        RegExpParser.prototype.saveState = function() {
            return {
                idx: this.idx,
                input: this.input,
                groupIdx: this.groupIdx
            }
        }

        RegExpParser.prototype.restoreState = function(newState) {
            this.idx = newState.idx
            this.input = newState.input
            this.groupIdx = newState.groupIdx
        }

        RegExpParser.prototype.pattern = function(input) {
            // parser state
            this.idx = 0
            this.input = input
            this.groupIdx = 0

            this.consumeChar("/")
            var value = this.disjunction()
            this.consumeChar("/")

            var flags = {
                type: "Flags",
                global: false,
                ignoreCase: false,
                multiLine: false,
                unicode: false,
                sticky: false
            }

            while (this.isRegExpFlag()) {
                switch (this.popChar()) {
                    case "g":
                        addFlag(flags, "global")
                        break
                    case "i":
                        addFlag(flags, "ignoreCase")
                        break
                    case "m":
                        addFlag(flags, "multiLine")
                        break
                    case "u":
                        addFlag(flags, "unicode")
                        break
                    case "y":
                        addFlag(flags, "sticky")
                        break
                }
            }

            if (this.idx !== this.input.length) {
                throw Error(
                    "Redundant input: " + this.input.substring(this.idx)
                )
            }
            return { type: "Pattern", flags: flags, value: value }
        }

        RegExpParser.prototype.disjunction = function() {
            var alts = []
            alts.push(this.alternative())

            while (this.peekChar() === "|") {
                this.consumeChar("|")
                alts.push(this.alternative())
            }

            return { type: "Disjunction", value: alts }
        }

        RegExpParser.prototype.alternative = function() {
            var terms = []

            while (this.isTerm()) {
                terms.push(this.term())
            }

            return { type: "Alternative", value: terms }
        }

        RegExpParser.prototype.term = function() {
            if (this.isAssertion()) {
                return this.assertion()
            } else {
                return this.atom()
            }
        }

        RegExpParser.prototype.assertion = function() {
            switch (this.popChar()) {
                case "^":
                    return { type: "StartAnchor" }
                case "$":
                    return { type: "EndAnchor" }
                // '\b' or '\B'
                case "\\":
                    switch (this.popChar()) {
                        case "b":
                            return { type: "WordBoundary" }
                        case "B":
                            return { type: "NonWordBoundary" }
                    }
                    // istanbul ignore next
                    throw Error("Invalid Assertion Escape")
                // '(?=' or '(?!'
                case "(":
                    this.consumeChar("?")

                    var type
                    switch (this.popChar()) {
                        case "=":
                            type = "Lookahead"
                            break
                        case "!":
                            type = "NegativeLookahead"
                            break
                    }
                    ASSERT_EXISTS(type)

                    var disjunction = this.disjunction()

                    this.consumeChar(")")

                    return { type: type, value: disjunction }
            }
            // istanbul ignore next
            ASSERT_NEVER_REACH_HERE()
        }

        RegExpParser.prototype.quantifier = function(isBacktracking) {
            var range
            switch (this.popChar()) {
                case "*":
                    range = {
                        atLeast: 0,
                        atMost: Infinity
                    }
                    break
                case "+":
                    range = {
                        atLeast: 1,
                        atMost: Infinity
                    }
                    break
                case "?":
                    range = {
                        atLeast: 0,
                        atMost: 1
                    }
                    break
                case "{":
                    var atLeast = this.integerIncludingZero()
                    switch (this.popChar()) {
                        case "}":
                            range = {
                                atLeast: atLeast,
                                atMost: atLeast
                            }
                            break
                        case ",":
                            var atMost
                            if (this.isDigit()) {
                                atMost = this.integerIncludingZero()
                                range = {
                                    atLeast: atLeast,
                                    atMost: atMost
                                }
                            } else {
                                range = {
                                    atLeast: atLeast,
                                    atMost: Infinity
                                }
                            }
                            this.consumeChar("}")
                            break
                    }
                    // throwing exceptions from "ASSERT_EXISTS" during backtracking
                    // causes severe performance degradations
                    if (isBacktracking === true && range === undefined) {
                        return undefined
                    }
                    ASSERT_EXISTS(range)
                    break
            }

            // throwing exceptions from "ASSERT_EXISTS" during backtracking
            // causes severe performance degradations
            if (isBacktracking === true && range === undefined) {
                return undefined
            }

            ASSERT_EXISTS(range)

            if (this.peekChar(0) === "?") {
                this.consumeChar("?")
                range.greedy = false
            } else {
                range.greedy = true
            }

            range.type = "Quantifier"
            return range
        }

        RegExpParser.prototype.atom = function() {
            var atom
            switch (this.peekChar()) {
                case ".":
                    atom = this.dotAll()
                    break
                case "\\":
                    atom = this.atomEscape()
                    break
                case "[":
                    atom = this.characterClass()
                    break
                case "(":
                    atom = this.group()
                    break
            }

            if (atom === undefined && this.isPatternCharacter()) {
                atom = this.patternCharacter()
            }

            ASSERT_EXISTS(atom)

            if (this.isQuantifier()) {
                atom.quantifier = this.quantifier()
            }

            return atom
        }

        RegExpParser.prototype.dotAll = function() {
            this.consumeChar(".")
            return {
                type: "Set",
                complement: true,
                value: [cc("\n"), cc("\r"), cc("\u2028"), cc("\u2029")]
            }
        }

        RegExpParser.prototype.atomEscape = function() {
            this.consumeChar("\\")

            switch (this.peekChar()) {
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    return this.decimalEscapeAtom()
                case "d":
                case "D":
                case "s":
                case "S":
                case "w":
                case "W":
                    return this.characterClassEscape()
                case "f":
                case "n":
                case "r":
                case "t":
                case "v":
                    return this.controlEscapeAtom()
                case "c":
                    return this.controlLetterEscapeAtom()
                case "0":
                    return this.nulCharacterAtom()
                case "x":
                    return this.hexEscapeSequenceAtom()
                case "u":
                    return this.regExpUnicodeEscapeSequenceAtom()
                default:
                    return this.identityEscapeAtom()
            }
        }

        RegExpParser.prototype.decimalEscapeAtom = function() {
            var value = this.positiveInteger()

            return { type: "GroupBackReference", value: value }
        }

        RegExpParser.prototype.characterClassEscape = function() {
            var set
            var complement = false
            switch (this.popChar()) {
                case "d":
                    set = digitsCharCodes
                    break
                case "D":
                    set = digitsCharCodes
                    complement = true
                    break
                case "s":
                    set = whitespaceCodes
                    break
                case "S":
                    set = whitespaceCodes
                    complement = true
                    break
                case "w":
                    set = wordCharCodes
                    break
                case "W":
                    set = wordCharCodes
                    complement = true
                    break
            }

            ASSERT_EXISTS(set)

            return { type: "Set", value: set, complement: complement }
        }

        RegExpParser.prototype.controlEscapeAtom = function() {
            var escapeCode
            switch (this.popChar()) {
                case "f":
                    escapeCode = cc("\f")
                    break
                case "n":
                    escapeCode = cc("\n")
                    break
                case "r":
                    escapeCode = cc("\r")
                    break
                case "t":
                    escapeCode = cc("\t")
                    break
                case "v":
                    escapeCode = cc("\v")
                    break
            }
            ASSERT_EXISTS(escapeCode)

            return { type: "Character", value: escapeCode }
        }

        RegExpParser.prototype.controlLetterEscapeAtom = function() {
            this.consumeChar("c")
            var letter = this.popChar()
            if (/[a-zA-Z]/.test(letter) === false) {
                throw Error("Invalid ")
            }

            var letterCode = letter.toUpperCase().charCodeAt(0) - 64
            return { type: "Character", value: letterCode }
        }

        RegExpParser.prototype.nulCharacterAtom = function() {
            // TODO implement '[lookahead ∉ DecimalDigit]'
            // TODO: for the deprecated octal escape sequence
            this.consumeChar("0")
            return { type: "Character", value: cc("\0") }
        }

        RegExpParser.prototype.hexEscapeSequenceAtom = function() {
            this.consumeChar("x")
            return this.parseHexDigits(2)
        }

        RegExpParser.prototype.regExpUnicodeEscapeSequenceAtom = function() {
            this.consumeChar("u")
            return this.parseHexDigits(4)
        }

        RegExpParser.prototype.identityEscapeAtom = function() {
            // TODO: implement "SourceCharacter but not UnicodeIDContinue"
            // // http://unicode.org/reports/tr31/#Specific_Character_Adjustments
            var escapedChar = this.popChar()
            return { type: "Character", value: cc(escapedChar) }
        }

        RegExpParser.prototype.classPatternCharacterAtom = function() {
            switch (this.peekChar()) {
                // istanbul ignore next
                case "\n":
                // istanbul ignore next
                case "\r":
                // istanbul ignore next
                case "\u2028":
                // istanbul ignore next
                case "\u2029":
                // istanbul ignore next
                case "\\":
                // istanbul ignore next
                case "]":
                    throw Error("TBD")
                default:
                    var nextChar = this.popChar()
                    return { type: "Character", value: cc(nextChar) }
            }
        }

        RegExpParser.prototype.characterClass = function() {
            var set = []
            var complement = false
            this.consumeChar("[")
            if (this.peekChar(0) === "^") {
                this.consumeChar("^")
                complement = true
            }

            while (this.isClassAtom()) {
                var from = this.classAtom()
                var isFromSingleChar = from.type === "Character"
                if (isFromSingleChar && this.isRangeDash()) {
                    this.consumeChar("-")
                    var to = this.classAtom()
                    var isToSingleChar = to.type === "Character"

                    // a range can only be used when both sides are single characters
                    if (isToSingleChar) {
                        if (to.value < from.value) {
                            throw Error("Range out of order in character class")
                        }
                        set.push({ from: from.value, to: to.value })
                    } else {
                        // literal dash
                        insertToSet(from.value, set)
                        set.push(cc("-"))
                        insertToSet(to.value, set)
                    }
                } else {
                    insertToSet(from.value, set)
                }
            }

            this.consumeChar("]")

            return { type: "Set", complement: complement, value: set }
        }

        RegExpParser.prototype.classAtom = function() {
            switch (this.peekChar()) {
                // istanbul ignore next
                case "]":
                // istanbul ignore next
                case "\n":
                // istanbul ignore next
                case "\r":
                // istanbul ignore next
                case "\u2028":
                // istanbul ignore next
                case "\u2029":
                    throw Error("TBD")
                case "\\":
                    return this.classEscape()
                default:
                    return this.classPatternCharacterAtom()
            }
        }

        RegExpParser.prototype.classEscape = function() {
            this.consumeChar("\\")
            switch (this.peekChar()) {
                // Matches a backspace.
                // (Not to be confused with \b word boundary outside characterClass)
                case "b":
                    this.consumeChar("b")
                    return { type: "Character", value: cc("\u0008") }
                case "d":
                case "D":
                case "s":
                case "S":
                case "w":
                case "W":
                    return this.characterClassEscape()
                case "f":
                case "n":
                case "r":
                case "t":
                case "v":
                    return this.controlEscapeAtom()
                case "c":
                    return this.controlLetterEscapeAtom()
                case "0":
                    return this.nulCharacterAtom()
                case "x":
                    return this.hexEscapeSequenceAtom()
                case "u":
                    return this.regExpUnicodeEscapeSequenceAtom()
                default:
                    return this.identityEscapeAtom()
            }
        }

        RegExpParser.prototype.group = function() {
            var capturing = true
            this.consumeChar("(")
            switch (this.peekChar(0)) {
                case "?":
                    this.consumeChar("?")
                    this.consumeChar(":")
                    capturing = false
                    break
                default:
                    this.groupIdx++
                    break
            }
            var value = this.disjunction()
            this.consumeChar(")")

            var groupAst = {
                type: "Group",
                capturing: capturing,
                value: value
            }

            if (capturing) {
                groupAst.idx = this.groupIdx
            }

            return groupAst
        }

        RegExpParser.prototype.positiveInteger = function() {
            var number = this.popChar()

            // istanbul ignore next - can't ever get here due to previous lookahead checks
            // still implementing this error checking in case this ever changes.
            if (decimalPatternNoZero.test(number) === false) {
                throw Error("Expecting a positive integer")
            }

            while (decimalPattern.test(this.peekChar(0))) {
                number += this.popChar()
            }

            return parseInt(number, 10)
        }

        RegExpParser.prototype.integerIncludingZero = function() {
            var number = this.popChar()
            if (decimalPattern.test(number) === false) {
                throw Error("Expecting an integer")
            }

            while (decimalPattern.test(this.peekChar(0))) {
                number += this.popChar()
            }

            return parseInt(number, 10)
        }

        RegExpParser.prototype.patternCharacter = function() {
            var nextChar = this.popChar()
            switch (nextChar) {
                // istanbul ignore next
                case "\n":
                // istanbul ignore next
                case "\r":
                // istanbul ignore next
                case "\u2028":
                // istanbul ignore next
                case "\u2029":
                // istanbul ignore next
                case "^":
                // istanbul ignore next
                case "$":
                // istanbul ignore next
                case "\\":
                // istanbul ignore next
                case ".":
                // istanbul ignore next
                case "*":
                // istanbul ignore next
                case "+":
                // istanbul ignore next
                case "?":
                // istanbul ignore next
                case "(":
                // istanbul ignore next
                case ")":
                // istanbul ignore next
                case "[":
                // istanbul ignore next
                case "|":
                    // istanbul ignore next
                    throw Error("TBD")
                default:
                    return { type: "Character", value: cc(nextChar) }
            }
        }
        RegExpParser.prototype.isRegExpFlag = function() {
            switch (this.peekChar(0)) {
                case "g":
                case "i":
                case "m":
                case "u":
                case "y":
                    return true
                default:
                    return false
            }
        }

        RegExpParser.prototype.isRangeDash = function() {
            return this.peekChar() === "-" && this.isClassAtom(1)
        }

        RegExpParser.prototype.isDigit = function() {
            return decimalPattern.test(this.peekChar(0))
        }

        RegExpParser.prototype.isClassAtom = function(howMuch) {
            if (howMuch === undefined) {
                howMuch = 0
            }

            switch (this.peekChar(howMuch)) {
                case "]":
                case "\n":
                case "\r":
                case "\u2028":
                case "\u2029":
                    return false
                default:
                    return true
            }
        }

        RegExpParser.prototype.isTerm = function() {
            return this.isAtom() || this.isAssertion()
        }

        RegExpParser.prototype.isAtom = function() {
            if (this.isPatternCharacter()) {
                return true
            }

            switch (this.peekChar(0)) {
                case ".":
                case "\\": // atomEscape
                case "[": // characterClass
                // TODO: isAtom must be called before isAssertion - disambiguate
                case "(": // group
                    return true
                default:
                    return false
            }
        }

        RegExpParser.prototype.isAssertion = function() {
            switch (this.peekChar(0)) {
                case "^":
                case "$":
                    return true
                // '\b' or '\B'
                case "\\":
                    switch (this.peekChar(1)) {
                        case "b":
                        case "B":
                            return true
                        default:
                            return false
                    }
                // '(?=' or '(?!'
                case "(":
                    return (
                        this.peekChar(1) === "?" &&
                        (this.peekChar(2) === "=" || this.peekChar(2) === "!")
                    )
                default:
                    return false
            }
        }

        RegExpParser.prototype.isQuantifier = function() {
            var prevState = this.saveState()
            try {
                return this.quantifier(true) !== undefined
            } catch (e) {
                return false
            } finally {
                this.restoreState(prevState)
            }
        }

        RegExpParser.prototype.isPatternCharacter = function() {
            switch (this.peekChar()) {
                case "^":
                case "$":
                case "\\":
                case ".":
                case "*":
                case "+":
                case "?":
                case "(":
                case ")":
                case "[":
                case "|":
                case "/":
                case "\n":
                case "\r":
                case "\u2028":
                case "\u2029":
                    return false
                default:
                    return true
            }
        }

        RegExpParser.prototype.parseHexDigits = function(howMany) {
            var hexString = ""
            for (var i = 0; i < howMany; i++) {
                var hexChar = this.popChar()
                if (hexDigitPattern.test(hexChar) === false) {
                    throw Error("Expecting a HexDecimal digits")
                }
                hexString += hexChar
            }
            var charCode = parseInt(hexString, 16)
            return { type: "Character", value: charCode }
        }

        RegExpParser.prototype.peekChar = function(howMuch) {
            if (howMuch === undefined) {
                howMuch = 0
            }
            return this.input[this.idx + howMuch]
        }

        RegExpParser.prototype.popChar = function() {
            var nextChar = this.peekChar(0)
            this.consumeChar()
            return nextChar
        }

        RegExpParser.prototype.consumeChar = function(char) {
            if (char !== undefined && this.input[this.idx] !== char) {
                throw Error(
                    "Expected: '" +
                        char +
                        "' but found: '" +
                        this.input[this.idx] +
                        "' at offset: " +
                        this.idx
                )
            }

            if (this.idx >= this.input.length) {
                throw Error("Unexpected end of input")
            }
            this.idx++
        }

        // consts and utilities
        var hexDigitPattern = /[0-9a-fA-F]/
        var decimalPattern = /[0-9]/
        var decimalPatternNoZero = /[1-9]/

        function cc(char) {
            return char.charCodeAt(0)
        }

        function insertToSet(item, set) {
            if (item.length !== undefined) {
                item.forEach(function(subItem) {
                    set.push(subItem)
                })
            } else {
                set.push(item)
            }
        }

        function addFlag(flagObj, flagKey) {
            if (flagObj[flagKey] === true) {
                throw "duplicate flag " + flagKey
            }

            flagObj[flagKey] = true
        }

        function ASSERT_EXISTS(obj) {
            // istanbul ignore next
            if (obj === undefined) {
                throw Error("Internal Error - Should never get here!")
            }
        }

        // istanbul ignore next
        function ASSERT_NEVER_REACH_HERE() {
            throw Error("Internal Error - Should never get here!")
        }

        var i
        var digitsCharCodes = []
        for (i = cc("0"); i <= cc("9"); i++) {
            digitsCharCodes.push(i)
        }

        var wordCharCodes = [cc("_")].concat(digitsCharCodes)
        for (i = cc("a"); i <= cc("z"); i++) {
            wordCharCodes.push(i)
        }

        for (i = cc("A"); i <= cc("Z"); i++) {
            wordCharCodes.push(i)
        }

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#character-classes
        var whitespaceCodes = [
            cc(" "),
            cc("\f"),
            cc("\n"),
            cc("\r"),
            cc("\t"),
            cc("\v"),
            cc("\t"),
            cc("\u00a0"),
            cc("\u1680"),
            cc("\u2000"),
            cc("\u2001"),
            cc("\u2002"),
            cc("\u2003"),
            cc("\u2004"),
            cc("\u2005"),
            cc("\u2006"),
            cc("\u2007"),
            cc("\u2008"),
            cc("\u2009"),
            cc("\u200a"),
            cc("\u2028"),
            cc("\u2029"),
            cc("\u202f"),
            cc("\u205f"),
            cc("\u3000"),
            cc("\ufeff")
        ]

        function BaseRegExpVisitor() {}

        BaseRegExpVisitor.prototype.visitChildren = function(node) {
            for (var key in node) {
                var child = node[key]
                /* istanbul ignore else */
                if (node.hasOwnProperty(key)) {
                    if (child.type !== undefined) {
                        this.visit(child)
                    } else if (Array.isArray(child)) {
                        child.forEach(function(subChild) {
                            this.visit(subChild)
                        }, this)
                    }
                }
            }
        }

        BaseRegExpVisitor.prototype.visit = function(node) {
            switch (node.type) {
                case "Pattern":
                    this.visitPattern(node)
                    break
                case "Flags":
                    this.visitFlags(node)
                    break
                case "Disjunction":
                    this.visitDisjunction(node)
                    break
                case "Alternative":
                    this.visitAlternative(node)
                    break
                case "StartAnchor":
                    this.visitStartAnchor(node)
                    break
                case "EndAnchor":
                    this.visitEndAnchor(node)
                    break
                case "WordBoundary":
                    this.visitWordBoundary(node)
                    break
                case "NonWordBoundary":
                    this.visitNonWordBoundary(node)
                    break
                case "Lookahead":
                    this.visitLookahead(node)
                    break
                case "NegativeLookahead":
                    this.visitNegativeLookahead(node)
                    break
                case "Character":
                    this.visitCharacter(node)
                    break
                case "Set":
                    this.visitSet(node)
                    break
                case "Group":
                    this.visitGroup(node)
                    break
                case "GroupBackReference":
                    this.visitGroupBackReference(node)
                    break
                case "Quantifier":
                    this.visitQuantifier(node)
                    break
            }

            this.visitChildren(node)
        }

        BaseRegExpVisitor.prototype.visitPattern = function(node) {}

        BaseRegExpVisitor.prototype.visitFlags = function(node) {}

        BaseRegExpVisitor.prototype.visitDisjunction = function(node) {}

        BaseRegExpVisitor.prototype.visitAlternative = function(node) {}

        // Assertion
        BaseRegExpVisitor.prototype.visitStartAnchor = function(node) {}

        BaseRegExpVisitor.prototype.visitEndAnchor = function(node) {}

        BaseRegExpVisitor.prototype.visitWordBoundary = function(node) {}

        BaseRegExpVisitor.prototype.visitNonWordBoundary = function(node) {}

        BaseRegExpVisitor.prototype.visitLookahead = function(node) {}

        BaseRegExpVisitor.prototype.visitNegativeLookahead = function(node) {}

        // atoms
        BaseRegExpVisitor.prototype.visitCharacter = function(node) {}

        BaseRegExpVisitor.prototype.visitSet = function(node) {}

        BaseRegExpVisitor.prototype.visitGroup = function(node) {}

        BaseRegExpVisitor.prototype.visitGroupBackReference = function(node) {}

        BaseRegExpVisitor.prototype.visitQuantifier = function(node) {}

        return {
            RegExpParser: RegExpParser,
            BaseRegExpVisitor: BaseRegExpVisitor,
            VERSION: "0.4.0"
        }
    }
)


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/DynamicCollector.ts":
/*!*********************************!*\
  !*** ./src/DynamicCollector.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.DynamicCollector = void 0;
var JP = __webpack_require__(/*! java-parser */ "./node_modules/java-parser/src/index.js");
var JPLExpression_1 = __webpack_require__(/*! ./models/JPLExpression */ "./src/models/JPLExpression.ts");
var DynamicCollector = (function (_super) {
    __extends(DynamicCollector, _super);
    function DynamicCollector(collectorMethodList, parsedResult, finalResults, conditionalBlock) {
        var _this = _super.call(this) || this;
        _this.collectorMethodList = [];
        _this.results = {};
        _this.finalResults = [];
        _this.matchedConditionCount = 0;
        _this.validateVisitor();
        _this.collectorMethodList = collectorMethodList;
        _this.collectorName = collectorMethodList[0];
        var lastItem = collectorMethodList[collectorMethodList.length - 1];
        _this.parsedResult = parsedResult;
        if (!collectorMethodList) {
            return _this;
        }
        _this[_this.collectorName] = function (ctx, parent) {
            if (conditionalBlock ? conditionalBlock.steps.length > 1 : collectorMethodList.length > 1) {
                var newCondBlock = void 0;
                if (conditionalBlock && conditionalBlock.steps.length > 1) {
                    newCondBlock = __assign({}, conditionalBlock);
                    newCondBlock.steps = newCondBlock.steps.slice(1);
                }
                var subColl = new DynamicCollector(collectorMethodList.slice(1), parsedResult, finalResults, newCondBlock);
                ctx.name = _this.collectorName;
                if (_this.parsedResult && _this.collectorName === _this.parsedResult.returnAt) {
                    subColl.parent = ctx;
                    finalResults['counters'] = finalResults['counters'] || {};
                    var counter = finalResults['counters'][_this.collectorName] || 0;
                    counter++;
                    finalResults['counters'][_this.collectorName] = counter;
                    subColl.parent.index = counter;
                }
                else {
                    subColl.parent = _this.parent;
                }
                subColl.visit(ctx[collectorMethodList[1]]);
            }
            else if (lastItem === _this.collectorName) {
                var matchC = 0;
                var blockConditions = [];
                if (conditionalBlock) {
                    blockConditions.push(conditionalBlock);
                }
                else if (parsedResult && parsedResult.condition.expression) {
                    blockConditions = parsedResult.condition.expression.blocks;
                }
                blockConditions.forEach(function (block, index) {
                    if (block.steps.length > 1) {
                        var newBlock = __assign({}, block);
                        var cndStepColl = new DynamicCollector(block.steps, parsedResult, finalResults, newBlock);
                        cndStepColl.parent = _this.parent;
                        var newCtx = ctx[block.steps[0]];
                        var res = cndStepColl.visit(newCtx);
                        if (res && res[block.steps[1]] && res[block.steps[1]][0] && res[block.steps[1]][0][block.key] === block.value) {
                            _this.matchedConditionCount++;
                        }
                    }
                    else {
                        var node;
                        if (ctx.tokenTypeIdx) {
                            node = ctx;
                        }
                        else {
                            node = ctx[block.steps[0]][0];
                        }
                        if (node[block.key] == block.value) {
                            _this.matchedConditionCount++;
                        }
                    }
                });
                if (_this.matchedConditionCount === blockConditions.length) {
                    var continueToFilter = false;
                    if (conditionalBlock) {
                        continueToFilter = (_this.collectorName === conditionalBlock.steps[conditionalBlock.steps.length - 1]);
                    }
                    else if (parsedResult.condition && parsedResult.condition.steps.length) {
                        continueToFilter = (_this.collectorName === parsedResult.condition.evaluateAt);
                    }
                    else {
                        continueToFilter = (_this.collectorName === parsedResult.returnAt);
                    }
                    if (continueToFilter) {
                        var finals_1 = {};
                        if (parsedResult.trailing && parsedResult.trailing.steps.length) {
                            var trailingStepColl = new DynamicCollector(parsedResult.trailing.steps.splice(1), parsedResult, finalResults);
                            trailingStepColl.parent = _this.parent;
                            trailingStepColl.visit(_this.parent[parsedResult.trailing.steps[0]]);
                        }
                        if (parsedResult.trailing.outputs) {
                            parsedResult.trailing.outputs.forEach(function (output, index) {
                                if (output instanceof JPLExpression_1["default"]) {
                                    var outputsColl = new DynamicCollector(output.allStepsToCondition.slice(1), output, finalResults);
                                    outputsColl.parent = _this.parent;
                                    var outputresults = outputsColl.visit(_this.parent[output.allStepsToCondition[0]]);
                                }
                                else {
                                    var parts = output.split('#');
                                    finals_1[parts[1] ? parts[1] : output] = ctx[parts[0]];
                                }
                            });
                        }
                        if (finals_1 && Object.keys(finals_1).length) {
                            if (!finalResults['final'])
                                finalResults['final'] = [];
                            var index_1 = -1;
                            finalResults['final'].forEach(function (item, ind) {
                                if (item.index === _this.parent.index)
                                    return index_1 = ind;
                            });
                            if (index_1 > -1) {
                                finalResults['final'][index_1] = __assign(__assign({}, finalResults['final'][index_1]), finals_1);
                            }
                            else {
                                finals_1['index'] = _this.parent.index;
                                finalResults['final'].push(finals_1);
                            }
                        }
                    }
                }
            }
        };
        return _this;
    }
    return DynamicCollector;
}(JP.BaseJavaCstVisitorWithDefaults));
exports.DynamicCollector = DynamicCollector;


/***/ }),

/***/ "./src/JParser.ts":
/*!************************!*\
  !*** ./src/JParser.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var JP = __webpack_require__(/*! java-parser */ "./node_modules/java-parser/src/index.js");
var TestJavaStrings_1 = __webpack_require__(/*! ./TestJavaStrings */ "./src/TestJavaStrings.ts");
var DynamicCollector_1 = __webpack_require__(/*! ./DynamicCollector */ "./src/DynamicCollector.ts");
var Utils_1 = __webpack_require__(/*! ./Utils */ "./src/Utils.ts");
var JPLExpression_1 = __webpack_require__(/*! ./models/JPLExpression */ "./src/models/JPLExpression.ts");
var JParser = (function () {
    function JParser() {
    }
    JParser.prototype.parseTest = function () {
        var cst = JP.parse(TestJavaStrings_1["default"].CONTROLLER);
        var query = "/fieldDeclaration[/fieldModifier/annotation?{/At(image=\"@\") && /typeName/Identifier(image=\"Autowired\")}]:[/fieldModifier/annotation/typeName/Identifier:[image#annotation], /unannType/unannClassType/Identifier:[image#className], /variableDeclaratorList/variableDeclaratorId/Identifier:[image#instanceId]]";
        var result = new JPLExpression_1["default"](query);
        Utils_1["default"].printToFile(result, 'query');
        var allSteps = __spreadArray(__spreadArray(__spreadArray([], __read(result.guiding.steps), false), __read(result.condition.steps), false), __read(result.trailing.steps), false);
        var finalResults = [];
        var collector = new DynamicCollector_1.DynamicCollector(allSteps, result, finalResults);
        collector.visit(cst);
        Utils_1["default"].printToFile(finalResults['final'], 'final');
    };
    return JParser;
}());
exports["default"] = JParser;


/***/ }),

/***/ "./src/TestJavaStrings.ts":
/*!********************************!*\
  !*** ./src/TestJavaStrings.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports["default"] = {
    CONTROLLER: "\n    import com.pqebooks.auth.service.EbUserService;\n    import com.pqebooks.auth.service.LibrianAlertService;\n    import com.pqebooks.auth.validate.UserAccountValidator;\n    import com.pqebooks.auth.validate.ValidationError;\n    import com.pqebooks.customtext.service.IPropertyMessageService;\n    \n    @Controller\n    @SecuredAction(securityLevel=SecurityLevel.PATRON)\n    public class NewAccountController \n    {\n        private final Logger logger = LoggerFactory.getLogger(NewAccountController.class);\n    \n        @Magic\n        private AccountService accountService ; \n\n        @Autowired\n        private AccountService accountService ; \n        \n        @Autowired\n        private EbUserService userService;\n    \n        @Autowired\n        private UserSessionService sessionService;\n    \n        @Autowired\n        private IPropertyMessageService propertyMessageService;\n        \n        @Autowired\n        private ChannelService channelService;\t\n    \n        @Autowired\n        private ServletContext servletContext;\n        \n        @Autowired\n        private AuthenticationService authService;\t\n        \n        @Autowired\n        private DemographicService demographicService;\t\n        \n        @Autowired\n        LibrianAlertService librianAlertService;\n        \n        @RequestMapping(value = \"**/newAccount.action\", method = RequestMethod.GET)\n        protected String newAccount(UserSession userSession, HttpServletRequest request, HttpServletResponse response) throws IOException \n        {\n            String acronym = userSession.getChannelName();\n            Channel channel = channelService.getChannelByName(acronym, true);\n            String ip = request.getRemoteAddr();\n            if(channel == null ||  authService.accountCreateType(channel, ip, userSession.getReferralURL()) != 2 || channel.isSSO()){\n                response.sendRedirect(servletContext.getContextPath() + \"/\" + ServerMessage.PAGE_NOT_FOUND.getUrl());   \n                return null;\n            }\n            return \"account.new_account\";\n        }\n    \n        @RequestMapping(value = \"**/newAccountRequest.json\", method = RequestMethod.POST)\n        public ModelAndView newAccountRequest (UserSession userSession,  @RequestParam Map<String, String> params, \n                                                                            HttpServletRequest request) throws Exception \n        {\t\t\n            UserAccountValidator validator = createNewUser(userSession, params, request.getRemoteAddr());\n            \n            MappingJackson2JsonView jsonView = new MappingJackson2JsonView();\n            ModelAndView mav = new ModelAndView(jsonView);\n            \n            if (validator.hasError()) {\n                Map<String, String> errors = this.getErrorMap(userSession, validator);\n                mav.addObject(\"errors\", errors);\n                \n                mav.addObject(\"statusCode\", 1);\n                mav.addObject(\"status\",\"FAILURE\");\t\t\t\n            }\n            else {\n                this.userService.updateLastLoginDate(validator.getUsername(), userSession.getChannelID());\n                String demographicsQueryString = String.format(DemographicConstants.NEW_USER_ACC_CREATED_DISCRIPTION, \n                                                                     userSession.getUserName(), userSession.getChannelName()) + \" from modal\";\n                this.demographicService.addDemographics(DemographicConstants.USER_ACCOUNT, DemographicConstants.NEW_USER_CREATED, userSession, request, demographicsQueryString);\t\n                    \n                mav.addObject(\"statusCode\", 0);\n                mav.addObject(\"status\",\"SUCCESS\");\t\t\t\n            }\n            return (mav);\n        }\n        \n        @RequestMapping(value = \"**/newAccount.action\", method = RequestMethod.POST)\n        public String newAccountAction (UserSession userSession, ModelMap model, @RequestParam Map<String, String> params,\n                                                                                        HttpServletRequest request) throws Exception \n        {\n            UserAccountValidator validator = createNewUser(userSession, params, request.getRemoteAddr());\n            \n            if (! validator.hasError() ) {\n                this.userService.updateLastLoginDate(validator.getUsername(), userSession.getChannelID());\n                String demographicsQueryString = String.format(DemographicConstants.NEW_USER_ACC_CREATED_DISCRIPTION, \n                                                                      userSession.getUserName(), userSession.getChannelName());\n                this.demographicService.addDemographics(DemographicConstants.USER_ACCOUNT, DemographicConstants.NEW_USER_CREATED, \n                                                                                       userSession, request, demographicsQueryString);\t\n                            \n                return  (ConfirmMessage.NEW_ACCOUNT.sendForward());\n            }\n            \n            Map<String, String> userData = this.getUserData(validator);\n            Map<String, String> errors = this.getErrorMap(userSession, validator);\n    \n            model.addAttribute(\"userData\", userData);\n            model.addAttribute(\"errors\", errors);\n    \n            return \"account.new_account\";\n        }\n        \n        private void updateUserSession (UserSession userSession, EbUser ebUser) {\n            userSession.setUserID(ebUser.getId());\n            userSession.setUserTypeID(ebUser.getUserTypeId());\n            userSession.setUserName(ebUser.getUsername());\n            userSession.setChannelAccess(true);\n            sessionService.updateSession(userSession);\n    \n        }\n        private UserAccountValidator validateUserParams (int libraryId, Map<String, String> params)\n        {\n            UserAccountValidator validator = new UserAccountValidator();\n            \n            validator.setFirstName(params.get(\"firstName\"));\n            validator.setLastName(params.get(\"lastName\"));\n            validator.setEmail(params.get(\"email\")); \n            validator.setPassword(params.get(\"password\"));\n            \n            // deafult username to email\n            validator.setUsername( validator.getEmail());\n            String terms = params.get(\"terms\");\n            if(StringUtils.isBlank(terms)){\n                validator.addError(ValidationError.TERMS_OF_SERVICE_NOT_CHECKED);\n            }\n            if ( ! validator.hasError() ) {\n                // make sure email is not used in both username and email field.\n                EbUser user = userService.getUserByNameOrEmail(validator.getEmail(), libraryId);\n                if (user != null) {\n                    validator.addError(ValidationError.USER_ALREADY_EXIST);\n                }\n            }\n            return (validator);\n        }\n    \n        private UserAccountValidator createNewUser (UserSession userSession, Map<String, String> params, String consentIp)\n        {\n            UserAccountValidator validator = null;\n            int libraryId = userSession.getChannelID();\n    \n            try {\n                validator = validateUserParams (libraryId, params);\n        \n                if ( ! validator.hasError() ) {\n                    \n                    EbUser user = validator.createUser(libraryId, consentIp);\n                    //need to save the saltedhash\n                    user.updatePassword(validator.getPassword());\n                    userService.saveUser(user);\t\t\n                    accountService.sendNewAccountEmail(userSession,user);\n                    librianAlertService.sendNewAccountEmail(userSession, user);\n                    updateUserSession (userSession, user);\n    \n                }\n            }\n            catch (Exception e) {\n                logger.warn(\"Cannot create new user for email [{}] library [{}]\", params.get(\"email\"), libraryId, e);\n                if (validator == null) {\n                    validator = new UserAccountValidator();\n                }\n                validator.addError(ValidationError.USER_UPDATE_ERROR);\n            }\n            return (validator);\n        }\n        \n        private Map<String, String> getUserData (UserAccountValidator validator) \n        {\n            Map<String, String> userData = new HashMap<>();\n            userData.put(\"firstName\", validator.getFirstName());\n            userData.put(\"lastName\", validator.getLastName());\n            userData.put(\"email\", validator.getEmail());\n            // password should not be pre-populated back to the form\n            return (userData);\n        }\n    \n        private Map<String, String> getErrorMap (UserSession userSession, UserAccountValidator validator) \n        {\n            Map<String, String> errorMap = validator.getErrorMap(\"pqAuthError_\");\n            propertyMessageService.populateErrorMessageMap(errorMap, userSession);\n            return (errorMap);\n        }\n    }\n    "
};


/***/ }),

/***/ "./src/Utils.ts":
/*!**********************!*\
  !*** ./src/Utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var fs = __webpack_require__(/*! fs */ "fs");
exports["default"] = {
    jsonFilter: function (k, v) {
        if (k === 'START_CHARS_HINT' || k === 'categoryMatchesMap' || k === 'categoryMatches')
            return undefined;
        else
            return v;
    },
    _console: function (data) {
        var str = JSON.stringify(data, this.jsonFilter, 2);
        console.log(str);
    },
    printToFile: function (data, filePrefix) {
        var str = JSON.stringify(data, this.jsonFilter, 2);
        var fname = filePrefix ? filePrefix : '_test';
        fs.writeFileSync('devTesting/result_' + fname + '.json', str);
    },
    mergeArrays: function (arr1, arr2) {
        if (!arr1)
            arr1 = [];
        if (!arr2)
            arr2 = [];
        arr1 = __spreadArray(__spreadArray([], __read(arr1), false), __read(arr2), false);
        return arr1;
    }
};


/***/ }),

/***/ "./src/models/Condition.ts":
/*!*********************************!*\
  !*** ./src/models/Condition.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ConditionalBlock_1 = __webpack_require__(/*! ./ConditionalBlock */ "./src/models/ConditionalBlock.ts");
var ConditionalExpression_1 = __webpack_require__(/*! ./ConditionalExpression */ "./src/models/ConditionalExpression.ts");
var Condition = (function () {
    function Condition(rawString, stepsString) {
        this.steps = [];
        if (!(rawString && stepsString))
            return null;
        this.rawString = rawString;
        if (stepsString)
            this.steps = stepsString.match(/[^/]+/g);
        this.parse();
    }
    Condition.prototype.parse = function () {
        var regex2 = /(?:([a-zA-Z0-9\/]+)\((\w+)="([\w|@]+)"\))\s?([&|\|]{2})?\s?/g;
        var myRegexp2 = new RegExp(regex2, 'gi');
        myRegexp2.lastIndex = 0;
        var match;
        this.expression = new ConditionalExpression_1["default"]();
        while (match = myRegexp2.exec(this.rawString)) {
            var block = new ConditionalBlock_1["default"](match[1].match(/[^/]+/g), match[2], match[3]);
            this.expression.blocks.push(block);
            this.expression.operator = match[4] || this.expression.operator;
        }
        this.evaluateAt = this.steps[this.steps.length - 1];
    };
    return Condition;
}());
exports["default"] = Condition;


/***/ }),

/***/ "./src/models/ConditionalBlock.ts":
/*!****************************************!*\
  !*** ./src/models/ConditionalBlock.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ConditionalBlock = (function () {
    function ConditionalBlock(steps, key, value) {
        this.isMatched = false;
        this.steps = steps;
        this.key = key;
        this.value = value;
    }
    return ConditionalBlock;
}());
exports["default"] = ConditionalBlock;


/***/ }),

/***/ "./src/models/ConditionalExpression.ts":
/*!*********************************************!*\
  !*** ./src/models/ConditionalExpression.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ConditionalExpression = (function () {
    function ConditionalExpression() {
        this.blocks = [];
        this.currentEvalCount = 0;
        this.blocks = [];
    }
    return ConditionalExpression;
}());
exports["default"] = ConditionalExpression;


/***/ }),

/***/ "./src/models/JPLExpression.ts":
/*!*************************************!*\
  !*** ./src/models/JPLExpression.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var Condition_1 = __webpack_require__(/*! ./Condition */ "./src/models/Condition.ts");
var TrailingExpression_1 = __webpack_require__(/*! ./TrailingExpression */ "./src/models/TrailingExpression.ts");
var JPLExpression = (function () {
    function JPLExpression(rawString, options) {
        this.rawString = rawString;
        this.guiding = { steps: [] };
        this.allStepsToCondition = [];
        this.status = {};
        this.options = options;
        this.parse();
    }
    JPLExpression.prototype.parse = function () {
        var myRegexp = new RegExp(/([\w\/]+)?(?:\[(\/.+?)?\?(?:{(.*?)\})\])?(?:(?<!^)([\w\/]+)?\:\[(.*)\])?/, 'g');
        try {
            var match = myRegexp.exec(this.rawString);
            this.guiding.steps = match[1].match(/[^/]+/g);
            this.condition = new Condition_1["default"](match[3], match[2]);
            this.trailing = new TrailingExpression_1["default"](match[4], match[5]);
            this.allStepsToCondition = __spreadArray(__spreadArray([], __read(this.guiding.steps), false), __read(this.condition.steps), false);
            if (!(this.guiding.steps.length > 1 && match[5])) {
                this.status.isFilter = true;
            }
            this.status.isValid = true;
            this.returnAt = this.guiding.steps.last();
        }
        catch (err) {
            console.error(err);
            this.status.isValid = false;
        }
    };
    return JPLExpression;
}());
exports["default"] = JPLExpression;


/***/ }),

/***/ "./src/models/TrailingExpression.ts":
/*!******************************************!*\
  !*** ./src/models/TrailingExpression.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var JPLExpression_1 = __webpack_require__(/*! ./JPLExpression */ "./src/models/JPLExpression.ts");
var TrailingExpression = (function () {
    function TrailingExpression(steps, filterString) {
        var _this = this;
        this.steps = [];
        this.outputs = [];
        this.rawString = (steps ? steps : '') + filterString ? filterString : '';
        if (filterString) {
            var splitOutputs = /(?<![\/#\{\[\]\w])([\w#]+)(?=[\|\n])(?![\]])/g;
            var splitComma = /(.*?)(?=,|$|\n)/g;
            var subArray = [];
            subArray = this.execRegex(filterString, splitOutputs);
            if (subArray.length < 1) {
                subArray = this.execRegex(filterString, splitComma);
            }
            (subArray || [filterString]).forEach(function (element) {
                var outExpression = new JPLExpression_1["default"](element);
                if (outExpression.status && outExpression.status.isFilter) {
                    _this.outputs.push(element);
                }
                else
                    _this.outputs.push(outExpression);
            });
        }
    }
    TrailingExpression.prototype.execRegex = function (string, pattern) {
        var m, regex = new RegExp(pattern);
        regex.lastIndex = 0;
        var subArray = [];
        while ((m = regex.exec(string)) !== null) {
            if (m.index === regex.lastIndex)
                regex.lastIndex++;
            if (m[0] && m[0].trim().length)
                subArray.push(m[0].trim());
        }
        return subArray;
    };
    return TrailingExpression;
}());
exports["default"] = TrailingExpression;


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })

/******/ });
//# sourceMappingURL=parser.js.map