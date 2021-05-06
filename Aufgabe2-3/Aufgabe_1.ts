
let button: HTMLDivElement = document.querySelector("#rechteck");
button = document.createElement("div");

let r1: HTMLDivElement = document.querySelector("#rechteck");
r1 = document.createElement("div"); 
r1.dataset.name = "rechteck"; 
r1.id = "neueRechtecke";
r1.style.color = farbe();
r1.style.height = randomZahl ();
r1.style.width = randomZahl();
r1.style.position = randomZahl();
console.log(r1);

function randomZahl(): string {
    let r: number;
    let zahl: string = " ";
    r = Math.random() * 100;
    zahl = r.toString();
    return zahl;
}

function farbe(): string {
    let f: string;
    f = "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    return f;
}
