import * as fs from 'fs';
import { ComponentParser } from './ComponentParser';
import Utils from './Utils';
let path = require('path');

export default class JParser {
    projectPath;
    results;
    testFileName;
    showLogs;

    constructor(projectPath, options?) {
        this.projectPath = projectPath;
        this.testFileName = options && options.testFileName;
        this.showLogs = options && options.showLogs;
    }
    extract() {
        let startTime = new Date();
        let tokens = ['Controller', 'Service', 'DAO'];
        let promises = tokens.map(token => {
            return this.getComponentResults(this.projectPath, token)
        });
        return Promise.all(promises).then(results => {
            let finalResults = {};
            tokens.forEach((token, index) => {
                finalResults[token] = results[index];
            });
            if (this.testFileName) Utils.printToFile(finalResults, 'combined');
            if (this.showLogs) console.log('All Done!');
            var seconds = Math.floor((new Date().valueOf() - startTime.valueOf()) / 1000);
            var minutes = Math.floor(seconds / 60);
            let remSeconds = seconds % 60;
            if (this.showLogs) console.log(`Total time taken: ${minutes}min(s) ${remSeconds}sec`);
            return finalResults;
        });
    }

    private getComponentResults(projectPath, token) {
        let controllerFiles = this.traverseDir(projectPath, token);
        if (this.showLogs) console.log("Total " + token + " files found: " + Object.entries(controllerFiles).length);
        let promises = Object.entries(controllerFiles).map((entry, index) => {
            return new Promise((resolve, reject) => {
                const fileName = entry[0];
                let { type, path }: any = entry[1];

                this.readFile(path, (content) => {
                    try {
                        let options = {
                            test: this.testFileName || false,
                            isController: token.toLowerCase().indexOf('controller') > -1,
                        }
                        let results = new ComponentParser(fileName, content, options).parse();
                        if (this.showLogs) console.log(index + '. ' + fileName + ' is done.');
                        resolve({ fileName, type, ...results })
                        //resolve({ ...{ fileName, type }, ...results })
                    } catch (error) {
                        if (this.showLogs) console.error(index + '. ' + fileName + ' has errors: ', error['message']);
                        resolve({ fileName, type, errors: [error['message']] });
                    }
                }, (error) => {
                    reject(error);
                });
            });
        });
        return Promise.all(promises);
    }

    private traverseDir(dir, type) {
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
                if (match && (!this.testFileName || (this.testFileName && fileName.indexOf(this.testFileName) > -1))) {
                    filePaths[fileName.replace('.java', '')] = { type, path: fullPath };
                }
            }
        });
        return filePaths;
    }

    private readFile(filePath, onFileContent, onError) {
        fs.readFile(filePath, 'utf-8', function (err, content) {
            if (err) {
                onError(err);
                return;
            }
            onFileContent(content);
        });
    }

    getResultsFromFile(cacheFilePath) {
        if (!cacheFilePath) {
            throw new Error('No cache file found!');
        }
        return new Promise((resolve, reject) => {
            this.readFile(cacheFilePath, (content) => {
                content = JSON.parse(content);
                resolve(content);
            }, (error) => {
                console.error('Error occured reading cache file: ' + error['message']);
            });
        });
    }
}