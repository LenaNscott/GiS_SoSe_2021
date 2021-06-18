"use strict";
let sendenDaten = document.getElementById("senden");
sendenDaten.addEventListener("click", datenSenden);
let antwort = document.getElementById("empfangen");
antwort.addEventListener("click", getData);
async function datenSenden() {
    let formData = new FormData(document.forms[0]);
    let url = "//127.0.0.1:8100/abschicken";
    let query = new URLSearchParams(formData);
    let response = await fetch(url + "?" + query.toString());
    let responseText = await response.text();
    return responseText;
}
let test = "12345";
console.log(test.replaceAll("3", "7"));
async function getData() {
    let formData = new FormData(document.forms[0]);
    let url = "//127.0.0.1:8100/holen";
    let query = new URLSearchParams(formData);
    let response = await fetch(url + "?" + query.toString());
    let responseText = await response.text();
    responseText = responseText.replaceAll("}", "}/r/n");
    let output = document.getElementById("antwort");
    output.style.whiteSpace = "pre-wrap";
    output.innerText = responseText;
    return responseText;
}
//# sourceMappingURL=Datenformular.js.map