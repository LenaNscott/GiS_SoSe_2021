// Nr. 2c)


let auswahlmoeglichkeiten: Auswahlmoeglichkeiten = {kopf: [], koerper: [], beine: []};
/*let kopf1: Kopf = new Kopf("Würmer", "braun", "rund", "Eule", 60, "Medien/eule.jpg");
auswahlmoeglichkeiten.kopf.push(new Kopf("Würmer", "braun", "rund", "Eule", 60, "Medien/eule.jpg"));
auswahlmoeglichkeiten.kopf.push(new Kopf("Müll", "dunkelbraun", "oval", "Waschbär", 20, "Medien/waschbaer-kopf-comic-cartoon-sticker.jpg"));
auswahlmoeglichkeiten.kopf.push(new Kopf("Karotte", "länglich", "Pferd", "braun", 500, "Medien/pferd.jpg")); */

let euleKJSON: string = JSON.stringify(new Kopf("Würmer", "braun", "rund", "Eule", 60, "Medien/eule.jpg"));
let waschbaerKJSON: string = JSON.stringify(new Kopf("Müll", "dunkelbraun", "oval", "Waschbär", 20, "Medien/waschbaer-kopf-comic-cartoon-sticker.jpg"));
let pferdKJSON: string = JSON.stringify(new Kopf("Karotte", "länglich", "Pferd", "braun", 500, "Medien/pferd.jpg"));

let euleKObj: Kopf = JSON.parse(euleKJSON);
let waschbaerKObj: Kopf = JSON.parse(waschbaerKJSON);
let pferdKObjt: Kopf = JSON.parse(pferdKJSON);

let euleK: Kopf = new Kopf (euleKObj.essen, euleKObj.kopfform, euleKObj.farbe, euleKObj.name, euleKObj.preis, euleKObj.bild);
let waschbaerK: Kopf = new Kopf(waschbaerKObj.essen, waschbaerKObj.farbe,  waschbaerKObj.kopfform, waschbaerKObj.name, waschbaerKObj.preis, waschbaerKObj.bild);
let pferdK: Kopf = new Kopf(pferdKObjt.essen, pferdKObjt.kopfform, pferdKObjt.name, pferdKObjt.farbe, pferdKObjt.preis, pferdKObjt.bild);




