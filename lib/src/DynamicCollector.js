import * as JP from "java-parser";
import JPLExpression from "./models/JPLExpression";
export class DynamicCollector extends JP.BaseJavaCstVisitorWithDefaults {
    constructor(collectorMethodList, queryExpression, finalResults, conditionalBlock) {
        super();
        this.collectorMethodList = [];
        this.results = {};
        this.finalResults = [];
        this.validateVisitor();
        this.collectorMethodList = collectorMethodList;
        this.collectorName = collectorMethodList[0];
        let lastItem = collectorMethodList[collectorMethodList.length - 1];
        this.queryExpression = queryExpression;
        if (!collectorMethodList) {
            return;
        }
        this[this.collectorName] = (ctx, params) => {
            var parent = params && params.parent;
            var returningParent = params && params.returningParent;
            var isTrailingStep = params && params.isTrailingStep;
            var isTrailingOutput = params && params.isTrailingOutput;
            var trace = params && params.trace;
            var traceReset = params && params.traceReset;
            var path = params && params.path;
            var aliasParents = params && params.aliasParents;
            var parentCache = params && params.parentCache;
            if (!conditionalBlock && this.collectorName === queryExpression.returnAt) {
                parent = ctx;
            }
            if (isTrailingStep && this.collectorName === queryExpression.outputAt && queryExpression.trailing.outputs.length < 1) {
                this.results = ctx;
                return;
            }
            if (conditionalBlock ? conditionalBlock.steps.length > 1 : collectorMethodList.length > 1) {
                let newCondBlock;
                if (conditionalBlock && conditionalBlock.steps.length > 1) {
                    newCondBlock = Object.assign({}, conditionalBlock);
                    newCondBlock.steps = newCondBlock.steps.slice(1);
                }
                var subColl = new DynamicCollector(collectorMethodList.slice(1), queryExpression, finalResults, newCondBlock);
                if (!conditionalBlock && !isTrailingOutput && this.queryExpression && this.queryExpression.outputAliases.filter(alias => alias === this.collectorName).length > 0) {
                    aliasParents = aliasParents || {};
                    aliasParents[this.collectorName] = ctx;
                }
                if ((isTrailingOutput || isTrailingStep) && this.collectorName === traceReset) {
                    trace = '';
                }
                if (this.queryExpression && (this.collectorName === this.queryExpression.returnAt)) {
                    parent = ctx;
                    finalResults['counters'] = finalResults['counters'] || {};
                    let counter = finalResults['counters'][this.collectorName] || 0;
                    counter++;
                    finalResults['counters'][this.collectorName] = counter;
                    parent.index = counter;
                    returningParent = parent;
                    trace = '';
                }
                else {
                    trace = (trace ? trace + '>' : '') + this.collectorName;
                }
                subColl.visit({ name: this.collectorName, children: ctx }, { parent, returningParent, aliasParents, trace, traceReset, path, isTrailingOutput, isTrailingStep });
            }
            else if (lastItem === this.collectorName) {
                var matchC = 0;
                let blockConditions = [];
                if (isTrailingStep) {
                }
                else if (conditionalBlock) {
                    blockConditions.push(conditionalBlock);
                }
                else if (queryExpression && queryExpression.condition.expression) {
                    blockConditions = queryExpression.condition.expression.blocks;
                }
                let matchedConditionCount = 0;
                blockConditions.forEach((block, index) => {
                    if (block.steps.length > 1) {
                        var cndStepColl = new DynamicCollector(block.steps, queryExpression, finalResults, block);
                        cndStepColl.visit({ name: this.collectorName, children: ctx }, { parent, returningParent: returningParent || parent, aliasParents, blockConditionIndex: index });
                    }
                    else {
                        var node;
                        if (ctx.tokenTypeIdx) {
                            node = ctx;
                        }
                        else {
                            if (ctx[block.steps[0]]) {
                                node = ctx[block.steps[0]][0];
                            }
                            else {
                            }
                        }
                        if (node && node[block.key] == block.value) {
                            matchedConditionCount++;
                        }
                    }
                });
                if (matchedConditionCount === blockConditions.length) {
                    let continueToFilter = false;
                    let allSteps = [...queryExpression.guiding.steps, ...queryExpression.trailing.steps];
                    if (conditionalBlock) {
                        continueToFilter = (this.collectorName === conditionalBlock.steps[conditionalBlock.steps.length - 1]);
                    }
                    else if (queryExpression.condition && queryExpression.condition.steps.length) {
                        continueToFilter = (this.collectorName === queryExpression.condition.evaluateAt);
                    }
                    else if (isTrailingStep && this.collectorName === allSteps[allSteps.length - 1] && queryExpression.trailing.outputs.length > 0) {
                        continueToFilter = true;
                    }
                    else {
                        continueToFilter = (this.collectorName === queryExpression.returnAt);
                    }
                    if (continueToFilter) {
                        let finals = {};
                        if (!isTrailingStep && queryExpression.trailing && queryExpression.trailing.steps.length) {
                            let sliceIndex = queryExpression.trailing.steps.length > 1 ? 1 : 0;
                            let newSteps = queryExpression.trailing.steps.slice(sliceIndex);
                            let trailingStepColl = new DynamicCollector(newSteps, queryExpression, finalResults);
                            let matchingIndices = [];
                            queryExpression.trailing.steps.forEach((output) => {
                                let parts = output.split('~');
                                if (parts.length > 1) {
                                    matchingIndices.push({ name: parts[0], index: parts[1] });
                                }
                            });
                            trailingStepColl.visit({ name: this.collectorName, children: parent }, { parent, returningParent, traceReset: newSteps[0], trace: queryExpression.trailing.steps.join('>'), isTrailingStep: true, matchingIndices });
                            parent = trailingStepColl.results;
                            if (!queryExpression.trailing.outputs.length) {
                                finalResults['final'] = [...finalResults['final'], ...[parent]];
                            }
                        }
                        if (queryExpression.trailing.outputs.length) {
                            finalResults['counters'] = finalResults['counters'] || {};
                            finalResults['counters'][queryExpression.returnAt] = finalResults['counters'][queryExpression.returnAt] || 0;
                            var parentIndex = finalResults['counters'][queryExpression.returnAt]++;
                            if (!isTrailingOutput) {
                                parentCache = parentCache || {};
                                parentCache[queryExpression.outputAt] = parent;
                            }
                            queryExpression.trailing.outputs.forEach((output, index) => {
                                if (output instanceof JPLExpression) {
                                    let newSteps = output.allStepsToCondition.slice(output.allStepsToCondition.length > 1 ? 1 : 0);
                                    let outputsColl = new DynamicCollector(newSteps, output, finalResults);
                                    parent.index = parentIndex;
                                    let collectorName = queryExpression.outputAt;
                                    finalResults[this.collectorName] = finalResults[this.collectorName] || [];
                                    if (aliasParents && output.guiding.steps.length && output.inputAliases.length && output.inputAliases.filter(alias => alias === output.guiding.steps[0]).length > 0) {
                                        parent = aliasParents[output.guiding.steps[0]][output.guiding.steps[1]][0].children;
                                        parentCache[output.guiding.steps[0]] =
                                            parent.index = parentIndex;
                                        returningParent = parent;
                                        collectorName = output.guiding.steps[1];
                                        outputsColl = new DynamicCollector(newSteps.slice(1), output, finalResults);
                                        newSteps = newSteps.slice(1);
                                    }
                                    else {
                                        parent = parentCache[collectorName] || parent;
                                        returningParent = parent;
                                    }
                                    let matchingIndices = [];
                                    output.allStepsToCondition.forEach((output) => {
                                        let parts = output.split('~');
                                        if (parts.length > 1) {
                                            matchingIndices.push({ name: parts[0], index: parts[1] });
                                        }
                                    });
                                    outputsColl.visit({ name: collectorName, children: parent }, { parent, returningParent, traceReset: newSteps[0], trace: output.allStepsToCondition.join('>'), isTrailingOutput: true, matchingIndices, parentCache });
                                }
                                else {
                                    const pathMatched = this.$checkPathMatched(trace, path);
                                    if (pathMatched) {
                                        var parts = output.split('#');
                                        const val = ctx[parts[0]];
                                        if (val) {
                                            finals[parts[1] ? parts[1] : output] = val;
                                        }
                                        if (queryExpression.trailing.outputs.length === 1 && !returningParent) {
                                            returningParent = ctx;
                                            returningParent.index = parentIndex;
                                        }
                                    }
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
                                finalResults['final'][index] = Object.assign(Object.assign({}, finalResults['final'][index]), finals);
                            }
                            else {
                                finals['index'] = returningParent ? returningParent.index : index;
                                finalResults['final'].push(finals);
                            }
                        }
                    }
                }
                if (!finalResults['final'])
                    finalResults['final'] = [];
                if (queryExpression.trailing.isEmpty && !queryExpression.condition.isEmpty) {
                    let save = false;
                    let blocksSize = queryExpression.condition.expression && queryExpression.condition.expression.blocks.length;
                    if (queryExpression.condition.steps.length && matchedConditionCount === blocksSize && this.collectorName === queryExpression.condition.evaluateAt) {
                        finalResults['final'] = [...finalResults['final'], ...[parent]];
                    }
                    else if (!queryExpression.condition.steps.length && (blocksSize === 0 || matchedConditionCount === blocksSize)) {
                        finalResults['final'] = [...finalResults['final'], ...[parent]];
                    }
                }
                else if (queryExpression.trailing.isEmpty && queryExpression.condition.isEmpty && this.collectorName === queryExpression.returnAt) {
                    finalResults['final'] = [...finalResults['final'], ...[ctx]];
                }
            }
        };
        return this;
    }
    $checkPathMatched(path, fullPath) {
        if (!path || !fullPath)
            return false;
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
    visit(ctx, param) {
        super.visit(ctx, param);
        return this.results;
    }
}
//# sourceMappingURL=DynamicCollector.js.map