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
        const fname = filePrefix ? filePrefix : '_test';
        fs.writeFileSync('devTesting/result_' + fname + '.json', str);
    },
    mergeArrays(arr1, arr2) {
        if (!arr1) arr1 = [];
        if (!arr2) arr2 = [];

        arr1 = [...arr1, ...arr2];
        return arr1;
    }
}