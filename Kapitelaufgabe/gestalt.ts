

let bildauswahlK: HTMLImageElement = document.createElement("img");
bildauswahlK.alt = "Kopf";
bildauswahlK.width = 200;
bildauswahlK.height = 200;
bildauswahlK.style.left = "575px";
bildauswahlK.src = auswahl.kopf.bild;
bildauswahlK.style.position = "absolute";
bildauswahlK.style.top = "200px";
document.body.appendChild(bildauswahlK);

let bildauswahlKo: HTMLImageElement = document.createElement("img");
bildauswahlKo.alt = "Körper";
bildauswahlKo.width = 200;
bildauswahlKo.height = 200;
bildauswahlKo.style.left = "575px";
bildauswahlKo.src = auswahl.koerper.bild;
bildauswahlKo.style.position = "absolute";
bildauswahlKo.style.top = "400px";
document.body.appendChild(bildauswahlKo);

let bildauswahlB: HTMLImageElement = document.createElement("img");
bildauswahlB.alt = "Beine";
bildauswahlB.width = 200;
bildauswahlB.height = 200;
bildauswahlB.style.left = "575px";
bildauswahlB.src = auswahl.beine.bild;
bildauswahlB.style.position = "absolute";
bildauswahlB.style.top = "600px";
document.body.appendChild(bildauswahlB);