let sendenDaten: HTMLElement = document.getElementById("senden");
sendenDaten.addEventListener("click", datenSenden);

let antwort: HTMLElement = document.getElementById("empfangen");
antwort.addEventListener("click", getData);


async function datenSenden(): Promise<string> {
    
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "//127.0.0.1:8100/abschicken";   
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let response: Response = await fetch(url + "?" + query.toString());
    let responseText: string = await response.text();
    
    
    return responseText;   
}

let test: string = "12345";
console.log(test.replaceAll("3", "7"));

async function getData(): Promise<string> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "//127.0.0.1:8100/holen";   
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    let response: Response = await fetch(url + "?" + query.toString());
    let responseText: string = await response.text();
    responseText = responseText.replaceAll("}", "}/r/n");
    let output: HTMLElement = document.getElementById("antwort");
    output.style.whiteSpace = "pre-wrap";
    output.innerText = responseText;
    return responseText;
}

