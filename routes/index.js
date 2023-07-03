const express = require('express');
const router = express.Router(); 
const obsRoute = require('./livestreamObsRoute.js');
const youtubeRoute = require('./livestreamYoutubeRoute.js');

router.use('/obs', obsRoute)
router.use('/youtube', youtubeRoute);

module.exports = router