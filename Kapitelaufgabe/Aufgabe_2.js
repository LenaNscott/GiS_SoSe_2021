"use strict";
//a
let auswahl = { kopf: new Kopf("", "", "", "", 0, ""), koerper: new Koeper("", "", "", 0, ""), beine: new Beine(0, "", "", 0, "") };
let zurueck = document.createElement("BUTTON");
zurueck.style.width = "150px";
zurueck.style.height = "30px";
zurueck.innerHTML = "Vorheriges Bild ";
zurueck.style.position = "absolute";
zurueck.style.top = "230px";
zurueck.style.left = "575px";
document.body.appendChild(zurueck);
zurueck.addEventListener("click", function () { Zurueck(); });
let vor = document.createElement("BUTTON");
vor.style.width = "150px";
vor.style.height = "30px";
vor.innerHTML = "Nächstes Bild";
vor.style.position = "absolute";
vor.style.top = "230px";
vor.style.left = "825px";
document.body.appendChild(vor);
vor.addEventListener("click", function () { Weiter(); });
let imgCtr = 0;
let bild2 = document.createElement("img");
bild2.width = 400;
bild2.height = 400;
bild2.style.left = "575px";
bild2.src = auswahlmoeglichkeiten.kopf[imgCtr].bild;
bild2.style.position = "absolute";
bild2.style.top = "270px";
document.body.appendChild(bild2);
function Weiter() {
    if (imgCtr < (auswahlmoeglichkeiten.kopf.length - 1))
        imgCtr += 1;
    else {
        imgCtr = 0;
    }
    bild2.src = auswahlmoeglichkeiten.kopf[imgCtr].bild;
}
function Zurueck() {
    if (imgCtr > 0)
        imgCtr -= 1;
    else
        imgCtr = auswahlmoeglichkeiten.kopf.length - 1;
    bild2.src = auswahlmoeglichkeiten.kopf[imgCtr].bild;
}
let auswaelen = document.createElement("BUTTON");
auswaelen.style.width = "200px";
auswaelen.style.height = "30px";
auswaelen.style.top = "675px";
auswaelen.innerHTML = "Auswählen";
auswaelen.style.left = "680px";
auswaelen.style.position = "absolute";
document.body.appendChild(auswaelen);
auswaelen.addEventListener("click", function () { Get(); });
/* function Auswaehlen(): void {

        auswahl.kopf = auswahlmoeglichkeiten.kopf[imgCtr];
        
        document.cookie = "auswahl";
        let c: string = document.cookie;
        console.log(c);
   
} */
function Get() {
    let a = "";
    auswahl.kopf = auswahlmoeglichkeiten.kopf[imgCtr];
    document.cookie = "auswahl";
    let c = document.cookie;
    console.log(document.cookie);
    return a;
}
//# sourceMappingURL=Aufgabe_2.js.map