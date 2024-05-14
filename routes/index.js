const express = require('express')
const userDao = require('../dao/user-dao')
const router = express.Router()

router.use((req, res, next) => {
    next()
})

router.get("/", (req, res) => {
    res.render("index.ejs")

})

router.get("/cadastro", (req, res) => {
    res.render("cadastro.ejs", {
        error: req.query
    })
})

router.get("/login", (req, res) => {
    res.render("login.ejs", {
        error: req.query.error
    })
})

// POST
router.post("/cadastro", (req, res) => {
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
    userDao.addUser(user, (error) => {
        if (error) {
            res.redirect("/cadastro?error=error")
            return
        }
    })
    res.redirect("/login")
})

router.post("/login", (req, res) => {
    const body = req.body
    userDao.getUserByLoginPass(body.loginInput, body.senhaInput, (error, results) => {
        if (!results.length || error) {
            res.redirect("/login?error=error")
            return
        }
        req.session.user = {
            id: results.id,
            login: results[0].login
        }
        res.redirect(`/user/${req.session.user.login}`)
    })
})

module.exports = router