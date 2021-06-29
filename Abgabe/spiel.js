"use strict";
let karte1 = document.getElementById("nr1");
karte1.addEventListener("click", karteAnzeigen);
let bild1 = document.createElement("img");
function karteAnzeigen() {
    bild1.id = "bild1";
    bild1.style.position = "absolute";
    bild1.style.height = "300px";
    bild1.style.width = "300px";
    bild1.style.left = "575px";
    bild1.style.top = "275px";
    bild1.src = "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG";
    document.getElementById("body").appendChild(bild1);
}
//# sourceMappingURL=spiel.js.map