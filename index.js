const express = require('express')
const app = express()
const port = 3001
const apiRoute = require('./routes')
var cors = require("cors");
const middleware = require('./middleware')

const ngrokInst = require('./config/ngrokConnects')

main()

async function main() {
    await ngrokInst.startRtmp()
    await ngrokInst.startHls()
    await ngrokInst.startRest()

    app.use(cors());

    app.use(middleware)
    app.use(express.json())
    app.use('/livestreamapi', apiRoute)

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

