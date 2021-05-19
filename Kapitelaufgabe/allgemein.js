"use strict";
class Koerperteile {
    constructor(_name, _farbe, _preis, _bild) {
        this.name = _name;
        this.farbe = _farbe;
        this.preis = _preis;
        this.bild = _bild;
    }
}
class Kopf extends Koerperteile {
    constructor(_essen, _kopfform, _name, _farbe, _preis, _bild) {
        super(_name, _farbe, _preis, _bild);
        this.essen = _essen;
        this.kopfform = _kopfform;
    }
}
class Koeper extends Koerperteile {
    constructor(_koerperform, _name, _farbe, _preis, _bild) {
        super(_name, _farbe, _preis, _bild),
            this.koerperform = _koerperform;
    }
}
class Beine extends Koerperteile {
    constructor(_anzahl, _name, _farbe, _preis, _bild) {
        super(_name, _farbe, _preis, _bild),
            this.anzahl = _anzahl;
    }
}
function getAuswahlmoeglichkeiten() {
    return JSON.parse(auswahlmoeglichkeiten);
}
function getKoerperteileArray() {
    let pname = window.location.pathname;
    if (pname.indexOf("kopf") != -1) {
        return getAuswahlmoeglichkeiten().kopf;
    }
    else if (pname.indexOf("koerper") != -1) {
        return getAuswahlmoeglichkeiten().koerper;
    }
    else if (pname.indexOf("bein") != -1) {
        return getAuswahlmoeglichkeiten().beine;
    }
    else {
        let leeresKoerperteilArray;
        return leeresKoerperteilArray;
    }
}
function buttonsFaerben() {
    if (auswahl.kopf.name != "") {
        let buttonKopf = document.getElementById("Kopf");
        buttonKopf.style.background = "green";
    }
    if (auswahl.koerper.name != "") {
        let buttonKoerper = document.getElementById("Koerper");
        buttonKoerper.style.background = "green";
    }
    if (auswahl.beine.name != "") {
        let buttonBein = document.getElementById("Bein");
        buttonBein.style.background = "green";
    }
}
//# sourceMappingURL=allgemein.js.map