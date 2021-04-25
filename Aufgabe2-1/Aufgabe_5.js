"use strict";
//a)
function multiply(a, b) {
    let c = a * b;
    console.log(c);
}
multiply(2, 4);
//b)
function max(f, g) {
    let h = f;
    let i = g > f;
    if (i == true) {
        h = g;
    }
    console.log(h);
}
max(5, 20);
//c)
function Aufzaelen() {
    let i = 1;
    let j = 0;
    while (i <= 100) {
        j += i;
        i++;
    }
    console.log(j);
}
Aufzaelen();
//d)
function getRandomInt(max) {
    for (var i = 0; i < 10; i++)
        console.log(Math.random() * 100);
}
getRandomInt(100);
//e) 
function factorial(n) {
    if (n < 1) {
        console.log(1);
    }
    else {
        let ergebnis = 1;
        let m = 1;
        while (m <= n) {
            ergebnis *= m;
            m++;
        }
        console.log(ergebnis);
    }
}
factorial(5);
//f)
function leapyears() {
    let year = 1900;
    while (year <= 2021) {
        if (year % 400 == 0) {
            console.log(year);
        }
        else if (year % 4 == 0 && year % 100 != 0) {
            console.log(year);
        }
        year++;
    }
}
leapyears();
//# sourceMappingURL=Aufgabe_5.js.map