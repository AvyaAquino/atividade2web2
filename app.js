// Criar Database

// var mysql = require('mysql2')

// var con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
// });

// con.connect(function(erro){
//     if (erro) throw erro;
//     console.log('Conexão Estabelecida!')
//     con.query("CREATE DATABASE crud", function (erro){
//         if (erro) throw erro;
//         console.log('Database criada!');
//     });
// });

// Criar Tabelas

// var mysql = require('mysql2')

// var con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'crud'
// });

// con.connect(function(erro){
//     if (erro) throw erro;
//     console.log('Conexão Estabelecida!')

//     var fornecedor = "CREATE TABLE fornecedor (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255) NOT NULL);"
//     con.query(fornecedor, function (erro){
//         if (erro) throw erro;
//         console.log('Tabela fornecedor criada!');
//     });
//     var produto = "CREATE TABLE produto (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255) NOT NULL, preco DECIMAL(10, 2), fornecedor_id INT, FOREIGN KEY (fornecedor_id) REFERENCES fornecedor(id));"
//     con.query(produto, function (erro){
//         if (erro) throw erro;
//         console.log('Tabela produto criada!');
//     });
// });

// Inserir Dados

// var mysql = require('mysql2')

// var con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'crud'
// });

// con.connect(function(erro){
//     if (erro) throw erro;
//     console.log('Conexão Estabelecida!')

//     var fornecedor = "INSERT INTO fornecedor (nome) VALUES ('Primeira Empresa'), ('Segunda Empresa'), ('Terceira Empresa');"
//     con.query(fornecedor, function (erro){
//         if (erro) throw erro;
//         console.log('Dados inseridos na tabela fornecedor!');
//     });
//     var produto = "INSERT INTO produto (nome, preco, fornecedor_id) VALUES ('Produto 1 EM1', 10.00, 1), ('Produto 2 EM1', 20.00, 1), ('Produto 3 EM1', 30.00, 1), ('Produto 4 EM1', 40.00, 1), ('Produto 5 EM1', 50.00, 1), ('Produto 1 EM2', 10.00, 2), ('Produto 2 EM2', 20.00, 2), ('Produto 3 EM2', 30.00, 2), ('Produto 4 EM2', 40.00, 2),('Produto 1 EM3', 10.00, 3), ('Produto 2 EM3', 20.00, 3), ('Produto 3 EM3', 30.00, 3), ('Produto 4 EM3', 40.00, 3), ('Produto 5 EM3', 50.00, 3), ('Produto 6 EM3', 60.00, 3); "
//     con.query(produto, function (erro){
//         if (erro) throw erro;
//         console.log('Dados inseridos na tabela produto!');
//     });
// });

// Consultar Dados

var mysql = require('mysql2')

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'crud'
});

con.connect(function(erro){
    if (erro) throw erro;
    console.log('Conexão Estabelecida!')

    con.query("SELECT f.nome as fornecedor, count(p.id) AS quantidade_produtos from fornecedor f LEFT JOIN produto p ON f.id = p.fornecedor_id GROUP BY f.id, f.nome", function (erro, resultado){
        if (erro) throw erro;
        console.log(resultado);
    });
    con.query("SELECT p.nome AS produto, p.preco, f.nome AS fornecedor FROM produto p INNER JOIN fornecedor f ON p.fornecedor_id = f.id WHERE p.preco > 30.00;", function (erro, resultado){
        if (erro) throw erro;
        console.log(resultado);
    });
});
