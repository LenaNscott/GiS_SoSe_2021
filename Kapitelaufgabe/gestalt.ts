
let aussage: HTMLElement = document.getElementById("ausgabe");

let bildauswahlK: HTMLElement = document.getElementById("Kopf1");
bildauswahlK.setAttribute("src", auswahl.kopf.bild);


let bildauswahlKo: HTMLElement = document.getElementById("Koerper1");
bildauswahlKo.setAttribute("src", auswahl.koerper.bild);

let bildauswahlB: HTMLElement = document.getElementById("Bein1");
bildauswahlB.setAttribute("src", auswahl.beine.bild);


buttonsFaerben();
async function senden() {
  let query: URLSearchParams = new URLSearchParams(<any>auswahl);
  let url = "https://gis-communication.herokuapp.com" + "?" + query.toString();
  let response: Response = await fetch(url);
  let lesen: string = await response.text();
  console.log(lesen);
  if (lesen.search("error") != -1) {
    lesen = lesen.substring(10,lesen.length -2);
    aussage.textContent = "Negative Serverantwort:\n" + lesen;
    aussage.style.color = "red";
  }

  else {
    lesen = lesen.substring(12,lesen.length -2);
    aussage.textContent = "Positive Serverantwort:\n" + lesen;
    aussage.style.color = "black";
  }
}

senden();



