"use strict";
let sendenDaten = document.getElementById("senden");
sendenDaten.addEventListener("click", datenSenden);
document.getElementById("uname").innerHTML = "";
document.getElementById("mail").innerHTML = "";
document.getElementById("pwort").innerHTML = "";
let antwort = document.getElementById("empfangen");
antwort.addEventListener("click", getData);
async function datenSenden() {
    let formData = new FormData(document.forms[0]);
    let url = "https://lenasfancyapp.herokuapp.com/abschicken";
    let query = new URLSearchParams(formData);
    let response = await fetch(url + "?" + query.toString());
    let responseText = await response.text();
    return responseText;
}
async function getData() {
    let formData = new FormData(document.forms[0]);
    let url = "https://lenasfancyapp.herokuapp.com/holen";
    let query = new URLSearchParams(formData);
    let response = await fetch(url + "?" + query.toString());
    let responseText = await response.text();
    responseText = responseText.replaceAll("}", "}\r\n");
    let div = document.getElementById("antwort");
    div.innerHTML = responseText;
    return responseText;
}
//# sourceMappingURL=Datenformular.js.map