"use strict";
let abschicken = document.getElementById("abschicken");
abschicken.addEventListener("click", versenden);
//console.log(formData.get("form"));
async function versenden() {
    let formData = new FormData(document.forms[0]);
    let name = ("Username: " + formData.get("username"));
    let code = ("Passwort: " + formData.get("passwort"));
    let ausgabe = document.createElement("p");
    let ausgabe2 = document.createElement("p");
    let text = document.createTextNode(name);
    let text2 = document.createTextNode(code);
    ausgabe.appendChild(text);
    ausgabe2.appendChild(text2);
    let ausgabebereich = document.getElementById("body");
    ausgabebereich.appendChild(ausgabe);
    ausgabebereich.appendChild(ausgabe2);
    /*  for (let entry of formData) {
          console.log(entry);
          console.log("name: " + entry[0]);
          console.log("value: " + entry[1]);
      }
      */
    let url = "http://localhost:8100/";
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    //console.log(url);
    let response = await fetch(url + "?" + query.toString());
    let responseText = await response.text();
    console.log(responseText);
}
//# sourceMappingURL=Formular.js.map