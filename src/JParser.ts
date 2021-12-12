import * as JP from "java-parser";
import TestJavaStrings from './TestJavaStrings';
import { DynamicCollector } from './DynamicCollector';
import Utils from './Utils';
import JPLExpression from "./models/JPLExpression";

export enum QUERIES {
    outwiredFields = `/fieldDeclaration[/fieldModifier/annotation?{/At(image="@") && /typeName/Identifier(image="Autowired")}]:[/fieldModifier/annotation/typeName/Identifier:[image#annotation], /unannType/unannClassType/Identifier:[image#className], /variableDeclaratorList/variableDeclaratorId/Identifier:[image#instanceId]]`,
    allImports = `/importDeclaration/Import:[image#import]`,
    allMethods = `/methodDeclaration/methodHeader/methodDeclarator/Identifier:[image#methodName]`,
    classNames = `/classDeclaration/normalClassDeclaration/typeIdentifier/Identifier:[image#javaClass]`,
    test = `/methodBody/block/blockStatements/blockStatement/localVariableDeclarationStatement/localVariableDeclaration/variableDeclaratorList/variableDeclarator/variableInitializer/expression/ternaryExpression/binaryExpression/unaryExpression/primary/primaryPrefix/fqnOrRefType/fqnOrRefTypePartFirst/fqnOrRefTypePartCommon/Identifier[?{(image="accountService")}]:[image#serviceCall]`,
    ///methodBody/block/blockStatements/blockStatement/statement/statementWithoutTrailingSubstatement/tryStatement/block/blockStatements/blockStatement/statement/ifStatement/statement/statementWithoutTrailingSubstatement/block/blockStatements/blockStatement/statement/statementWithoutTrailingSubstatement/expressionStatement/statementExpression/expression/ternaryExpression/binaryExpression/unaryExpression/primary/primaryPrefix/fqnOrRefType/fqnOrRefTypePartFirst/fqnOrRefTypePartCommon/Identifier.[0].image
    serviceWithoutThis = `/methodBody/blockStatements/fqnOrRefType[/fqnOrRefTypePartFirst/Identifier?{(image="userService")}]:[/fqnOrRefTypePartFirst/Identifier:[image#service], /fqnOrRefTypePartRest/Identifier:[image#serviceMethod]]`,
    serviceWithThis = `/methodBody/blockStatements/statementWithoutTrailingSubstatement/unaryExpression/primarySuffix/Identifier(image="userService")]/fqnOrRefType:[/fqnOrRefTypePartFirst/Identifier:[image#service], /fqnOrRefTypePartRest/Identifier:[image#serviceMethod]]`,
    test21 = `/methodBody/blockStatements/blockStatement/fqnOrRefType[?{/fqnOrRefTypePartFirst/Identifier(image="userService")}]`,
    test3 = `methodBody/blockStatements/blockStatement/statement/statementWithoutTrailingSubstatement/expressionStatement/statementExpression/expression/ternaryExpression/binaryExpression/unaryExpression/primary/primarySuffix/Identifier:[image#serviceCall]`,
    //test4 = `/methodBody/blockStatements/fqnOrRefType[?{/fqnOrRefTypePartFirst/Identifier(image="userService")}]`
    test4 = `/methodBody/blockStatements/blockStatement/fqnOrRefType[?{/fqnOrRefTypePartFirst/Identifier(image="userService")}]`,
    test5 = `/methodBody/blockStatements/blockStatement[?{/fqnOrRefType/fqnOrRefTypePartFirst/Identifier(image="userService")}]/fqnOrRefType`,
    test6 = `/methodBody/blockStatements[?{/fqnOrRefType/fqnOrRefTypePartFirst/Identifier(image="userService")}]:[/fqnOrRefType/fqnOrRefTypePartFirst/Identifier:[image#service]]`,
    test7 = `statement/statementWithoutTrailingSubstatement/expressionStatement/statementExpression/expression/ternaryExpression/binaryExpression/unaryExpression/primary/primaryPrefix/fqnOrRefType[/fqnOrRefTypePartFirst?{/fqnOrRefTypePartCommon(image="userService")}]`,
    test8 = `statement/ifStatement/statement/statementWithoutTrailingSubstatement/block/blockStatements/blockStatement/localVariableDeclarationStatement/localVariableDeclaration/variableDeclaratorList/variableDeclarator/variableInitializer/expression/ternaryExpression/binaryExpression/unaryExpression/primary/primaryPrefix/fqnOrRefType/fqnOrRefTypePartFirst/fqnOrRefTypePartCommon[?{/Identifier(image="userService")}]`,
    test9 = `/methodBody/blockStatements/blockStatement[?{/fqnOrRefType/fqnOrRefTypePartFirst/Identifier(image="userService")]/unaryExpression/primary/primaryPrefix/fqnOrRefType:[/fqnOrRefTypePartFirst/fqnOrRefTypePartCommon/Identifier:[image#service], /fqnOrRefTypePartRest/fqnOrRefTypePartCommon/Identifier:[image#serviceMethod]]`,
    test10 = `/methodBody/block/blockStatements/blockStatement/statement/block/blockStatements/blockStatement/statement/statementWithoutTrailingSubstatement/expressionStatement/statementExpression/expression/ternaryExpression/binaryExpression/unaryExpression/primary/primarySuffix[?{/Identifier(image="userService")}]`,
    test11 = `/methodBody/blockStatements/fqnOrRefType[/fqnOrRefTypePartFirst/Identifier?{(image="userService")}]`,
    alluserServiceSteps = `/methodBody/block/blockStatements/blockStatement/expressionStatement/statementExpression/expression/primary[?{/primarySuffix~0/Identifier(image="userService")}]:[/primarySuffix~0/Identifier:[image#service], /primarySuffix~1/Identifier:[image#serviceCall]]`,
    serviceWithoutThisSub = `/methodBody/blockStatements/fqnOrRefType[/fqnOrRefTypePartFirst/Identifier?{(image="@1")}]:[/fqnOrRefTypePartFirst/Identifier:[image#service], /fqnOrRefTypePartRest/Identifier:[image#serviceMethod]]`,
    alluserServiceStepsSub = `/methodBody/block/blockStatements/blockStatement/expressionStatement/statementExpression/expression/primary[?{/primarySuffix~0/Identifier(image="@1")}]:[/primarySuffix~0/Identifier:[image#service], /primarySuffix~1/Identifier:[image#serviceMethod]]`,
    serviceWithoutThisSubTest = `/methodDeclaration@/methodBody/blockStatements/fqnOrRefType[/fqnOrRefTypePartFirst/Identifier?{(image="@1")}]:[@methodDeclaration/methodHeader/methodDeclarator/Identifier:[image#sourceMethod], /fqnOrRefTypePartFirst/Identifier:[image#componentInstance], /fqnOrRefTypePartRest/Identifier:[image#componentMethod]]`,
    alluserServiceStepsSubTest = `/methodDeclaration@/methodBody/block/blockStatements/blockStatement/expression/expression/primary[?{/primarySuffix~0/Identifier(image="@1")}]:[@methodDeclaration/methodHeader/methodDeclarator/Identifier:[image#sourceMethod], /primarySuffix~0/Identifier:[image#componentInstance], /primarySuffix~1/Identifier:[image#componentMethod]]`,
    //methodRequestMappings = `/methodDeclaration@/methodModifier/annotation[?{/At(image="@") && /typeName/Identifier(image="RequestMapping")}]:[/@methodDeclaration/methodHeader/methodDeclarator/Identifier:[image#methodName], /elementValuePairList/elementValuePair[?{/Identifier(image="method")}]/elementValue~0/fqnOrRefTypePartRest/fqnOrRefTypePartCommon/Identifier:[image#method1], /elementValuePairList/elementValuePair[?{/Identifier(image="method")}]/elementValue~1/fqnOrRefTypePartRest/fqnOrRefTypePartCommon/Identifier:[image#method2]]`,
    methodRequestMappings = `/methodDeclaration@/methodModifier/annotation[?{/At(image="@") && /typeName/Identifier(image="RequestMapping")}]:[/@methodDeclaration/methodHeader/methodDeclarator/Identifier:[image#methodName], /elementValuePairList/elementValuePair/elementValue/expression/primaryPrefix/literal/StringLiteral:[image#requestPath], /elementValuePairList/elementValuePair[?{/Identifier(image="method")}]/elementValue~0/fqnOrRefTypePartRest/fqnOrRefTypePartCommon/Identifier:[image#method1], /elementValuePairList/elementValuePair[?{/Identifier(image="method")}]/elementValue~1/fqnOrRefTypePartRest/fqnOrRefTypePartCommon/Identifier:[image#method2]]`,
};
//
export default class JParser {
    name: string;
    contentString: string;
    test = false;
    isController = false;

    constructor(name, contentString, isController, test?) {
        this.name = name;
        this.test = test || false;
        this.isController = isController;
        this.contentString = contentString;
    }
    parse() {
        const cstNode = JP.parse(this.contentString);
        let componentCalls = {}, requestMappings = [];
        try {
            componentCalls = this.getAllServiceCalls(cstNode);
        } catch (error) {
            console.error(this.name + ' has errors : getAllServiceCalls: ', error.message);
        }

        try {
            if (this.isController) requestMappings = this.getMethodRequestMappings(cstNode);
        } catch (error) {
            console.error(this.name + ' has errors : requestMappings: ', error.message);
        }
        //if (this.test) Utils.printToFile(cstNode, this.name);
        if (this.test) Utils.printToFile(cstNode, this.name + '_cst');
        return { componentCalls, requestMappings };
    }
    getMethodRequestMappings(cstNode) {
        let requestMappings = [];
        const requestsJPL = new JPLExpression(QUERIES['methodRequestMappings'], { outputName: 'methodRequestMappings' }).parse();
        if (this.test) Utils.printToFile(requestsJPL, this.name + '_query');
        requestMappings = this.getResults(cstNode, requestsJPL);
        requestMappings.map(element => {
            let methods = [];
            if (element.method1 === element.method2) {
                methods.push(element.method1);
            } else {
                methods.push(element.method1);
                methods.push(element.method2);
            }
            delete element.method1;
            delete element.method2;
            element['methods'] = methods;
        });
        return requestMappings;
    }
    getAllServiceCalls(cstNode) {
        let combinedResults = {};

        const autoWiredQuery = new JPLExpression(QUERIES['outwiredFields'], { outputName: 'outwiredFields' }).parse();
        let allAutowiredFields = this.getResults(cstNode, autoWiredQuery);
        if (!allAutowiredFields) {
            throw new Error('No autowired fields found');
        }
        allAutowiredFields.forEach(autoWiredField => {
            const instanceName = autoWiredField.instanceId;
            const className = autoWiredField.className;
            var queryTypeArr = ['serviceWithoutThisSubTest', 'alluserServiceStepsSubTest'];
            let queryResults = [];
            queryTypeArr.forEach((queryType) => {
                const query = this.getQuery(queryType, instanceName)
                if (this.test) Utils.printToFile(query, 'query');
                let finalResults = this.getResults(cstNode, query);
                finalResults = [...new Map(finalResults.map(v => {
                    return [JSON.stringify([v.sourceMethod, v.componentInstance, v.componentMethod]), v]
                })).values()];

                //queryResults.push({ queryName: queryType, results: finalResults });
                queryResults = [...queryResults, ...finalResults];
            });
            if (queryResults && queryResults.length > 0) combinedResults[className] = queryResults;
        });
        return combinedResults;
    }
    parseTest(serviceName) {
        const cstNode = JP.parse(TestJavaStrings.LOGIN);
        var queryTypeArr = ['alluserServiceStepsSubTest'];
        let results = {};
        queryTypeArr.forEach((queryType) => {
            const query = this.getQuery(queryType, serviceName);
            Utils.printToFile(query, 'query');
            let finalResults = this.getResults(cstNode, query);
            if (!results[queryType]) results[queryType] = [];
            results[queryType] = { ...finalResults };
        });
        Utils.printToFile(results);
    }
    getResults(cst, query) {
        let finalResults = [];
        var allSteps = [...query.guiding.steps, ...query.condition.steps];
        let collector = new DynamicCollector(allSteps, query, finalResults);
        collector.visit(cst);
        return finalResults['final'];
    }
    private getQuery(key, arg1) {
        let query = QUERIES[key].replace(/@1/g, arg1);
        return new JPLExpression(query, { outputName: key }).parse();
    }
}
