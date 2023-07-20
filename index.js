const express = require('express')
const app = express()
const port = 3001
const apiRoute = require('./routes')
var cors = require("cors");
const middleware = require('./middleware')
const docker = require('./config/docker/dockerConfig')

const ngrokInst = require('./config/ngrokConnects')

main()

async function main() {

    await ngrokInst.startRtmp();
    await ngrokInst.startHls();
    docker(await ngrokInst.startDocker());

    app.use(cors());

    app.use(middleware)
    app.use(express.json())
    app.use('/livestreamapi', apiRoute)

    app.listen(port, () => console.log(`Listening on port ${port}!`))
}

