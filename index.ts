import { CstNodeCollector } from "./src/CstNodeCollector";
import JParser from "./src/JParser";
import JParser2 from "./src/JParser2";
import JPL from "./src/JPL";

Array.prototype['last'] = function () {
    return this[this.length - 1];
};
new JParser().parse();


