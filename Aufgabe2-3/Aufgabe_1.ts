let x = document.createElement("BUTTON");
x.style.width = "200px";
x.style.height = "30px";
x.innerHTML = "+ Rechteck";
document.body.appendChild(x);
x.addEventListener("click" , function() {newRechteck()} );

let y = document.createElement("BUTTON");
y.style.width = "200px";
y.style.height = "30px";
y.innerHTML = "- Rechtecke";
document.body.appendChild(y);
y.addEventListener("click", function() {
    let x: HTMLCollection = document.getElementsByTagName("div");
    for (let i: number = 0; i < x.length; i++ )
    {
        document.body.removeChild(x[i]);
    }
   }
 );


/*let r1 = document.createElement("div");
r1.style.backgroundColor = "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
r1.style.position = "absolute";
r1.style.left = 300 + "px";
r1.style.top  = 300 + "px";
r1.style.width = "100px";
r1.style.height = "100px";
r1.style.visibility = "visible";
document.body.appendChild(r1);*/


for (let i = 0; i < 10; i++) {
    let r = document.createElement("div");
    r.style.backgroundColor = "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    r.style.position = "absolute";
    r.style.left = Math.random() * 200 + "px";
    r.style.top  = Math.random() * 200 + 50 + "px";
    r.style.width = Math.random() * 200 + "px";
    r.style.height = Math.random() * 200 + "px";
    r.style.visibility = "visible";
    document.body.appendChild(r);
}

function newRechteck() {
    let r = document.createElement("div");
    r.style.backgroundColor = "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    r.style.position = "absolute";
    r.style.left = Math.random() * 200 + "px";
    r.style.top  = Math.random() * 200 + 50 + "px";
    r.style.width = Math.random() * 200 + "px";
    r.style.height = Math.random() * 200 + "px";
    r.style.visibility = "visible";
    document.body.appendChild(r);
}


