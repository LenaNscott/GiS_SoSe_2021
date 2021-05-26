import * as Http from "http"; //Erstellung eines http-Objekts, der Interpret schaut nach möglichen http Modulen und hängt sie an, einem nach dem anderen, an den http-Objekt

export namespace P_3_1Server { //Exportieren "P_3_1Server" mit Namespace, da Name schon existiert
    console.log("Starting server"); //Gibt "Starting server" in der Konsole aus
    let port: number = Number(process.env.PORT); //port als Zahl wird deklariert und als process.env.PORT initialisiert. Das gibt Heroku welchen PORT er überwachen soll.
    if (!port) //Wenn "nicht port", wenn da nichts ist dann:
        port = 8100; // ist port = 8100, also PORT 8100 überwachen

    let server: Http.Server = Http.createServer(); // server wird deklariert als Http.Server und initialisiert als "Http.createServer()", ein Server wird erstellt
    server.addListener("request", handleRequest); // gibt server ein Listener, hört ab und wenn "request" hört wird handleRequest ausgeführt
    server.addListener("listening", handleListen); // gibt server ein Listener, hört ab und wenn "listening" hört wird handleListen ausgeführt
    server.listen(port); //Erstellt einenen Listener für den angegebenen PORT

    function handleListen(): void { //Funktion gibt nichts zurück
        console.log("Listening"); //Gibt in der Konsole "Listening" aus
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Http.IncomingMassage muss übergeben werden (repräsentiert die Anforderung an den Server, erstes Argument in der requestListener-Funktion) und Http.ServerResponse (zweiter Parameter in der requestListener-Funktion, repräsentiert den beschreibbaren Stream zurück zum Client)
        console.log("I hear voices!"); //gibt "I hear voices!" in der Konsole aus
        _response.setHeader("content-type", "text/html; charset=utf-8"); //ist der Statuscode und ein Objekt, das die Antwortheader enthält
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); // schreibt eine angegebene Zeichenfolge in die Ausgabe
        console.log(_request.url);
        _response.end(); //Beendet den Antwortprozess 
    }
}