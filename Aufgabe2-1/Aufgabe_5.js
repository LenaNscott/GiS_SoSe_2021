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
function aufzaelen() {
    let i = 1;
    let j = 0;
    while (i <= 100) {
        j += i;
        i++;
    }
    console.log(j);
}
aufzaelen();
//d)
function getRandomInt(max) {
    for (var i = 0; i < 10; i++)
        console.log(Math.random() * 100);
}
getRandomInt(100);
//e) 
function factorial(n) {
    let ergebnis = 1;
    if (n < 1) {
        console.log(1);
    }
    else {
        let m = 1;
        while (m <= n) {
            ergebnis *= m;
            m++;
        }
    }
    console.log(ergebnis);
}
factorial(5);
//f)
/*
 function leapyears(n: number) {
   if (n / 4) {
     if (n / 400) console.log(n);
     else (n !/ 100);
 n++
 }
 }
 leapyears(1900);
 */ 
//# sourceMappingURL=Aufgabe_5.js.map