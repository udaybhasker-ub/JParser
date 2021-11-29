import * as JP from "java-parser";
import { keys } from "lodash";
import _ = require("lodash");
import { IConditionalBlock } from "./models/JPL/@types/IConditionalBlock";
import { IExpression } from "./models/JPL/@types/IExpression";
import JPLExpression from "./models/JPLExpression";
import Utils from "./Utils";

export class DynamicCollector extends JP.BaseJavaCstVisitorWithDefaults {
    collectorName: string;
    collectorMethodList: string[] = [];
    results = {};
    parent;
    parsedResult;
    matchedConditionCount;
    finalResults = [];

    constructor(collectorMethodList: string[], parsedResult: IExpression, finalResults: any[], conditionalBlock?: IConditionalBlock) {
        super();
        this.matchedConditionCount = 0;
        this.validateVisitor();
        this.collectorMethodList = collectorMethodList;
        this.collectorName = collectorMethodList[0];
        let lastItem = collectorMethodList[collectorMethodList.length - 1];
        this.parsedResult = parsedResult;
        if (!collectorMethodList) {
            return;
        }
        this[this.collectorName] = (ctx, parent?) => {
            /*if (!finalResults[this.collectorName])
                finalResults[this.collectorName] = [];*/


            if (conditionalBlock ? conditionalBlock.steps.length > 1 : collectorMethodList.length > 1) {
                let newCondBlock;
                if (conditionalBlock && conditionalBlock.steps.length > 1) {
                    newCondBlock = { ...conditionalBlock };
                    newCondBlock.steps = newCondBlock.steps.slice(1);
                }
                var subColl = new DynamicCollector(collectorMethodList.slice(1), parsedResult, finalResults, newCondBlock);
                ctx.name = this.collectorName;

                if (this.parsedResult && this.collectorName === this.parsedResult.returnAt) {
                    subColl.parent = ctx;
                    finalResults['counters'] = finalResults['counters'] || {};
                    let counter = finalResults['counters'][this.collectorName] || 0;
                    counter++;
                    finalResults['counters'][this.collectorName] = counter;
                    subColl.parent.index = counter;
                } else {
                    subColl.parent = this.parent;
                }

                subColl.visit(ctx[collectorMethodList[1]]);
            } else if (lastItem === this.collectorName) {
                var matchC = 0;
                let blockConditions: IConditionalBlock[] = [];

                if (conditionalBlock) {
                    blockConditions.push(conditionalBlock);
                } else if (parsedResult && parsedResult.condition.expression) {
                    blockConditions = parsedResult.condition.expression.blocks
                }
                blockConditions.forEach((block: IConditionalBlock, index) => {

                    if (block.steps.length > 1) {
                        const newBlock = { ...block };
                        var cndStepColl = new DynamicCollector(block.steps, parsedResult, finalResults, newBlock);
                        cndStepColl.parent = this.parent;
                        const newCtx = ctx[block.steps[0]];
                        let res = cndStepColl.visit(newCtx);

                        if (res && res[block.steps[1]] && res[block.steps[1]][0] && res[block.steps[1]][0][block.key] === block.value) {
                            this.matchedConditionCount++;
                        }
                    } else {
                        var node;
                        if (ctx.tokenTypeIdx) {
                            node = ctx;
                        } else {
                            node = ctx[block.steps[0]][0];
                        }

                        if (node[block.key] == block.value) {
                            this.matchedConditionCount++;
                        }
                    }
                });

                if (this.matchedConditionCount === blockConditions.length) {
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
                            let trailingStepColl = new DynamicCollector(parsedResult.trailing.steps.splice(1), parsedResult, finalResults);
                            trailingStepColl.parent = this.parent;
                            trailingStepColl.visit(this.parent[parsedResult.trailing.steps[0]]);
                        }
                        if (parsedResult.trailing.outputs) {
                            parsedResult.trailing.outputs.forEach((output: any, index) => {
                                if (output instanceof JPLExpression) {
                                    let outputsColl = new DynamicCollector(output.allStepsToCondition.slice(1), output, finalResults);
                                    outputsColl.parent = this.parent;
                                    let outputresults = outputsColl.visit(this.parent[output.allStepsToCondition[0]]);
                                } else {
                                    var parts = output.split('#');
                                    finals[parts[1] ? parts[1] : output] = ctx[parts[0]];
                                }
                            });
                        }
                        if (finals && Object.keys(finals).length) {
                            if (!finalResults['final'])
                                finalResults['final'] = [];

                            let index = -1;
                            finalResults['final'].forEach((item, ind) => {
                                if (item.index === this.parent.index)
                                    return index = ind;
                            });
                            if (index > -1) {
                                finalResults['final'][index] = { ...finalResults['final'][index], ...finals };
                            } else {
                                finals['index'] = this.parent.index;
                                finalResults['final'].push(finals);
                            }

                        }
                    }
                }
            }
        }
    }
}