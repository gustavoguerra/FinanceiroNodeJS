module.exports = function (app) {

    app.get('/login', function (req, res) {

        var sql = require("mssql");

        // config for your database
        var config = {
            user: 'sa',
            password: 'ti@sup0rt3',
            server: '192.168.15.10',
            database: 'FinanceiroNode'
        };

        sql.connect(config, function (err) {

            if (err) console.log(err);

            var request = new sql.Request();

            request.query('select * from Usuario', function (err, recordset) {

                if (err) console.log(err)                
                res.send(recordset);
            });            
        });
       
    })
}