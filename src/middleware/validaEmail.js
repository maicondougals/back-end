import User from "../Models/User.js";

export function validaEmail(req, res, next) {
  const { mail } = req.body;

  // 1. Valida o formato do email
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);

  if (!emailValido) {
    return res.status(400).json({ erro: 'Email inválido' });
  }

  // 2. Verifica se o email já existe no banco de dados
  User.findOne({ mail })
    .then(usuario => {
      if (usuario) {
        return res.status(400).json({status:false, messagem: 'Email já cadastrado'})
      } else {
        next(); // Se o email é válido e não existe, continua
      }
    })
    .catch(erro => {
      console.error(erro);
      return res.status(500).json({ erro: 'Erro ao verificar email' });
    });
}