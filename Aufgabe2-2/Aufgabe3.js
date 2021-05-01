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
//c)
function createRect() {
}
//d)
function drawRect() {
}
//e)
//# sourceMappingURL=Aufgabe3.js.map