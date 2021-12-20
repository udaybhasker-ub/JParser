import JPLExpression from "./JPLExpression";
export default class TrailingExpression {
    constructor(steps, filterString) {
        this.isEmpty = false;
        this.steps = steps && steps.split('/').filter(Boolean) || [];
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
                const outExpression = new JPLExpression(element).parse();
                if (outExpression.status && outExpression.status.isFilter) {
                    this.outputs.push(element);
                }
                else
                    this.outputs.push(outExpression);
            });
        }
        this.isEmpty = !(this.steps.length > 0 || this.outputs.length > 0);
        this.outputAt = this.steps.length && this.steps[this.steps.length - 1];
    }
    execRegex(string, pattern) {
        let m, regex = new RegExp(pattern);
        regex.lastIndex = 0;
        var subArray = [];
        while ((m = regex.exec(string)) !== null) {
            if (m.index === regex.lastIndex)
                regex.lastIndex++;
            if (m[0] && m[0].trim().length)
                subArray.push(m[0].trim());
        }
        return subArray;
    }
}
//# sourceMappingURL=TrailingExpression.js.map