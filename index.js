require('dotenv').config()

const express= require('express')

const cors = require('cors')

const route = require('./routes')
require('./dbConnection')

const todoServer = express()

 todoServer.use(cors())
 todoServer.use(express.json())
 todoServer.use(route)


 PORT = process.env.PORT ||  4006

 todoServer.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    
 })