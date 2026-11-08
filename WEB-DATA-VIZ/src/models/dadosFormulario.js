var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM dados_formulario
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function cadastrar(tipo_pescaria, como_aproveitar, oque_mais_procura, frequencia_pescaria, frase) {
    var instrucao = `
    INSERT INTO dados_formulario (tipo_pescaria, como_aproveitar, oque_mais_procura, frequencia_pescaria, frase) VALUES ('${tipo_pescaria}', '${como_aproveitar}', '${oque_mais_procura}', '${frequencia_pescaria}', '${frase}')
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrar,
    listar
}