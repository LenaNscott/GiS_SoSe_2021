let x: string = "Hallo";
console.log(x);         //Es wird x in der Kosole ausgegeben in dem Fall den String "Hallo", 
func1(x);               //danach wird der Fuktion "func1" der Parameter x übergeben welcherin der Funktion mit "Bla" überschrieben wird
console.log(x);         // als nächstes wird wieder x ausgegeben in diesem Fall wieder der String "Hallo"
func2();                // die Funktion "func2" wird aufgerufen und x wird in der Konsole ausgegeben in dem Fall "Blubb"
func3();                // die Funktion "func3" wird aufgerufen 
console.log(x);         // es wird wieder x in der Konsole ausgegeben in dem Fall wieder den string "Hallo"

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}

// b) globale Variablen: kann von überall drauf zugreifen
// lokale Variable: existiert nur zwischen {}
// übergabeparameter: ein/mehrere Parameter wird einer Fuktion übergeben
// Variable/Funktionen Unterschied: Variablen müssen deklariert werden
// Variablen/Fuktionen gemeinsamkeiten: brauchen einen Befehl zum aufrufen