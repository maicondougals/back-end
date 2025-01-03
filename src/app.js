require('dotenv').config()

const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.send("Página inicial")
})






const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`Servidor funcionando na porta ${PORT}`)
    
}
)
