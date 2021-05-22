
async function communicat(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    let s: string = await response.json();
    console.log("Response", s);
    console.log("Test");
  }

console.log("Start");
communicat("http://127.0.0.1:8081/data.JSON");
console.log("Ende");
