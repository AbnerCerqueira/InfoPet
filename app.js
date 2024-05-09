const express = require('express')
const session = require('express-session')
const userDao = require('./dao/user-dao')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

app.set("view engine", "ejs")

// GET
app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/cadastro", (req, res) => {
    res.render("cadastro.ejs", {
        error: req.query.error
    })
})

app.get("/login", (req, res) => {
    res.render("login.ejs", {
        error: req.query.error
    })
})

// POST
app.post("/cadastro", (req, res) => {
    const body = req.body
    if (!body.loginInput || !body.senhaInput) {
        res.redirect("/cadastro?error=error")
        return
    }
    if (body.senhaInput !== body.confSenhaInput) {
        res.redirect("/cadastro?error=error")
        return
    }
    const user = {
        login: body.loginInput,
        senha: body.senhaInput
    }
    userDao.addUser(user, () => { })
    res.redirect("/login")
})

app.post("/login", (req, res) => {
    const body = req.body
    userDao.getUserByLoginPass(body.loginInput, body.senhaInput, (error, results) => {
        if (!results.length) {
            res.redirect("/login?error=error")
            return
        }
        req.session.user = {
            id: results.id,
            login: results.login
        }
        res.redirect("/principal")
    })
})

app.use(express.static('public'))

app.listen(port = 8080, () => {
    console.log(`Iniciando servidor na porta ${port}`)
})