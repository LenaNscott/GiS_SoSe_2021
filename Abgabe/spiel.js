"use strict";
urlHolen();
let karte1 = document.getElementById("nr1");
karte1.addEventListener("click", function () {
    bilder(karte1);
});
let karte2 = document.getElementById("nr2");
karte2.addEventListener("click", function () {
    bilder(karte2);
});
let karte3 = document.getElementById("nr3");
karte3.addEventListener("click", function () {
    bilder(karte3);
});
let karte4 = document.getElementById("nr4");
karte4.addEventListener("click", function () {
    bilder(karte4);
});
let karte5 = document.getElementById("nr5");
karte5.addEventListener("click", function () {
    bilder(karte5);
});
let karte6 = document.getElementById("nr6");
karte6.addEventListener("click", function () {
    bilder(karte6);
});
let karte7 = document.getElementById("nr7");
karte7.addEventListener("click", function () {
    bilder(karte7);
});
let karte8 = document.getElementById("nr8");
karte8.addEventListener("click", function () {
    bilder(karte8);
});
let karte9 = document.getElementById("nr9");
karte9.addEventListener("click", function () {
    bilder(karte9);
});
let karte10 = document.getElementById("nr10");
karte10.addEventListener("click", function () {
    bilder(karte10);
});
let karte11 = document.getElementById("nr11");
karte11.addEventListener("click", function () {
    bilder(karte11);
});
let karte12 = document.getElementById("nr12");
karte12.addEventListener("click", function () {
    bilder(karte12);
});
let karte13 = document.getElementById("nr13");
karte13.addEventListener("click", function () {
    bilder(karte13);
});
let karte14 = document.getElementById("nr14");
karte14.addEventListener("click", function () {
    bilder(karte14);
});
let karte15 = document.getElementById("nr15");
karte15.addEventListener("click", function () {
    bilder(karte15);
});
let karte16 = document.getElementById("nr16");
karte16.addEventListener("click", function () {
    bilder(karte16);
});
let karte17 = document.getElementById("nr17");
karte17.addEventListener("click", function () {
    bilder(karte17);
});
let karte18 = document.getElementById("nr18");
karte18.addEventListener("click", function () {
    bilder(karte18);
});
let karte19 = document.getElementById("nr19");
karte19.addEventListener("click", function () {
    bilder(karte19);
});
let karte20 = document.getElementById("nr20");
karte20.addEventListener("click", function () {
    bilder(karte20);
});
let bild1 = document.createElement("img");
function karteAnzeigen() {
    bild1.style.position = "absolute";
    bild1.style.height = "300px";
    bild1.style.width = "300px";
    bild1.style.left = "575px";
    bild1.style.top = "275px";
    bild1.src = "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG";
    document.getElementById("body").appendChild(bild1);
}
function bilder(_bild) {
    switch (_bild.id) {
        case "nr1":
            bild1.id = "bild1";
            karteAnzeigen();
            break;
        case "nr2":
            bild1.id = "bild2";
            karteAnzeigen();
            break;
        case "nr3":
            bild1.id = "bild3";
            karteAnzeigen();
            break;
        case "nr4":
            bild1.id = "bild4";
            karteAnzeigen();
            break;
        case "nr5":
            bild1.id = "bild5";
            karteAnzeigen();
            break;
        case "nr6":
            bild1.id = "bild6";
            karteAnzeigen();
            break;
        case "nr7":
            bild1.id = "bild7";
            karteAnzeigen();
            break;
        case "nr8":
            bild1.id = "bild8";
            karteAnzeigen();
            break;
        case "nr9":
            bild1.id = "bild9";
            karteAnzeigen();
            break;
        case "nr10":
            bild1.id = "bild10";
            karteAnzeigen();
            break;
        case "nr11":
            bild1.id = "bild11";
            karteAnzeigen();
            break;
        case "nr12":
            bild1.id = "bild12";
            karteAnzeigen();
            break;
        case "nr13":
            bild1.id = "bild13";
            karteAnzeigen();
            break;
        case "nr14":
            bild1.id = "bild14";
            karteAnzeigen();
            break;
        case "nr15":
            bild1.id = "bild15";
            karteAnzeigen();
            break;
        case "nr16":
            bild1.id = "bild16";
            karteAnzeigen();
            break;
        case "nr17":
            bild1.id = "bild17";
            karteAnzeigen();
            break;
        case "nr18":
            bild1.id = "bild18";
            karteAnzeigen();
            break;
        case "nr19":
            bild1.id = "bild19";
            karteAnzeigen();
            break;
        case "nr20":
            bild1.id = "bild20";
            karteAnzeigen();
            break;
    }
}
//# sourceMappingURL=spiel.js.map