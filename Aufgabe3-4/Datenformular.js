"use strict";
//import { MongoClient, MongoClientOptions } from "mongodb";
let sendenDaten = document.getElementById("senden");
sendenDaten.addEventListener("click", datenSenden);
/*
document.getElementById("uname").innerHTML = " ";
document.getElementById("mail").innerHTML = " ";
document.getElementById("pwort").innerHTML = " ";

let antwort: HTMLElement = document.getElementById("antwort");
sendenDaten.addEventListener("click", getData);
*/
async function datenSenden() {
    let formData = new FormData(document.forms[0]);
    let url = "//127.0.0.1:8100/json";
    let query = new URLSearchParams(formData);
    let response = await fetch(url + "?" + query.toString());
    let responseText = await response.text();
    return responseText;
}
/*
async function getData(): Promise<void> {
    let formular: Mongo.Collection = MongoClient;
}



async function jsonAnfragen(): Promise<void> {
    let url: string = "https://lenasfancyapp.herokuapp.com/json";
    let responseText: string = await senden();
    let user: Login = JSON.parse(responseText);
    console.log(user);
}
*/
//# sourceMappingURL=Datenformular.js.map