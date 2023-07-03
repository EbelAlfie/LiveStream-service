const obsDb = require('../config/db.js');

const getObsLivestream = (req, res, next) => {
    const data = obsDb.from("livestream_stats").select('*').json
    if (data != null) res.status.send(data) 
    else res.status(400).json({message: "empty data"})
    next()
}

const postStreamEvent = async (req, res, next) => {
    await obsDb('livestream_stats').insert(req.body)
    .then(() => res.status(200).json({message: "Data inserted"}))
    .catch((error) => res.status(404).json({message: error}))
}

const postViewCount = async (req, res, next) => {
    const isViewing = req.body.is_viewing
    const streamKey = req.body.stream_key
    obsDb.from("livestream_stats").select('view_count')
    .where('stream_key', '=', streamKey).then((rows) => {
        let viewCount = rows[0].view_count
        console.log(viewCount)

        if (isViewing == true) {
            viewCount++
        } else {
            viewCount--
        }
    
        const count = obsDb.from('livestream_stats')
            .update('view_count', viewCount).where('stream_key', streamKey)
            .then(res.status(200).json({message: "berhasil"}))
            .catch(res.status(404).json({message: "gagal"}))
    })
    next()
}

module.exports = {
    getObsLivestream,
    postStreamEvent,
    postViewCount
}