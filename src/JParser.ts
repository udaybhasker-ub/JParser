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
        const query = `/fieldDeclaration[/fieldModifier/annotation?{/At(image="@") && /typeName/Identifier(image="Autowired")}]:[/fieldModifier/annotation/typeName/Identifier:[image#annotation], /unannType/unannClassType/Identifier:[image#className], /variableDeclaratorList/variableDeclaratorId/Identifier:[image#instanceId]]`;
        const result = new JPLExpression(query);
        //Utils._console(result);
        Utils.printToFile(result, 'query');
        var allSteps = [...result.guiding.steps, ...result.condition.steps, ...result.trailing.steps];
        //console.log(allSteps);
        let finalResults = [];
        let collector = new DynamicCollector(allSteps, result, finalResults);
        collector.visit(cst);
        //Utils.printToFile(collector.results['annotation'], 'annotation');
        Utils.printToFile(finalResults['final'], 'final');
    }
}
