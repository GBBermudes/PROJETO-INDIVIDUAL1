
var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT
		    l.nome as 'local',
            ROUND(AVG(d.qtd_peixe), 1) media_peixes,
            COUNT(l.nome) qtd_idas
	    FROM dados_dashboard d
	    JOIN local_pesca l
		    ON d.fk_local_pesca = l.id
	    GROUP BY l.nome
        ORDER BY AVG(d.qtd_peixe) DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function listarMaiorPesca() {
    var instrucao = `
        SELECT 
		    d.qtd_peixe,
            DATE_FORMAT(d.dataa, '%d/%m/%Y') as 'Data',
            l.nome as 'Local'
	    FROM dados_dashboard d
	    JOIN local_pesca l
		    ON d.fk_local_pesca = l.id
	    ORDER BY qtd_peixe DESC
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

function listarModalidadeProdutiva() {
    var instrucao = `    
        SELECT
		    m.nome Modalidade,
            ROUND(AVG(d.qtd_peixe), 1) media_peixes,
            COUNT(m.nome) qtd_pescarias
	    FROM modalidade m
        JOIN dados_dashboard d
		    ON d.fk_modalidade = m.id
	    GROUP BY m.nome
        ORDER BY AVG(d.qtd_peixe) DESC
        LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

function listarPeixesPorMes() {
    var instrucao = `SELECT * FROM grafico_pescados_mes;`
    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

function cadastrarMeta(meta) {
    var instrucao = `UPDATE meta_peixes SET meta = ${meta}`
    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao);
}

function listarMeta() {
    var instrucao = `SELECT meta FROM meta_peixes WHERE id = 1`
    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

function listarRankingModalidades() {
    var instrucao = `SELECT * FROM grafico_ranking_modalidades;`
    console.log("Executando a intrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

function listarTabelaRegistro() {
    var instrucao = `SELECT * FROM historico_registro;`
    console.log("Executando a intrucao SQL: \n" + instrucao)
    return database.executar(instrucao)
}

module.exports = {
    cadastrar,
    listar,
    listarMaiorPesca,
    cadastrarLocalPesca,
    listarLocalPesca,
    listarModalidadesPesca,
    cadastrarModalidadePesca,
    listarModalidadeProdutiva,
    listarPeixesPorMes,
    cadastrarMeta,
    listarMeta,
    listarRankingModalidades,
    listarTabelaRegistro
}