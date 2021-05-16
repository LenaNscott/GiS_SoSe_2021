class Koerperteile {

    name: string;
    farbe: string;
    preis: number;
    bild: string;
    essen: string;
    kopfform: string;
    koerperform: string;
    anzahl: number;

    constructor (_name: string, _farbe: string, _preis: number, _bild: string) {
        this.name = _name;
        this.farbe = _farbe;
        this.preis = _preis;
        this.bild = _bild;
    }
}

class Kopf extends Koerperteile {
    
    essen: string;
    kopfform: string;

    constructor (_essen: string, _kopfform: string, _name: string, _farbe: string, _preis: number, _bild: string) {
        super(_name, _farbe, _preis, _bild);
        this.essen = _essen;
        this.kopfform = _kopfform;
        
    }

}

class Koeper extends Koerperteile {
    koerperform: string;

    constructor (_koerperform: string, _name: string, _farbe: string, _preis: number, _bild: string) {
        super(_name, _farbe, _preis, _bild),
        this.koerperform = _koerperform;
    }
}

class Beine extends Koerperteile {

    anzahl: number;

    constructor (_anzahl: number, _name: string, _farbe: string, _preis: number, _bild: string) {
        super(_name, _farbe, _preis, _bild),
        this.anzahl = _anzahl;
    }
}

interface Auswahlmoeglichkeiten {
    kopf: Kopf [];
    koerper: Koeper [];
    beine: Beine [];
}

interface Auswahl {
    kopf: Kopf;
    koerper: Koeper;
    beine: Beine;
}

function getAuswahlmoeglichkeiten (): Auswahlmoeglichkeiten {
    return JSON.parse(auswahlmoeglichkeiten);
}

function getKoerperteileArray (): Koerperteile[] {
    switch (window.location.pathname) {
    case "/kopf.html": 
        return getAuswahlmoeglichkeiten().kopf;
    case "/koerper.html": 
        return getAuswahlmoeglichkeiten().koerper;
    case "/bein.html": 
        return getAuswahlmoeglichkeiten().beine;
    default:
        let leeresKoerperteilArray: Koerperteile[];        
        return leeresKoerperteilArray;
    }
}