//Création app Express --version 1
// const express = require('express')

// const app = express()
// app.use((req, res) => {
//    res.json({ message: 'Votre requête a bien été reçue !' }); 
// });

// module.exports = app


//Création app Express --version 2
// const express = require('express');

// const app = express();

// //Middleware 1 enregistre « Requête reçue ! » dans la console et passe l'exécution
// app.use((req, res, next) => {
//   console.log('Requête reçue !');
//   next();
// });

// //Middleware 2 ajoute un code d'état 201 à la réponse et passe l'exécution
// app.use((req, res, next) => {
//   res.status(201);
//   next();
// });

// //Middleware 3 envoie la réponse JSON et passe l'exécution
// app.use((req, res, next) => {
//   res.json({ message: 'Votre requête a bien été reçue !' });
//   next();
// });

// //Middleware 4 enregistre « Réponse envoyée avec succès ! » dans la console
// app.use((req, res, next) => {
//   console.log('Réponse envoyée avec succès !');
// });

// module.exports = app;


// //Création app Express --version 3 || Mise en place de l'API pour le projet
// const express = require('express');
// const mongoose = require('mongoose');
// const Thing = require('./models/thing');

// const app = express();

// //Ligne de code permettant de connecter l'API à la base de données MangoDB
// mongoose.connect('mongodb+srv://Nico:bdd2022@virtus-web.z65ru.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
//   { useNewUrlParser: true,
//     useUnifiedTopology: true })
//   .then(() => console.log('Connexion à MongoDB réussie !'))
//   .catch(() => console.log('Connexion à MongoDB échouée !'));

//   //Ligne de code permettant d'accéder au corps de la requête
// app.use(express.json());

// //Lignes de code permettant d'autoriser les CORS
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//   next();
// });


// //CRUD || CREATE//////////////////////////////////////////////////////////////////////////////////////////////////

// //Lignes de code pour les requêtes POST || Base
// // app.post('/api/stuff', (req, res, next) => {
// //   console.log(req.body);
// //   res.status(201).json({
// //     message: 'Objet créé !'
// //   });
// // });

// //Lignes de code pour les requêtes POST || Combiné à un Thing
// app.post('/api/stuff', (req, res, next) => {
//   delete req.body._id;
//   const thing = new Thing({
//     ...req.body
//   });
//   thing.save()
//     .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
//     .catch(error => res.status(400).json({ error }));
// });


// //CRUD || READ//////////////////////////////////////////////////////////////////////////////////////////////////

// //Lignes de code pour les requêtes GET || Combiné à un Thing pour afficher la liste complète
// app.get('/api/stuff/:id', (req, res, next) => {
//   Thing.findOne({ _id: req.params.id })
//     .then(thing => res.status(200).json(thing))
//     .catch(error => res.status(404).json({ error }));
// });

// //Lignes de code pour les requêtes GET || Combiné à un Thing pour afficher un item spécifique de la liste
// app.get('/api/stuff/:id', (req, res, next) => {
//   Thing.findOne({ _id: req.params.id })
//     .then(thing => res.status(200).json(thing))
//     .catch(error => res.status(404).json({ error }));
// });


// //CRUD || UPDATE//////////////////////////////////////////////////////////////////////////////////////////////////

// //Lignes de code pour les requêtes PUT || Combiné à un Thing pour modifier un item spécifique de la liste
// app.put('/api/stuff/:id', (req, res, next) => {
//   Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
//     .then(() => res.status(200).json({ message: 'Objet modifié !'}))
//     .catch(error => res.status(400).json({ error }));
// });


// //CRUD || DELETE//////////////////////////////////////////////////////////////////////////////////////////////////

// //Lignes de code pour les requêtes PUT || Combiné à un Thing pour supprimer un item spécifique de la liste
// app.delete('/api/stuff/:id', (req, res, next) => {
//   Thing.deleteOne({ _id: req.params.id })
//     .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
//     .catch(error => res.status(400).json({ error }));
// });


// //Lignes de code permettant d'afficher la liste des objets
// app.use('/api/stuff', (req, res, next) => {
//   Thing.find()
//     .then(things => res.status(200).json(things))
//     .catch(error => res.status(400).json({ error }));
// });

// //Lignes de code pour les requêtes générique pour la structure (mais résolu avec thing ? et attention à le positionner sous post ?)
// app.use('/api/stuff', (req, res, next) => {
//   const stuff = [
//     {
//       _id: 'oeihfzeoi',
//       title: 'Mon premier objet',
//       description: 'Les infos de mon premier objet',
//       imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//       price: 4900,
//       userId: 'qsomihvqios',
//     },
//     {
//       _id: 'oeihfzeomoihi',
//       title: 'Mon deuxième objet',
//       description: 'Les infos de mon deuxième objet',
//       imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
//       price: 2900,
//       userId: 'qsomihvqios',
//     },
//   ];
//   res.status(200).json(stuff);
// });


// module.exports = app;
