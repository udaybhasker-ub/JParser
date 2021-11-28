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
        this.rawString = steps || '' + filterString || '';

        if (filterString) {
            const match = /(.*)\s?,\s?(.*)/g.exec(filterString);
            const subArray = match && match.slice(1);
            (subArray || [filterString]).forEach(element => {
                const outExpression = new JPLExpression(element);
                if (outExpression.status && outExpression.status.isFilter) {
                    this.outputs.push(element);
                } else this.outputs.push(outExpression);
            });
        }
    }
}