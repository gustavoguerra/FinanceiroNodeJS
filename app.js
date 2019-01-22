var app = require('./config/server');

var rotahome = require('./app/routes/home')(app);
var rotalogin = require('./app/routes/login')(app);
var rotanvovouser = require('./app/routes/novousuario')(app);

app.listen(3000, function(){
    console.log("Servidor OK");
});