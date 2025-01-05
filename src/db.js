
import 'dotenv/config';
import mongoose from 'mongoose';

const USER_DB = process.env.USER_DB;
const SENHA_DB = process.env.SENHA_DB;

const uri = `mongodb+srv://${USER_DB}:${SENHA_DB}@cluster0.xwduu.mongodb.net/Back-end?retryWrites=true&w=majority&appName=Cluster0`;

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      // Opções de conexão do Mongoose (removendo as opções do driver nativo)
      useNewUrlParser: true,
      useUnifiedTopology: true
      // serverApi: { // Essas opções são específicas do driver nativo, remova do Mongoose
      //   version: ServerApiVersion.v1,
      //   strict: true,
      //   deprecationErrors: true,
      // }
    });
    console.log('Conectado ao MongoDB com Mongoose!');

    // Retorna a instância do Mongoose (opcional, mas útil)
    return mongoose; 
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1); // Encerra a aplicação se a conexão falhar
  }
}

export default connectToDatabase;