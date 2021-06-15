"use strict";
let sendenDaten = document.getElementById("senden");
sendenDaten.addEventListener("click", senden);
async function senden() {
    let formData = new FormData(document.forms[0]);
    let url = "//127.0.0.1:8100/json";
    let query = new URLSearchParams(formData);
    let response = await fetch(url + "?" + query.toString());
    let responseText = await response.text();
    return responseText;
}
/**
async function datenSenden(): Promise<void> {
    //let url: string = "//127.0.0.1:8100"
    let responseText: string = await senden(url);
    console.log(responseText);
}
*/
async function jsonAnfragen() {
    let url = "https://lenasfancyapp.herokuapp.com/json";
    let responseText = await senden();
    let user = JSON.parse(responseText);
    console.log(user);
}
//# sourceMappingURL=Formular.js.map