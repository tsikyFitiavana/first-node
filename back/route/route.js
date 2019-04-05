const express = require('express')
const path = require('path');
const router = express.Router()
const fs = require('fs');
router.get('/', function (req, res) {
     res.send('hello world')
})
router.get('/list', function (req, res) {
     try {
          var read = fs.readFileSync('./note.json', 'utf8')
          var parser = JSON.parse(read)
          //console.log(parser) 
          // console.log(read) 
          //console.log(parser.length)
          for (let i = 0; i < parser.length; i++) {
               //console.log(parser[i])
               //var Image = parser[i].image
               // console.log(parser[i].image )
               router.get(parser[i].image, function (req, res) {
                    try {
                         var iamageRouter = '.' + parser[i].image
                         var lireImageRouter = fs.readFileSync(iamageRouter)
                         console.log(lireImageRouter)
                         res.write(lireImageRouter)
                         res.end()

                    } catch (e) {
                         console.log(e.stack);
                    }
               })
          }
          res.write(read)
          res.end()
     } catch (ev) {
          console.log(ev.stack)
     }
})
router.get('/test', function (req, res) {
     let read = fs.readFileSync('./test.json', 'utf8')
     res.write(read)
     res.end()
})

module.exports = router;
