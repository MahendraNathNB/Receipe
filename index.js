const express = require('express')
const app = express()
const cors = require('cors')
const port = 3040
const setupDB = require('./config/database')
const router = require('./config/routes')

app.use(cors())

app.use(express.json())

app.use('/',router)

setupDB()

app.listen(port, () => {console.log("Server ready on port " + port)})