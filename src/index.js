const customExpress = require("./config/customExpress");
const conexao = require("./infraestrutura/conexao");
const Tabelas = require("./infraestrutura/tabela");
const port = 3000;

conexao.connect((erro) => {
    if(erro) {
        console.log(erro);
    } else {
        console.log("DataBase conectado com sucesso");
        
        Tabelas.init(conexao);
        
        const app = customExpress();
       
        app.get("/", (req, res) => {
           res.send("Servidor funcionando");
        });
       app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
    }
});
