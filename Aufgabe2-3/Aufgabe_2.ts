//a

button.addEventListener; 

class Kopf {

    _art: string;
    _farbe: string;
    _preis: number;

    constructor() {
        this._art = this._art;
        this._farbe = this._farbe;
        this._preis = this._preis;
    }

}

class Rumpf {

    _art: string;
    _farbe: string;
    _preis: number;

    constructor() {
        this._art = this._art;
        this._farbe = this._farbe;
        this._preis = this._preis;
    }

}

class Bein {

    _art: string;
    _farbe: string;
    _preis: number;

    constructor() {
        this._art = this._art;
        this._farbe = this._farbe;
        this._preis = this._preis;
    }

}

//B) 

let _koepfe: Kopf[];
let _ruempfe: Rumpf[];
let _beine: Bein[];

let _auswahl: [][][];

function auswahlSpeichernKopf(k: Kopf): number {
    for (let i = 0; i < _koepfe.length; i++) {
        if (k == _koepfe[i]) {
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