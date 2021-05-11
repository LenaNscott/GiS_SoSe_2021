"use strict";
// Nr. 2c)
let auswahlmoeglichkeiten = { kopf: [], koerper: [], beine: [] };
let euleKJSON = JSON.stringify(new Kopf("Würmer", "braun", "rund", "Eule", 60, "Medien/eule.jpg"));
let waschbaerKJSON = JSON.stringify(new Kopf("Müll", "dunkelbraun", "oval", "Waschbär", 20, "Medien/waschbaer-kopf-comic-cartoon-sticker.jpg"));
let pferdKJSON = JSON.stringify(new Kopf("Karotte", "länglich", "Pferd", "braun", 500, "Medien/pferd.jpg"));
let euleKObj = JSON.parse(euleKJSON);
let waschbaerKObj = JSON.parse(waschbaerKJSON);
let pferdKObjt = JSON.parse(pferdKJSON);
let euleK = new Kopf(euleKObj.essen, euleKObj.kopfform, euleKObj.farbe, euleKObj.name, euleKObj.preis, euleKObj.bild);
let waschbaerK = new Kopf(waschbaerKObj.essen, waschbaerKObj.farbe, waschbaerKObj.kopfform, waschbaerKObj.name, waschbaerKObj.preis, waschbaerKObj.bild);
let pferdK = new Kopf(pferdKObjt.essen, pferdKObjt.kopfform, pferdKObjt.name, pferdKObjt.farbe, pferdKObjt.preis, pferdKObjt.bild);
auswahlmoeglichkeiten.kopf.push(euleK, waschbaerK, pferdK);
//# sourceMappingURL=data.js.map