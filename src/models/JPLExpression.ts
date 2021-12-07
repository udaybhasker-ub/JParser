import Condition from "./Condition";
import { ICondition } from "./JPL/@types/ICondition";
import { IConditionalExpression } from "./JPL/@types/IConditionalExpression";
import { IExpression } from "./JPL/@types/IExpression"
import { ITrailingExpression } from "./JPL/@types/ITrailingExpression";
import TrailingExpression from "./TrailingExpression";

export default class JPLExpression implements IExpression {
    guiding;
    condition: ICondition;
    trailing: ITrailingExpression;
    rawString;
    allStepsToCondition: string[];
    status: any;
    options: any;
    returnAt: string;
    outputAt: string;
    outputName: string;
    outputAliases: any[];
    inputAliases: any[];
    allSteps = new Set<string>();

    constructor(rawString?: string, options?) {
        this.rawString = rawString;
        this.guiding = { steps: [] };
        this.allStepsToCondition = [];
        this.status = {};
        this.options = options;
        this.outputName = options && options.outputName || '';
        this.outputAliases = [];
        this.inputAliases = [];
    }

    parse() {
        let myRegexp = new RegExp(/([\w\/~@]+)?(?:\[(\/.+?)?\?(?:{(.*?)\})\])?(?:(?<!^)([\w\/~]+)?(?:\:\[(.*)\])?)?/, 'g');
        try {
            var match = myRegexp.exec(this.rawString);
            this.guiding.steps = match[1].match(/[^/]+/g);
            this.guiding.steps.forEach((step, index) => {
                if (step.indexOf('@') === step.length - 1) {
                    const name = step.substr(0, step.length - 1);
                    this.outputAliases.push(name);
                    this.guiding.steps[index] = name;
                } else if (step.indexOf('@') === 0) {
                    const name = step.slice(1);
                    this.inputAliases.push(name);
                    this.guiding.steps[index] = name;
                }
            });
            this.condition = new Condition(match[3], match[2]);
            this.trailing = new TrailingExpression(match[4], match[5]);
            this.allStepsToCondition = [...this.guiding.steps, ...this.condition.steps];
            if (!(this.guiding.steps.length > 1 && match[5])) {
                this.status.isFilter = true;
            }
            this.status.isValid = true;
            this.returnAt = this.guiding.steps[this.guiding.steps.length - 1];
            this.outputAt = (this.trailing.steps[this.trailing.steps.length - 1]) || this.returnAt;
            this.allSteps = this.getAllSteps();
        } catch (err) {
            console.error(err);
            this.status.isValid = false;
        }
        return this;
    }
    private getAllSteps(): Set<string> {
        let steps = new Set<string>();
        if (!this.status.isValid) return steps;

        this.guiding && this.guiding.steps.forEach(step => steps.add(step));
        if (this.condition) {
            this.condition.steps.forEach(step => steps.add(step));
            this.condition.expression && this.condition.expression.blocks.forEach((block) => {
                block.steps && block.steps.forEach(blockStep => steps.add(blockStep));
            });
        }
        if (this.trailing) {
            this.trailing.steps.forEach(step => steps.add(step));
            this.trailing.outputs.forEach((out) => {
                out.allSteps && out.allSteps.forEach(outStep => steps.add(outStep));
            });
        }
        return steps;
    }
}