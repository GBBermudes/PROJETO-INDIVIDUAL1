var dadosFormularioModel = require("../models/dadosFormulario")

function listar(req, res) {
    dadosFormularioModel.listar().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
    })
};

function listarMaiorPesca(req, res) {
    dadosFormularioModel.listarMaiorPesca().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
    })
}

function cadastrar(req, res) {
    var data = req.body.data;
    var local = req.body.local;
    var modalidade = req.body.modalidade;
    var qtd_peixes = req.body.qtd_peixes;
    var nota = req.body.nota;

    if (data == undefined || local == undefined || modalidade == undefined || qtd_peixes == undefined || nota == undefined) {
        res.status(400).send("Algum esta undefined");
        return;
    }

    dadosFormularioModel.cadastrar(data, local, modalidade, qtd_peixes, nota).then(function (resposta) {
        res.status(200).send("Registro inserido com sucesso")
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
    })

}

module.exports = {
    listar,
    cadastrar,
    listarMaiorPesca
}