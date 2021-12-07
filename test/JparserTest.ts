import JParser, { QUERIES } from '../src/JParser';
import * as JP from "java-parser";
import TestJavaStrings from '../src/TestJavaStrings';
import Utils from '../src/Utils';
import JPLExpression from "../src/models/JPLExpression";
import { DynamicCollector } from '../src/DynamicCollector';

export default class JParserTest {
    constructor() {
        this.outwiredFieldsTest();
    }
    outwiredFieldsTest() {
        const cst = JP.parse(TestJavaStrings.CONTROLLER);

        var queryType = 'outwiredFields';
        let jParser = new JParser();
        const exp = new JPLExpression(QUERIES[queryType], { outputName: queryType }).parse();
        let finalResults = jParser.getResults(cst, exp);
        if (!(finalResults && finalResults.length >= 8)) throw new Error(queryType + ' parsing failed!');
    }

}