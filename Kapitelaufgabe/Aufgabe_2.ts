//a



//B) 

let _koepfe: Kopf[];
let _ruempfe: Rumpf[];
let _beine: Bein[];

let _auswahl: [][][];



function auswahlSpeichernKopf(_k: Kopf): number {
    for (let i = 0; i < _koepfe.length; i++) {
        if (_k == _koepfe[i]) {
            return i;
        }

        else {
            console.log("Fehler");
        }
    }
}

function auswahlSpeichernRumpf(k: Rumpf): number {
    for (let i = 0; i < _ruempfe.length; i++) {
        if (k == _ruempfe[i]) {
            return i;
        }

        else {
            console.log("Fehler");
        }
    }
}

function auswahlSpeichernBein(k: Bein): number {
    for (let i = 0; i < _beine.length; i++) {
        if (k == _beine[i]) {
            return i;
        }

        else {
            console.log("Fehler");
        }
    }
}