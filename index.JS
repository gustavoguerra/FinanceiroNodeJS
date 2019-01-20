var http = require('http');

var server = http.createServer(function(req,res){

    var solit = req.url;

    if(solit == '/Teste1'){
        res.end("<html><body>Teste 1</body><html>");    
    }
    else
    {
        res.end("<html><body>"+solit+"</body><html>");
    }

    
});

server.listen(3000);