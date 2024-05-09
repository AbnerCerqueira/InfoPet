const express = require('express')
const app = express()

app.set("view engine", "ejs")

// GET
app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/cadastro", (req, res) => {
    res.render("cadastro.ejs")
})

app.get("/login", (req, res) => {
    res.render("login.ejs")
})

app.use(express.static('static'))

app.listen(port = 8080, () => {
    console.log(`Iniciando servidor na porta ${port}`)
})