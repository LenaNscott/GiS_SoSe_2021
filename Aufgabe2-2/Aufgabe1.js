"use strict";
//a)
function min(...args) {
    let mini = args[0];
    for (let i = 1; i < args.length; i++) {
        if (mini > args[i]) {
            mini = args[i];
        }
    }
    console.log(mini);
}
min(3, 6, 5, 1);
//b)
function isEven(c) {
    if (c == 0) {
        console.log(true);
    }
    else if (c == 1) {
        console.log(false);
    }
    else {
        c -= 2;
        isEven(c);
    }
}
isEven(50);
//2
let s1 = { vorname: "Anna", nachname: "Mayer", alter: 19, matrikelnummer: 234562 };
let s2 = { vorname: "Lara", nachname: "Schulz", alter: 20, matrikelnummer: 395727 };
let s3 = { vorname: "Lisa", nachname: "Müller", alter: 20, matrikelnummer: 564739 };
//3!
let stud = [s1, s2, s3];
stud.push({ vorname: "Bea", nachname: "Baum", alter: 22, matrikelnummer: 341289 });
console.log(stud[0]);
//4
function showInfo(s) {
    console.log(s.vorname);
    console.log(s.nachname);
    console.log(s.matrikelnummer);
    console.log(s.alter);
}
showInfo(stud[0]);
showInfo(stud[1]);
showInfo(stud[2]);
showInfo(stud[3]);
//# sourceMappingURL=Aufgabe1.js.map