"use strict";
let abschicken = document.getElementById("abschicken");
abschicken.addEventListener("click", versenden);
//let anfrage: HTMLElement = document.getElementById("anfrage");
//anfrage.addEventListener("click", anfragen);
//console.log(formData.get("form"));
let formData = new FormData(document.forms[0]);
async function versenden() {
    let url = "http://localhost:8100/";
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    let response = await fetch(url + "?" + query.toString());
    let responseText = await response.text();
    console.log(responseText);
    let name = ("Username: " + formData.get("username"));
    let code = ("Passwort: " + formData.get("passwort"));
    let ausgabe = document.createElement("p");
    let ausgabe2 = document.createElement("p");
    let text = document.createTextNode(name);
    let text2 = document.createTextNode(code);
    ausgabe.appendChild(text);
    ausgabe2.appendChild(text2);
    document.body.appendChild(ausgabe);
    document.body.appendChild(ausgabe2);
}
//# sourceMappingURL=Formular.js.map