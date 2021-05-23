
buttonsFaerben();

let zurueck: HTMLElement = document.getElementById("buttonZurueck");
zurueck.addEventListener("click" , zurueckKlicken);

let vor: HTMLElement = document.getElementById("buttonVor");
vor.addEventListener("click", weiter);


let bild2: HTMLElement = document.getElementById("auswahlBild");
let koerperteilArray: Koerperteile[];
let imgCtr: number = 0;
communicate("http://127.0.0.1:8081/data.JSON");

function weiter (): void {
    if (imgCtr < (koerperteilArray.length - 1))
        imgCtr += 1;
    else {
        imgCtr = 0;
    }
    
    bild2.setAttribute("src", koerperteilArray[imgCtr].bild);
}

function zurueckKlicken (): void {
    if (imgCtr > 0)
        imgCtr -= 1;    
    else
        imgCtr = koerperteilArray.length - 1;
    bild2.setAttribute("src", koerperteilArray[imgCtr].bild);
}

let auswaelen: HTMLElement = document.getElementById("auswaehlen");
auswaelen.addEventListener("click" , auswaehlen);

function auswaehlen(): void {
    let pname: string = window.location.pathname;
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
        let geschnittenerPathname: string = pname.slice(0, pname.lastIndexOf("/"));
        window.location.pathname = geschnittenerPathname + "/gestalt.html";
    }
}

