//import { MongoClient, MongoClientOptions } from "mongodb";

let sendenDaten: HTMLElement = document.getElementById("senden");
sendenDaten.addEventListener("click", datenSenden);
/*
document.getElementById("uname").innerHTML = " ";
document.getElementById("mail").innerHTML = " ";
document.getElementById("pwort").innerHTML = " ";

let antwort: HTMLElement = document.getElementById("antwort");
sendenDaten.addEventListener("click", getData);
*/

async function datenSenden(): Promise<string> {
    
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "//127.0.0.1:8100/json";   
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let response: Response = await fetch(url + "?" + query.toString());
    let responseText: string = await response.text();
 
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

