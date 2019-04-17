const fs = require('fs');
const express = require('express')
const router = express.Router()
const app = express()




exports.getContent = (req, res) => {
    try {
        let read = fs.readFileSync('./models/note.json', 'utf8')
        res.write(read)
        res.end()
   } catch (ev) {
        console.log(ev.stack)
   }
};
exports.postNewContent = (req, res) => {
     let nom = req.body.nom;
     let prenom = req.body.prenom;
     let obj = fs.readFileSync('./models/note.json', 'utf8')
     let objParse = JSON.parse(obj)
     if (objParse.length> 0) { 
          var id =   objParse [objParse.length - 1].id + 1 
      } else { 
          id = 0 
      } 
     // let id = objParse.length+1
     
     console.log(id)
     objParse.push({ "id": id, "nom": nom, "prenom": prenom})
     res.send(objParse)
     fs.writeFileSync('./models/note.json', JSON.stringify(objParse))
};
exports.miseAJourContent = (req, res) => {
    let id = parseInt(req.body.id);
     let nom = req.body.nom;
     let prenom = req.body.prenom;

     let updater = fs.readFileSync('./models/note.json', 'utf-8')
     let jsonAModifier = JSON.parse(updater)
          for (let i = 0; i < jsonAModifier.length; i++) {
               // console.log(jsonAModifier[i].id);
               
               if (id == jsonAModifier[i].id) {
                    if(nom) {
                         jsonAModifier[i].nom = nom
                         console.log('new name'+jsonAModifier[i].nom)
                    }
                    if(prenom) {
                         jsonAModifier[i].prenom = prenom
                    }
               }
     
          }
     
     res.send(jsonAModifier)
     res.end()
     fs.writeFileSync('./models/note.json', JSON.stringify(jsonAModifier))
};
exports.deleteContent = (req, res) => {
    let id = parseInt(req.body.id)
     let deleter = fs.readFileSync('./models/note.json', 'utf-8')
     let resultatDeleter = JSON.parse(deleter)
     for (let i = 0; i< resultatDeleter.length; i++){
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