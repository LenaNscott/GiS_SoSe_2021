let abschicken: HTMLElement = document.getElementById("abschicken");
abschicken.addEventListener("click", versenden);



//console.log(formData.get("form"));

async function versenden(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let name: string = ("Username: " + formData.get("username"));
    let code: string = ("Passwort: " + formData.get("passwort"));

    let ausgabe: HTMLElement = document.createElement("p");
    let ausgabe2: HTMLElement = document.createElement("p");
    let text = document.createTextNode(name);
    let text2 = document.createTextNode(code);

    ausgabe.appendChild(text);
    ausgabe2.appendChild(text2);

    let ausgabebereich: HTMLElement = document.getElementById("body");
    ausgabebereich.appendChild(ausgabe);
    ausgabebereich.appendChild(ausgabe2);
  /*  for (let entry of formData) {
        console.log(entry);
        console.log("name: " + entry[0]);
        console.log("value: " + entry[1]);
    } 
    */
    let url: string = "http://localhost:8100/";    
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();
    //console.log(url);
    let response: Response = await fetch(url + "?" + query.toString());
    let responseText: string = await response.text();
    console.log(responseText);
}