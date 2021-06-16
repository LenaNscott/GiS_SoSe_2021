import * as Http from "http"; 
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace P_3_1Server { 
    let eingabe: Mongo.Collection;
   
    interface Anmeldung {
       [type: string]: string | string[];
    }

    console.log("Starting server"); 
    let port: number = Number(process.env.PORT); 
    if (!port) 
        port = 8100; 

    let server: Http.Server = Http.createServer(); 
    server.addListener("request", handleRequest); 
    server.addListener("listening", handleListen);
    server.listen(port); 

    let databaseUrl: string = "mongodb+srv://user_nerz:mongoDB2020@nerz-lena.9cmgx.mongodb.net/Datenbank?retryWrites=true&w=majority";
    connectToDatabase(databaseUrl);


    async function connectToDatabase (_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        eingabe = mongoClient.db("Datenbank").collection("Formulardaten");
        console.log("Datenbase conection", eingabe != undefined);
    }
  

    function handleListen(): void { 
        console.log("Listening"); 
    }
    

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { 
        //console.log("I hear voices!"); 
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (url.pathname == "/html") {
            getAntwort(databaseUrl);
        }

        else if (url.pathname == "/json") {
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
            formularEingabe(url.query);
        }
             
        _response.end(); 

    }

    function formularEingabe (_anmeldung: Anmeldung): void {
        eingabe.insert(_anmeldung);
    }

    async function getAntwort (_url: string): Promise<any> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        eingabe = mongoClient.db("Datenbank").collection("Formulardaten");
        let cursor: Mongo.Cursor = eingabe.find({});
        console.log(cursor);
        return cursor;
    }
}
