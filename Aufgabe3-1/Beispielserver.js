"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http"); //Erstellung eines http-Objekts, der Interpret schaut nach möglichen http Modulen und hängt sie an, einem nach dem anderen, an den http-Objekt
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server"); //Gibt "Starting server" in der Konsole aus
    let port = Number(process.env.PORT); //port als Zahl wird deklariert und als process.env.PORT initialisiert. Das gibt Heroku welchen PORT er überwachen soll.
    if (!port) //Wenn "nicht port", wenn da nichts ist, dann
        port = 8100; // ist port = 8100, also PORT 8100 überwachen
    let server = Http.createServer(); // server wird deklariert als Http.Server und initialisiert mit "Http.createServer()", ein Server wird erstellt
    server.addListener("request", handleRequest); // gibt server ein Listener, hört ab und wenn er einen "request" hört wird die Funktion handleRequest ausgeführt
    server.addListener("listening", handleListen); // gibt server ein Listener, hört ab und wenn er ein "listening" hört wird die Funktion handleListen ausgeführt
    server.listen(port); //Erstellt einenen Listener für den angegebenen PORT
    function handleListen() {
        console.log("Listening"); //Gibt in der Konsole "Listening" aus
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //gibt "I hear voices!" in der Konsole aus, wird also immer ausgegeben wenn ein request am Server ankam
        _response.setHeader("content-type", "text/html; charset=utf-8"); //ist der Statuscode und ein Objekt, das den Antwortheader enthält
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); // schreibt die Request Url in den Antwortstream, _request.url enthält die Nutzdaten, die nach dem ? an die Url angehängt werden
        console.log(_request.url); // gibt die Nutzdaten in der Console aus
        _response.end(); //Beendet den Antwortprozess 
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=Beispielserver.js.map