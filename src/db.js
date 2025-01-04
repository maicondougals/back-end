import 'dotenv/config' //importação do dotenv e da configuração do mesmo

const USER_DB = process.env.USER_DB //usuário secreto importado de .env
const SENHA_DB = process.env.SENHA_DB //senha secreta importada de .env


import { MongoClient, ServerApiVersion } from 'mongodb' //importando dependencias mongodb


const uri = `mongodb+srv://${USER_DB}:${SENHA_DB}@cluster0.xwduu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; //link de conexão que se encontra no mongoDB


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    try {
  
      return client.db('Back-end'); 
    } catch (err) {
      
    }
}

export default run ; //exportando função