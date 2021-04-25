"use strict";
let x = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);
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
/* a)
Es wird x in der Konsole ausgegeben in dem Fall den String "Hallo",
danach wird die Fuktion "func1" der Parameter x übergeben welcher in der Funktion mit "Bla" überschrieben wird
als nächstes wird wieder x ausgegeben in diesem Fall wieder der String "Hallo" (da der string "Bla" eine lokale Variable ist)
die Funktion "func2" wird aufgerufen und x wird in der Konsole ausgegeben in dem Fall "Blubb" (lokale Variable)
die Funktion "func3" wird aufgerufen und "Test" in der Konsole ausgegeben
es wird wieder x in der Konsole ausgegeben in dem Fall wieder den string "Hallo" (der string ist global)
gesamt wird "Hallo Bla Hallo Blubb Test Hallo" ausgegeben

b) globale Variablen: kann von überall drauf zugreifen
lokale Variable: existiert nur zwischen {}
übergabeparameter: ein/mehrere Variablen wird einer Funktion übergeben
Variable/Funktionen Unterschied: Variable speichert einen Wert, Funktionen führen eine Aktion aus
Variablen/Fuktionen Gemeinsamkeiten: müssen deklariert werden, haben einen Gültigkeitsbereich
*/ 
//# sourceMappingURL=Aufgabe_4.js.map