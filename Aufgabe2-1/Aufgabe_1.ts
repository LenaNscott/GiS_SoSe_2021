function a1(): void {
    let x: string = "Alles";  
    console.log(x); //2
    func11(); //3
    console.log("Logo!"); //5
}

a1(); //1.

function func11(): void {
    console.log("Klar?"); //4
}
// Aufgabe 1 a) Es wird "Alles Klar? Logo!" ausgegeben. Klein- und Großbuchstaben mit Zahlen können genutzt werden sowei Unterstrich und $, was nicht geht sind Leerzeichen, nur Zahlen oder Zahlen am Anfang, Bindestriche und Schlüsselwörter

// Aufgabe 1 b) Funktion "a1" wird aufgerufen und x ausgegeben ("Alles") danach wird innerhalb der Funktion "a1" die Funktion "func11" aufgerufen und "klar?" ausgegeben und als letztes wird "Logo!" ausgegeben.

// c)

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
    console.log("klar?");
}

function func33(): void {
    console.log("Gute!");
}