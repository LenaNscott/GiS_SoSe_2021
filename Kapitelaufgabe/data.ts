// Nr. 2c)
let auswahl: Auswahl;

if (document.cookie) {
    let cookieAuswahl: string[] = document.cookie.split("=");
    auswahl = JSON.parse(cookieAuswahl[1]); 
}

else {
    auswahl = {kopf: new Kopf("", "", "", "", 0, ""), koerper: new Koeper("", "", "", 0, ""), beine: new Beine(0, "", "", 0, "")};
}


let auswahlmoeglichkeiten: string;
let auswahlmoeglichkeitenTemp: Auswahlmoeglichkeiten = {kopf: [], koerper: [], beine: []};

let euleK: Kopf = new Kopf("Würmer", "braun", "rund", "Eule", 60, "Medien/eule.jpg");
let waschbaerK: Kopf = new Kopf("Müll", "dunkelbraun", "oval", "Waschbär", 20, "Medien/waschbaer-kopf-comic-cartoon-sticker.jpg");
let pferdK: Kopf = new Kopf("Karotte", "länglich", "Pferd", "braun", 500, "Medien/pferd.jpg");

auswahlmoeglichkeitenTemp.kopf.push(euleK, waschbaerK, pferdK);

let baerKo: Koeper = new Koeper("musoloes", "starkerMann", "dunkelbraun", 30, "Medien/muskoloes.jpg");
let lamaKo: Koeper = new Koeper("normal", "schwarzGekleidet", "schwarz", 10, "Medien/langweilig.jpg");
let eisbaerKo: Koeper = new Koeper("gutGebaut", "polizist", "blau", 700, "Medien/polizist.jpg");

auswahlmoeglichkeitenTemp.koerper.push(baerKo, lamaKo, eisbaerKo);

let elefantB: Beine = new Beine(4, "Elefant", "grau", 30, "Medien/elefant_beine.jpg");
let huhnB: Beine = new Beine(2, "Huhn", "gelb", 10, "Medien/huhn_beine.jpg");
let katzeB: Beine = new Beine(4, "Katze", "gemischt", 50, "Medien/katzen_beine.jpg");

auswahlmoeglichkeitenTemp.beine.push(elefantB, huhnB, katzeB);

auswahlmoeglichkeiten = JSON.stringify(auswahlmoeglichkeitenTemp);