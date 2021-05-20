
buttonsFaerben();

let zurueck: HTMLElement = document.getElementById("buttonZurueck");
zurueck.addEventListener("click" , zurueckKlicken);

let vor: HTMLElement = document.getElementById("buttonVor");
vor.addEventListener("click", weiter);



let imgCtr: number = 0;

let bild2: HTMLElement = document.getElementById("auswahlBild");
bild2.setAttribute("src", getKoerperteileArray()[imgCtr].bild);

function weiter (): void {
    if (imgCtr < (getKoerperteileArray().length - 1))
        imgCtr += 1;
    else {
        imgCtr = 0;
    }
    
    bild2.setAttribute("src", getKoerperteileArray()[imgCtr].bild);
}

function zurueckKlicken (): void {
    if (imgCtr > 0)
        imgCtr -= 1;    
    else
        imgCtr = getKoerperteileArray().length - 1;
    bild2.setAttribute("src", getKoerperteileArray()[imgCtr].bild);
}

let auswaelen: HTMLElement = document.getElementById("auswaehlen");
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
