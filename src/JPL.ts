// /typeName(@image="Autowired")
// /At(@.image="@") =  (?:(\w+)\(@.(\w+)="([\w|@]+)"\))
// G2: At(@.image="@") && typeName(@.image="Autowired")            ((\w+)\(@.(\w+)="([\w|@]+)"\))([&|\|]{2})?     (?:(\w+)\(@.(\w+)="([\w|@]+)"\))
// ?{A&&B}              
// [G1?{G2}] =         \[(.*)\?(?:{(.*)\})\]            
//G1: */fieldDeclaration/fieldModifier      \/([a-zA-Z0-9*]+)+?

import JPLExpression from "./models/JPLExpression";

//*/fieldDeclaration/fieldModifier[/x/abc/annotation?{At(@.image="@")&& typeName(@.image="Autowired") && tESRName(@.imG="wired")}]
export default {
    parsed: {
        guiding: { steps: [] },
        conditional: {
            steps: [],
            expression: {
                blocks: [
                    {
                        step: {},
                        key: '',
                        value: ''
                    }
                ],
                operator: ''
            }
        },
        trailing: {
            steps: [],
            output: []
        }
    },
    parseQuery(query) {
        //query = `/*/fieldDeclaration/fieldModifier[/a/annotation?{At(image="@") && typeName(image="Autowired") &&tESRName(imG="wired")}]/modifer2:[field1, field2]`;
        //query = `/*/fieldDeclaration/fieldModifier[?{At(image="@") && typeName(image="Autowired")}]:[field1, field2]`;

        const result = new JPLExpression(query);
        //console.log(JSON.stringify(result, null, 2));
        return result;
    },

    parseCondition(condition) {

        let regex2 = /((\w+)\(@.(\w+)="([\w|@]+)"\))(\s+[&|\|]{2}\s+)?/gi;
        let myRegexp2 = new RegExp(regex2, 'gi');
        myRegexp2.lastIndex = 0;
        var match;
        while (match = myRegexp2.exec(condition))
            console.log(match);

    }

}