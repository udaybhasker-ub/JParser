import { ComponentParser, Queries } from '../src/ComponentParser';
import * as JP from "java-parser";
import TestJavaStrings from '../devTesting/TestJavaStrings';
import Utils from '../src/Utils';
import JPLExpression from "../src/models/JPLExpression";
import { DynamicCollector } from '../src/DynamicCollector';

export default class JavaFileParserTest {
    constructor() {
        this.outwiredFieldsTest();
    }
    outwiredFieldsTest() {
        const cst = JP.parse(TestJavaStrings.CONTROLLER);

        var queryType = 'outwiredFields';
        let javaFileParser = new ComponentParser('outwiredFields', '');
        const exp = new JPLExpression(Queries[queryType], { outputName: queryType }).parse();
        let finalResults = javaFileParser.getResults(cst, exp);
        if (!(finalResults && finalResults.length >= 8)) throw new Error(queryType + ' parsing failed!');
    }

}