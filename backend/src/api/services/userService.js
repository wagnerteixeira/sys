const User = require('../../models/user')
const errorHandler = require('../common/errorHandler')

User.methods(['get', 'post', 'put', 'delete'])

User.updateOptions({new: true, runValidators: true})

User.after('post', errorHandler).after('put', errorHandler)

User.route('count', ['get'], (req, res, next) => {
    User.count((error, value) => {
        if (error){
            res.status(500).json({erros: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = User