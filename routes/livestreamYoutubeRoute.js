const express = require('express');
const router = express.Router() ;
const youtubeController = require('../controller/youtubeController.js');

router.get("/", youtubeController.getLivestream)

router.post("/livestream", youtubeController.postStreamEvent)

module.exports = router