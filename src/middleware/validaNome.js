export function validaNome(req, res, next){
    const {name} = req.body

    if(name.length <= 2){
        return res.status(400).json({status:false, messagem: 'Nome muito curto. Tamanho mínimo de 3 caracteres.'})
        
    }
    next()
}