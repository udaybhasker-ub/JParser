import { IExpression } from "./IExpression";
import IOutputExpresson from "./IOutputExpression";

export interface ITrailingExpression {
    steps: string[];
    outputs: IExpression[];
    rawString: string;
    outputAt: string;
    isEmpty: boolean;
}