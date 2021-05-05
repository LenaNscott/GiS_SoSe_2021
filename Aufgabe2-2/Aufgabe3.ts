//a)

let myCanvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("MyCanvas");
let context: CanvasRenderingContext2D = myCanvas.getContext("2d");
let path: Path2D = new Path2D;

//Himmel
context.fillStyle = "#00BFFF";
context.fillRect(0, 0, 500, 500);
context.strokeStyle = "#00BFFF";

//gras
context.strokeStyle = "green";
context.fillStyle = "green";
context.beginPath();
context.moveTo(0, 400);
context.lineTo(500, 400);
context.lineTo(500, 250);
context.lineTo(0, 250);
context.closePath();
context.stroke();
context.fill();

//Baumstamm
context.beginPath();
context.fillStyle = "#8B4513";
context.fillRect(330, 150, 50, 200);
context.closePath();
context.stroke();
context.fill();

//Baumkrone
context.beginPath();
context.arc( 350, 150, 80, 0, Math.PI * 2, false);
context.strokeStyle = "green";
context.fillStyle = "green";
context.closePath();
context.stroke();
context.fill();

//Haus
context.beginPath();
context.fillStyle = "#FFFaFa";
context.fillRect(50, 100, 200, 200);
context.closePath();
context.stroke();
context.fill();

//Dach
context.beginPath();
context.moveTo(50, 100);
context.lineTo(150, 40);
context.lineTo(250, 100);
context.closePath();
context.fillStyle = "red";
context.strokeStyle = "red";
context.fill();
context.stroke();

//Haustür
context.beginPath();
context.fillStyle = "#8B4513";
context.fillRect(125, 200, 50, 100);
context.closePath();
context.stroke();
context.fill();

//Wolken

context.beginPath();
context.ellipse(50, 50, 30, 50, Math.PI / 2, 0, 2 * Math.PI);
context.fillStyle = "white";
context.strokeStyle = "white";
context.stroke();
context.fill();

context.beginPath();
context.ellipse(300, 40, 30, 50, Math.PI / 2, 0, 2 * Math.PI);
context.fillStyle = "white";
context.strokeStyle = "white";
context.stroke();
context.fill();

context.beginPath();
context.ellipse(450, 40, 30, 50, Math.PI / 2, 0, 2 * Math.PI);
context.fillStyle = "white";
context.strokeStyle = "white";
context.stroke();
context.fill();

//b)
let myCanvas2: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById ("MyCanvas2"); 
let context2: CanvasRenderingContext2D = myCanvas2.getContext("2d");

class Rechteck {

    path2: Path2D = new Path2D;
    
    posX: number;
    posY: number;
    sizeX: number;
    sizeY: number;
    color: string;
    bewegungsrichtungX: number;
    bewegungsrichtungY: number;

    constructor() {
        this.posX = Math.random() * 100;
        this.posY = Math.random() * 100;
        this.sizeX = Math.random() * 100;
        this.sizeY = Math.random() * 100;
        this.color = "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
        if (Math.random() < 0.5) {
        this.bewegungsrichtungX = -1;
        }
        else {
        this.bewegungsrichtungX = 1;
        }
        if (Math.random() < 0.5) {
        this.bewegungsrichtungY = -1;
        }
        else {
        this.bewegungsrichtungY = 1;
        }
    }

    //d)

    drawRect(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.sizeX, this.sizeY);
    }

}

//c)

function createRect(): Rechteck {
    let r1: Rechteck = new Rechteck ();
    return r1;
}

let r1: Rechteck = createRect();
r1.drawRect(context2);

//e)

let rechteckArray: Rechteck[] = [];
let r2: Rechteck = createRect();
r2.drawRect(context2);

for (let i: number = 0; i < 10; i++) {
    rechteckArray.push(createRect());
}

for (const re of rechteckArray) {
    re.drawRect(context2);
}

//f)

function sleep(zeit: number) {
    return new Promise(resolve => setTimeout(resolve, zeit));
}

async function timeOut() {
    for ( let j: number = 0; j < 100; j++) {
        await sleep(500);
        context2.clearRect(0, 0, myCanvas2.width, myCanvas2.height);
        for (let i: number = 0; i < rechteckArray.length; i++) {
            rechteckArray[i].posX += 5 * rechteckArray[i].bewegungsrichtungX;
            rechteckArray[i].posY += 5 * rechteckArray[i].bewegungsrichtungY;
            rechteckArray[i].drawRect(context2);
        }
    }
}

timeOut();