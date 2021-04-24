//a)
let z: number = (3); 
let y: number = (4);

function multiply(a: number, b: number) {
    let c: number = a + b;  
    console.log(c);
    return c;
}

multiply(z, y);

//b)
let d: number = (5);
let e: number = (3);

function max(f: number, g: number) {
    let h: number = (f);
    let i: boolean = g > f;
    if (i == true) {
        h = g;
    }  
    console.log(h);
    return h;
}

max(d, e);

//c)

function aufzaelen(): void {
    let i: number = 1;

    do {
        console.log(i);
        i = i + 1;
    } while ( i > 100);
}

aufzaelen();

//d)

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
  }
  
 console.log(getRandomInt(101));

 //e) 

 //function factorial(n: number) {
   //  let n: number;
     //if (n < 1) {
       //  console.log(n);
      //   return n;
     //}

    // else {
      //  let m: number;
       //m = n * (n - 1);
         //while (m < 1)
    // }
 //}

 //factorial(n);

 //f)

 //function leapyears(n: number) {
   //  if (n / 4 && n / 400 && !n : 100) {
     //    console.log(n);
    // }
     //n++
     //return n;
 //}

 //leapyears(1900);