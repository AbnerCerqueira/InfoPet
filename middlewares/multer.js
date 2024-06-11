const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'public/img/uploads/')
    },
    filename: function(req, file, callback) {
        const nomeArquivo = file.originalname.split('.')[0]
        const extensaoArquivo = file.originalname.split('.')[1]

        callback(null, `${nomeArquivo}.${extensaoArquivo}`)
    }
})

module.exports = storage