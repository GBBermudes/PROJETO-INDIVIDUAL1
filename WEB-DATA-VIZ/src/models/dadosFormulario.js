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
    ORDER BY qtd_peixe DESC
    LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function cadastrar(data, local, modalidade, qtd_peixes, nota) {
    var instrucao = `
    INSERT INTO dados_formulario (data_teste, local_teste, modalidade, qtd_peixe, nota) VALUES ('${data}', '${local}', '${modalidade}', '${qtd_peixes}', '${nota}')
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrar,
    listar,
    listarMaiorPesca
}