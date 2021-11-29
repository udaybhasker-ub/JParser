import * as JP from "java-parser";
import TestJavaStrings from './TestJavaStrings';
import { Collectors, CustomCollector } from './CustomCollectors'
import CollectorFactory from './CollectorFactory';
import type { CstNode, CstChildrenDictionary, CstNodeLocation } from 'chevrotain';
import JPL from './JPL';
import { DynamicCollector } from './DynamicCollector';
import Utils from './Utils';
import JPLExpression from "./models/JPLExpression";

export default class JParser {
    constructor() {
    }
    parseTest() {
        const cst = JP.parse(TestJavaStrings.CONTROLLER);
        enum QUERIES {
            outwiredFields = `/fieldDeclaration[/fieldModifier/annotation?{/At(image="@") && /typeName/Identifier(image="Autowired")}]:[/fieldModifier/annotation/typeName/Identifier:[image#annotation], /unannType/unannClassType/Identifier:[image#className], /variableDeclaratorList/variableDeclaratorId/Identifier:[image#instanceId]]`,
            allImports = `/importDeclaration/Import:[image#import]`,
            allMethods = `/methodDeclaration/methodHeader/methodDeclarator/Identifier:[image#methodName]`,
            classNames = `/classDeclaration/normalClassDeclaration/typeIdentifier/Identifier:[image#javaClass]`,
            test = `/methodBody/fqnOrRefType/fqnOrRefTypePartFirst/fqnOrRefTypePartCommon/Identifier:[image#serviceName]`,
            //test = `/methodBody/block/blockStatements`,
        };
        //methodBody/fqnOrRefType/fqnOrRefTypePartFirst/fqnOrRefTypePartCommon/Identifier:[image#serviceName]
        //methodBody/fqnOrRefType/fqnOrRefTypePartRest/fqnOrRefTypePartCommon/Identifier:[image#serviceMethod]
        //methodBody/fqnOrRefType[]
        //let queryTypeArr = ['outwiredFields', 'allMethods'];
        let queryTypeArr = ['test'];
        let results = {};
        queryTypeArr.forEach((queryType) => {
            const exp = new JPLExpression(QUERIES[queryType], { outputName: queryType });
            let finalResults = [];
            Utils.printToFile(exp, 'query');
            var allSteps = [...exp.guiding.steps, ...exp.condition.steps, ...exp.trailing.steps];
            let collector = new DynamicCollector(allSteps, exp, finalResults);
            collector.visit(cst);
            if (!results[queryType]) results[queryType] = [];
            results[queryType] = finalResults['final'];
        });
        Utils.printToFile(results);

    }
}
