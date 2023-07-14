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
    .where('stream_key', streamKey).then((rows) => {
        viewCount = rows[0].view_count
        console.log(viewCount)
        // return res.json({message: viewCount})
    })
    
    if (isViewing == false && viewCount == 0) return res.status(401).json({message: "sudah 0"})
    
    if (isViewing == true) {
        viewCount++
    } else {
        viewCount--
    }

    await obsDb('livestream_stats').where('stream_key',streamKey).update({
        "view_count": viewCount
    })

    return res.status(200).json({message: "berhasil"})
}

const getViewCount = async (req, res) => {
    console.log(req.query.stream_key)
    let streamKey = req.query.stream_key
    let viewCount = 0
    await obsDb("livestream_stats").select('view_count')
    .where('stream_key', '=', streamKey).then((rows) => {
        viewCount = rows[0].view_count
        console.log(viewCount)  
    })
    
    return res.status(200).json({view_count: viewCount})
}

const addLike  = async(req,res)=>{
    try{
        const stream_key = req.params.streamkey
        const data = await obsDb("livestream_stats").where('stream_key',stream_key)
        if(data != null){
            let likeCount = data[0].like_count + 1
            await obsDb("livestream_stats").where('stream_key',stream_key).update({
                "like_count":likeCount
            })
            return res.status(200).json({like:likeCount})
        }else{
            return res.status(400).json({data:"gada streamkey"})
        }
    }catch(err){
        return res.status(500).json({message: err})
    }
}

module.exports = {
    getObsLivestream,
    postStreamEvent,
    getViewCount,
    postViewCount,
    addLike
}