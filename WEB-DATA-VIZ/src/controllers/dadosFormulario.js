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

function cadastrarLocalPesca(req, res) {
    var nome_local_pesca = req.body.nome_local_pesca
    if (nome_local_pesca == undefined) {
    res.status(400).send("Algum esta undefined");
    return;
    }

    dadosFormularioModel.cadastrarLocalPesca(nome_local_pesca).then(function (resposta) {
        res.status(200).send("Registro inserido com sucesso")
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
    })
}

function listarLocalPesca(req, res) {

    dadosFormularioModel.listarLocalPesca().then(function (resposta) {
        res.status(200).json(resposta)
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
    })
}

function listarModalidadesPesca(req, res) {

    dadosFormularioModel.listarModalidadesPesca().then(function (resposta) {
        res.status(200).json(resposta)
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
    })
}

function cadastrarModalidadePesca(req, res) {
    var nome_modalidade_pesca = req.body.nome_modalidade_pesca
    if (nome_modalidade_pesca == undefined) {
    res.status(400).send("Algum esta undefined");
    return;
    }

    dadosFormularioModel.cadastrarModalidadePesca(nome_modalidade_pesca).then(function (resposta) {
        res.status(200).send("Registro inserido com sucesso")
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage)
    })
}

module.exports = {
    listar,
    cadastrar,
    listarMaiorPesca,
    cadastrarLocalPesca,
    listarLocalPesca,
    listarModalidadesPesca,
    cadastrarModalidadePesca
}