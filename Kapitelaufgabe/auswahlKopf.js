"use strict";
//a
let zurueck = document.createElement("BUTTON");
zurueck.style.width = "150px";
zurueck.style.height = "30px";
zurueck.innerHTML = "Vorheriges Bild ";
zurueck.style.position = "absolute";
zurueck.style.top = "230px";
zurueck.style.left = "575px";
document.body.appendChild(zurueck);
zurueck.addEventListener("click", zurueckKlicken);
let vor = document.createElement("BUTTON");
vor.style.width = "150px";
vor.style.height = "30px";
vor.innerHTML = "Nächstes Bild";
vor.style.position = "absolute";
vor.style.top = "230px";
vor.style.left = "825px";
document.body.appendChild(vor);
vor.addEventListener("click", weiter);
let imgCtr = 0;
let bild2 = document.createElement("img");
bild2.width = 400;
bild2.height = 400;
bild2.style.left = "575px";
bild2.src = getKoerperteileArray()[imgCtr].bild;
bild2.style.position = "absolute";
bild2.style.top = "270px";
document.body.appendChild(bild2);
function weiter() {
    if (imgCtr < (getKoerperteileArray().length - 1))
        imgCtr += 1;
    else {
        imgCtr = 0;
    }
    bild2.src = getKoerperteileArray()[imgCtr].bild;
}
function zurueckKlicken() {
    if (imgCtr > 0)
        imgCtr -= 1;
    else
        imgCtr = getKoerperteileArray().length - 1;
    bild2.src = getKoerperteileArray()[imgCtr].bild;
}
let auswaelen = document.createElement("BUTTON");
auswaelen.style.width = "200px";
auswaelen.style.height = "30px";
auswaelen.style.top = "675px";
auswaelen.innerHTML = "Auswählen";
auswaelen.style.left = "680px";
auswaelen.style.position = "absolute";
document.body.appendChild(auswaelen);
auswaelen.addEventListener("click", auswaehlen);
function auswaehlen() {
    switch (window.location.pathname) {
        case "/kopf.html":
            auswahl.kopf = getKoerperteileArray()[imgCtr];
        case "/koerper.html":
            auswahl.koerper = getKoerperteileArray()[imgCtr];
        case "/bein.html":
            auswahl.beine = getKoerperteileArray()[imgCtr];
        default:
    }
    document.cookie = "Auswahl=" + JSON.stringify(auswahl) + "; expires=Fri, 31 Dec 2021 12:00:00 UTC; path=/";
    console.log(auswahl);
}
//# sourceMappingURL=auswahlKopf.js.map