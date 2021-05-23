"use strict";
let aussage = document.getElementById("ausgabe");
let bildauswahlK = document.getElementById("Kopf1");
bildauswahlK.setAttribute("src", auswahl.kopf.bild);
let bildauswahlKo = document.getElementById("Koerper1");
bildauswahlKo.setAttribute("src", auswahl.koerper.bild);
let bildauswahlB = document.getElementById("Bein1");
bildauswahlB.setAttribute("src", auswahl.beine.bild);
buttonsFaerben();
async function senden() {
    let query = new URLSearchParams(auswahl);
    let url = "https://gis-communication.herokuapp.com" + "?" + query.toString();
    let response = await fetch(url);
    let lesen = await response.text();
    console.log(lesen);
    if (lesen.search("error") != -1) {
        lesen = lesen.substring(10, lesen.length - 2);
        aussage.textContent = "Negative Serverantwort:\n" + lesen;
        aussage.style.color = "red";
    }
    else {
        lesen = lesen.substring(12, lesen.length - 2);
        aussage.textContent = "Positive Serverantwort:\n" + lesen;
        aussage.style.color = "black";
    }
}
senden();
//# sourceMappingURL=gestalt.js.map