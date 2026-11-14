
var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT
	        local_teste as lugar,
	        COUNT(local_teste) as qtd_vezes
        FROM dados_formulario
        GROUP BY local_teste
        ORDER BY COUNT(local_teste) DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function listarMaiorPesca() {
    var instrucao = `
    SELECT 
        data_teste,
        qtd_peixe
    FROM dados_formulario
    ORDER BY ID DESC
    LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function cadastrar(data, local, modalidade, qtd_peixes, nota) {
    var instrucao = `
    INSERT INTO dados_dashboard (dataa, fk_local_pesca , fk_modalidade, qtd_peixe, nota) VALUES ('${data}', '${local}', '${modalidade}', '${qtd_peixes}', '${nota}')
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarLocalPesca(nome_local_pesca) {
    var instrucao = `INSERT INTO local_pesca (nome) VALUES ('${nome_local_pesca}')`;
    console.log("Executando a intrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function listarLocalPesca() {
    var instrucao = `SELECT * FROM local_pesca;`;
    console.log("Executando a instrucao SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function listarModalidadesPesca() {
    var instrucao = `SELECT * FROM modalidade;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function cadastrarModalidadePesca(nome_modalidade_pesca) {
    var instrucao = `INSERT INTO modalidade (nome) VALUES ('${nome_modalidade_pesca}')`;
    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

module.exports = {
    cadastrar,
    listar,
    listarMaiorPesca,
    cadastrarLocalPesca,
    listarLocalPesca,
    listarModalidadesPesca,
    cadastrarModalidadePesca
}