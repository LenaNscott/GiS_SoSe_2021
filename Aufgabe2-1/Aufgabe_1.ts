function a1(): void {
    let x: string = "Alles";  // Aufgabe 1 a) Klein- und Großbuchstaben mit Zahlen können genutzt werden, was nicht geht sind Leerzeichen und nur Zahlen
    console.log(x); //2
    func11(); //3
    console.log("Logo!"); //5
}

a1(); //1.

function func11(): void {
    console.log("Klar?"); //4
}

// Aufgabe 1 b) Funktion "a1" wird aufgerufen und x Aufgerufen/ausgegeben danach die Funktion "func1" vobei "klar?" ausgegeben wird und als letztes wird "Logo!" ausgegeben.

function a3(): void {
    let x: string = "Alles";
    console.log(x);
    func33();
    console.log(x);
    func22();
    console.log(x);
    console.log("Logo!");
}

a3();

function func22(): void {
    console.log("Klar?");
}

function func33(): void {
    console.log("Gute!");
}