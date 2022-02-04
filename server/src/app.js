const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync() // add {force: true} in the sync() to clear out the db. DO NOT DO ON PROD
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on ${config.port}`)
  })
