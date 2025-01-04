require('dotenv').config()

const USER_DB = process.env.USER_DB
const SENHA_DB = process.env.SENHA_DB


const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = `mongodb+srv://${USER_DB}:${SENHA_DB}@cluster0.xwduu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


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

module.exports = { run };