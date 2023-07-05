const express = require('express')
const router = express.Router();
const productController = require('../controller/productController')

router.get('/',productController.getAllProduct)
router.get('/active',productController.getActiveProduct)
router.post('/add',productController.addProduct)
router.post('/delete/:id',productController.deleteProduct)
router.post('/active/:id',productController.changeActiveProduct)
router.post('/highlight/:id',productController.changeHighlightProduct)

module.exports = router