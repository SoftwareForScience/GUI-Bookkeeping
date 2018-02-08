var http = require('http');

var server = http.createServer(function (req, res){
   res.writeHead(200, {"Content-Type": "text/plain"});
   res.end("Hello world");
});

app.use(express.static('public'))

server.listen(1234, function(){
   console.log("Server started");

});

/*
    1. Maak een server dat static files laad van de public folder(Express)
    2. Voer mocha test uit

 */