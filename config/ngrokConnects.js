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
    let dns = ''
    await ngrok.connect(config.docker)
    .then((url) => {
        console.log(`started at ${url}`)
        dns = url
    })
    .catch((error) => console.log(`ngrok error: ${error}`))
    return dns
}

module.exports = {
    startRtmp,
    startHls,
    startDocker
}
