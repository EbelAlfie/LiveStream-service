const express = require('express')
const router = express.Router() ;
const obsController = require('../controller/obsController');

router.get('/', obsController.getObsLivestream)

router.get('/view-count', obsController.getViewCount)

router.post('/live', obsController.postStreamEvent)

router.get('/tunnel', obsController.getTunnelSessions)

module.exports = router