var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM dados_formulario
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function cadastrar(data, local, modalidade, qtd_peixes, nota) {
    var instrucao = `
    INSERT INTO dados_formulario (data, local, modalidade, qtd_peixes, nota) VALUES ('${data}', '${local}', '${modalidade}', '${qtd_peixes}', '${nota}')
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrar,
    listar
}