import JParser from "./src/JParser";
import JPL from "./src/JPL";

Array.prototype['last'] = function () {
    return this[this.length - 1];
};
const parser = new JParser();
parser.parseTest();

