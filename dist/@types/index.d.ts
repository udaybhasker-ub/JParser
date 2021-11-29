declare module parser
{
	import { Collectors, CustomCollector } from './CustomCollectors';
	export default abstract class CollectorFactory {
	    static getCollector(collectorName: Collectors, matchString?: any): CustomCollector;
	}

	import * as JP from "java-parser";
	export enum Collectors {
	    FIELD_DECLARATION = "fieldDeclaration",
	    ANNOTATION = "annotation",
	    UNANN_CLASS_TYPE = "unannClassType",
	    ALL_FIELD_NAMES = "allFieldNames",
	    VAR_DEC_ID = "variableDeclaratorId"
	}
	export class CustomCollector extends JP.BaseJavaCstVisitorWithDefaults {
	    collectorName: string;
	    matchingName: string;
	    allFieldNames: Set<string>;
	    customResult: any;
	    constructor(collectorName: any, matchingName?: any);
	    fieldDeclaration(ctx: any): any;
	    annotation(ctx: JP.AnnotationCtx, fieldIndex: any): void;
	    variableDeclaratorId(ctx: JP.VariableDeclaratorIdCtx): void;
	    unannClassType(ctx: JP.UnannClassTypeCtx): void;
	    $getResults(): any;
	    $fieldNames(arr: any): boolean;
	    $checkAndCreateResultField(key: any): boolean;
	    visit(ctx: any, param?: any): this;
	}

	import * as JP from "java-parser";
	import { IConditionalBlock } from "./models/JPL/@types/IConditionalBlock";
	import { IExpression } from "./models/JPL/@types/IExpression";
	export class DynamicCollector extends JP.BaseJavaCstVisitorWithDefaults {
	    collectorName: string;
	    collectorMethodList: string[];
	    results: {};
	    parent: any;
	    parsedResult: any;
	    matchedConditionCount: any;
	    finalResults: any[];
	    constructor(collectorMethodList: string[], parsedResult: IExpression, finalResults: any[], conditionalBlock?: IConditionalBlock);
	}

	import JPLExpression from "./models/JPLExpression";
	const _default: {
	    parsed: {
	        guiding: {
	            steps: any[];
	        };
	        conditional: {
	            steps: any[];
	            expression: {
	                blocks: {
	                    step: {};
	                    key: string;
	                    value: string;
	                }[];
	                operator: string;
	            };
	        };
	        trailing: {
	            steps: any[];
	            output: any[];
	        };
	    };
	    parseQuery(query: any): JPLExpression;
	    parseCondition(condition: any): void;
	};
	export default _default;

	export default class JParser {
	    constructor();
	    parseTest(): void;
	}

	const _default: {
	    CONTROLLER: string;
	};
	export default _default;

	const _default: {
	    jsonFilter: (k: string, v: string) => string;
	    _console(data: any): void;
	    printToFile(data: any, filePrefix?: any): void;
	    mergeArrays(arr1: any, arr2: any): any;
	};
	export default _default;

	import { ICondition } from "./JPL/@types/ICondition";
	import { IConditionalExpression } from "./JPL/@types/IConditionalExpression";
	export default class Condition implements ICondition {
	    steps: string[];
	    expression: IConditionalExpression;
	    rawString: string;
	    evaluateAt: string;
	    constructor(rawString: string, stepsString: any);
	    parse(): void;
	}

	import { IConditionalBlock } from "./JPL/@types/IConditionalBlock";
	export default class ConditionalBlock implements IConditionalBlock {
	    steps: string[];
	    key: string;
	    value: string;
	    isMatched: boolean;
	    constructor(steps: any, key: any, value: any);
	}

	import { IConditionalBlock } from "./JPL/@types/IConditionalBlock";
	import { IConditionalExpression } from "./JPL/@types/IConditionalExpression";
	export default class ConditionalExpression implements IConditionalExpression {
	    blocks: IConditionalBlock[];
	    operator: '';
	    currentEvalCount: number;
	    constructor();
	}

	import { ICondition } from "./JPL/@types/ICondition";
	import { IExpression } from "./JPL/@types/IExpression";
	import { ITrailingExpression } from "./JPL/@types/ITrailingExpression";
	export default class JPLExpression implements IExpression {
	    guiding: any;
	    condition: ICondition;
	    trailing: ITrailingExpression;
	    rawString: any;
	    allStepsToCondition: string[];
	    status: any;
	    options: any;
	    returnAt: string;
	    constructor(rawString: string, options?: any);
	    private parse;
	}

	import { ITrailingExpression } from "./JPL/@types/ITrailingExpression";
	export default class TrailingExpression implements ITrailingExpression {
	    steps: string[];
	    outputs: any[];
	    rawString: string;
	    constructor(steps: any, filterString: any);
	    private execRegex;
	}

	import { IConditionalExpression } from "./IConditionalExpression";
	export interface ICondition {
	    steps: string[];
	    expression: IConditionalExpression;
	    evaluateAt?: string;
	}

	export interface IConditionalBlock {
	    steps: string[];
	    key: string;
	    value: string;
	    isMatched: boolean;
	}

	import { IConditionalBlock } from "./IConditionalBlock";
	export interface IConditionalExpression {
	    blocks: IConditionalBlock[];
	    operator: '';
	}

	import { ICondition } from "./ICondition";
	import { ITrailingExpression } from "./ITrailingExpression";
	export interface IExpression {
	    guiding: {
	        steps: string[];
	    };
	    condition: ICondition;
	    trailing: ITrailingExpression;
	    returnAt?: string;
	}

	export default interface IOutputExpresson {
	    steps: string[];
	    outputs: string[];
	}

	import { IExpression } from "./IExpression";
	export interface ITrailingExpression {
	    steps: string[];
	    outputs: IExpression[];
	    rawString: string;
	}

	export {};

}