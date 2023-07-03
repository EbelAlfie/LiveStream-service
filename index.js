const express = require('express')
const app = express()
const port = 3000
const apiRoute = require('./routes')
const middleware = require('./middleware')

app.use(middleware)
app.use(express.json())
app.use('/livestreamapi', apiRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

