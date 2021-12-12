import * as fs from 'fs';
import JParser from './JParser';
import Utils from './Utils';
let path = require('path');

export default class ProjectReader {
    projectPath;
    results;
    testFile;

    constructor(projectPath) {
        this.projectPath = projectPath;
    }
    extract() {
        let startTime = new Date();
        let tokens = ['Controller', 'Service', 'DAO'];
        //this.testFile = "BookshelfController";
        let promises = tokens.map(token => {
            return this.getComponentResults(this.projectPath, token)
        });
        return Promise.all(promises).then(results => {
            let finalResults = {};
            tokens.forEach((token, index) => {
                finalResults[token] = results[index];
            });
            Utils.printToFile(finalResults, 'combined');
            console.log('All Done!');
            var seconds = Math.floor((new Date().valueOf() - startTime.valueOf()) / 1000);
            var minutes = Math.floor(seconds / 60);
            let remSeconds = seconds % 60;
            console.log(`Total time taken: ${minutes}min(s) ${remSeconds}sec`);
            return finalResults;
        });
    }

    getComponentResults(projectPath, token) {
        let controllerFiles = this.traverseDir(projectPath, token);
        console.log("Total " + token + " files found: " + Object.entries(controllerFiles).length);
        let promises = Object.entries(controllerFiles).map((entry, index) => {
            return new Promise((resolve, reject) => {
                const fileName = entry[0];
                let { type, path }: any = entry[1];

                this.readFile(path, (content) => {
                    try {
                        let results = new JParser(fileName, content, token.toLowerCase().indexOf('controller') > -1, this.testFile || false).parse();
                        console.log(index + '. ' + fileName + ' is done.');
                        resolve({ fileName, type, ...results })
                        //resolve({ ...{ fileName, type }, ...results })
                    } catch (error) {
                        console.error(index + '. ' + fileName + ' has errors: ', error.message);
                        resolve({ fileName, type });
                    }
                }, (error) => {
                    reject(error);
                });
            });
        });
        return Promise.all(promises);
    }

    traverseDir(dir, type) {
        let filePaths = {};
        const regex = new RegExp(`(.*)${type}\.java`, 'i');
        fs.readdirSync(dir).forEach(file => {
            let fileName = file;
            let fullPath = path.join(dir, file);
            if (fs.lstatSync(fullPath).isDirectory()) {
                let subFilePaths = this.traverseDir(fullPath, type)
                filePaths = { ...filePaths, ...subFilePaths };
            } else {
                let match = fullPath.match(regex);
                if (match && (!this.testFile || (this.testFile && fileName.indexOf(this.testFile) > -1))) {
                    filePaths[fileName.replace('.java', '')] = { type, path: fullPath };
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

    getResultsFromFile() {
        return new Promise((resolve, reject) => {
            this.readFile('./devTesting/result_combined.json', (content) => {
                content = JSON.parse(content);
                resolve(content);
            }, (error) => {
                //reject(error);
                console.log(error);
            });
        });
    }
}