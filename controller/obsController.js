const obsDb = require('../config/db.js');
const ngrok = require('../config/ngrokConfig.js');

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
    //listen ke port tcp atau http 
    //dan liat berapa user yang buat session dan request


    await obsDb("livestream_stats").select('view_count')
    .where('stream_key', '=', streamKey).then((rows) => {
        viewCount = rows[0].view_count
        console.log(viewCount)
    })
}

const getTunnelSessions = async (req, res) => {
    const ngrokApi = ngrok.getApi();
    console.log(ngrokApi.)
    res.json({req: ngrokApi.listRequests()})
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

module.exports = {
    getObsLivestream,
    postStreamEvent,
    getViewCount,
    postViewCount,
    getTunnelSessions
}