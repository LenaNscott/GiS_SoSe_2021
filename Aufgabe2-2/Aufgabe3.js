"use strict";
//a)
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let path = new Path2D;
path.arc(1, 1, 5, 2, 5 * Math.PI);
context.stroke(path);
context.beginPath();
context.moveTo(0, 100);
context.lineTo(300, 100);
context.fillStyle = "#9FC0D0";
context.fillRect(0, 300, context.canvas.width, context.canvas.height);
context.stroke();
context.fillStyle = "#8B4513";
context.fillRect(450, 150, context.canvas.width, 200);
context.fillStyle = "#8B4513";
context.fillRect(300, 100, context.canvas.width, 250);
//b)
class Rechteck {
    constructor(x, y) {
        this.context2 = canvas.getContext("2d");
        this.path2 = new Path2D;
        this.context2.fillRect(0, 0, x, y);
    }
}
let r1 = new Rechteck(200, 400);
//c)
function createRect() {
}
//d)
function drawRect() {
}
//e)
//# sourceMappingURL=Aufgabe3.js.map