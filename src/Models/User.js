import mongoose, { mongo, Mongoose, Schema } from "mongoose";
// O Mongoose facilita a interação com o MongoDB através de Models.
// Eles representam a estrutura dos seus dados (como uma tabela em um banco de dados relacional).

const userSchema = new mongoose.Schema({
    name: {
        type: String, //define o tipo: string, number...
        required: true, // Campo obrigatório
        //minlength: 3, Tamanho mínimo
        //required: true, torna o campo obrigatório
        //unique: true Garante que não haverá dois usuários 
        // lowercase: true: Converte o email para minúsculas antes de salvar.
        // timestamps: true: Facilita o rastreamento de quando os documentos foram criados e atualizados.
    },
    mail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} não é um email válido!`
        }
    }
})

export default mongoose.model('User', userSchema) //a exportação do mongoose.model deve receber 2 parametros, sendo eles: o nome da coleção no banco de dados e o nome do schema
//Cria o Model User baseado no UserSchema.
//O Mongoose, por padrão, vai procurar por uma coleção chamada "users" (plural e minúsculo)
// no seu banco de dados 