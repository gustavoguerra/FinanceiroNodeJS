module.exports = function (app) {

    var sql = require("mssql");

    app.get('/login', function (req, res) {
      
        var conn = new sql.ConnectionPool(app.config.dbconection);
        var requ = new sql.Request(conn);

        conn.connect(function(err){
            requ.query('select * from Usuario', function(err,recordset){
                res.render("login/index", {result: recordset});             
            })
        })





        //  sql.connect(app.config.dbconection, function (err) {

        //     var request = new sql.Request();
        //     request.query('select * from Usuario', function (err, recordset) {
        //         res.send(recordset);
        //     });    
        // });
        
      //  res.render("login/index");

    });
}