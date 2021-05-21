
let bildauswahlK: HTMLElement = document.getElementById("Kopf1");
bildauswahlK.setAttribute("src", auswahl.kopf.bild);


let bildauswahlKo: HTMLElement = document.getElementById("Koerper1");
bildauswahlKo.setAttribute("src", auswahl.koerper.bild);

let bildauswahlB: HTMLElement = document.getElementById("Bein1");
bildauswahlB.setAttribute("src", auswahl.beine.bild);


buttonsFaerben();

/* async function get(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    console.log("Response", response);
  }
get(gis-communication.herokuapp.com); */
