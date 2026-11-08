var dadosFormularioModel = require("../models/dadosFormulario")

function listar(req, res) {
    dadosFormularioModel.listar().then(function (resultado) {
        res.status(200).jason(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
    })
};

function cadastrar(req, res) {
    var tipo_pescaria = req.body.tipo_pescaria;
    var como_aproveitar = req.body.como_aproveitar;
    var oque_mais_procura = req.body.oque_mais_procura;
    var frequencia_pescaria = req.body.frequencia_pescaria;
    var frase = req.body.frase;

    if (tipo_pescaria == undefined || como_aproveitar == undefined || oque_mais_procura == undefined || frequencia_pescaria == undefined || frase == undefined) {
        res.status(400).send("Algum esta undefined")
    }

    dadosFormularioModel.cadastrar(tipo_pescaria, como_aproveitar, oque_mais_procura, frequencia_pescaria, frase).then(function (resposta) {
        res.status(200).send("Tipo pescaria inserido com sucesso")
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
    })

}

module.exports = {
    listar,
    cadastrar
}