import JParser from "./src/JParser";
import ProjectReader from "./src/ProjectReader";

//let reader = new ProjectReader('/Users/udusharl/myprojects/reader-java-test');
let reader = new ProjectReader('/Users/udusharl/myprojects/EBC-patron-dcp2-test');
//reader.extract();
reader.getResultsFromFile().then((results) => {
    console.log('results from file');
});


