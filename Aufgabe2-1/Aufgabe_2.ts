function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}

a2();

// Fuktion "a2" wird aufgerufen, i wird ausgegeben und von i eins abgezogen was dann das neue i ist, wenn dann i größer 0 ist gehts wieder von vorne los solange bis i=0 ist dann endet die while Schleife da 0 nicht größer als 0 ist. Also wird nacheinander 9 - 1 augegeben.