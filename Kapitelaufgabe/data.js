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
let auswahlmoeglichkeitenTemp = { kopf: [], koerper: [], beine: [] };
let euleK = new Kopf("Würmer", "braun", "rund", "Eule", 60, "Medien/eule.jpg");
let waschbaerK = new Kopf("Müll", "dunkelbraun", "oval", "Waschbär", 20, "Medien/waschbaer-kopf-comic-cartoon-sticker.jpg");
let pferdK = new Kopf("Karotte", "länglich", "Pferd", "braun", 500, "Medien/pferd.jpg");
auswahlmoeglichkeitenTemp.kopf.push(euleK, waschbaerK, pferdK);
let baerKo = new Koeper("rund", "Bär", "hellbraun", 30, "Medien/bär_koerper.jpg");
let lamaKo = new Koeper("mollig", "Lama", "hell", 40, "Medien/lama_koerper.jpg");
let eisbaerKo = new Koeper("fett", "Eisbär", "weiß", 70, "Medien/eisbaer_koerper.jpg");
auswahlmoeglichkeitenTemp.koerper.push(baerKo, lamaKo, eisbaerKo);
let elefantB = new Beine(4, "Elefant", "grau", 30, "Medien/elefant_beine.jpg");
let huhnB = new Beine(2, "Huhn", "gelb", 10, "Medien/huhn_beine.jpg");
let katzeB = new Beine(4, "Katze", "gemischt", 50, "Medien/katzen_beine.jpg");
auswahlmoeglichkeitenTemp.beine.push(elefantB, huhnB, katzeB);
auswahlmoeglichkeiten = JSON.stringify(auswahlmoeglichkeitenTemp);
//# sourceMappingURL=data.js.map