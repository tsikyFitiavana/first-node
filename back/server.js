const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const router = require('./route/route')
app.listen(8050, function () {
  console.log('server demarer')
})
app.use('/', router)
