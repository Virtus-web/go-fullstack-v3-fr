const express = require('express')
const router = express.Router()

//Importation des middleware créés dans le fichier séparé controllers/user
const userCtrl = require('../controllers/user')

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

//A importer dans la variable userRoutes du fichier app.js
module.exports = router
