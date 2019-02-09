var app = require('express')();
var consign = require('consign');


app.set('view engine','ejs'); // motor de geração de view
app.set('views','./app/views');

consign()
.include('app/routes')
.then('config/dbconection.js')
.into(app);



module.exports = app;