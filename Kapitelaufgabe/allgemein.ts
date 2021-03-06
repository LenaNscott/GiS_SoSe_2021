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

let auswahl: Auswahl;

if (document.cookie) {
    let cookieAuswahl: string[] = document.cookie.split("=");
    auswahl = JSON.parse(cookieAuswahl[1]); 
}

else {
    auswahl = {kopf: new Kopf("", "", "", "", 0, ""), koerper: new Koeper("", "", "", 0, ""), beine: new Beine(0, "", "", 0, "")};
}

async function ladenJsonDatei(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    let auswahlmoeglichkeiten: Auswahlmoeglichkeiten = await response.json();
    console.log("Response", auswahlmoeglichkeiten);
    koerperteilArray = getKoerperteileArray(auswahlmoeglichkeiten);
    //console.log(koerperteilArray);
    bild2.setAttribute("src", koerperteilArray[imgCtr].bild);
  }

function getKoerperteileArray (_auswahlmoeglichkeiten: Auswahlmoeglichkeiten): Koerperteile[] {
    let pname: string = window.location.pathname;
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
        let leeresKoerperteilArray: Koerperteile[];        
        return leeresKoerperteilArray;
    }
}

function buttonsFaerben (): void {
    if (auswahl.kopf.name != "") {
        let buttonKopf: HTMLElement =  document.getElementById("Kopf");
        buttonKopf.style.background = "green";
    }
    
    if (auswahl.koerper.name != "") {
        let buttonKoerper: HTMLElement =  document.getElementById("Koerper");
        buttonKoerper.style.background = "green";
    }
    
    if (auswahl.beine.name != "") {
        let buttonBein: HTMLElement =  document.getElementById("Bein");
        buttonBein.style.background = "green";
    }
}

