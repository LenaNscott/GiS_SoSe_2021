
let sendenDaten: HTMLElement = document.getElementById("senden");
sendenDaten.addEventListener("click", datenSenden);
document.getElementById("uname").innerHTML = "";
document.getElementById("mail").innerHTML = "";
document.getElementById("pwort").innerHTML = "";

let antwort: HTMLElement = document.getElementById("empfangen");
antwort.addEventListener("click", getData);



async function datenSenden(): Promise<string> {
    
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://lenasfancyapp.herokuapp.com/abschicken";   
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let response: Response = await fetch(url + "?" + query.toString());
    let responseText: string = await response.text();
    return responseText;   
}

async function getData(): Promise<string> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://lenasfancyapp.herokuapp.com/holen";   
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let response: Response = await fetch(url + "?" + query.toString());
    let responseText: string = await response.text();
    responseText = responseText.replaceAll("}", "}\r\n"); 
    let div: HTMLElement = document.getElementById("antwort");
    div.innerHTML = responseText;
    return responseText;
}

