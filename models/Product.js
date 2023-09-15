const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = Schema({
    name: String,
    size: Number,
    unitaryPrice: Number,
    imgUrl: String,
    description: String

}, {
    timesTamps: true

})
module.exports = mongoose.model('Products', ProductSchema)