const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = Schema({


    size: Number,
    name: String,
    unitaryPrice: Number,
    imgUrl: String,
    description: String

}, {
    timestamps: true

})
module.exports = mongoose.model('Products', productSchema)