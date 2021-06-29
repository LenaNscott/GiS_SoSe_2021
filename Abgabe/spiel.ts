let karte1: HTMLElement = document.getElementById("nr1");
karte1.addEventListener("click" , karteAnzeigen);   
let bild1: HTMLImageElement = document.createElement("img");

function karteAnzeigen(): void {
    
    bild1.id = "bild1";
    bild1.style.position = "absolute";
    bild1.style.height = "300px";
    bild1.style.width = "300px";
    bild1.style.left = "575px";
    bild1.style.top = "275px";
    bild1.src = "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG";
    document.getElementById("body").appendChild(bild1);
}

function bilder(_bild: HTMLImageElement): void {
    switch (_bild.id) {
        case "nr1":
            break;
        case "nr2":
            break;
        case "nr3":
            break;
        case "nr4":
            break;
        case "nr5":
            break;
        case "nr6":
            break;
        case "nr7":
            break;
        case "nr8":
            break;
        case "nr9":
            break;
        case "nr10":
            break;
        case "nr11":
            break;
        case "nr12":
            break;
        case "nr13":
            break;
        case "nr14":
            break;
        case "nr15":
            break;
        case "nr16":
            break;
        case "nr17":
            break;
        case "nr18":
            break;
        case "nr19":
            break;
        case "nr20":
            break;
    }
}