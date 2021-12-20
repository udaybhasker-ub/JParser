import * as fs from 'fs';
import * as path from 'path';

class Mapping {
    source;
    destination;
    comment;
    sourceMethod;
    destinationMethod;

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

export default class SequenceDiagram {
    data;

    constructor(data) {
        this.data = data;
    }

    getFileData() {
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
                if (!userCntrlDestMethodGrp[reqMapping.methodName]) userCntrlDestMethodGrp[reqMapping.methodName] = [];
                userCntrlDestMethodGrp[reqMapping.methodName].push(mapping);
            });
            Object.entries(controller.componentCalls).forEach(([serviceName, servicesArr]) => {
                (<any[]>servicesArr).forEach(service => {
                    let mapping = new Mapping(controller.fileName, serviceName, service.componentMethod + '()', service.sourceMethod, service.componentMethod);
                    //controllerServiceMap.push(this.formatMapping(controller.fileName, serviceName, service.componentMethod + '()'));
                    if (!userCntrlDestMethodGrp[service.sourceMethod]) userCntrlDestMethodGrp[service.sourceMethod] = [];
                    userCntrlDestMethodGrp[service.sourceMethod].push(mapping);
                });
                allLanes.push(serviceName);
            });

        });

        let results = Object.entries(userCntrlDestMethodGrp).map(([methodName, methodItems]) => {
            let methodText = '';
            (<any[]>methodItems).forEach(item => {
                const serviceName = item['destination'];
                const serviceMethod = item['destinationMethod'];
                let { mappings, lanes } = this.findServiceMethodDaoCalls(serviceName, serviceMethod);
                if (mappings.length > 0) methodText += 'note over ' + serviceName + ':' + serviceMethod + '\n' + methodText;
                methodText += item.format();
                methodText += mappings.map(item => { return item.format() }).join('\n');
                allLanes = [...allLanes, ...lanes];
            });
            if ((<any[]>methodItems).length > 0) methodText = 'note over ' + controllerFilter + ':' + methodName + '\n' + methodText
            return methodText;
        });
        return 'begin ' + allLanes.join(', ') + '\n ' + results.join('\n');
    }
    private findServiceMethodDaoCalls(serviceName, methodName) {
        let mappings = [];
        let lanes = [];
        this.data['Service'].forEach(service => {
            if (service.fileName === serviceName) {
                Object.entries(service['componentCalls']).forEach(([daoName, daoMethodArr]) => {
                    (<any>daoMethodArr).forEach(daoMethod => {
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
    writeToTxtFile(fileName) {
        //path.resolve("test", "sequence_data.txt")
        fs.writeFile(fileName, this.getFileData(), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    }
}