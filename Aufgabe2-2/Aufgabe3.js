"use strict";
//a)
let myCanvas = document.getElementById("MyCanvas");
let context = myCanvas.getContext("2d");
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
let path = new Path2D;
//Baumstamm
context.beginPath();
context.fillStyle = "#8B4513";
context.fillRect(330, 150, 50, 200);
context.closePath();
context.stroke();
context.fill();
//Baumkrone
context.beginPath();
context.arc(350, 150, 80, 0, Math.PI * 2, false);
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
//Wolke
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
let mycanvas2 = document.getElementById("MyCanvas2");
let context2 = mycanvas2.getContext("2d");
class Rechteck {
    constructor() {
        this.path2 = new Path2D;
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
}
//c)
function createRect() {
    let r1 = new Rechteck();
    return r1;
}
//d)
function drawRect(r1, ctx) {
    ctx.fillStyle = r1.color;
    ctx.fillRect(r1.posX, r1.posY, r1.sizeX, r1.sizeY);
}
drawRect(createRect(), context2);
//e)
let rechteckArray = [];
for (let i = 0; i < 10; i++) {
    rechteckArray.push(createRect());
}
for (const re of rechteckArray) {
    drawRect(re, context2);
}
//f)
function sleep(zeit) {
    return new Promise(resolve => setTimeout(resolve, zeit));
}
async function TimeOut() {
    for (let j = 0; j < 100; j++) {
        await sleep(500);
        context2.clearRect(0, 0, mycanvas2.width, mycanvas2.height);
        for (let i = 0; i < rechteckArray.length; i++) {
            rechteckArray[i].posX += 5 * rechteckArray[i].bewegungsrichtungX;
            rechteckArray[i].posY += 5 * rechteckArray[i].bewegungsrichtungY;
            drawRect(rechteckArray[i], context2);
        }
    }
}
TimeOut();
//# sourceMappingURL=Aufgabe3.js.map