import { IConditionalExpression } from "./IConditionalExpression";

export interface ICondition {
    steps: string[],
    expression: IConditionalExpression,
    evaluateAt?: string,
    isEmpty: boolean,
    rawString: string,
}
