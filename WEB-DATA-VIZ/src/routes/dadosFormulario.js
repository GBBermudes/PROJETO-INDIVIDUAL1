var express = require("express");
var router = express.Router();

var dadosFormularioController = require("../controllers/dadosFormulario");

router.post("/cadastrar", function (req, res) {
    dadosFormularioController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    dadosFormularioController.listar(req, res);
});

router.get("/listarMaiorPesca", function (req, res) {
    dadosFormularioController.listarMaiorPesca(req, res);
})

router.post("/cadastrarLocalPesca", function (req, res) {
    dadosFormularioController.cadastrarLocalPesca(req, res)
})

router.get("/listarLocalPesca", function (req, res) {
    dadosFormularioController.listarLocalPesca(req, res)
})

module.exports = router;