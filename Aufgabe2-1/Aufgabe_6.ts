//a)

function hashtags() {
    var f: string = "";
    for (var j = 0; j <= 6; j++) {
        f += "#";
        console.log(f);
    }
}

hashtags();

//b) 

function zahlenreihe() {
    var p: number = 1;
    while (p <= 100) {
    if (p % 3 == 0) {
        console.log("Fizz");
    }
    else if (p % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(p);
    }
    p++;
}
}

zahlenreihe();

// c)

function zahlenreihe2() {
    var p: number = 1;
    while (p <= 100) {
    let s: string = "";
    if (p % 3 == 0) {
        s = "Fizz";
    }
    if (p % 5 == 0) {
        s += "Buzz";
    }
    if (p % 3 != 0 && p % 5 != 0) {
        s = String(p);
    }
    console.log(s);
    p++;
}
}

zahlenreihe2();

// d)

function schachbrett() {
    var s: string = "";
    for (var j = 0; j <= 3; j++) {
        for (var i = 0; i <= 3; i++) {
        s += " #";
    }
    s += "\n";
        for (var k = 0; k <= 3; k++) {
        s += "# ";
    }
    s += "\n";
    }
    console.log(s);
}

schachbrett();
// e) 

function schachbrett2(n: number) {
    var s: string = "";
    for (var l = 0; l < n; l++) {
        for (var i = 0; i < n; i++) {
        if ((i + l) % 2 == 0) {s += " "; } 
        else {s += "#"; }
        }
        s += "\n";
    }
    console.log(s);
}

schachbrett2(9);