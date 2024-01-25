const express = require('express');
const router = express.Router() ;
const testController = require('../controller/testController.js');

router.get("/pdf", testController.getPdf)

router.get("/image", testController.getImg)

module.exports = router