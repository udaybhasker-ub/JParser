import { ICondition } from "./ICondition";
import { ITrailingExpression } from "./ITrailingExpression";

export interface IExpression {
    guiding: { steps: string[] },
    condition: ICondition,
    trailing: ITrailingExpression,
    returnAt?: string,
    outputAt: string,
    outputName: string,
    outputAliases: any[],
    inputAliases: any[],
    allSteps: Set<string>
}