const ngrok = require('ngrok');
const ngrokConfig = require('./config');

async function initNgrok() {
    await ngrok.authtoken(ngrokConfig.authToken);

    await ngrok.connect(ngrokConfig.rtmp).then((url) => {
        console.log(`ngrok tunnel created: ${url}`);})
    .catch((error) => {
        console.error('Error starting ngrok:', error);
    });

    await ngrok.connect(ngrokConfig.hls).then((url) => {
        console.log(`ngrok tunnel created: ${url}`);})
    .catch((error) => {
        console.error('Error starting ngrok:', error);
    });

    await ngrok.connect(ngrokConfig.api).then((url) => {
        console.log(`ngrok tunnel created: ${url}`);})
    .catch((error) => {
        console.error('Error starting ngrok:', error);
    });

    //console.log(await ngrok.getApi().listTunnels())
}

initNgrok()
module.exports = ngrok