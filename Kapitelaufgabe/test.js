"use strict";
async function communicat(_url) {
    let response = await fetch(_url);
    let s = await response.json();
    console.log("Response", s);
    console.log("Test");
}
console.log("Start");
communicat("http://127.0.0.1:8081/data.JSON");
console.log("Ende");
//# sourceMappingURL=test.js.map