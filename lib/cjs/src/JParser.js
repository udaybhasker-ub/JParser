"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const ComponentParser_1 = require("./ComponentParser");
const Utils_1 = __importDefault(require("./Utils"));
let path = require('path');
class JParser {
    constructor(projectPath, options) {
        this.projectPath = projectPath;
        this.testFileName = options && options.testFileName;
        this.showLogs = options && options.showLogs;
        this.writeToFile = options && options.writeToFile;
    }
    extract() {
        let startTime = new Date();
        let tokens = ['Controller', 'Service', 'DAO'];
        let promises = tokens.map(token => {
            return this.getComponentResults(this.projectPath, token);
        });
        return Promise.all(promises).then(results => {
            let finalResults = {};
            tokens.forEach((token, index) => {
                finalResults[token] = results[index];
            });
            if (this.writeToFile)
                Utils_1.default.printToFile(finalResults, 'combined');
            if (this.showLogs)
                console.log('All Done!');
            var seconds = Math.floor((new Date().valueOf() - startTime.valueOf()) / 1000);
            var minutes = Math.floor(seconds / 60);
            let remSeconds = seconds % 60;
            if (this.showLogs)
                console.log(`Total time taken: ${minutes}min(s) ${remSeconds}sec`);
            return finalResults;
        });
    }
    getComponentResults(projectPath, token) {
        let controllerFiles = this.traverseDir(projectPath, token);
        if (this.showLogs)
            console.log("Total " + token + " files found: " + Object.entries(controllerFiles).length);
        let promises = Object.entries(controllerFiles).map((entry, index) => {
            return new Promise((resolve, reject) => {
                const fileName = entry[0];
                let { type, path } = entry[1];
                this.readFile(path, (content) => {
                    try {
                        let options = {
                            test: this.testFileName || false,
                            isController: token.toLowerCase().indexOf('controller') > -1,
                            showLogs: this.showLogs,
                            writeToFile: this.writeToFile
                        };
                        let results = new ComponentParser_1.ComponentParser(fileName, content, options).parse();
                        if (this.showLogs)
                            console.log(index + '. ' + fileName + ' is done.');
                        resolve(Object.assign({ fileName, type }, results));
                    }
                    catch (error) {
                        if (this.showLogs)
                            console.error(index + '. ' + fileName + ' has errors: ', error['message']);
                        resolve({ fileName, type, errors: [error['message']] });
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
                let subFilePaths = this.traverseDir(fullPath, type);
                filePaths = Object.assign(Object.assign({}, filePaths), subFilePaths);
            }
            else {
                let match = fullPath.match(regex);
                if (match && (!this.testFileName || (this.testFileName && fileName.indexOf(this.testFileName) > -1))) {
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
exports.default = JParser;
//# sourceMappingURL=JParser.js.map