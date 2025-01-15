import express from 'express'
import User from '../Models/User.js'
import {validarLogin} from '../middleware/validarLogin.js'
const login = express.Router()


//----------------------------------------------
login.post('/login',validarLogin, (req, res) => {
    res.send('Login bem-sucedido!');
})
//----------------------------------------------
export default login