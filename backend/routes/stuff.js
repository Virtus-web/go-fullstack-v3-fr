const express = require('express')
const stuffCtrl = require('../controllers/stuff')

//Ligne de code permettant d'importer le middleware d'authentification
const auth = require('../middleware/auth')

//Ligne de code permettant d'importer le middleware d'authentification
const multer = require('../middleware/multer-config')

//Ligne de code permettant de créer le routeur
const router = express.Router()

router.post('/', auth, multer, stuffCtrl.createThing);
router.put('/:id', auth, multer, stuffCtrl.updateThing);
router.delete('/:id', auth, multer, stuffCtrl.deleteThing);
router.get('/:id', auth, stuffCtrl.getThing);
router.get('/', auth, stuffCtrl.getAllThings);

//A importer dans la variable stuffRoutes du fichier app.js
module.exports = router


//CODE AVANT CREATION DU CONTROLLEUR//


// //CRUD || CREATE//////////////////////////////////////////////////////////////////////////////////////////////////

// //Lignes de code pour les requêtes POST || Combiné à un Thing
// router.post('/', stuffCtrl.createThing);


// //CRUD || UPDATE//////////////////////////////////////////////////////////////////////////////////////////////////

// //Lignes de code pour les requêtes PUT || Combiné à un Thing pour modifier un item spécifique de la liste
// router.put('/:id', stuffCtrl.updateThing);


// //CRUD || DELETE//////////////////////////////////////////////////////////////////////////////////////////////////

// //Lignes de code pour les requêtes PUT || Combiné à un Thing pour supprimer un item spécifique de la liste
// router.delete('/:id', stuffCtrl.deleteThing);


// //CRUD || READ//////////////////////////////////////////////////////////////////////////////////////////////////

// //Lignes de code pour les requêtes GET || Combiné à un Thing pour afficher un item spécifique de la liste
// router.get('/:id', stuffCtrl.getThing);

// //Lignes de code pour les requêtes GET || Combiné à un Thing pour afficher la liste complète
// router.get('/', stuffCtrl.getAllThings);

// module.exports = router
