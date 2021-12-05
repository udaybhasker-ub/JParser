import { IConditionalBlock } from "./IConditionalBlock";

export interface IConditionalExpression {
    blocks: IConditionalBlock[],
    operator: string
}