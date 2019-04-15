const express = require('express')

const router = require('./route/route')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const methodOverride = require('method-override')
app.use(methodOverride('X-HTTP-Method')) 
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride('X-Method-Override'))
app.use(methodOverride('_method'))
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.listen(9400, function () {
  console.log('server demarer')
})
app.use('/', router)
