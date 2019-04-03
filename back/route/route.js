const express = require ('express')
const path = require('path');

var cors = require('cors')
const router = express.Router()
const fs   = require('fs');
router.get('/', function (req, res) {
res.send('hello world')
})

router.get('/list', function (req, res) {
     let read = fs.readFileSync('./note.json', 'utf8')
     res.write(read)
     res.end()
})
router.get('/test', function (req, res) {
    let read = fs.readFileSync('./test.json', 'utf8')
     res.write(read)
     res.end()
})

module.exports = router;
