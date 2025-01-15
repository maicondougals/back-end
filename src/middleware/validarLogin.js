import User from "../Models/User.js"

export function validarLogin(req, res, next){
    const {name, mail} = req.body

    User.findOne({name, mail})
    .then(usuario => {
        if(usuario){
         // Usuário encontrado, credenciais válidas
        console.log('Usuário encontrado:', usuario);
        next(); // Permite que a requisição siga para a rota
        } else {
        // Usuário não encontrado, credenciais inválidas
        console.log('Usuário não encontrado');
        res.status(401).send('Não validado');
        }
    })
    .catch(erro => {
        console.error('Erro ao buscar usuário:', erro);
        res.status(500).send('Erro interno do servidor');
    });
}