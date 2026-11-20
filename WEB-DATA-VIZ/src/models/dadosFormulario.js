
var database = require("../database/config")

function listar(id_usuario) {
    var instrucao = `
            SELECT
                l.nome as 'local',
                ROUND(AVG(d.qtd_peixe), 1) media_peixes,
                COUNT(l.nome) qtd_idas
            FROM dados_dashboard d
            JOIN local_pesca l
                ON d.fk_local_pesca = l.id
            JOIN usuario u
                ON d.fk_usuario = u.id
            WHERE u.id = ${id_usuario}
            GROUP BY l.nome
            ORDER BY AVG(d.qtd_peixe) DESC
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
                ON d.fk_local = l.id
            JOIN usuario u
                ON d.fk_usuario = u.id
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
                ROUND(AVG(d.qtd_peixe), 1) media_peixes,
                COUNT(m.nome) qtd_pescarias
            FROM modalidade m
            JOIN dados_dashboard d
                ON d.fk_modalidade = m.id
            JOIN usuario U
                ON d.fk_usuario = u.id
            WHERE u.id = ${id_usuario}
            GROUP BY m.nome
            ORDER BY AVG(d.qtd_peixe) DESC
            LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

function listarPeixesPorMes(id_usuario) {
    var instrucao = `	SELECT 
                            CASE 
                            WHEN MONTH(dataa) = 1 THEN "JAN"
                            WHEN MONTH(dataa) = 2 THEN "FEV"
                            WHEN MONTH(dataa) = 3 THEN "MAR"
                            WHEN MONTH(dataa) = 4 THEN "ABR"
                            WHEN MONTH(dataa) = 5 THEN "MAI"
                            WHEN MONTH(dataa) = 6 THEN "JUN"
                            WHEN MONTH(dataa) = 7 THEN "JUL"
                            WHEN MONTH(dataa) = 8 THEN "AGO"
                            WHEN MONTH(dataa) = 9 THEN "SET"
                            WHEN MONTH(dataa) = 10 THEN "OUT"
                            WHEN MONTH(dataa) = 11 THEN "NOV"
                            WHEN MONTH(dataa) = 12 THEN "DEZ"
                            END AS Mes,
                            SUM(qtd_peixe) AS Total
                        FROM dados_dashboard d
                        JOIN usuario u
                            ON d.fk_usuario = u.id
                        WHERE u.id = ${id_usuario}
                        GROUP BY MES, MONTH(dataa)
                        ORDER BY MONTH(dataa);`
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

function listarRankingModalidades(id_usuario) {
    var instrucao = `SELECT 
                        m.nome modalidade,
                        round(avg(d.nota), 1) as media_nota
                    FROM dados_dashboard d
                    JOIN modalidade m
                        ON d.fk_modalidade = m.id
                    JOIN usuario u
                        ON d.fk_usuario = u.id
                    WHERE u.id = ${id_usuario}
                    GROUP BY m.nome
                    ORDER BY avg(d.nota) DESC
                    LIMIT 4;`
    console.log("Executando a intrução SQL: \n" + instrucao)
    return database.executar(instrucao)
}

function listarTabelaRegistro(id_usuario) {
    var instrucao = `SELECT
                        DATE_FORMAT(d.dataa, '%d/%m/%Y') data_registro,
                        l.nome local_pesca,
                        m.nome modalidade,
                        d.qtd_peixe,
                        d.nota
                    FROM dados_dashboard d
                    JOIN local_pesca l
                        ON d.fk_local_pesca = l.id
                    JOIN modalidade m
                        ON d.fk_modalidade = m.id
                    JOIN usuario u
                        ON d.fk_usuario = u.id
                    WHERE u.id = ${id_usuario}
                    ORDER BY d.id DESC;`
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