
var database = require("../database/config")

function listar(id_usuario) {
    var instrucao = `
            SELECT
                l.nome as 'local',
                ROUND(AVG(r.qtd_peixes), 1) media_peixes,
                COUNT(l.nome) qtd_idas
            FROM registro r
            JOIN local l
                ON r.fk_local = l.id
            JOIN usuario u
                ON l.fk_usuario = u.id
            WHERE u.id = ${id_usuario}
            GROUP BY l.nome
            ORDER BY AVG(r.qtd_peixes) DESC
            LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function listarMaiorPesca(id_usuario) {
    var instrucao = `
        	SELECT 
                r.qtd_peixes,
                DATE_FORMAT(r.data, '%d/%m/%Y') as 'Data',
                l.nome as 'Local'
            FROM registro r
            JOIN local l
                ON r.fk_local = l.id
            JOIN usuario u
                ON l.fk_usuario = u.id
            WHERE u.id = ${id_usuario}
            ORDER BY qtd_peixes DESC
            LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function cadastrar(data, local, modalidade, qtd_peixes, nota) {
    var instrucao = `
    INSERT INTO registro (data, fk_local , fk_modalidade, qtd_peixes, nota) VALUES ('${data}', '${local}', '${modalidade}', '${qtd_peixes}', ${nota})
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarLocalPesca(nome_local_pesca, id_usuario) {
    var instrucao = `INSERT INTO local (nome, fk_usuario) VALUES ('${nome_local_pesca}', ${id_usuario})`;
    console.log("Executando a intrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function listarLocalPesca(id_usuario) {
    var instrucao = `SELECT
                        l.id,
                        l.nome 
                    FROM local l 
                    JOIN usuario u 
                        ON l.fk_usuario = u.id 
                    WHERE u.id = ${id_usuario};`;
    console.log("Executando a instrucao SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function listarModalidadesPesca(id_usuario) {
    var instrucao = `SELECT
                        m.id,
                        m.nome
                    FROM modalidade m
                    JOIN usuario u
                        ON m.fk_usuario = u.id
                    WHERE u.id = ${id_usuario};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function cadastrarModalidadePesca(nome_modalidade_pesca, id_usuario) {
    var instrucao = `INSERT INTO modalidade (nome, fk_usuario) VALUES ('${nome_modalidade_pesca}', ${id_usuario})`;
    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

function listarModalidadeProdutiva(id_usuario) {
    var instrucao = `    
            SELECT
                m.nome Modalidade,
                ROUND(AVG(r.qtd_peixes), 1) media_peixes,
                COUNT(m.nome) qtd_pescarias
            FROM modalidade m
            JOIN registro r
                ON r.fk_modalidade = m.id
            JOIN usuario U
                ON m.fk_usuario = u.id
            WHERE u.id = ${id_usuario}
            GROUP BY m.nome
            ORDER BY AVG(r.qtd_peixes) DESC
            LIMIT 1;
    
    `;

    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

function listarPeixesPorMes(id_usuario) {
    var instrucao = `
    SELECT 
        CASE 
        WHEN MONTH(r.data) = 1 THEN "JAN"
        WHEN MONTH(r.data) = 2 THEN "FEV"
        WHEN MONTH(r.data) = 3 THEN "MAR"
        WHEN MONTH(r.data) = 4 THEN "ABR"
        WHEN MONTH(r.data) = 5 THEN "MAI"
        WHEN MONTH(r.data) = 6 THEN "JUN"
        WHEN MONTH(r.data) = 7 THEN "JUL"
        WHEN MONTH(r.data) = 8 THEN "AGO"
        WHEN MONTH(r.data) = 9 THEN "SET"
        WHEN MONTH(r.data) = 10 THEN "OUT"
        WHEN MONTH(r.data) = 11 THEN "NOV"
        WHEN MONTH(r.data) = 12 THEN "DEZ"
        END AS Mes,
        SUM(r.qtd_peixes) AS Total
    FROM registro r
    JOIN local l
        ON r.fk_local = l.id
    JOIN usuario u
        ON l.fk_usuario = u.id
    WHERE u.id = ${id_usuario} AND YEAR(r.data) = 2026
    GROUP BY MES, MONTH(r.data)
    ORDER BY MONTH(r.data);`
    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

function atualizarMeta(meta, id_usuario) {
    var instrucao = `UPDATE meta SET meta = ${meta} WHERE fk_usuario = ${id_usuario}`
    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao);
}

function listarMeta(id_usuario) {
    var instrucao = `SELECT meta FROM meta WHERE fk_usuario = ${id_usuario}`
    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

function listarRankingModalidades(id_usuario) {
    var instrucao = `SELECT 
                        m.nome modalidade,
                        round(avg(r.nota), 1) as media_nota
                    FROM registro r
                    JOIN modalidade m
                        ON r.fk_modalidade = m.id
                    JOIN usuario u
                        ON m.fk_usuario = u.id
                    WHERE u.id = ${id_usuario} AND YEAR(r.data) = 2026
                    GROUP BY m.nome
                    ORDER BY avg(r.nota) DESC
                    LIMIT 4;`
    console.log("Executando a intrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

function listarTabelaRegistro(id_usuario) {
    var instrucao = `SELECT
                        DATE_FORMAT(r.data, '%d/%m/%Y') data_registro,
                        l.nome local_pesca,
                        m.nome modalidade,
                        r.qtd_peixes,
                        r.nota
                    FROM registro r
                    JOIN local l
                        ON r.fk_local = l.id
                    JOIN modalidade m
                        ON r.fk_modalidade = m.id
                    JOIN usuario u
                        ON l.fk_usuario = u.id
                    WHERE u.id = ${id_usuario}
                    ORDER BY r.id DESC;`
    console.log("Executando a intrucao SQL: \n" + instrucao)
    return database.executar(instrucao)
}

function cadastrarMeta(id_usuario, meta) {
    var instrucao = `INSERT INTO meta (meta, fk_usuario) VALUES (${meta}, ${id_usuario})`
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
    cadastrarModalidadePesca,
    listarModalidadeProdutiva,
    listarPeixesPorMes,
    atualizarMeta,
    listarMeta,
    listarRankingModalidades,
    listarTabelaRegistro,
    cadastrarMeta
}