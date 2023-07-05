const express = require('express');
const router = express.Router(); 
const obsRoute = require('./livestreamObsRoute.js');
const youtubeRoute = require('./livestreamYoutubeRoute.js');
const productRoute = require('./productRoute.js')

router.use('/obs', obsRoute)
router.use('/youtube', youtubeRoute);
router.use('/product', productRoute);
 
module.exports = router