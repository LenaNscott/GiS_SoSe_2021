interface Login {
    username: string;
    passwort: string;
}

let html: HTMLElement = document.getElementById("html");
html.addEventListener("click", htmlAnfragen);

let htmlTextfeld: HTMLElement = document.getElementById("divElement");

let json: HTMLElement = document.getElementById("json");
json.addEventListener("click", jsonAnfragen);


//console.log(formData.get("form"));


async function versenden(url: string): Promise<string> {
    
    let formData: FormData = new FormData(document.forms[0]);
       
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let response: Response = await fetch(url + "?" + query.toString());
    let responseText: string = await response.text();
    return responseText;  
     
}

async function htmlAnfragen(): Promise<void> {
    let url: string = "https://lenasfancyapp.herokuapp.com/html"; 
    
    let responseText: string = await versenden(url);
    htmlTextfeld.innerHTML = responseText;
}


async function jsonAnfragen(): Promise<void> {
    let url: string = "https://lenasfancyapp.herokuapp.com/json";
    let responseText: string = await versenden(url);
    let user: Login = JSON.parse(responseText);
    console.log(user);
}

