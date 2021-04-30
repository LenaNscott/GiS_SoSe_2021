//a)

function min(b: number, ...args: number[]) {
    let a: number[] = [ ];
    let mini: number = a[0];
    args.push(b);
    for (let i = 0 ; i < a.length ; i++) {
      if (mini > a[i]) {
          mini = a[i];
      }  
      console.log(mini);
    }
    
}

min(2, 5, 20, 1, 200, 39);

//b)

function isEven (c: number) {
  if (c == 0) {
    return(true);
  }

  if (c == 1) {
    return(false);
  }

else {
  c -= 2;
  isEven(c);
  }
}

isEven(50);

//c)


interface Student {
  vorname: string;
  nachname: string;
  alter: number;
  matrikelnummer: number;
}

let s1: Student = {vorname: "Anna", nachname: "Mayer" , alter: 19 , matrikelnummer: 234562};   
let s2: Student = {vorname: "Lara", nachname: "Schulz" , alter: 20 , matrikelnummer: 395727};
let s3: Student = {vorname: "Lisa", nachname: "Müller" , alter: 20 , matrikelnummer: 564739};

let stud: Student[] = [s1, s2, s3];
stud.push({vorname: "Bea" , nachname: "Baum" , alter: 22 , matrikelnummer: 341289});

console.log(stud[0]);

function showInfo(s: Student) {
  console.log(s.vorname);
  console.log(s.nachname);
  console.log(s.matrikelnummer);
  console.log(s.alter);
}

showInfo(stud[0]);
showInfo(stud[1]);
showInfo(stud[2]);
showInfo(stud[3]);

/*class Student {

  constructor () {
  let vorname: string;
  let nachname: string;
  let alter: number;
  let matrikelnummer: number;
  }

s4 = new Student();  
Student.s4: (vorname: "Anna", nachname: "Mayer" , alter: 19 , matrikelnummer: 234562)
s5 = new Student(); 
Student.s5: (vorname: "Lara", nachname: "Schulz" , alter: 20 , matrikelnummer: 395727)
s6 = new Student(); 
Student.s6: (vorname: "Lisa", nachname: "Müller" , alter: 20 , matrikelnummer: 564739)

const stud: new Array<Text>(this.s4, this.s5, this.s6);


  public showInfo(s: Student) {
  console.log(s.vorname);
  console.log(s.nachname);
  console.log(s.matrikelnummer);
  console.log(s.alter);
  }

showInfo(stud[0]);
showInfo(stud[1]);
showInfo(stud[2]);
showInfo(stud[3]);
} */