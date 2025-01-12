//arquivo responsável por separar e tratar com mais clareza as rotas express 


import express from 'express'
import User from '../Models/User.js'
import { validaEmail } from "../middleware/validaEmail.js";
import { validaNome } from '../middleware/validaNome.js';
const router = express.Router()


//-------------------------


router.get('/', (req, res) => {
    const user = req.body


    res.status(200).json()
})
//----------------------------------------------
router.post('/users', validaEmail,validaNome, async (req, res) => {
    try {
        
        const user = new User(req.body);//Instanciar usuário
        await user.save();//salvar usuário ao banco de dados
        res.status(201).send({ user }); // 6. Resposta de sucesso
    } catch (error) {
        console.error('Erro ao criar usuário:', error); // Log de erro detalhado
        res.status(500).send('Erro ao criar usuário'); // Resposta de erro genérica
    }
});

//----------------------------------------------
router.post('/cadastro', (req, res) => {
    const user = req.body


    res.status(200).json(user)
})
//----------------------------------------------

export default router  //importação da constante router 