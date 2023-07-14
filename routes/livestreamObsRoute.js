const express = require('express')
const router = express.Router() ;
const obsController = require('../controller/obsController');

router.get('/', obsController.getObsLivestream)

router.post('/view', obsController.postViewCount)

router.get('/view-count', obsController.getViewCount)

router.post('/live', obsController.postStreamEvent)

router.post('/add-like/:streamkey',obsController.addLike)

module.exports = router