import 'dotenv/config'; //importação das configurações dotenv

import express from 'express' //importação do framework express
const app = express() 


import router from './Routes/public.js'

app.use(express.json()); // para analisar corpos de solicitação JSON



app.use('/', router)



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

