"use strict";
//a)
function backwards(b) {
    let a = [];
    for (let i = 0; i < b.length; i++) {
        a.push(b[b.length - i - 1]);
    }
    return a;
}
let a = [5, 4, 2, 8, 3];
//backwards(a);
//b)
function join(...args) {
    let arr = [];
    let argsKopie = args.slice();
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < argsKopie[i].length; j++) {
            arr.push(argsKopie[i][j]);
        }
    }
    return arr;
}
let b = [1, 2, 3, 4];
let c = [5, 6, 7, 8];
let d = [9, 10, 11];
//c)
function split(array, kleinerIndex, grosserIndex) {
    if (kleinerIndex < 0 || grosserIndex < 0) {
        console.log("Zahlen müssen positiv sein");
        return [];
    }
    else if (array.length <= grosserIndex) {
        console.log("IndexOutOfBounds");
        return [];
    }
    else if (grosserIndex < kleinerIndex) {
        console.log("Der größere Index muss größer sein als der kleine Index");
        return [];
    }
    else {
        let ergebnis = [];
        for (let i = kleinerIndex; i <= grosserIndex; i++) {
            ergebnis.push(array[i]);
        }
        return ergebnis;
    }
}
let arr = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440]));
console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024])); // Bonus b)
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 3));
console.log(split(arr, 2, 0)); // Bonus c)
console.log(split(arr, -1, 2)); // Bonus c)
console.log(split(arr, 0, 7)); // Bonus c)
//# sourceMappingURL=Aufgabe2.js.map