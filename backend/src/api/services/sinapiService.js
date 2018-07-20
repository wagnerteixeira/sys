const Sinapi = require('../../models/sinapi')
const errorHandler = require('../common/errorHandler')
const multer  = require('multer')
//const upload = multer({ dest: 'uploads/' })

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads')
    },
    filename: (req, file, cb) => {
      cb(null,  Date.now())
    }
});
var upload = multer({storage: storage});

Sinapi.post('/upload', upload.single('file'), (req, res, next) => {
    try {
        console.log("Chegou")
        console.log(Date.now() + '-' + file.originalname)
    } catch (err) {
        res.status(500).json({erros: [error]})
    }
});

module.exports = Sinapi