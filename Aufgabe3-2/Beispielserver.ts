import * as Http from "http"; 
import * as Url from "url";

export namespace P_3_1Server { 
    console.log("Starting server"); 
    let port: number = Number(process.env.PORT); 
    if (!port) 
        port = 8100; 

    let server: Http.Server = Http.createServer(); 
    server.addListener("request", handleRequest); 
    server.addListener("listening", handleListen);
    server.listen(port); 

    function handleListen(): void { 
        console.log("Listening"); 
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { 
        //console.log("I hear voices!"); 
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        _response.setHeader("content-type", "text/html; charset=utf-8"); 
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (url.pathname == "/html") {
            _response.write("<p><b>Username: </b>" + url.query.username + "</p>");
            _response.write("<p><b>Passwort: </b>" + url.query.passwort + "</p>");
        }

        else if (url.pathname == "/json") {
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);
        }
             
        _response.end(); 

    }
}

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