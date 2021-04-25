"use strict";
//a)
function hashtags() {
    var f = "#";
    for (var j = 0; j <= 6; j++) {
        f += "#";
        console.log(f);
    }
}
hashtags();
//b) / C)
function zahlenreihe(p = 1) {
    while (p <= 100)
        ;
    if (p / 3 && p % 0) {
        console.log("Fizz");
    }
    if (p / 5 && p / 3) {
        console.log("Buzz");
    }
    if (p / 5 && p / 3 && p % 0) {
        console.log("FizzBuzz");
    }
}
zahlenreihe();
// d)
function schachbrett() {
    var s = "";
    for (var j = 0; j <= 3; j++) {
        for (var i = 0; i <= 3; i++) {
            s += " #";
        }
        s += "\n";
        for (var k = 0; k <= 3; k++) {
            s += "# ";
        }
        s += "\n";
    }
    console.log(s);
}
schachbrett();
// e) 
function schachbrett2(n) {
    var s = "";
    for (var l = 0; l < n; l++) {
        for (var i = 0; i < n; i++) {
            if ((i + l) % 2 == 0) {
                s += " ";
            }
            else {
                s += "#";
            }
        }
        s += "\n";
    }
    console.log(s);
}
schachbrett2(9);
//# sourceMappingURL=Aufgabe_6.js.map