
export function validaNome(req, res, next) {
    const { name } = req.body;

    if (name.length < 1) {
        return res.status(400).json({ erro: 'Preencha o campo "name".'});
    }
    if (name.length < 3) {
        return res.status(400).json({ erro: 'Adicione no mínimo 3 caracteres.'});
    }
    next();
}