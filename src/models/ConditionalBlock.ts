import { IConditionalBlock } from "./JPL/@types/IConditionalBlock";
import { IConditionalExpression } from "./JPL/@types/IConditionalExpression";

export default class ConditionalBlock implements IConditionalBlock {
    steps: string[];
    key: string;
    value: string;

    constructor(steps, key, value) {
        this.steps = steps;
        this.key = key;
        this.value = value;
    }
}