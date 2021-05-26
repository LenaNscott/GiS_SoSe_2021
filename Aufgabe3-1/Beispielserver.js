"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http"); //Erstellung eines http-Objekts, der Interpret schaut nach möglichen http Modulen und hängt sie an, einem nach dem anderen, an den http-Objekt
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server"); //Gibt "Starting server" in der Konsole aus
    let port = Number(process.env.PORT); //port als Zahl wird deklariert und als process.env.PORT initialisiert. Das gibt Heroku welchen PORT er überwachen soll.
    if (!port) //Wenn "nicht port", wenn da nichts ist dann:
        port = 8100; // ist port = 8100, also PORT 8100 überwachen
    let server = Http.createServer(); // server wird deklariert als Http.Server und initialisiert als "Http.createServer()", ein Server wird erstellt
    server.addListener("request", handleRequest); // gibt server ein Listener, hört ab und wenn "request" hört wird handleRequest ausgeführt
    server.addListener("listening", handleListen); // gibt server ein Listener, hört ab und wenn "listening" hört wird handleListen ausgeführt
    server.listen(port); //Erstellt einenen Listener für den angegebenen PORT
    function handleListen() {
        console.log("Listening"); //Gibt in der Konsole "Listening" aus
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //gibt "I hear voices!" in der Konsole aus
        _response.setHeader("content-type", "text/html; charset=utf-8"); //ist der Statuscode und ein Objekt, das die Antwortheader enthält
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); // schreibt eine angegebene Zeichenfolge in die Ausgabe
        console.log(_request.url);
        _response.end(); //Beendet den Antwortprozess 
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=Beispielserver.js.map