var app = require('./config/server');

//var rotahome = require('./app/routes/home')(app);

//var rotacadastrousuario = require('./app/routes/cadastrousuario')(app);



app.listen(3000, function(){
    console.log("Servidor ON 3000");
})