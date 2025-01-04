require('dotenv').config() //importação das configurações dotenv

const express = require("express") //importação do framework express
const app = express() 

const { run } = require('./db.js')

app.get("/", (req, res) => {  //rota express com método GET(extração de informação)
    res.send("Página inicial") 
})


app.use(express.json()); // para analisar corpos de solicitação JSON
app.use(express.urlencoded({ extended: true })); // para analisar corpos de solicitação codificados em url


const PORT = process.env.PORT || 3000 // predefinindo a porta onde o endereço iniciará. "constane PORT = acessa variável PORT localizada em .env  OU 3000 "

async function iniciarServidor() {
    try {
      const db = await run(); // Conecta ao banco de dados
  
  
      app.listen(PORT, () => {
        console.log(`Servidor funcionando na porta ${PORT}`);
      });
    } catch (err) {
      console.error('Erro ao iniciar o servidor:', err);
    }
  }
  
  iniciarServidor()