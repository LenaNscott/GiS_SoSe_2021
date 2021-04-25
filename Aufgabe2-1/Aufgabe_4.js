"use strict";
let x = "Hallo";
console.log(x); //Es wird x in der Kosole ausgegeben in dem Fall den String "Hallo", 
func1(x); //danach wird die Fuktion "func1" der Parameter x übergeben welcher in der Funktion mit "Bla" überschrieben wird
console.log(x); // als nächstes wird wieder x ausgegeben in diesem Fall wieder der String "Hallo" (da der string "Bla" eine lokale Variable ist)
func2(); // die Funktion "func2" wird aufgerufen und x wird in der Konsole ausgegeben in dem Fall "Blubb"
func3(); // die Funktion "func3" wird aufgerufen und "Test" in der Konsole ausgegeben
console.log(x); // es wird wieder x in der Konsole ausgegeben in dem Fall wieder den string "Hallo" (der string ist global)
function func1(y) {
    y = "Bla";
    console.log(y);
}
function func2() {
    let x = "Blubb";
    console.log(x);
}
function func3() {
    x = "Test";
}
// b) globale Variablen: kann von überall drauf zugreifen
// lokale Variable: existiert nur zwischen {}
// übergabeparameter: ein/mehrere Parameter wird einer Fuktion übergeben
// Variable/Funktionen Unterschied: Variablen müssen deklariert werden
// Variablen/Fuktionen gemeinsamkeiten: brauchen einen Befehl zum aufrufen
//# sourceMappingURL=Aufgabe_4.js.map