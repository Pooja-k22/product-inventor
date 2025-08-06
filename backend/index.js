require('dotenv').config()
const express = require('express')

const cors = require('cors')

const route = require('./route')

require('./db')

const server = express()

server.use(cors())
server.use(express.json())
server.use(route)





PORT = 4005 || process.env.PORT
server.listen(PORT, ()=>{
    console.log(`port running successfully ${PORT}`);
    
})