var http= require("http");
var url = require("url");
var querystring = require("querystring");
var {info, error} = require("./modules/my-log");
var {countries} = require("countries-list");

var server = http.createServer(function (request, response){
    var parsed = url.parse(request.url);
    console.log("parsed: ", parsed);

    var pathmane = parsed.pathname;

    var query = querystring.parse(parsed.query);
    console.log("query: ", query);
    if(pathmane==='/')  {
    response.writeHead(200, {'Content-type':'text/html'});
    response.write('<html><body><p>Hello Home Page</p></body></html>');
    response.end();
    }else if(pathmane==='/exit') {
        response.writeHead(200, {'Content-type':'text/html'});
        response.write('<html><body><p>Bye</p></body></html>');
        response.end();
    }else if(pathmane==='/info') {
        var result = info(pathmane);
        response.writeHead(200, {'Content-type':'text/html'});
        response.write(result);
        response.end();
    }else if(pathmane==='/country') {
        response.writeHead(200, {'Content-type':'application/json'});
        response.write(JSON.stringify(countries[query.code]));
        response.end();
    }else if(pathmane==='/error') {
        var result = error(pathmane);
        response.writeHead(200, {'Content-type':'text/html'});
        response.write(result);
        response.end();
    }else {
        response.writeHead(404, {'Content-type': 'text/html'});
        response.write('<html><body><p>Not Found</p></body></html>');
        response.end();
    }
});

server.listen(4000);
console.log("running on 4000 ")
