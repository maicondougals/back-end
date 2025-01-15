import 'dotenv/config'; //importação das configurações dotenv

import express from 'express' //importação do framework express
const app = express() 
import cors from 'cors'

import login from './Routes/login.js';
import cadastro from './Routes/cadastro.js'

app.use(express.json()); // para analisar corpos de solicitação JSON


// Configuração do CORS (libera para qualquer site)
const corsOptions = {
  origin: '*' 
};
app.use(cors(corsOptions));


app.use('/', cadastro)
app.use('/', login)




const PORT = process.env.PORT || 3000 // predefinindo a porta onde o endereço iniciará. "constane PORT = acessa variável PORT localizada em .env  OU 3000 "

import connectToDatabase from './db.js'

connectToDatabase()
  .then((mongoose) => { // Recebe a instância do Mongoose (se você retornou no db.js)
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao iniciar a aplicação:', error);
  });

