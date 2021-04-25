"use strict";
function a1() {
    let x = "Alles";
    console.log(x); //2
    func11(); //3
    console.log("Logo!"); //5
}
a1(); //1.
function func11() {
    console.log("Klar?"); //4
}
// Aufgabe 1 a) Es wird "Alles Klar? Logo!" ausgegeben. Klein- und Großbuchstaben mit Zahlen können genutzt werden sowei Unterstrich und $, was nicht geht sind Leerzeichen, nur Zahlen oder Zahlen am Anfang, Bindestriche und Schlüsselwörter
// Aufgabe 1 b) Funktion "a1" wird aufgerufen und x ausgegeben ("Alles") danach wird innerhalb der Funktion "a1" die Funktion "func11" aufgerufen und "klar?" ausgegeben und als letztes wird "Logo!" ausgegeben.
// c)
function a3() {
    let x = "Alles";
    console.log(x);
    func33();
    console.log(x);
    func22();
    console.log(x);
    console.log("Logo!");
}
a3();
function func22() {
    console.log("klar?");
}
function func33() {
    console.log("Gute!");
}
//# sourceMappingURL=Aufgabe_1.js.map