//a)

function multiply(a: number, b: number) {
    let c: number = a * b;  
    console.log(c);
}

multiply(2, 4);

//b)

function max(f: number, g: number) {
    let h: number = f;
    let i: boolean = g > f;
    if (i == true) {
        h = g;
    }  
    console.log(h);
}

max(5, 20);

//c)

function aufzaelen(): void {
    let i: number = 1;
    let j: number = 0;
   while ( i <= 100)
     j += i;
     i++ 
   console.log(j);
}

aufzaelen();

//d)

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
  }
  
 console.log(getRandomInt(101));

 getRandomInt(100);

 //e) 

 function factorial(n: number) {
 if (n < 1) {
   console.log(1);
 }
 let m: number;
  else {
    while (m < 1)
 m = n * (n - 1);
  }
  console.log(m);
 }

 factorial(4);

 //f)

 function leapyears(n: number) {
   if (n / 4) {
     if (n / 400) console.log(n);
     else (n !/ 100); 
 n++
 }

 leapyears(1900);