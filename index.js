const express = require('express')
const cors = require('cors')
const configureDb = require('./congif/database')

const router = require('./congif/routes')

const app = express()
const port = 3090


app.use(cors('localhost:3090'))
app.use('/uploads',express.static('uploads'))
configureDb()
app.use(express.json())
app.use('/',router)

app.listen(port,()=>{
    console.log('server is running on port', port)
})