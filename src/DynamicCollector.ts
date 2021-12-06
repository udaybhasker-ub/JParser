import * as JP from "java-parser";
import { keys } from "lodash";
import _ = require("lodash");
import ConditionalExpression from "./models/ConditionalExpression";
import { IConditionalBlock } from "./models/JPL/@types/IConditionalBlock";
import { IExpression } from "./models/JPL/@types/IExpression";
import JPLExpression from "./models/JPLExpression";
import Utils from "./Utils";

export class DynamicCollector extends JP.BaseJavaCstVisitorWithDefaults {
    collectorName: string;
    collectorMethodList: string[] = [];
    results = {};
    parent;
    returningParent;
    parsedResult;
    isTrailingStep;
    conditionalBlock;
    matchedConditionCount;
    finalResults = [];

    constructor(collectorMethodList: string[], parsedResult: IExpression, finalResults: any[], conditionalBlock?: IConditionalBlock) {
        super();
        this.validateVisitor();
        this.collectorMethodList = collectorMethodList;
        this.collectorName = collectorMethodList[0];
        let lastItem = collectorMethodList[collectorMethodList.length - 1];
        this.parsedResult = parsedResult;
        if (!collectorMethodList) {
            return;
        }
        this[this.collectorName] = (ctx, params?) => {
            var parent = params && params.parent;
            var returningParent = params && params.returningParent;
            var isTrailingStep = params && params.isTrailingStep;
            var trace = params && params.trace;
            var path = params && params.path;

            if (!conditionalBlock && this.collectorName === parsedResult.returnAt) {
                parent = ctx;
            }

            if (isTrailingStep && this.collectorName === parsedResult.outputAt) {
                this.results = ctx;
                return;
            }

            if (conditionalBlock ? conditionalBlock.steps.length > 1 : collectorMethodList.length > 1) {
                let newCondBlock;
                if (conditionalBlock && conditionalBlock.steps.length > 1) {
                    newCondBlock = { ...conditionalBlock };
                    newCondBlock.steps = newCondBlock.steps.slice(1);
                }
                var subColl = new DynamicCollector(collectorMethodList.slice(1), parsedResult, finalResults, newCondBlock);
                //ctx.name = this.collectorName;

                if (this.parsedResult && this.collectorName === this.parsedResult.returnAt) {
                    parent = ctx;
                    finalResults['counters'] = finalResults['counters'] || {};
                    let counter = finalResults['counters'][this.collectorName] || 0;
                    counter++;
                    finalResults['counters'][this.collectorName] = counter;
                    //subColl.parent.index = counter;
                    parent.index = counter;
                    returningParent = parent;
                    trace = '';
                } else {
                    //if (parent) parent.parent = ctx;
                    //subColl.parent = parent;
                    //subColl.returningParent = this.returningParent;
                    trace = (trace ? trace + '>' : '') + this.collectorName;
                }
                if (conditionalBlock) {
                    //finalResults[this.collectorName] = finalResults[this.collectorName] || [];
                    //finalResults[this.collectorName].push(ctx);
                }
                //console.log('---' + collectorMethodList[1]);

                //console.log("trace:" + trace);

                subColl.visit({ name: this.collectorName, children: ctx }, { parent, returningParent, trace, path });
            } else if (lastItem === this.collectorName) {
                var matchC = 0;
                let blockConditions: IConditionalBlock[] = [];

                if (isTrailingStep) {

                } else if (conditionalBlock) {
                    blockConditions.push(conditionalBlock);
                } else if (parsedResult && parsedResult.condition.expression) {
                    blockConditions = parsedResult.condition.expression.blocks
                }
                let matchedConditionCount = 0;
                blockConditions.forEach((block: IConditionalBlock, index) => {
                    if (block.steps.length > 1) {
                        //const newBlock = { ...block };
                        //console.log('path@' + path);
                        var cndStepColl = new DynamicCollector(block.steps, parsedResult, finalResults, block);
                        //this.parent.index = 
                        //cndStepColl.parent = this.parent;

                        //const newCtx = ctx[block.steps[0]];
                        cndStepColl.visit({ name: this.collectorName, children: ctx }, { parent, returningParent: returningParent || parent, blockConditionIndex: index });
                    } else {
                        var node;
                        if (ctx.tokenTypeIdx) {
                            node = ctx;

                        } else {
                            if (ctx[block.steps[0]]) {
                                node = ctx[block.steps[0]][0];
                            } else {
                                /* var cndStepColl = new DynamicCollector(block.steps, parsedResult, finalResults, block);
                                 cndStepColl.visit({ name: this.collectorName, children: ctx }, { parent, returningParent });
                                 return;*/
                            }
                        }
                        if (node && node[block.key] == block.value) {
                            matchedConditionCount++;
                        }
                    }
                });

                //console.log(`this.matchedConditionCount=%s, blockConditions.length=%s`, matchedConditionCount, blockConditions.length);
                if (matchedConditionCount === blockConditions.length) {

                    //this.$mergeResults(finalResults, { [this.collectorName]: [ctx] }, this.collectorName);
                    let continueToFilter = false;
                    if (conditionalBlock) {
                        continueToFilter = (this.collectorName === conditionalBlock.steps[conditionalBlock.steps.length - 1]);
                    } else if (parsedResult.condition && parsedResult.condition.steps.length) {
                        continueToFilter = (this.collectorName === parsedResult.condition.evaluateAt);
                    } else {
                        continueToFilter = (this.collectorName === parsedResult.returnAt);
                    }
                    if (continueToFilter) {
                        let finals = {};
                        if (parsedResult.trailing && parsedResult.trailing.steps.length) {
                            let sliceIndex = parsedResult.trailing.steps.length > 1 ? 1 : 0;
                            let trailingStepColl = new DynamicCollector(parsedResult.trailing.steps.slice(sliceIndex), parsedResult, finalResults);
                            //trailingStepColl.returningParent = this.returningParent;
                            //trailingStepColl.parent = this.parent;
                            //trailingStepColl.isTrailingStep = true;
                            trailingStepColl.visit({ name: parsedResult.returnAt, children: parent }, { parent, returningParent, isTrailingStep: true });
                            //this.parent = trailingStepColl.results;
                            parent = trailingStepColl.results;
                            if (!parsedResult.trailing.outputs.length) {
                                finalResults['final'] = [...finalResults['final'], ...[parent]];
                            }
                        }
                        if (parsedResult.trailing.outputs.length) {
                            finalResults['counters'] = finalResults['counters'] || {};
                            finalResults['counters'][parsedResult.returnAt] = finalResults['counters'][parsedResult.returnAt] || 0;
                            var parentIndex = finalResults['counters'][parsedResult.returnAt]++;
                            parsedResult.trailing.outputs.forEach((output: any, index) => {
                                if (output instanceof JPLExpression) {
                                    let outputsColl = new DynamicCollector(output.allStepsToCondition.slice(output.allStepsToCondition.length > 1 ? 1 : 0), output, finalResults);
                                    //outputsColl.isTrailingStep = true;
                                    parent.index = parentIndex;
                                    finalResults[this.collectorName] = finalResults[this.collectorName] || [];
                                    //finalResults[this.collectorName].push(parent);
                                    //outputsColl.parent = this.parent;
                                    //outputsColl.returningParent = this.parent;
                                    let matchingIndices = [];
                                    output.allStepsToCondition.forEach((output) => {
                                        let parts = output.split('~');
                                        if (parts.length > 1) {
                                            matchingIndices.push({ name: parts[0], index: parts[1] });
                                        }
                                    });
                                    outputsColl.visit({ name: parsedResult.outputAt, children: parent }, { parent, returningParent, trace: output.allStepsToCondition.join('>'), isTrailingOutput: true, matchingIndices });
                                } else {
                                    //console.log("blockConditionIndex=" + blockConditionIndex + ", trailingOutputIndex=" + trailingOutputIndex);
                                    //console.log("path=" + path);
                                    //console.log("output=" + output);
                                    const pathMatched = this.$checkPathMatched(trace, path);
                                    if (pathMatched) {
                                        //console.log(trace);
                                        var parts = output.split('#');


                                        finals[parts[1] ? parts[1] : output] = ctx[parts[0]];
                                        //console.log(finals);
                                        if (parsedResult.trailing.outputs.length === 1 && !returningParent) {
                                            returningParent = ctx;
                                            returningParent.index = parentIndex;
                                        }
                                    }
                                    //if (params && params.path) params.path = '';
                                    //console.log('pathMatched=' + pathMatched);
                                }
                            });
                        }
                        if (!finalResults['final'])
                            finalResults['final'] = [];
                        if (returningParent && finals && Object.keys(finals).length) {
                            let index = -1;
                            returningParent && finalResults['final'].forEach((item, ind) => {
                                if (item.index === returningParent.index)
                                    return index = ind;
                            });
                            if (index > -1) {
                                finalResults['final'][index] = { ...finalResults['final'][index], ...finals };
                                //console.log(finals);
                            } else {
                                finals['index'] = returningParent ? returningParent.index : index;
                                finalResults['final'].push(finals);
                                //console.log(finals);
                            }

                        }/* else if (this.collectorName === parsedResult.returnAt) {
                            //if (!finalResults['final'][this.collectorName]) finalResults['final'][this.collectorName] = [];

                            finalResults['final'] = [...finalResults['final'], ...[ctx]]
                        }*/
                    }
                }
                if (!finalResults['final'])
                    finalResults['final'] = [];

                if (parsedResult.trailing.isEmpty && !parsedResult.condition.isEmpty) {
                    let save = false;
                    let blocksSize = parsedResult.condition.expression && parsedResult.condition.expression.blocks.length;
                    if (parsedResult.condition.steps.length && matchedConditionCount === blocksSize && this.collectorName === parsedResult.condition.evaluateAt) {
                        finalResults['final'] = [...finalResults['final'], ...[parent]]
                    } else if (!parsedResult.condition.steps.length && (blocksSize === 0 || matchedConditionCount === blocksSize)) {
                        finalResults['final'] = [...finalResults['final'], ...[parent]]
                    }

                } else if (parsedResult.trailing.isEmpty && parsedResult.condition.isEmpty && this.collectorName === parsedResult.returnAt) {
                    finalResults['final'] = [...finalResults['final'], ...[ctx]]
                }
                //if (!finalResults['final'][this.collectorName]) finalResults['final'][this.collectorName] = [];
                //if (params && params.path) params.path = '';
            }
        }
        return this;
    }
    $checkPathMatched(path, fullPath) {
        if (!path || !fullPath) return false;

        const pathSegments = path.split('>');
        const fullPathSegments = fullPath.split('>');
        let lastPathMatchIndex = -1;
        for (let i = 0; i < pathSegments.length; i++) {
            const segment = pathSegments[i];
            let matchIndex = fullPathSegments.slice(lastPathMatchIndex > -1 || 0).indexOf(segment);
            if (matchIndex < 0) {
                return false;
            }
            lastPathMatchIndex = matchIndex;
        }
        return true;
    }

    visit(ctx, param?) {
        super.visit(ctx, param);
        return this.results;
    }
}