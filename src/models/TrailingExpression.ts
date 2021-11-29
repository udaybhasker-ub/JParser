import { IExpression } from "./JPL/@types/IExpression";
import { ITrailingExpression } from "./JPL/@types/ITrailingExpression";
import JPLExpression from "./JPLExpression";

export default class TrailingExpression implements ITrailingExpression {
    steps: string[];
    outputs: any[];
    rawString: string;


    constructor(steps, filterString) {
        this.steps = [];
        this.outputs = [];
        this.rawString = (steps ? steps : '') + filterString ? filterString : '';

        if (filterString) {
            let splitOutputs = /(?<![\/#\{\[\]\w])([\w#]+)(?=[\|\n])(?![\]])/g;
            let splitComma = /(.*?)(?=,|$|\n)/g;

            let subArray = [];
            subArray = this.execRegex(filterString, splitOutputs);
            if (subArray.length < 1) {
                subArray = this.execRegex(filterString, splitComma);
            }

            (subArray || [filterString]).forEach(element => {
                const outExpression = new JPLExpression(element);
                if (outExpression.status && outExpression.status.isFilter) {
                    this.outputs.push(element);
                } else this.outputs.push(outExpression);
            });
        }
    }

    private execRegex(string, pattern) {
        let m, regex = new RegExp(pattern);
        regex.lastIndex = 0;
        var subArray = [];
        while ((m = regex.exec(string)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex)
                regex.lastIndex++;

            if (m[0] && m[0].trim().length)
                subArray.push(m[0].trim());
        }
        return subArray;
    }
}