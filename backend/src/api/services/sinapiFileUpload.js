module.exports = function name(router) {
    //var MongoClient = require('mongodb').MongoClient;
    //var assert = require('assert');
    //var url = 'mongodb://localhost:27017/myproject';
    var multer = require('multer');
    var storage = multer.diskStorage({
        destination: (req, file, cb) => {
        cb(null, 'uploads')
        },
        filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname )
        }
    });
    var upload = multer({storage: storage});

    var insertDocuments = function(db, filePath, callback) {
        var collection = db.collection('user');
        collection.insertOne({'imagePath' : filePath }, (err, result) => {
            assert.equal(err, null);
            callback(result);
        });
    }

    router.post('/fileUpload', upload.single('file'), (req, res, next) => {
        /*MongoClient.connect(url, (err, db) => {
            assert.equal(null, err);
            insertDocuments(db, 'uploads/' + req.file.filename, () => {
                db.close();
                res.json({'message': 'File uploaded successfully'});
            });
        });*/
        console.log(req.file)
        res.json({'message': 'File uploaded successfully', 
                  'file' : req.file});
    });
}

