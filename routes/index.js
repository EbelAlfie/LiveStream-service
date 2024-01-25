const express = require('express');
const router = express.Router(); 
const obsRoute = require('./livestreamObsRoute.js');
const testRoute = require('./TestRoute.js');
const productRoute = require('./productRoute.js')

router.use('/obs', obsRoute)
router.use('/file', testRoute);
router.use('/product', productRoute);
 
module.exports = router