import * as fs from 'fs';
import JParser from './JParser';
import Utils from './Utils';
let path = require('path');

export default class ProjectReader {
    constructor() {
        let startTime = new Date();
        const projectPath = '/Users/udusharl/myprojects/reader-java-test';
        let tokens = ['Controller', 'Service', 'DAO'];
        let promises = tokens.map(token => { return this.getComponentResults(projectPath, token) });
        Promise.all(promises).then(results => {
            Utils.printToFile(results, 'combined');
            console.log('All Done!');
            var seconds = Math.floor((new Date().valueOf() - startTime.valueOf()) / 1000);
            var minutes = Math.floor(seconds / 60);
            let remSeconds = seconds % 60;
            console.log(`Total time taken: ${minutes}min(s) ${remSeconds}sec`);
        });
    }

    getComponentResults(projectPath, token) {
        let controllerFiles = this.traverseDir(projectPath, token);
        let startTime = new Date();
        console.log("Total " + token + " files found: " + Object.entries(controllerFiles).length);
        let promises = Object.entries(controllerFiles).map((entry, index) => {
            return new Promise((resolve, reject) => {
                //if (index != 1) { resolve({fileName}); return; }
                const fileName = entry[0], filePath = entry[1];
                this.readFile(filePath, (content) => {
                    try {
                        let results = new JParser(fileName, content).parse();
                        console.log(index + '. ' + fileName + ' is done.');
                        resolve({ fileName, results })
                    } catch (error) {
                        console.error(index + '. ' + fileName + ' has errors: ', error.message);
                        //console.error(error);
                        resolve({ fileName });
                    }
                }, (error) => {
                    reject(error);
                });
            });
        });
        return Promise.all(promises);
    }

    traverseDir(dir, type?) {
        let filePaths = {};
        const regex = new RegExp(`(.*)${type}\.java`, 'i');
        fs.readdirSync(dir).forEach(file => {
            let fileName = file;
            let fullPath = path.join(dir, file);
            if (fs.lstatSync(fullPath).isDirectory()) {
                //console.log(fullPath);
                let subFilePaths = this.traverseDir(fullPath, type)
                filePaths = { ...filePaths, ...subFilePaths };
            } else {
                let match = fullPath.match(regex);
                if (match) {
                    //console.log(fileName);
                    filePaths[fileName.replace('.java', '')] = fullPath;
                }
            }
        });
        return filePaths;
    }

    readFile(filePath, onFileContent, onError) {
        fs.readFile(filePath, 'utf-8', function (err, content) {
            if (err) {
                onError(err);
                return;
            }
            onFileContent(content);
        });
    }

}