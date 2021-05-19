"use strict";
// Nr. 2c)
let auswahl;
if (document.cookie) {
    let cookieAuswahl = document.cookie.split("=");
    auswahl = JSON.parse(cookieAuswahl[1]);
}
else {
    auswahl = { kopf: new Kopf("", "", "", "", 0, ""), koerper: new Koeper("", "", "", 0, ""), beine: new Beine(0, "", "", 0, "") };
}
let auswahlmoeglichkeiten;
let auswahlmoeglichkeitenTemp = {
    "kopf": [
        {
            "name": "rund",
            "farbe": "Eule",
            "preis": 60,
            "bild": "Medien/eule.jpg",
            "essen": "Würmer",
            "kopfform": "braun",
            "koerperform": "",
            "anzahl": 0
        },
        {
            "name": "oval",
            "farbe": "Waschbär",
            "preis": 20,
            "bild": "Medien/waschbaer-kopf-comic-cartoon-sticker.jpg",
            "essen": "Müll", "kopfform": "dunkelbraun",
            "koerperform": "",
            "anzahl": 0
        },
        {
            "name": "Pferd",
            "farbe": "braun",
            "preis": 500,
            "bild": "Medien/pferd.jpg",
            "essen": "Karotte",
            "kopfform": "länglich",
            "koerperform": "",
            "anzahl": 0
        }
    ],
    "koerper": [
        {
            "name": "starkerMann",
            "farbe": "dunkelbraun",
            "preis": 30,
            "bild": "Medien/muskoloes.jpg",
            "koerperform": "musoloes",
            "kopfform": "",
            "essen": "",
            "anzahl": 0
        },
        {
            "name": "schwarzGekleidet",
            "farbe": "schwarz",
            "preis": 10,
            "bild": "Medien/langweilig.jpg",
            "koerperform": "normal",
            "kopfform": "",
            "essen": "",
            "anzahl": 0
        },
        {
            "name": "polizist",
            "farbe": "blau",
            "preis": 700,
            "bild": "Medien/polizist.jpg",
            "koerperform": "gutGebaut",
            "kopfform": "",
            "essen": "",
            "anzahl": 0
        }
    ],
    "beine": [
        {
            "name": "Elefant",
            "farbe": "grau",
            "preis": 30,
            "bild": "Medien/elefant_beine.jpg",
            "anzahl": 4,
            "essen": "",
            "kopfform": "",
            "koerperform": ""
        },
        {
            "name": "Huhn",
            "farbe": "gelb",
            "preis": 10,
            "bild": "Medien/huhn_beine.jpg",
            "anzahl": 2,
            "essen": "",
            "kopfform": "",
            "koerperform": ""
        },
        {
            "name": "Katze",
            "farbe": "gemischt",
            "preis": 50,
            "bild": "Medien/katzen_beine.jpg",
            "anzahl": 4,
            "essen": "",
            "kopfform": "",
            "koerperform": ""
        }
    ]
};
//let auswahlmoeglichkeitenTemp: Auswahlmoeglichkeiten = {kopf: [], koerper: [], beine: []};
/*
let euleK: string = {'
    "essen": "Würmer", "farbe": "braun", "kopfform": "rund", "name": "Eule", "preis": 60, "bild": "Medien/eule.jpg", "koerperform": "", "anzahl": 0
'};

let waschbaerK: Kopf = {
    "essen": "Müll", "farbe": "dunkelbraun", "kopfform": "oval", "name": "Waschbär", "preis": 20, "bild": "Medien/waschbaer-kopf-comic-cartoon-sticker.jpg", "koerperform": "", "anzahl": 0
};

let pferdK: Kopf = {
    "essen": "Karotte", "kopfform": "länglich", "name": "Pferd", "farbe": "braun", "preis": 500, "bild": "Medien/pferd.jpg", "koerperform": "", "anzahl": 0
};


auswahlmoeglichkeiten += euleK;
auswahlmoeglichkeiten += waschbaerK;
auswahlmoeglichkeiten += pferdK;


let legoStKo: Koeper = {
    "koerperform": "musoloes", "name": "starkerMann", "farbe": "dunkelbraun", "preis": 30, "bild": "Medien/muskoloes.jpg", "essen": "", "kopfform": "", "anzahl": 0

};

let legoSwKo: Koeper = {
    "koerperform": "normal", "name": "schwarzGekleidet", "farbe": "schwarz", "preis": 10, "bild": "Medien/langweilig.jpg", "essen": "", "kopfform": "", "anzahl": 0
};

let legoPoKo: Koeper = {
    "koerperform": "gutGebaut", "name": "polizist", "farbe": "blau", "preis": 700, "bild": "Medien/polizist.jpg", "essen": "", "kopfform": "", "anzahl": 0
};


auswahlmoeglichkeiten += legoPoKo;
auswahlmoeglichkeiten += legoStKo;
auswahlmoeglichkeiten += legoSwKo;


let elefantB: Beine = {
    "anzahl": 4, "name": "Elefant", "farbe": "grau", "preis": 30, "bild": "Medien/elefant_beine.jpg", "essen": "", "koerperform": "", "kopfform": ""
};

let huhnB: Beine = {
    "anzahl": 2, "name": "Huhn", "farbe": "gelb", "preis": 10, "bild": "Medien/huhn_beine.jpg", "essen": "", "koerperform": "", "kopfform": ""
};

let katzeB: Beine = {
    "anzahl": 4, "name": "Katze", "farbe": "gemischt", "preis": 50, "bild": "Medien/katzen_beine.jpg", "essen": "", "koerperform": "", "kopfform": ""
};

auswahlmoeglichkeiten += elefantB;
auswahlmoeglichkeiten += huhnB;
auswahlmoeglichkeiten += katzeB;
*/
auswahlmoeglichkeiten = JSON.stringify(auswahlmoeglichkeitenTemp);
console.log(auswahlmoeglichkeiten);
//# sourceMappingURL=data.js.map