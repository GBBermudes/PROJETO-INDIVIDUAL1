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

router.get("/listarModalidadesPesca", function (req, res) {
    dadosFormularioController.listarModalidadesPesca(req, res)
})

router.post("/cadastrarModalidadePesca", function (req, res) {
    dadosFormularioController.cadastrarModalidadePesca(req, res)
})

router.get("/listarModalidadeProdutiva", function (req, res) {
    dadosFormularioController.listarModalidadeProdutiva(req, res)
})

router.get("/listarPeixesPorMes", function (req, res) {
    dadosFormularioController.listarPeixesPorMes(req,res)
})

router.post("/cadastrarMeta", function (req,res) {
    dadosFormularioController.cadastrarMeta(req,res)
})

router.get("/listarMeta", function(req,res) {
    dadosFormularioController.listarMeta(req,res)
})

router.get("/listarRankingModalidades", function (req,res) {
    dadosFormularioController.listarRankingModalidades(req, res)
})

module.exports = router;