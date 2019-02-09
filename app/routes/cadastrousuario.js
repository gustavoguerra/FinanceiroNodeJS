module.exports = function (app) {


    app.get('/cadastrousuario', function (req, res) {

        var sql = require("mssql");

        var conn = new sql.ConnectionPool(app.config.dbconection);
        var requ = new sql.Request(conn);

        conn.connect(function (err) {
            requ.query('select * from Usuario', function (err, recordset) {
                console.log(recordset);
                console.log(err);
                res.render("cadastro/cadastrousuario", { result: recordset });
            });
        });
        
        // var sql = require("mssql");
        // sql.connect(app.config.dbconection, function (err) {

        //     var request = new sql.Request();
        //     request.query('select * from Usuario', function (err, recordset) {
        //         res.send(recordset);
        //         console.log(recordset);
        //     });
        // });

       // res.render("cadastro/cadastrousuario");
    });
}