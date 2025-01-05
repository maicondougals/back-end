import mongoose, { mongo, Mongoose, Schema } from "mongoose";
// O Mongoose facilita a interação com o MongoDB através de Models.
// Eles representam a estrutura dos seus dados (como uma tabela em um banco de dados relacional).

const userSchema = new mongoose.Schema({
    name: {
        type: String, //define o tipo: string, number...
        required: true, //torna o campo obrigatório
        unique: true//: Garante que não haverá dois usuários com o mesmo email.
        // lowercase: true: Converte o email para minúsculas antes de salvar.
        // timestamps: true: Facilita o rastreamento de quando os documentos foram criados e atualizados.
    }
})

export default mongoose.model('User', userSchema)
//Cria o Model User baseado no UserSchema.
//O Mongoose, por padrão, vai procurar por uma coleção chamada "users" (plural e minúsculo)
// no seu banco de dados.