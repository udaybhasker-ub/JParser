import * as JP from "java-parser";

export enum Collectors {
    FIELD_DECLARATION = 'fieldDeclaration',
    ANNOTATION = "annotation",
    UNANN_CLASS_TYPE = "unannClassType",
    ALL_FIELD_NAMES = "allFieldNames",
    VAR_DEC_ID = "variableDeclaratorId"
};
export class CustomCollector extends JP.BaseJavaCstVisitorWithDefaults {
    collectorName: string = "";
    matchingName: string = "";
    allFieldNames: Set<string> = new Set<string>();
    customResult: any = {};

    constructor(collectorName, matchingName?) {
        super();
        this.validateVisitor();
        this.collectorName = collectorName;
        this.matchingName = matchingName;
        if (!collectorName) throw new Error("Please pass a collectorname for this custom collector!");
    }
    fieldDeclaration(ctx) {
        const key = Collectors.FIELD_DECLARATION;
        if (!this.$checkAndCreateResultField(key)) return super[key](ctx);

        try {
            if (!this.matchingName || ctx.name === this.matchingName) {
                this.customResult[key].push(ctx);
            }
        } catch (error) { console.error('error occured while collecting ' + key + 's') }
    }
    annotation(ctx: JP.AnnotationCtx, fieldIndex) {
        const key = Collectors.ANNOTATION;
        if (!this.$checkAndCreateResultField(key)) return;

        try {
            if (ctx.At) {
                if (!this.matchingName || (ctx.typeName && ctx.typeName[0].children.Identifier[0].image === this.matchingName)) {
                    ctx['fieldIndex'] = fieldIndex;
                    ctx['data'] = ctx.At[0].image + ctx.typeName[0].children.Identifier[0].image;
                    this.customResult[key].push(ctx);
                }
            }
        } catch (error) { }
    }
    variableDeclaratorId(ctx: JP.VariableDeclaratorIdCtx) {
        const key = Collectors.VAR_DEC_ID;
        if (!this.$checkAndCreateResultField(key)) return;

        try {
            this.customResult[key].push(ctx);
        } catch (error) { }
    }
    unannClassType(ctx: JP.UnannClassTypeCtx) {
        const key = Collectors.UNANN_CLASS_TYPE;
        if (!this.$checkAndCreateResultField(key)) return;

        try {
            this.customResult[key].push(ctx);
        } catch (error) { }
    }
    $getResults() {
        return this.customResult[this.collectorName];
    }
    $fieldNames(arr) {
        const key = Collectors.ALL_FIELD_NAMES;
        if (this.collectorName !== key) return false;

        arr.forEach(el => el && this.allFieldNames.add(el));
    }
    $checkAndCreateResultField(key) {
        if (this.collectorName !== key) return false;
        if (!this.customResult[key]) this.customResult[key] = [];
        return true;
    }
    visit(ctx, param?) {
        super.visit(ctx, param);
        return this;
    }
}