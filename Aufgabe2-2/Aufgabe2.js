"use strict";
//a)
function backwards(b) {
    let a = b.slice();
    a.reverse();
    return a;
}
let a = [5, 4, 2, 8, 3];
//backwards(a);
//b)
function join(..._args) {
    let arr = [];
    let args = _args.slice();
    for (let i = 0; i < args.length; i++) {
        arr = arr.concat(args[i]);
    }
    return arr;
}
let b = [1, 2, 3, 4];
let c = [5, 6, 7, 8];
let d = [9, 10, 11];
//c)
function split(array, kleinerIndex, großerIndex) {
    if (kleinerIndex < 0 || großerIndex < 0) {
        console.log("Zahlen müssen positiv sein");
        return [];
    }
    else if (array.length <= großerIndex) {
        console.log("IndexOutOfBounds");
        return [];
    }
    else if (großerIndex < kleinerIndex) {
        console.log("Der größere Index muss größer sein als der kleine Index");
        return [];
    }
    else {
        let ergebnis;
        ergebnis = array.slice(kleinerIndex, großerIndex);
        return ergebnis;
    }
}
//split([1, 2, 3, 4], 1, 3);
let arr = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440]));
console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024])); // Bonus b)
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));
console.log(split(arr, 2, 0)); // Bonus c)
console.log(split(arr, -1, 2)); // Bonus c)
console.log(split(arr, 0, 7)); // Bonus c)
//# sourceMappingURL=Aufgabe2.js.map