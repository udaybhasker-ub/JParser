import * as JP from "java-parser";
import JPLExpression from "./models/JPLExpression";

export class CstNodeCollector extends JP.BaseJavaCstVisitorWithDefaults {
    results;
    outputIndex = -1;
    constructor(jplExpression: JPLExpression, finalResults?) {
        super();
        this.$visit(jplExpression, finalResults);
    }
    visit(ctx, param?) {
        super.visit(ctx, param);
    }
    $visit(jplExpression: JPLExpression, finalResults) {
        if (!finalResults) finalResults = {};
        //let steps = new Set<string>();
        let guidingSteps: any[] = [];
        let condSteps: any[] = [];
        let condBlockSteps: any[] = [];
        let trailingSteps: any[] = [];

        jplExpression.guiding && jplExpression.guiding.steps.forEach(step => guidingSteps.push(step));
        if (jplExpression.condition) {
            jplExpression.condition.steps.forEach(step => condSteps.push(step));
            jplExpression.condition.expression && jplExpression.condition.expression.blocks.forEach((block) => {
                block.steps && block.steps.forEach(blockStep => condBlockSteps.push(blockStep));
            });
        }
        if (jplExpression.trailing) {
            //jplExpression.trailing.steps.forEach(step => steps.add(step));
            jplExpression.trailing.outputs.forEach((out) => {
                if (out instanceof JPLExpression) {

                } else {

                }
                //out.allSteps && out.allSteps.forEach(outStep => trailingSteps.push(outStep));
            });
        }
        //let results = this.$visitSteps(steps, jplExpression.returnAt, jplExpression.condition && jplExpression.condition.evaluateAt);

        let steps = jplExpression.allSteps;
        steps.forEach((step, index) => {
            this[step] = (ctx, param) => {
                /*if (step === 'typeName') {
                    console.log('typeName');
                }
                if (step === 'Identifier') {
                    console.log('Identifier');
                }
                if (step === 'At') {
                    console.log('At');
                }
                if (step === 'annotation') {
                    if (param && param.parent) {
                        console.log('annotation');
                    }
                }
                console.log(":" + step);*/
                //console.log(param);
                let trace = param && param.trace,
                    parent = param && param.parent,
                    evalParent = param && param.evalParent || { ctx: undefined, totalBlocksMatched: 0, matchedBlocks: [] };

                //console.log(trace);

                if ((guidingSteps.indexOf(step) > -1 && (!trace || guidingSteps.slice(0, guidingSteps.indexOf(step)).join('>') === trace))) {
                    if (step === jplExpression.returnAt) {
                        parent = ctx;
                        parent.outputIndex = this.outputIndex++;
                        if (jplExpression['type'] !== 'outputs') trace = undefined;
                    } else {
                        trace = param && param.trace ? (param.trace + '>' + step) : step
                    }
                } else if (jplExpression.condition && jplExpression.condition.steps.length > 0) {
                    if ((condSteps.indexOf(step) > -1 && (!trace || condSteps.slice(0, condSteps.indexOf(step)).join('>') === trace))) {
                        if (step === jplExpression.condition.evaluateAt) {
                            evalParent.ctx = ctx;
                            trace = undefined;
                        } else {
                            trace = param && param.trace ? (param.trace + '>' + step) : step;
                        }
                    } else if (condBlockSteps.indexOf(step) > -1) {
                        jplExpression.condition.expression && jplExpression.condition.expression.blocks.forEach((block, index) => {
                            if (this.$checkPathInBlock(step, trace, block, index, evalParent)) {
                                if (block.steps && block.steps[block.steps.length - 1] === step) {
                                    if (ctx[block.key] === block.value) {
                                        evalParent.totalBlocksMatched++;
                                        evalParent.matchedBlocks.push(index);
                                    }
                                }
                            }
                            if (evalParent && jplExpression.condition.expression && evalParent.totalBlocksMatched === jplExpression.condition.expression.blocks.length) {
                                /*if (!this.results[jplExpression.returnAt])
                                    this.results[jplExpression.returnAt] = [];
                                  this.results[jplExpression.returnAt].push(parent);*/
                                parent.matchIndex ? parent.matchIndex++ : parent.matchIndex = 0;
                                evalParent.evalDone = true;
                            }
                            //console.log("evalParent.evalMatchCount:", evalParent && evalParent.totalBlocksMatched ? parseInt(evalParent.totalBlocksMatched) : -1);
                        });

                        trace = param && param.trace ? (param.trace + '>' + step) : step;
                    }
                }
                if (jplExpression.condition.steps.length < 1) {
                    evalParent.ctx = parent;
                    evalParent.evalDone = true;
                }
                if (jplExpression.trailing.steps.length > 0) {
                    if (evalParent.evalDone && step === jplExpression.trailing.steps[jplExpression.trailing.steps.length - 1]) {
                        evalParent.outputAt = step;
                        evalParent.outputCtx = ctx;
                    }
                } else {
                    evalParent.outputAt = jplExpression.returnAt;
                    evalParent.outputCtx = parent;
                }

                if (jplExpression.trailing.outputs.length > 0 && evalParent && evalParent.evalDone) {
                    //trace = '';
                    jplExpression.trailing.outputs.forEach((out: any) => {
                        let cat = jplExpression['aliasName'] || evalParent.outputAt;
                        if (!finalResults[cat]) finalResults[cat] = [];

                        if (out instanceof JPLExpression) {
                            let newCtx = {
                                name: evalParent.outputAt,
                                children: evalParent.outputCtx
                            };
                            out['aliasName'] = evalParent.outputAt;
                            out['outputIndex'] = parent.outputIndex;
                            out['type'] = 'outputs';
                            new CstNodeCollector(out, finalResults).visit(newCtx);
                        } else {
                            let outputIndex = jplExpression['outputIndex'] || (evalParent.ctx && evalParent.ctx.outputIndex);
                            if (outputIndex < 0) outputIndex = 0;
                            let stepIndex = jplExpression.allStepsToCondition.indexOf(step);
                            if (step === evalParent.outputAt && (!jplExpression['type'] || (jplExpression['type'] === 'outputs' && trace == jplExpression.allStepsToCondition.slice(0, stepIndex).join('>')))) {
                                var [key, alias] = out.split('#');
                                let newKey = alias || key;
                                let index = -1;
                                finalResults[cat].forEach((item, ind) => {
                                    if (item.index === outputIndex) {
                                        index = ind;
                                    }
                                });
                                //console.log("B:", finalResults);
                                if (index > -1) {
                                    finalResults[cat][index] = { ...finalResults[cat][index], ...{ [newKey]: ctx[key] } };
                                } else {
                                    finalResults[cat].push({ [newKey]: ctx[key], index: outputIndex });
                                }
                                //console.log("After:", finalResults);
                            }
                        }
                        trace = param && param.trace ? (param.trace + '>' + step) : step;
                    });
                }
                if (jplExpression.condition.steps.length < 1 && jplExpression.trailing.steps.length < 1 && jplExpression.trailing.outputs.length < 1 && jplExpression.returnAt === step) {
                    if (!finalResults[jplExpression.returnAt]) finalResults[jplExpression.returnAt] = [];
                    finalResults[jplExpression.returnAt].push(parent);
                }

                if (super[step]) {
                    super[step](ctx, { trace, parent, evalParent });
                }
            };
        });
    }
    $checkPathInBlock(step, trace, block, blockIndex, evalParent) {
        const stepIndex = block.steps.indexOf(step);
        return (evalParent && evalParent.matchedBlocks.indexOf(blockIndex) < 0 && (stepIndex === 0 || block.steps.slice(0, stepIndex).join('>') === trace));
    }
}