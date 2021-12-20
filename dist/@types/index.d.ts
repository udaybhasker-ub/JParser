declare module parser
{
	export enum Queries {
	    outwiredFields = "/fieldDeclaration[/fieldModifier/annotation?{/At(image=\"@\") && /typeName/Identifier(image=\"Autowired\")}]:[/fieldModifier/annotation/typeName/Identifier:[image#annotation], /unannType/unannClassType/Identifier:[image#className], /variableDeclaratorList/variableDeclaratorId/Identifier:[image#instanceId]]",
	    allImports = "/importDeclaration/Import:[image#import]",
	    allMethods = "/methodDeclaration/methodHeader/methodDeclarator/Identifier:[image#methodName]",
	    classNames = "/classDeclaration/normalClassDeclaration/typeIdentifier/Identifier:[image#javaClass]",
	    serviceWithoutThis = "/methodDeclaration@/methodBody/blockStatements/fqnOrRefType[/fqnOrRefTypePartFirst/Identifier?{(image=\"@1\")}]:[@methodDeclaration/methodHeader/methodDeclarator/Identifier:[image#sourceMethod], /fqnOrRefTypePartFirst/Identifier:[image#componentInstance], /fqnOrRefTypePartRest/Identifier:[image#componentMethod]]",
	    serviceWithThis = "/methodDeclaration@/methodBody/block/blockStatements/blockStatement/expression/expression/primary[?{/primarySuffix~0/Identifier(image=\"@1\")}]:[@methodDeclaration/methodHeader/methodDeclarator/Identifier:[image#sourceMethod], /primarySuffix~0/Identifier:[image#componentInstance], /primarySuffix~1/Identifier:[image#componentMethod]]",
	    methodRequestMappings = "/methodDeclaration@/methodModifier/annotation[?{/At(image=\"@\") && /typeName/Identifier(image=\"RequestMapping\")}]:[/@methodDeclaration/methodHeader/methodDeclarator/Identifier:[image#methodName], /elementValuePairList/elementValuePair/elementValue/expression/primaryPrefix/literal/StringLiteral:[image#requestPath], /elementValuePairList/elementValuePair[?{/Identifier(image=\"method\")}]/elementValue~0/fqnOrRefTypePartRest/fqnOrRefTypePartCommon/Identifier:[image#method1], /elementValuePairList/elementValuePair[?{/Identifier(image=\"method\")}]/elementValue~1/fqnOrRefTypePartRest/fqnOrRefTypePartCommon/Identifier:[image#method2]]"
	}
	export class ComponentParser {
	    name: string;
	    contentString: string;
	    options: any;
	    test: boolean;
	    constructor(name: any, contentString: any, options?: any);
	    parse(): {
	        componentCalls: {};
	        requestMappings: any[];
	        errors: any[];
	    };
	    getMethodRequestMappings(cstNode: any): any[];
	    getAllServiceCalls(cstNode: any): {};
	    parseTest(serviceName: any): void;
	    getResults(cst: any, query: any): any;
	    private getQuery;
	}

	export default class CreateSequenceDiagram {
	    data: any;
	    constructor(data: any);
	    generateTxtFile(): void;
	    findServiceMethodDaoCalls(serviceName: any, methodName: any): {
	        mappings: any[];
	        lanes: any[];
	    };
	    writeToTxtFile(contentString: any): void;
	}

	import * as JP from "java-parser";
	import { IConditionalBlock } from "./models/JPL/@types/IConditionalBlock";
	import { IExpression } from "./models/JPL/@types/IExpression";
	export class DynamicCollector extends JP.BaseJavaCstVisitorWithDefaults {
	    collectorName: string;
	    collectorMethodList: string[];
	    results: {};
	    parent: any;
	    returningParent: any;
	    queryExpression: any;
	    isTrailingStep: any;
	    conditionalBlock: any;
	    matchedConditionCount: any;
	    finalResults: any[];
	    constructor(collectorMethodList: string[], queryExpression: IExpression, finalResults: any[], conditionalBlock?: IConditionalBlock);
	    $checkPathMatched(path: any, fullPath: any): boolean;
	    visit(ctx: any, param?: any): {};
	}

	export default class JParser {
	    projectPath: any;
	    results: any;
	    testFileName: any;
	    showLogs: any;
	    constructor(projectPath: any, options?: any);
	    extract(): Promise<{}>;
	    private getComponentResults;
	    private traverseDir;
	    private readFile;
	    getResultsFromFile(cacheFilePath: any): Promise<unknown>;
	}

	const _default: {
	    jsonFilter: (k: string, v: string) => string;
	    _console(data: any): void;
	    printToFile(data: any, filePrefix?: any): void;
	};
	export default _default;

	import { ICondition } from "./JPL/@types/ICondition";
	import { IConditionalExpression } from "./JPL/@types/IConditionalExpression";
	export default class Condition implements ICondition {
	    steps: string[];
	    expression: IConditionalExpression;
	    rawString: string;
	    evaluateAt: string;
	    isEmpty: boolean;
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
	    outputAt: string;
	    outputName: string;
	    outputAliases: any[];
	    inputAliases: any[];
	    allSteps: Set<string>;
	    constructor(rawString?: string, options?: any);
	    parse(): this;
	    private getAllSteps;
	}

	import { ITrailingExpression } from "./JPL/@types/ITrailingExpression";
	export default class TrailingExpression implements ITrailingExpression {
	    steps: string[];
	    outputs: any[];
	    rawString: string;
	    outputAt: string;
	    isEmpty: boolean;
	    constructor(steps: any, filterString: any);
	    private execRegex;
	}

	import { IConditionalExpression } from "./IConditionalExpression";
	export interface ICondition {
	    steps: string[];
	    expression: IConditionalExpression;
	    evaluateAt?: string;
	    isEmpty: boolean;
	    rawString: string;
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
	    operator: string;
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
	    outputAt: string;
	    outputName: string;
	    outputAliases: any[];
	    inputAliases: any[];
	    allSteps: Set<string>;
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
	    outputAt: string;
	    isEmpty: boolean;
	}

	export { default as JParser } from './src/JParser';

	const _default: {
	    LOGIN: string;
	    CONTROLLER: string;
	};
	export default _default;

}