 const express = require('express')
const router = express.Router()
const routeDuControler = require('../controler/crud.controler');

router.route('/list')
     .get(routeDuControler.getContent)
     .post(routeDuControler.postNewContent)
     .put(routeDuControler.miseAJourContent)
     .delete(routeDuControler.deleteContent);
router.route('/test').get(routeDuControler.listRoute);

module.exports = router;
