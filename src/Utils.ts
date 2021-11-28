import * as fs from 'fs';

export default {
    jsonFilter: (k: string, v: string) => {
        if (k === 'START_CHARS_HINT' || k === 'categoryMatchesMap' || k === 'categoryMatches') return undefined;
        else return v;
    },
    _console(data) {
        const str = JSON.stringify(data, this.jsonFilter, 2);
        console.log(str);
    },
    printToFile(data, filePrefix?) {
        const str = JSON.stringify(data, this.jsonFilter, 2);
        const fname = filePrefix ? filePrefix : (new Date().getTime());
        fs.writeFileSync('result_' + fname + '.json', str);
    }
}