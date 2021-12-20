"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConditionalBlock_1 = __importDefault(require("./ConditionalBlock"));
const ConditionalExpression_1 = __importDefault(require("./ConditionalExpression"));
class Condition {
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
        this.expression = new ConditionalExpression_1.default();
        while (match = myRegexp2.exec(this.rawString)) {
            const block = new ConditionalBlock_1.default(match[1] && match[1].match(/[^/]+/g), match[2], match[3]);
            this.expression.blocks.push(block);
            this.expression.operator = match[4] || this.expression.operator;
        }
        this.evaluateAt = this.steps[this.steps.length - 1];
        this.isEmpty = !(this.steps.length > 0 || (this.expression && this.expression.blocks.length > 0));
    }
}
exports.default = Condition;
//# sourceMappingURL=Condition.js.map