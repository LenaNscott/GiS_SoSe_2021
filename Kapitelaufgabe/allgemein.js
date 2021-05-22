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
let auswahl;
if (document.cookie) {
    let cookieAuswahl = document.cookie.split("=");
    auswahl = JSON.parse(cookieAuswahl[1]);
}
else {
    auswahl = { kopf: new Kopf("", "", "", "", 0, ""), koerper: new Koeper("", "", "", 0, ""), beine: new Beine(0, "", "", 0, "") };
}
async function communicate(_url) {
    let response = await fetch(_url);
    let auswahlmoeglichkeiten = await response.json();
    console.log("Response", auswahlmoeglichkeiten);
    koerperteilArray = getKoerperteileArray(auswahlmoeglichkeiten);
    console.log(koerperteilArray);
    bild2.setAttribute("src", koerperteilArray[imgCtr].bild);
    console.log(bild2);
}
function getKoerperteileArray(_auswahlmoeglichkeiten) {
    let pname = window.location.pathname;
    if (pname.indexOf("kopf") != -1) {
        return _auswahlmoeglichkeiten.kopf;
    }
    else if (pname.indexOf("koerper") != -1) {
        return _auswahlmoeglichkeiten.koerper;
    }
    else if (pname.indexOf("bein") != -1) {
        return _auswahlmoeglichkeiten.beine;
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