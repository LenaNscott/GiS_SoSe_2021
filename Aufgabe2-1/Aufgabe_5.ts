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

function Aufzaelen(): void {
    let i: number = 1;
    let j: number = 0;
    while ( i <= 100) {
    j += i;
    i++;
   }
    console.log(j);
}

Aufzaelen();

//d)

/* function getRandomInt (a: number) {
  for (let i = 0 ; i < 10 ; i++)
  console.log(Math.random() * 100);
}

 getRandomInt(100); */

 //e) 

function factorial(n: number) {
 if (n < 1) {
   console.log(1);
 }
 else {
  let ergebnis: number = 1;
  let m: number = 1;  
  while (m <= n) {
  ergebnis *= m;
  m++;
  }
  console.log(ergebnis);
  }
 
 }

factorial(5);

 //f)

function leapyears() {
  let year: number = 1900;
  while (year <= 2021)
  {
    if (year % 400 == 0){
      console.log(year);
    }
    else if (year % 4 == 0 && year % 100 != 0){
      console.log(year);
    }
  year++;
  }
 }
 leapyears();