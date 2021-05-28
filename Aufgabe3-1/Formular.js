"use strict";
let abschicken = document.getElementById("abschicken");
abschicken.addEventListener("click", versenden);
//console.log(formData.get("form"));
async function versenden() {
    let formData = new FormData(document.forms[0]);
    console.log(": " + formData.get("username"));
    for (let entry of formData) {
        console.log(entry);
        console.log("name: " + entry[0]);
        console.log("value: " + entry[1]);
    }
    let url = "https://lenasfancyapp.herokuapp.com";
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    console.log(url);
    let response = await fetch(url);
    console.log(response);
}
//# sourceMappingURL=Formular.js.map