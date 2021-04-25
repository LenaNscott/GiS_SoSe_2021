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
    while (i <= 100)
        j += i;
    i++;
    console.log(j);
}
aufzaelen();
//d)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
console.log(getRandomInt(101));
getRandomInt(100);
//e) 
function factorial(n) {
    if (n < 1) {
        console.log(1);
    }
    let m;
    {
        while (m < 1)
            m = n * (n - 1);
    }
    console.log(m);
}
factorial(4);
//f)
function leapyears(n) {
    if (n / 4) {
        if (n / 400)
            console.log(n);
        else
            (n / 100);
        n++;
    }
    leapyears(1900);
}
//# sourceMappingURL=Aufgabe_5.js.map