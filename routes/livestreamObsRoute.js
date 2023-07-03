const express = require('express')
const router = express.Router() ;
const obsController = require('../controller/obsController');

router.get('/', obsController.getObsLivestream)

router.post('/view-count', obsController.postViewCount)

router.post('/live', obsController.postStreamEvent)

module.exports = router