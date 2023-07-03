const knex = require('../config/db.js')

const getLivestream = (req, res) => {
    const data = knex.from("youtube_livestream").select('*').json
    if (data != null) res.send(data)
    else res.json({
        message: "empty data"
    })
    next()
}

const postStreamEvent = (req, res, next) => {
    knex('youtube_livestream').insert(req.body)
    .then(() => res.json({message: "Data inserted"}))
    .catch(() => res.json({message: "Data already exist"}))
    next()
}

module.exports = {
    getLivestream,
    postStreamEvent
}