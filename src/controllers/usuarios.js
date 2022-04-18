const usuarios = require("../models/usuarios");

module.exports = app => {
    app.get("/usuarios/:id", (req, res) => {
        const id = parseInt(req.params.id);
    
        usuarios.buscaPorId(id, res);
    });

    app.post("/usuarios", (req, res) => {
        const usuario = req.body;
 
         usuarios.adiciona(usuario, res);
     });

     app.put("/usuarios/id", (req, res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;

        usuarios.substitui(id, valores, res);
    });

    app.get("/usuarios", (req, res) => {
        usuarios.lista(res);
    });

    app.delete("/usuarios/:id", (req, res) => {
        const id = parseInt(req.params.id);

        usuarios.deleta(id, res);
    });

    app.get("/usuarios/nome/:nome", (req, res) => {
        const nome = req.params.nome;
       
        usuarios.buscaPorNome(nome, res);
    });


};

