import * as fs from 'fs';
export default {
    jsonFilter: (k, v) => {
        if (k === 'START_CHARS_HINT' || k === 'categoryMatchesMap' || k === 'categoryMatches')
            return undefined;
        else
            return v;
    },
    _console(data) {
        const str = JSON.stringify(data, this.jsonFilter, 2);
        console.log(str);
    },
    printToFile(data, filePrefix) {
        const str = JSON.stringify(data, this.jsonFilter, 2);
        let fname = filePrefix ? filePrefix : '_test';
        fname = 'devTesting/result_' + fname + '.json';
        fs.writeFileSync(fname, str);
        console.log('Written to ' + fname);
    }
};
//# sourceMappingURL=Utils.js.map