import * as JP from "java-parser";
import { DynamicCollector } from './DynamicCollector';
import Utils from './Utils';
import JPLExpression from "./models/JPLExpression";
export var Queries;
(function (Queries) {
    Queries["outwiredFields"] = "/fieldDeclaration[/fieldModifier/annotation?{/At(image=\"@\") && /typeName/Identifier(image=\"Autowired\")}]:[/fieldModifier/annotation/typeName/Identifier:[image#annotation], /unannType/unannClassType/Identifier:[image#className], /variableDeclaratorList/variableDeclaratorId/Identifier:[image#instanceId]]";
    Queries["allImports"] = "/importDeclaration/Import:[image#import]";
    Queries["allMethods"] = "/methodDeclaration/methodHeader/methodDeclarator/Identifier:[image#methodName]";
    Queries["classNames"] = "/classDeclaration/normalClassDeclaration/typeIdentifier/Identifier:[image#javaClass]";
    Queries["serviceWithoutThis"] = "/methodDeclaration@/methodBody/blockStatements/fqnOrRefType[/fqnOrRefTypePartFirst/Identifier?{(image=\"@1\")}]:[@methodDeclaration/methodHeader/methodDeclarator/Identifier:[image#sourceMethod], /fqnOrRefTypePartFirst/Identifier:[image#componentInstance], /fqnOrRefTypePartRest/Identifier:[image#componentMethod]]";
    Queries["serviceWithThis"] = "/methodDeclaration@/methodBody/block/blockStatements/blockStatement/expression/expression/primary[?{/primarySuffix~0/Identifier(image=\"@1\")}]:[@methodDeclaration/methodHeader/methodDeclarator/Identifier:[image#sourceMethod], /primarySuffix~0/Identifier:[image#componentInstance], /primarySuffix~1/Identifier:[image#componentMethod]]";
    Queries["methodRequestMappings"] = "/methodDeclaration@/methodModifier/annotation[?{/At(image=\"@\") && /typeName/Identifier(image=\"RequestMapping\")}]:[/@methodDeclaration/methodHeader/methodDeclarator/Identifier:[image#methodName], /elementValuePairList/elementValuePair/elementValue/expression/primaryPrefix/literal/StringLiteral:[image#requestPath], /elementValuePairList/elementValuePair[?{/Identifier(image=\"method\")}]/elementValue~0/fqnOrRefTypePartRest/fqnOrRefTypePartCommon/Identifier:[image#method1], /elementValuePairList/elementValuePair[?{/Identifier(image=\"method\")}]/elementValue~1/fqnOrRefTypePartRest/fqnOrRefTypePartCommon/Identifier:[image#method2]]";
})(Queries || (Queries = {}));
;
export class ComponentParser {
    constructor(name, contentString, options) {
        this.name = name;
        this.options = options;
        this.contentString = contentString;
    }
    parse() {
        const cstNode = JP.parse(this.contentString);
        let componentCalls = {}, requestMappings = [], errors = [];
        try {
            componentCalls = this.getAllServiceCalls(cstNode);
        }
        catch (error) {
            errors.push(this.name + ' has errors : getAllServiceCalls: ', error['message']);
        }
        try {
            if (this.options && this.options.isController)
                requestMappings = this.getMethodRequestMappings(cstNode);
        }
        catch (error) {
            errors.push(this.name + ' has errors : requestMappings: ', error['message']);
        }
        if (this.options && this.options.writeToFile)
            Utils.printToFile(cstNode, this.name + '_cst');
        return { componentCalls, requestMappings, errors };
    }
    getMethodRequestMappings(cstNode) {
        let requestMappings = [];
        const requestsJPL = new JPLExpression(Queries['methodRequestMappings'], { outputName: 'methodRequestMappings' }).parse();
        if (this.options && this.options.writeToFile)
            Utils.printToFile(requestsJPL, this.name + '_query');
        requestMappings = this.getResults(cstNode, requestsJPL);
        requestMappings.map(element => {
            let methods = [];
            if (element.method1 === element.method2) {
                methods.push(element.method1);
            }
            else {
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
        const autoWiredQuery = new JPLExpression(Queries['outwiredFields'], { outputName: 'outwiredFields' }).parse();
        let allAutowiredFields = this.getResults(cstNode, autoWiredQuery);
        if (!allAutowiredFields) {
            throw new Error('No autowired fields found');
        }
        allAutowiredFields.forEach(autoWiredField => {
            const instanceName = autoWiredField.instanceId;
            const className = autoWiredField.className;
            var queryTypeArr = ['serviceWithThis', 'serviceWithoutThis'];
            let queryResults = [];
            queryTypeArr.forEach((queryType) => {
                const query = this.getQuery(queryType, instanceName);
                if (this.options && this.options.writeToFile)
                    Utils.printToFile(query, 'query');
                let finalResults = this.getResults(cstNode, query);
                finalResults = [...new Map(finalResults.map(v => {
                        return [JSON.stringify([v.sourceMethod, v.componentInstance, v.componentMethod]), v];
                    })).values()];
                queryResults = [...queryResults, ...finalResults];
            });
            if (queryResults && queryResults.length > 0)
                combinedResults[className] = queryResults;
        });
        return combinedResults;
    }
    getResults(cst, query) {
        let finalResults = [];
        var allSteps = [...query.guiding.steps, ...query.condition.steps];
        let collector = new DynamicCollector(allSteps, query, finalResults);
        collector.visit(cst);
        return finalResults['final'];
    }
    getQuery(key, arg1) {
        let query = Queries[key].replace(/@1/g, arg1);
        return new JPLExpression(query, { outputName: key }).parse();
    }
}
//# sourceMappingURL=ComponentParser.js.map