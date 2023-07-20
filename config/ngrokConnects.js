const ngrok = require('ngrok')
const config = require('./config')
const docker = require('./docker/dockerConfig')

const startRtmp = async () => {
    await ngrok.connect(config.rtmp)
    .then((url) => console.log(`started at ${url}`))
    .catch((error) => console.log(`ngrok error: ${error}`))
}

const startHls = async () => {
    await ngrok.connect(config.hls)
    .then((url) => console.log(`started at ${url}`))
    .catch((error) => console.log(`ngrok error: ${error}`))
}

const startDocker = async () => {
    await ngrok.connect(config.docker)
    .then((url) => {
        console.log(`started at ${url}`)
        docker(url)
    })
    .catch((error) => console.log(`ngrok error: ${error}`))
}

module.exports = {
    startRtmp,
    startHls,
    startDocker
}
