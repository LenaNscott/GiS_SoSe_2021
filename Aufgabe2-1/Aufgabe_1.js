"use strict";
function a1() {
    let x = "Alles"; // Aufgabe 1 a) Klein- und Großbuchstaben mit Zahlen können genutzt werden, was nicht geht sind Leerzeichen und nur Zahlen
    console.log(x); //2
    func11(); //3
    console.log("Logo!"); //5
}
a1(); //1.
function func11() {
    console.log("Klar?"); //4
}
// Aufgabe 1 b) Funktion "a1" wird aufgerufen und x Aufgerufen/ausgegeben danach die Funktion "func1" vobei "klar?" ausgegeben wird und als letztes wird "Logo!" ausgegeben.
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
    console.log("Klar?");
}
function func33() {
    console.log("Gute!");
}
//# sourceMappingURL=Aufgabe_1.js.map