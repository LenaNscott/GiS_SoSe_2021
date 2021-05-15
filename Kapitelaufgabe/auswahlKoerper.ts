
let zurueckK: HTMLElement = document.createElement("BUTTON");
zurueckK.style.width = "150px";
zurueckK.style.height = "30px";
zurueckK.innerHTML = "Vorheriges Bild ";
zurueckK.style.position = "absolute";
zurueckK.style.top = "230px";
zurueckK.style.left = "575px";
document.body.appendChild(zurueckK);
zurueckK.addEventListener("click" , zurueckKlickenK);

let vorK: HTMLElement = document.createElement("BUTTON");
vorK.style.width = "150px";
vorK.style.height = "30px";
vorK.innerHTML = "Nächstes Bild";
vorK.style.position = "absolute";
vorK.style.top = "230px";
vorK.style.left = "825px";
document.body.appendChild(vorK);
vorK.addEventListener("click", weiterK);

let imgCtrK: number = 0;


let bild: HTMLImageElement = document.createElement("img");
bild.width = 400;
bild.height = 400;
bild.style.left = "575px";
bild.src = JSON.parse(auswahlmoeglichkeiten.koerper[imgCtrK]).bild;
bild.style.position = "absolute";
bild.style.top = "270px";
document.body.appendChild(bild);


let auswaelenK: HTMLElement = document.createElement("BUTTON");
auswaelenK.style.width = "200px";
auswaelenK.style.height = "30px";
auswaelenK.style.top = "675px";
auswaelenK.innerHTML = "Auswählen";
auswaelenK.style.left = "680px";
auswaelenK.style.position = "absolute";
document.body.appendChild(auswaelenK);
auswaelenK.addEventListener("click" , auswaehlenKoerper);

function weiterK() {
    if (imgCtrK < (auswahlmoeglichkeiten.koerper.length - 1))
        imgCtrK += 1;
    else {
        imgCtrK = 0;
    }
    
    bild.src = JSON.parse(auswahlmoeglichkeiten.koerper[imgCtrK]).bild;
}

function zurueckKlickenK() {
    if (imgCtrK > 0)
        imgCtrK -= 1;    
    else
        imgCtrK = auswahlmoeglichkeiten.koerper.length - 1;
    bild.src = JSON.parse(auswahlmoeglichkeiten.koerper[imgCtrK]).bild;
}

function auswaehlenKoerper(): void {

        auswahl.koerper = JSON.parse(auswahlmoeglichkeiten.koerper[imgCtrK]);
        document.cookie = "Auswahl=" + JSON.stringify(auswahl) + "; expires=Fri, 31 Dec 2021 12:00:00 UTC; path=/";
        console.log(auswahl.koerper);
   
}
