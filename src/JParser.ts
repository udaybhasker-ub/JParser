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
};
//
export default class JParser {
    constructor() {
        const cstNode = JP.parse(TestJavaStrings.LOGIN);
        let combinedResults = this.getAllServiceCalls(cstNode);
        Utils.printToFile({ login: combinedResults }, 'combined');
        console.log('Done!');
    }
    getAllServiceCalls(cstNode) {
        let results = {};
        let combinedResults = [];

        const autoWiredQuery = new JPLExpression(QUERIES['outwiredFields'], { outputName: 'outwiredFields' });
        let allAutowiredFields = this.getResults(cstNode, autoWiredQuery);
        allAutowiredFields.forEach(autoWiredField => {
            autoWiredField = autoWiredField.instanceId;
            var queryTypeArr = ['serviceWithoutThisSub', 'alluserServiceStepsSub'];
            let serviceCalls = [];
            queryTypeArr.forEach((queryType) => {
                const query = this.getQuery(queryType, autoWiredField)
                //Utils.printToFile(query, 'query');
                let finalResults = this.getResults(cstNode, query);
                if (!serviceCalls[queryType]) serviceCalls[queryType] = [];
                finalResults = [...new Map(finalResults.map(v => {
                    return [JSON.stringify([v.service, v.serviceMethod]), v]
                })).values()]

                serviceCalls[queryType] = finalResults;
                combinedResults = [...combinedResults, ...finalResults];
            });
            if (!results[autoWiredField]) results[autoWiredField] = [];
            results[autoWiredField] = { ...serviceCalls };
        });
        //Utils.printToFile(results);
        return combinedResults;
    }
    parse() {
        const cstNode = JP.parse(TestJavaStrings.CONTROLLER);
        var queryTypeArr = ['serviceWithoutThis', 'alluserServiceSteps'];
        let results = {};
        queryTypeArr.forEach((queryType) => {
            const query = new JPLExpression(QUERIES[queryType], { outputName: queryType });
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
        return new JPLExpression(query, { outputName: key });
    }
}
