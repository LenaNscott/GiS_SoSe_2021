//5
class Student {

    constructor () {
    let vorname: string;
    let nachname: string;
    let alter: number;
    let matrikelnummer: number;
    }
  
    names: Student[] = [s1, s2, s3];
  
  
    showInfo2(s: Student) {
    console.log(s.vorname);
    console.log(s.nachname);
    console.log(s.matrikelnummer);
    console.log(s.alter);
    }
  
    showInfo2(names[0]);
    showInfo2(names[1]);
    showInfo2(names[2]);
    showInfo2(names[3]);
  }