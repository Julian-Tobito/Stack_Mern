const express = require('express')
const upload = require('../libs/storage')
const { addProducts } = require('../controllers/productController')
const { getProducts } = require('../controllers/productController')
const api = express.Router()

api.post('/products', upload.single('image'), addProducts)
api.get('/products', getProducts)

module.exports = api