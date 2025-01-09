
export function validarNome(req, res, next){ //função do middleware já sendo exportada
    const {name} = req.body //importando 
    if(name.length <= 3){
        return res.status(400).json({error: 'coloque um nome com mais de 3 caracteres'})
    }
    next()
}