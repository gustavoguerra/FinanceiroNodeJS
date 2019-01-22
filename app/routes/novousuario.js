module.exports = function (app) {
    app.get('/novousuario', function (req, res) {
        res.render("novousuario/index");
    });
}
