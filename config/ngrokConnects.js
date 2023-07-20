const ngrok = require('ngrok')
const config = require('./config')

const startRtmp = async () => {
    await ngrok.connect(config.rtmp)
    .then((url) => console.log(`started at ${url}`))
    .catch((error) => console.log(error))
}

const startHls = async () => {
    await ngrok.connect(config.hls)
    .then((url) => console.log(`started at ${url}`))
    .catch((error) => console.log(error))
}

const startRest = async () => {
    await ngrok.connect(config.rest)
    .then((url) => console.log(`started at ${url}`))
    .catch((error) => console.log(error))
}


module.exports = {
    startRtmp, 
    startHls,
    startRest
}
