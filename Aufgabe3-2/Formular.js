"use strict";
let html = document.getElementById("html");
html.addEventListener("click", htmlAnfragen);
let htmlTextfeld = document.getElementById("divElement");
let json = document.getElementById("json");
json.addEventListener("click", jsonAnfragen);
//console.log(formData.get("form"));
async function versenden(url) {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    let response = await fetch(url + "?" + query.toString());
    let responseText = await response.text();
    return responseText;
}
async function htmlAnfragen() {
    let url = "https://lenasfancyapp.herokuapp.com/html";
    let responseText = await versenden(url);
    htmlTextfeld.innerHTML = responseText;
}
async function jsonAnfragen() {
    let url = "https://lenasfancyapp.herokuapp.com/json";
    let responseText = await versenden(url);
    let user = JSON.parse(responseText);
    console.log(user);
}
//# sourceMappingURL=Formular.js.map