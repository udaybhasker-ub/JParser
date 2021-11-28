import * as JP from "java-parser";
import { isArray } from "lodash";
import _ = require("lodash");
import { ICondition } from "./models/JPL/@types/ICondition";
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

    constructor(collectorMethodList: string[], parsedResult?: IExpression, conditionalBlock?: IConditionalBlock) {
        super();
        this.validateVisitor();
        this.collectorMethodList = collectorMethodList;
        this.collectorName = collectorMethodList[0];
        let lastItem = collectorMethodList[collectorMethodList.length - 1];
        this.parsedResult = parsedResult;
        //console.log(collectorMethodList);
        this[this.collectorName] = (ctx, parent?) => {
            console.log((this.parent ? this.parent.name : '') + '---' + this.collectorName);

            if (!this.results[this.collectorName])
                this.results[this.collectorName] = [];

            if (!this.results['final'])
                this.results['final'] = [];

            if (collectorMethodList.length > 1) {
                var subColl = new DynamicCollector(collectorMethodList.slice(1), parsedResult);
                ctx.name = this.collectorName;

                if (this.parsedResult && this.collectorName === this.parsedResult.guiding.steps.last()) {
                    subColl.parent = ctx;
                } else {
                    subColl.parent = this.parent;
                }

                let newResults = subColl.visit(ctx[collectorMethodList[1]]);
                if (!this.results[lastItem]) this.results[lastItem] = [];
                if (parent) {
                    console.log();
                }
                newResults[lastItem] && newResults[lastItem].forEach(element => {
                    this.results[lastItem].push(element);
                });
                newResults['final'] && newResults['final'].forEach(element => {
                    this.results['final'].push(element);
                });
                //console.log(this.results);
                //console.dir(JSON.stringify(this.results, Utils.jsonFilter, 2));
            } else if (lastItem === this.collectorName) {
                let matchCount = 0;
                let blockConditions: IConditionalBlock[] = [];

                if (conditionalBlock) {
                    blockConditions.push(conditionalBlock);
                } else if (parsedResult) {
                    blockConditions = parsedResult.condition.expression.blocks
                }
                blockConditions.forEach((block: IConditionalBlock) => {
                    if (block.steps.length > 1) {
                        const newBlock = { ...block };
                        newBlock.steps = block.steps.slice(1);
                        var cndStepColl = new DynamicCollector(newBlock.steps, parsedResult, newBlock);

                        cndStepColl.parent = this.parent;
                        const subCtx = ctx[block.steps[0]];
                        subCtx.name = this.collectorName;
                        let res = cndStepColl.visit(subCtx);
                        if (res && res[block.steps[1]] && res[block.steps[1]][0] && res[block.steps[1]][0][block.key] === block.value) {
                            console.log('matched:', block.key, block.value);
                            matchCount++;
                        }
                        /*if (res[block.steps[block.steps.length - 1]][0][block.key] == block.value)
                            matchCount++;
                        else return;*/
                    } else {
                        var node;
                        if (ctx.tokenTypeIdx) {
                            node = ctx;
                        } else {
                            node = ctx[block.steps[0]][0];
                        }

                        if (node[block.key] == block.value) {
                            matchCount++;
                            console.log('matched:', block.key, block.value);
                        } else return;
                    }
                });

                if (blockConditions.length === matchCount) {
                    //console.log(blockConditions.length + ' matched!!' + ' at ' + this.collectorName);
                    this.results[this.collectorName].push(ctx);
                    if (this.collectorName === parsedResult.condition.evaluateAt && parsedResult.condition.expression.blocks.length === matchCount) {
                        console.log("collecting:");
                        this.results['final'].push(this.parent);
                    }
                }
                console.log('--return AT:' + parsedResult.returnAt)
                /*if (!parsedResult || matchCount === parsedResult.condition.expression.blocks.length) {
                    parsedResult.trailing.outputs.forEach((out: any) => {
                        if (out instanceof JPLExpression) {
                            //Do work
                            var filterColl = new DynamicCollector(out.allStepsToCondition, out);
                            let res = filterColl.visit(this.parent);
                            if (!this.results['final']) {
                                this.results['final'] = {};
                            }
                            this.results['final'] = { ...this.results['final'], ...filterColl.results['final'] }
                            //filterColl.parent = this.parent;
                        } else {
                            if (!this.results['final']) {
                                this.results['final'] = {};
                            }
                            this.results['final'][out] = this.parent[out];
                        }
                    });
                }*/
            }

            //console.log("-".repeat(4 - collectorMethodList.length), this.collectorName);
            /*if (methodName === 'annotation') {
                console.dir(JSON.stringify(ctx, Utils.jsonFilter, 2));
            }*/
        }
    }
    visit(ctx, parent?) {
        super.visit(ctx, parent);
        return this.results;
    }
}