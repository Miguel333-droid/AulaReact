const express = require("express");
const cors = require("cors");
const mysql2 = require("mysql2");

const app = express();
const PORT = 3301;

app.use(cors());
app.use(express.json());

const banco = mysql2.createConnection( {
    host : "localhost",
    port : 3308,
    user : "root",
    password : "mysqlfatec",
    database : "AulaBD"

});

banco.connect((erro) => {
    if(erro){
        console.log("Erro ao conectar ao MySQL: ");
        console.log(erro);

    } else {
        console.log("Conectado ao MySQL com sucesso!!");
    }
});

app.listen(PORT,() =>{
    console.log("Servidor rodando em http://localhost:" + PORT);
});

app.get("/alunos", (req, res) =>{
    const sql = "SELECT * FROM alunos";
    banco.query(sql,(erro,resultados) =>{

        if(erro){
            console.log(erro);
            return res.status(50).json({erorr: "Erro ao consultar alunos"});
        } else {
            console.log(resultaods);
            return res.status(200).json(resultados);
        }
    });

});

app.get("/alunos/:codigo", (req, res) =>{

});