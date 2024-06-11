const express = require('express')
const userDao = require('../database/user-dao')
const router = express.Router()

router.use((req, res, next) => {
    next()
})

router.get("/", (req, res) => {
    res.render("index.ejs", {
        user: req.session.user
    })
})

router.get("/cadastro", (req, res) => {
    res.render("cadastro.ejs", {
        error: req.query.error,
        user: req.session.user
    })
})

router.get("/login", (req, res) => {
    res.render("login.ejs", {
        error: req.query.error,
        user: req.session.user
    })
})

// POST
router.post("/cadastro", (req, res) => {
    const {usernameInput, senhaInput, confSenhaInput} = req.body
    if (!usernameInput || !senhaInput) {
        res.redirect("/cadastro?error=error")
        return
    }
    if (senhaInput !== confSenhaInput) {
        res.redirect("/cadastro?error=error")
        return
    }
    const user = {
        username: usernameInput,
        senha: senhaInput
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
    const { usernameInput, senhaInput } = req.body
    userDao.getUserByLoginPass(usernameInput, senhaInput, (error, results) => {
        if (!results.length || error) {
            res.redirect("/login?error=error")
            return
        }
        req.session.user = {
            id: results[0].id_user,
            username: results[0].username
        }
        res.redirect(`/user/${req.session.user.username}`)
    })
})

module.exports = router