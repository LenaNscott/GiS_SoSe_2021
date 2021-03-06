"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
const Url = require("url");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        //console.log("I hear voices!"); 
        let url = Url.parse(_request.url, true);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (url.pathname == "/html") {
            _response.write("<p><b>Username: </b>" + url.query.username + "</p>");
            _response.write("<p><b>Passwort: </b>" + url.query.passwort + "</p>");
        }
        else if (url.pathname == "/json") {
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.end();
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
/*
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            for (let key in url.query) {
                console.log(key + " :" + url.query[key]);
                _response.write(key + " :" + url.query[key]);
            }

            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        */ 
//# sourceMappingURL=Beispielserver.js.map