"use strict";
//a)
function Hashtags() {
    var f = "";
    for (var i = 0; i <= 6; i++) {
        f += "#";
        console.log(f);
    }
}
Hashtags();
//b) 
function Zahlenreihe() {
    var p = 1;
    while (p <= 100) {
        if (p % 3 == 0) {
            console.log("Fizz");
        }
        else if (p % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(p);
        }
        p++;
    }
}
Zahlenreihe();
// c)
function Zahlenreihe2() {
    var p = 1;
    while (p <= 100) {
        let s = "";
        if (p % 3 == 0) {
            s = "Fizz";
        }
        if (p % 5 == 0) {
            s += "Buzz";
        }
        if (p % 3 != 0 && p % 5 != 0) {
            s = String(p);
        }
        console.log(s);
        p++;
    }
}
Zahlenreihe2();
// d)
function Schachbrett() {
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
Schachbrett();
// e) 
function Schachbrett2(n) {
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
Schachbrett2(9);
//# sourceMappingURL=Aufgabe_6.js.map