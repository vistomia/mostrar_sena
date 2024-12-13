"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
function input() { var X = input; X.P = X.P || require("readline-sync"); return X.P.question(); } // _FREE_ONLY_
function write(text, endl) {
    if (endl === void 0) { endl = "\n"; }
    process.stdout.write("" + text + endl);
}
write("Qual seu nome", "");
write("?");
var nome = input();
write("Olá " + nome);
