const express = require('express')
const multer = require('multer')
const dao = require('../database/user-dao')
const storage = require('../middlewares/multer')
const router = express.Router()

router.use((req, res, next) => {
    next()
})

router.get("/:username", (req, res) => {
    if (!req.session.user) {
        res.status(404).send("Voce precisa fazer login para acessar")
        return
    }

    dao.getPet(req.session.user.id, (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        res.render("principal.ejs", {
            user: req.session.user,
            pets: result
        })
    })
})

router.get("/:username/cadastro-pet", (req, res) => {
    res.render("cadastro-pet.ejs", {
        user: req.session.user
    })
})

router.get("/:username/deslogar", (req, res) => {
    req.session.destroy()
    res.redirect('/')
})

const upload = multer({ storage })

router.post("/:username/cadastro-pet/adicionar-dados", upload.single('foto'), (req, res) => {

    let foto = req.file?.path.substring(6)

    foto = foto.replace(/\\/g, ('/'))

    const pet = {
        diretorio_foto_pet: foto,
        nome: req.body.nome,
        especie: req.body.especie,
        raca: req.body.raca,
        cor: req.body.cor,
        idade: req.body.idade,
        peso: req.body.peso,
        alergia: req.body.alergia,
        medicamento: req.body.medicamento,
        vacina: req.body.vacina,
        id_user: req.session.user.id
    }

    const dono = {
        nomedono: req.body.nomedono,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        cep: req.body.cep
    }

    dao.addPet(pet, (err, result) => {
        if (err) {
            console.log(err)
            return
        }
    })

    console.log(dono)
    dao.updateUser(dono, req.session.user.id, (err, result) => {
        if (err) {
            console.log(err)
            return
        }
    })

    res.redirect(`/user/${req.session.user.username}`)

})

router.post("/:username/apagar-pet", (req, res) => {
    const { idPet } = req.body
    dao.deletePet(idPet, (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        res.redirect(`/user/${req.session.user.username}`)
    })
})

module.exports = router