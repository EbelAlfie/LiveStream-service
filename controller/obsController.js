const obsDb = require('../config/db.js');

const getObsLivestream =async  (req, res, next) => {
    const data = await obsDb("livestream_stats")
    if (data != null){
        return res.status(200).json(data)
    }else{
        return res.status(404).json({message: "Data not found"})
    }
}

const postStreamEvent = async (req, res, next) => {
    await obsDb('livestream_stats').insert(req.body)
    .then(() => res.status(200).json({message: "Data inserted"}))
    .catch((error) => res.status(404).json({message: error}))
}

const postViewCount = async (req, res, next) => {
    const isViewing = req.body.is_viewing
    const streamKey = req.body.stream_key
    // return res.json({message: isViewing, streamKey: streamKey})
    let viewCount = 0
    await obsDb("livestream_stats").select('view_count')
    .where('stream_key', '=', streamKey).then((rows) => {
        viewCount = rows[0].view_count
        console.log(viewCount)
        // return res.json({message: viewCount})
    })

        if (isViewing == true) {
            viewCount++
        } else {
            viewCount--
        }

        // return res.json({message: viewCount})
    
        // const count = obsDb('livestream_stats')
        //     .update('view_count', viewCount).where('stream_key', streamKey)
        //     .then(res.status(200).json({message: "berhasil"}))
        //     .catch(res.status(404).json({message: "gagal"}))

        await obsDb('livestream_stats').where('stream_key',streamKey).update({
            "view_count": viewCount
        })

        return res.status(200).json({message: "berhasil"})
    
    // next()
}

module.exports = {
    getObsLivestream,
    postStreamEvent,
    postViewCount
}