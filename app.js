const express = require('express')
const session = require('express-session')
const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

const index = require('./routes/index')
const user = require('./routes/user')

app.use('/', index)
app.use('/user', user)

app.use(express.static('public'))

app.listen(port = 8080, () => {
    console.log(`Iniciando servidor na porta ${port}`)
})