const express = require('express')
const router = express.Router();
const productController = require('../controller/productController')

router.get('/',productController.getAllProduct)
router.get('/active',productController.getActiveProduct)
router.post('/add',productController.addProduct)
router.post('/delete',productController.deleteProduct)

module.exports = router