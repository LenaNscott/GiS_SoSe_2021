//a)

function backwards(b: number []) {
    let a: number[] = [];
    a = b.reverse();
    console.log(a);
}

let c: number [] = [5, 4, 2 , 8 , 3];
backwards(c);

//b)

function join (b: number[], c: number[]) {
    for (let i = 0; i < c.length; i++) {
        b.push(c[i]); 
    }
    console.log(b);
}

let a: number[] = [2, 8, 4, 1 ];
join(c, a);
