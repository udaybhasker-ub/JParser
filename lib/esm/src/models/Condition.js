import ConditionalBlock from "./ConditionalBlock";
import ConditionalExpression from "./ConditionalExpression";
export default class Condition {
    constructor(rawString, stepsString) {
        this.steps = [];
        this.isEmpty = false;
        if (!rawString && !stepsString)
            return null;
        this.rawString = rawString;
        if (stepsString)
            this.steps = stepsString.match(/[^/]+/g);
        this.parse();
    }
    parse() {
        let regex2 = /(?:([a-zA-Z0-9\/~]+)?\((\w+)="([\w|@]+)"\))\s?([&|\|]{2})?\s?/g;
        let myRegexp2 = new RegExp(regex2, 'gi');
        myRegexp2.lastIndex = 0;
        var match;
        this.expression = new ConditionalExpression();
        while (match = myRegexp2.exec(this.rawString)) {
            const block = new ConditionalBlock(match[1] && match[1].match(/[^/]+/g), match[2], match[3]);
            this.expression.blocks.push(block);
            this.expression.operator = match[4] || this.expression.operator;
        }
        this.evaluateAt = this.steps[this.steps.length - 1];
        this.isEmpty = !(this.steps.length > 0 || (this.expression && this.expression.blocks.length > 0));
    }
}
//# sourceMappingURL=Condition.js.map