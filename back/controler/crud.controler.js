const fs = require('fs');
const express = require('express')
const router = express.Router()

exports.getContent = (req, res) => {
    try {
        var read = fs.readFileSync('./models/note.json', 'utf8')
        res.write(read)
        res.end()
   } catch (ev) {
        console.log(ev.stack)
   }
};
exports.postNewContent = (req, res) => {
    var id = req.body.id;
     var nom = req.body.nom;
     var prenom = req.body.prenom;
     var obj = fs.readFileSync('./models/note.json', 'utf8')
     var objParse = JSON.parse(obj)
     objParse.push({ "id": id, "nom": nom, "prenom": prenom})
     res.send(objParse)
     fs.writeFileSync('./models/note.json', JSON.stringify(objParse))
};
exports.miseAJourContent = (req, res) => {
    var id = parseInt(req.body.id);
     var nom = req.body.nom;
     var prenom = req.body.prenom;

     var updater = fs.readFileSync('./models/note.json', 'utf-8')
     var jsonAModifier = JSON.parse(updater)

     for (var i = 0; i < jsonAModifier.length; i++) {
          // console.log(jsonAModifier[i])
          if (id === i) {
               if (nom) {
                    jsonAModifier[i].nom = nom
               }
               if (prenom) {
                    jsonAModifier[i].prenom = prenom
               }
          }

     }
     res.send(jsonAModifier)
     res.end()
     fs.writeFileSync('./models/note.json', JSON.stringify(jsonAModifier))
};
exports.deleteContent = (req, res) => {
    var id = parseInt(req.body.id)
     var deleter = fs.readFileSync('./models/note.json', 'utf-8')
     var resultatDeleter = JSON.parse(deleter)
     for (var i = 0; i< resultatDeleter.length; i++){
          if(id == resultatDeleter[i].id){
               resultatDeleter.splice(i,1)
          } 
     }
     res.send(JSON.stringify(resultatDeleter))
     fs.writeFileSync('./models/note.json', JSON.stringify(resultatDeleter))
};
exports.listRoute = (req, res) => {

    let read = fs.readFileSync('./models/test.json', 'utf8')
    res.write(read)
    res.end()
};