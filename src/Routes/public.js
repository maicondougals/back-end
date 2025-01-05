//arquivo responsável por separar e tratar com mais clareza as rotas express 


import express from 'express'
import User from '../Models/User.js'
const router = express.Router()


//-------------------------


router.get('/', (req, res) => {
    const user = req.body


    res.status(200).json()
})
//----------------------------------------------
router.post('/users', async (req, res) => {
    try {
    // 4. Instanciar e salvar o usuário
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ user }); // 6. Resposta de sucesso
    } catch (error) {



    // Tratamento de erros mais específico
    if (error.code === 11000) {
    res.status(400).send({ error: 'Email já cadastrado!' });
    } else {
    res.status(500).send({ error: 'Erro ao criar usuário.' });
    }
}
});
//----------------------------------------------
router.post('/cadastro', (req, res) => {
    const user = req.body


    res.status(200).json(user)
})
//----------------------------------------------

export default router  //importação da constante router 