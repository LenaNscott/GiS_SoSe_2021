
let sendenDaten: HTMLElement = document.getElementById("senden");
sendenDaten.addEventListener("click", senden);




async function senden(): Promise<string> {
    
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "//127.0.0.1:8100/json"   
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let response: Response = await fetch(url + "?" + query.toString());
    let responseText: string = await response.text();
    return responseText;  
     
}

/**
async function datenSenden(): Promise<void> {
    //let url: string = "//127.0.0.1:8100"
    let responseText: string = await senden(url);
    console.log(responseText);
}
*/


async function jsonAnfragen(): Promise<void> {
    let url: string = "https://lenasfancyapp.herokuapp.com/json";
    let responseText: string = await senden();
    let user: Login = JSON.parse(responseText);
    console.log(user);
}


