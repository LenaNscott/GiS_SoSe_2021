let abschicken: HTMLElement = document.getElementById("abschicken");
abschicken.addEventListener("click", versenden);



//console.log(formData.get("form"));

async function versenden(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    console.log(": " + formData.get("username"));
    for (let entry of formData) {
        console.log(entry);
        console.log("name: " + entry[0]);
        console.log("value: " + entry[1]);
    }
    let url: string = "https://lenasfancyapp.herokuapp.com";    
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();
    console.log(url);
    let response: Response = await fetch(url);
    console.log(response);
}