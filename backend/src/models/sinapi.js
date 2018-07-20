const restful = require('node-restful')
const mongoose = restful.mongoose

const sinapiSchema = new mongoose.Schema({
    file: { type : Array, required: true },
})

module.exports = restful.model('Sinapi', sinapiSchema)