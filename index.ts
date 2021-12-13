import CreateSequenceDiagram from "./src/CreateSequenceDiagram";
import JParser from "./src/JParser";

//let reader = new ProjectReader('/Users/udusharl/myprojects/reader-java-test');
//let javaParser = new JParser('/Users/udusharl/myprojects/EBC-patron-dcp2-test', { testFileName: "SearchController", showLogs: true });
//javaParser.extract();
/*javaParser.getResultsFromFile().then((results) => {
    console.log('results from file');
    let seq = new CreateSequenceDiagram(results);
    seq.generateTxtFile();
});*/
export { default as JParser } from './src/JParser';

