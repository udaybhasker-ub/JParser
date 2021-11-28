import { IConditionalBlock } from "./JPL/@types/IConditionalBlock";
import { IConditionalExpression } from "./JPL/@types/IConditionalExpression";

export default class ConditionalExpression implements IConditionalExpression {
    blocks: IConditionalBlock[] = []
    operator: ''

    constructor() {
        this.blocks = [];
    }
}