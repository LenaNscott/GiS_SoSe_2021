"use strict";
// Nr. 2c)
let auswahlmoeglichkeiten = { kopf: [], koerper: [], beine: [] };
let euleKJSON = JSON.stringify(new Kopf("Würmer", "braun", "rund", "Eule", 60, "Medien/eule.jpg"));
let waschbaerKJSON = JSON.stringify(new Kopf("Müll", "dunkelbraun", "oval", "Waschbär", 20, "Medien/waschbaer-kopf-comic-cartoon-sticker.jpg"));
let pferdKJSON = JSON.stringify(new Kopf("Karotte", "länglich", "Pferd", "braun", 500, "Medien/pferd.jpg"));
auswahlmoeglichkeiten.kopf.push(euleKJSON, waschbaerKJSON, pferdKJSON);
let baerJSON = JSON.stringify(new Koeper("rund", "Bär", "hellbraun", 30, "Medien/bär_koerper.jpg"));
let lamaJSON = JSON.stringify(new Koeper("mollig", "Lama", "hell", 40, "Medien/lama_koerper.jpg"));
let eisbaerJSON = JSON.stringify(new Koeper("fett", "Eisbär", "weiß", 70, "Medien/eisbaer_koerper.jpg"));
auswahlmoeglichkeiten.koerper.push(baerJSON, lamaJSON, eisbaerJSON);
let elefantJSON = JSON.stringify(new Beine(4, "Elefant", "grau", 30, "Medien/elefant_beine.jpg"));
let huhnJSON = JSON.stringify(new Beine(2, "Huhn", "gelb", 10, "Medien/huhn_beine.jpg"));
let katzeJSON = JSON.stringify(new Beine(4, "Katze", "gemischt", 50, "Medien/katzen_beine.jpg"));
auswahlmoeglichkeiten.beine.push(elefantJSON, huhnJSON, katzeJSON);
//# sourceMappingURL=data.js.map