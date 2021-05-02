//a)

let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById ("canvas"); 

let context: CanvasRenderingContext2D = canvas.getContext("2d");

let path: Path2D = new Path2D;
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
context2: CanvasRenderingContext2D = canvas.getContext("2d");
path2: Path2D = new Path2D;
    
x: number;
y: number;

constructor(x: number, y: number) {
    this.context2.fillRect(0, 0, x, y);
    }

}

let r1: Rechteck = new Rechteck(200, 400);


//c)

function createRect() {

}

//d)

function drawRect() {

}

//e)

