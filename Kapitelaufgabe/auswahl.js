"use strict";
buttonsFaerben();
let zurueck = document.getElementById("buttonZurueck");
zurueck.addEventListener("click", zurueckKlicken);
let vor = document.getElementById("buttonVor");
vor.addEventListener("click", weiter);
let bild2 = document.getElementById("auswahlBild");
let koerperteilArray;
let imgCtr = 0;
communicate("http://127.0.0.1:8081/data.JSON");
function weiter() {
    if (imgCtr < (koerperteilArray.length - 1))
        imgCtr += 1;
    else {
        imgCtr = 0;
    }
    bild2.setAttribute("src", koerperteilArray[imgCtr].bild);
}
function zurueckKlicken() {
    if (imgCtr > 0)
        imgCtr -= 1;
    else
        imgCtr = koerperteilArray.length - 1;
    bild2.setAttribute("src", koerperteilArray[imgCtr].bild);
}
let auswaelen = document.getElementById("auswaehlen");
auswaelen.addEventListener("click", auswaehlen);
function auswaehlen() {
    let pname = window.location.pathname;
    if (pname.indexOf("kopf") != -1) {
        auswahl.kopf = koerperteilArray[imgCtr];
    }
    else if (pname.indexOf("koerper") != -1) {
        auswahl.koerper = koerperteilArray[imgCtr];
    }
    else if (pname.indexOf("bein") != -1) {
        auswahl.beine = koerperteilArray[imgCtr];
    }
    document.cookie = "Auswahl=" + (JSON.stringify(auswahl)) + "; expires=Fri, 31 Dec 2021 12:00:00 UTC; path=/";
    console.log(auswahl);
    buttonsFaerben();
    if (auswahl.kopf.name != "" && auswahl.koerper.name != "" && auswahl.beine.name != "") {
        let geschnittenerPathname = pname.slice(0, pname.lastIndexOf("/"));
        window.location.pathname = geschnittenerPathname + "/gestalt.html";
    }
}
//# sourceMappingURL=auswahl.js.map