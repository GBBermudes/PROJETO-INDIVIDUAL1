var express = require("express");
var router = express.Router();

var dadosFormularioController = require("../controllers/dadosFormulario");

router.post("/cadastrar", function (req, res) {
    dadosFormularioController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    dadosFormularioController.listar(req, res);
});

module.exports = router;