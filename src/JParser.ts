import * as JP from "java-parser";
import TestJavaStrings from './TestJavaStrings';
import { Collectors, CustomCollector } from './CustomCollectors'
import CollectorFactory from './CollectorFactory';
import type { CstNode, CstChildrenDictionary, CstNodeLocation } from 'chevrotain';
import JPL from './JPL';
import { DynamicCollector } from './DynamicCollector';
import Utils from './Utils';

export default class JParser {
    constructor() {
    }
    parseTest() {
        const cst = JP.parse(TestJavaStrings.CONTROLLER);

        /*CollectorFactory.getCollector(Collectors.ALL_FIELD_NAMES).visit(cst);

        let collector = CollectorFactory.getCollector(Collectors.FIELD_DECLARATION).visit(cst);
        this.print(collector, true);
        const annotColl = CollectorFactory.getCollector(Collectors.ANNOTATION, "Autowired");
        const varDecColl = CollectorFactory.getCollector(Collectors.VAR_DEC_ID);
        const unannClassTypeColl = CollectorFactory.getCollector(Collectors.UNANN_CLASS_TYPE);
        const fieldDecResults = collector.customResult[Collectors.FIELD_DECLARATION];
        fieldDecResults.forEach((field, index) => {
            annotColl.visit(field.fieldModifier, index);
        });
        annotColl.$getResults().forEach(annot => {
            collector.$getResults()[annot.fieldIndex];
            //varDecColl.visit();

        });

        this.print(annotColl, true);

        //this.getCustomResults(new AnnotationCollector(), cst);*/
        //const query = `/fieldDeclaration[/fieldModifier/annotation?{/At(image="@") && /typeName/Identifier(image="Autowired")}]:[/unannType/unannClassType/Identifier:[image, tokenType], /variableDeclaratorList/variableDeclaratorId/Identifier:[image]]`;
        const query = `/fieldDeclaration[/fieldModifier/annotation?{/At(image="@") && /typeName/Identifier(image="Autowired")}]:[/unannType/unannClassType/Identifier:[image, tokenType], /variableDeclaratorList/variableDeclaratorId/Identifier:[image]]`;
        let result = JPL.parseQuery(query);
        Utils._console(result);
        Utils.printToFile(result);
        var allSteps = [...result.guiding.steps, ...result.condition.steps, ...result.trailing.steps];
        //console.log(allSteps);
        let collector = new DynamicCollector(allSteps, result);
        collector.visit(cst);
        Utils.printToFile(collector.results['final']);
    }
}
