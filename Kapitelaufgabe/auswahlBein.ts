
let zurueckB: HTMLElement = document.createElement("BUTTON");
zurueckB.style.width = "150px";
zurueckB.style.height = "30px";
zurueckB.innerHTML = "Vorheriges Bild ";
zurueckB.style.position = "absolute";
zurueckB.style.top = "230px";
zurueckB.style.left = "575px";
document.body.appendChild(zurueckB);
zurueckB.addEventListener("click" , zurueckKlickenB);

let vorB: HTMLElement = document.createElement("BUTTON");
vorB.style.width = "150px";
vorB.innerHTML = "Nächstes Bild";
vorB.style.position = "absolute";
vorB.style.top = "230px";
vorB.style.left = "825px";
document.body.appendChild(vorB);
vorB.addEventListener("click", weiterB);

let imgCtrB: number = 0;

let bild3: HTMLImageElement = document.createElement("img");
bild3.width = 400;
bild3.height = 400;
bild3.style.left = "575px";
bild3.src = JSON.parse(auswahlmoeglichkeiten.beine[imgCtrB]).bild;
bild3.style.position = "absolute";
bild3.style.top = "270px";
document.body.appendChild(bild3);


function weiterB() {
    if (imgCtrB < (auswahlmoeglichkeiten.beine.length - 1))
        imgCtrB += 1;
    else {
        imgCtrB = 0;
    }
    
    bild3.src = JSON.parse(auswahlmoeglichkeiten.beine[imgCtrB]).bild;
}

function zurueckKlickenB() {
    if (imgCtrB > 0)
        imgCtrB -= 1;    
    else
        imgCtrB = auswahlmoeglichkeiten.beine.length - 1;
    bild3.src = JSON.parse(auswahlmoeglichkeiten.beine[imgCtrB]).bild;
}

let auswaelenB: HTMLElement = document.createElement("BUTTON");
auswaelenB.style.width = "200px";
auswaelenB.style.height = "30px";
auswaelenB.style.top = "675px";
auswaelenB.innerHTML = "Auswählen";
auswaelenB.style.left = "680px";
auswaelenB.style.position = "absolute";
document.body.appendChild(auswaelenB);
auswaelenB.addEventListener("click" , auswaehlenBeine);

function auswaehlenBeine(): void {

        auswahl.beine = JSON.parse(auswahlmoeglichkeiten.beine[imgCtrB]);
        document.cookie = "Auswahl=" + JSON.stringify(auswahl) + "; expires=Fri, 31 Dec 2021 12:00:00 UTC; path=/";
        console.log(auswahl.beine);
   
}