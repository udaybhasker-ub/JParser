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
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class Mapping {
    constructor(source, destination, comment, sourceMethod, destinationMethod) {
        this.source = source;
        this.destination = destination;
        this.comment = comment;
        this.sourceMethod = sourceMethod;
        this.destinationMethod = destinationMethod;
    }
    format() {
        return this.source + ' -> ' + this.destination + ' : ' + this.comment + '\n';
    }
}
class CreateSequenceDiagram {
    constructor(data) {
        this.data = data;
    }
    generateTxtFile() {
        let controllers = this.data.Controller;
        let userCntrlDestMethodGrp = {};
        let controllerServiceMap = [];
        let allLanes = ['User'];
        let controllerFilter = 'NewAccountController';
        controllers.forEach(controller => {
            if (controller.fileName != controllerFilter) {
                return;
            }
            allLanes.push(controllerFilter);
            controller.requestMappings.forEach(reqMapping => {
                let mapping = new Mapping('User', controller.fileName, reqMapping.methods.join(',') + '-' + reqMapping.requestPath, null, reqMapping.methodName);
                if (!userCntrlDestMethodGrp[reqMapping.methodName])
                    userCntrlDestMethodGrp[reqMapping.methodName] = [];
                userCntrlDestMethodGrp[reqMapping.methodName].push(mapping);
            });
            Object.entries(controller.componentCalls).forEach(([serviceName, servicesArr]) => {
                servicesArr.forEach(service => {
                    let mapping = new Mapping(controller.fileName, serviceName, service.componentMethod + '()', service.sourceMethod, service.componentMethod);
                    if (!userCntrlDestMethodGrp[service.sourceMethod])
                        userCntrlDestMethodGrp[service.sourceMethod] = [];
                    userCntrlDestMethodGrp[service.sourceMethod].push(mapping);
                });
                allLanes.push(serviceName);
            });
        });
        let results = Object.entries(userCntrlDestMethodGrp).map(([methodName, methodItems]) => {
            let methodText = '';
            methodItems.forEach(item => {
                const serviceName = item['destination'];
                const serviceMethod = item['destinationMethod'];
                let { mappings, lanes } = this.findServiceMethodDaoCalls(serviceName, serviceMethod);
                if (mappings.length > 0)
                    methodText += 'note over ' + serviceName + ':' + serviceMethod + '\n' + methodText;
                methodText += item.format();
                methodText += mappings.map(item => { return item.format(); }).join('\n');
                allLanes = [...allLanes, ...lanes];
            });
            if (methodItems.length > 0)
                methodText = 'note over ' + controllerFilter + ':' + methodName + '\n' + methodText;
            return methodText;
        });
        this.writeToTxtFile('begin ' + allLanes.join(', ') + '\n ' + results.join('\n'));
    }
    findServiceMethodDaoCalls(serviceName, methodName) {
        let mappings = [];
        let lanes = [];
        this.data['Service'].forEach(service => {
            if (service.fileName === serviceName) {
                Object.entries(service['componentCalls']).forEach(([daoName, daoMethodArr]) => {
                    daoMethodArr.forEach(daoMethod => {
                        if (daoMethod['sourceMethod'] === methodName) {
                            let mapping = new Mapping(serviceName, daoName, daoMethod['componentMethod'] + '()', methodName, daoMethod['componentMethod']);
                            mappings.push(mapping);
                            lanes.push(daoName);
                        }
                    });
                });
            }
        });
        return { mappings, lanes };
    }
    writeToTxtFile(contentString) {
        fs.writeFile(path.resolve("test", "sequence_data.txt"), contentString, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    }
}
exports.default = CreateSequenceDiagram;
//# sourceMappingURL=CreateSequenceDiagram.js.map