"use strict";
let abschicken = document.getElementById("abschicken");
abschicken.addEventListener("click", senden);
//console.log(formData.get("form"));
async function senden() {
    let formData = new FormData(document.forms[0]);
    console.log(": " + formData.get("username"));
    for (let entry of formData) {
        console.log(entry);
        console.log("name: " + entry[0]);
        console.log("value: " + entry[1]);
    }
    let url = "http://127.0.0.1:8100";
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    console.log(url);
    let response = await fetch(url);
    console.log(response);
}
//# sourceMappingURL=Formular.js.map