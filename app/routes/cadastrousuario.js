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
    });
}
