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
// -1 wird nie positiv und somit wird immer wieder die Funktion aufgerufen und mit 2 subtrahiert und hängt in einer Dauerschleife fest. 
// Eine Lösung dafür wäre, den Betrag der Zahl zu nehmen oder bei negativen Zahlen statt -2, +2 dazu zu addieren.
//c)
//1
/*
interface Student {
    vorname: string;
    nachname: string;
    alter: number;
    matrikelnummer: number;
  }
*/
//5
class Student {
    constructor(_vorname, _nachname, _alter, _matrikelnummer) {
        this.vorname = _vorname;
        this.nachname = _nachname;
        this.alter = _alter;
        this.matrikelnummer = _matrikelnummer;
    }
    showInfo() {
        console.log(this.vorname);
        console.log(this.nachname);
        console.log(this.matrikelnummer);
        console.log(this.alter);
    }
}
//2
let s1 = new Student("Anna", "Mayer", 19, 234562);
let s2 = new Student("Lara", "Schulz", 20, 395727);
let s3 = new Student("Lisa", "Müller", 20, 564739);
//3
let stud = [s1, s2, s3];
stud.push(new Student("Bea", "Baum", 22, 341289));
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