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

    constructor(rawString: string, options?) {
        this.rawString = rawString;
        this.guiding = { steps: [] };
        this.allStepsToCondition = [];
        this.status = {};
        this.options = options;
        this.parse();
    }

    private parse() {
        //let myRegexp = new RegExp(/([\w\/\*)]+)(?:\[(\/.+?)\?(?:{(.*)\})\])?([\w\/:@\., \[\]]+)?/, "g");
        //let myRegexp = new RegExp(/([\w\/\*)]+)(?:\[(\/.+?)?\?(?:{(.*)\})\])?([\w\/:, \[\]]+)?/, "g");
        //let myRegexp = new RegExp(/([\w\/\*)]+)(?:\[(\/.+?)?\?(?:{(.*)\})\])?(.*)/, "g");
        //let myRegexp = new RegExp(/([\w\/\*)]+)(?:\[(\/.+?)?\?(?:{(.*)\})\])?(?:(.*)\:\[(.*)\])?/, "g");
        //let myRegexp = new RegExp(/([\w\/]+)?(?:\[(\/.+?)?\?(?:{(.*?)\})\])?(?:(?<!^)([\w\/]+)?\:\[(.*)\])?/, 'g');<--good!
        let myRegexp = new RegExp(/([\w\/]+)?(?:\[(\/.+?)?\?(?:{(.*?)\})\])?(?:(?<!^)([\w\/]+)?\:\[(.*)\])?/, 'g');
        try {
            var match = myRegexp.exec(this.rawString);
            this.guiding.steps = match[1].match(/[^/]+/g);
            this.condition = new Condition(match[3], match[2]);
            this.trailing = new TrailingExpression(match[4], match[5]);
            this.allStepsToCondition = [...this.guiding.steps, ...this.condition.steps];
            if (!(this.guiding.steps.length > 1 && match[5])) {
                this.status.isFilter = true;
            }
            this.status.isValid = true;
            this.returnAt = this.guiding.steps.last();
        } catch (err) {
            console.error(err);
            this.status.isValid = false;
        }
    }
}