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
//# sourceMappingURL=klassen.js.map