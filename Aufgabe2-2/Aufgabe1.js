"use strict";
//a)
function min(...args) {
    let mini = args[0];
    for (let i = 0; i < a.length; i++) {
        if (mini[0] > args[i]) {
            mini[0] = args[i];
        }
        console.log(mini);
    }
}
min(3, 6, 5);
//b)
function isEven(c) {
    if (c == 0) {
        return (true);
    }
    if (c == 1) {
        return (false);
    }
    else {
        c -= 2;
        isEven(c);
    }
}
isEven(50);
let s1 = { vorname: "Anna", nachname: "Mayer", alter: 19, matrikelnummer: 234562 };
let s2 = { vorname: "Lara", nachname: "Schulz", alter: 20, matrikelnummer: 395727 };
let s3 = { vorname: "Lisa", nachname: "Müller", alter: 20, matrikelnummer: 564739 };
let stud = [s1, s2, s3];
stud.push({ vorname: "Bea", nachname: "Baum", alter: 22, matrikelnummer: 341289 });
console.log(stud[0]);
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
/*class Student {

  constructor () {
  let vorname: string;
  let nachname: string;
  let alter: number;
  let matrikelnummer: number;
  }

s4 = new Student();
Student.s4: (vorname: "Anna", nachname: "Mayer" , alter: 19 , matrikelnummer: 234562)
s5 = new Student();
Student.s5: (vorname: "Lara", nachname: "Schulz" , alter: 20 , matrikelnummer: 395727)
s6 = new Student();
Student.s6: (vorname: "Lisa", nachname: "Müller" , alter: 20 , matrikelnummer: 564739)

const stud: new Array<Text>(this.s4, this.s5, this.s6);


  public showInfo(s: Student) {
  console.log(s.vorname);
  console.log(s.nachname);
  console.log(s.matrikelnummer);
  console.log(s.alter);
  }

showInfo(stud[0]);
showInfo(stud[1]);
showInfo(stud[2]);
showInfo(stud[3]);
} */ 
//# sourceMappingURL=Aufgabe1.js.map