const conexao = require("../infraestrutura/conexao");

class Usuario{
    buscaPorId(id, res) {
        const sql = `SELECT * FROM Usuarios WHERE id=${id}`;

        conexao.query(sql, (erro, resultados) => {
            const usuario = resultados[0];
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(usuario);
            }
        });
    }

    adiciona(usuario, res) {

            const sql = "INSERT INTO Usuarios SET ?";

            conexao.query(sql, [usuario], (erro, resultado) => {
                if(erro) {
                    res.status(400).json(erro);
                } else {
                    res.status(201).json(resultado);
                }
            });
        }

    substitui(id, valores, res) {

        const sql = "UPDATE usuarios SET ? WHERE id=?";

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        });
    }

    lista(res) {
        const sql = "SELECT * FROM usuarios";

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        });
    }

    deleta(id, res) {
        const sql = `DELETE FROM usuarios WHERE id=${id}`;

        conexao.query(sql, (erro, resultados)=> {
            const usuario = resultados[0];
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(usuario);
            }
        });
    }

    buscaPorNome(nome, res) {
        const sql = `SELECT * FROM Usuarios WHERE nome like '%${nome}'`;

        conexao.query(sql, (erro, resultado) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado);
            }
        });
    }

    
}

module.exports = new Usuario;