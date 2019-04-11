const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
const router = require('./route/route')
app.listen(9200, function () {
  console.log('server demarer')
})
app.use('/', router)
