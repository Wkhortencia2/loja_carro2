const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const data_base = mysql.createConnection ({
    host: "localhost", 
    user: "root",
    password: "",
    data_base: "loja_carro"
});

data_base.connect (err => {
    if(err) {
        console.log("Erro ao connectar:", err)
    } else {
        console.log("Conectado ao Mysql ")
    }
});

app.post("/carros", (req, res) => {
    const carro  = req.body;
});

const sql = `insert into carros (titulo, preco, descricao, marca, modelo, kilometragem, data_compra, cambio) values (?,?,?,?,?,?,?,?)`;

const valores = [
    carro.titulo,
    carro.preco,
    carro.descricao,
     carro.marca,
      carro.modelo,
      carro.kilometragem,
      carro.data_compra,
      carro.cambio
];

data_base.query(sql, valores, (err, result)=> {
    if(err) {
        return res.status(500).json(err);
}
res.json({ mensagem: "Carro salvo com sucesso!"});
});

app.get("/carros", (req, res) => {

    data_base.query("SELECT * FROM carros", (err, result) => {
        if(err) {
            return res.status(500).json(err);
        }
        res.json(result);
    });
});
