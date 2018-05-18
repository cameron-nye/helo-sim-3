require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , ctrl = require('../server/controller')
    , massive = require('massive')
    , port = 5454


const {
  CONNECTION_STRING
} = process.env


    let app = express()

app.use(bodyParser.json())

app.post('/api/register', ctrl.register)
app.post('/api/login', ctrl.login)



massive(CONNECTION_STRING)
  .then( db => {
    console.log('Database connected')
    // db.seedFile()
    //   .then(res => console.log('seed successful'))
    //   .catch(err => console.log('seed not successful', err))
  app.set('db', db)
  app.listen(port, console.log(`🎸 Lets jam on port ${port} 🎸`))
  })



