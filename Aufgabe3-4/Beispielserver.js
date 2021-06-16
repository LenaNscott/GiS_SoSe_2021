"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var P_3_1Server;
(function (P_3_1Server) {
    let eingabe;
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    let databaseUrl = "mongodb+srv://user_nerz:mongoDB2020@nerz-lena.9cmgx.mongodb.net/Datenbank?retryWrites=true&w=majority";
    connectToDatabase(databaseUrl);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        eingabe = mongoClient.db("Datenbank").collection("Formulardaten");
        console.log("Datenbase conection", eingabe != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        //console.log("I hear voices!"); 
        let url = Url.parse(_request.url, true);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (url.pathname == "/html") {
            getAntwort(databaseUrl);
        }
        else if (url.pathname == "/json") {
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            formularEingabe(url.query);
        }
        _response.end();
    }
    function formularEingabe(_anmeldung) {
        eingabe.insert(_anmeldung);
    }
    async function getAntwort(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        eingabe = mongoClient.db("Datenbank").collection("Formulardaten");
        let cursor = eingabe.find({});
        console.log(cursor);
        return cursor;
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=Beispielserver.js.map