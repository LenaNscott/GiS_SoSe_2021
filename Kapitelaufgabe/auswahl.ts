
buttonsFaerben();

let zurueck: HTMLElement = document.createElement("BUTTON");
zurueck.style.width = "150px";
zurueck.style.height = "30px";
zurueck.innerHTML = "Vorheriges Bild ";
zurueck.style.position = "absolute";
zurueck.style.top = "230px";
zurueck.style.left = "575px";
document.body.appendChild(zurueck);
zurueck.addEventListener("click" , zurueckKlicken);

let vor: HTMLElement = document.createElement("BUTTON");
vor.style.width = "150px";
vor.style.height = "30px";
vor.innerHTML = "Nächstes Bild";
vor.style.position = "absolute";
vor.style.top = "230px";
vor.style.left = "825px";
document.body.appendChild(vor);
vor.addEventListener("click", weiter);



let imgCtr: number = 0;

let bild2: HTMLImageElement = document.createElement("img");
bild2.width = 400;
bild2.height = 400;
bild2.style.left = "575px";
bild2.src = getKoerperteileArray()[imgCtr].bild;
bild2.style.position = "absolute";
bild2.style.top = "270px";
document.body.appendChild(bild2);

function weiter (): void {
    if (imgCtr < (getKoerperteileArray().length - 1))
        imgCtr += 1;
    else {
        imgCtr = 0;
    }
    
    bild2.src = getKoerperteileArray()[imgCtr].bild;
}

function zurueckKlicken (): void {
    if (imgCtr > 0)
        imgCtr -= 1;    
    else
        imgCtr = getKoerperteileArray().length - 1;
    bild2.src = getKoerperteileArray()[imgCtr].bild;
}

let auswaelen: HTMLElement = document.createElement("BUTTON");
auswaelen.style.width = "200px";
auswaelen.style.height = "30px";
auswaelen.style.top = "675px";
auswaelen.innerHTML = "Auswählen";
auswaelen.style.left = "680px";
auswaelen.style.position = "absolute";
document.body.appendChild(auswaelen);
auswaelen.addEventListener("click" , auswaehlen);

function auswaehlen(): void {
    let pname: string = window.location.pathname;
    if (pname.indexOf("kopf") != -1) {
        auswahl.kopf = getKoerperteileArray()[imgCtr];
    }
    else if (pname.indexOf("koerper") != -1) {
        auswahl.koerper = getKoerperteileArray()[imgCtr];
    }
    else if (pname.indexOf("bein") != -1) {
        auswahl.beine = getKoerperteileArray()[imgCtr];
    }
    document.cookie = "Auswahl=" + (JSON.stringify(auswahl)) + "; expires=Fri, 31 Dec 2021 12:00:00 UTC; path=/";
    console.log(auswahl);
    buttonsFaerben();

    if (auswahl.kopf.name != "" && auswahl.koerper.name != "" && auswahl.beine.name != "") {
        let geschnittenerPathname: string = pname.slice(0, pname.lastIndexOf("/"));
        window.location.pathname = geschnittenerPathname + "/gestalt.html";
    }
}