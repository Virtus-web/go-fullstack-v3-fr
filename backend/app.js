//Création app Express --version 3 || Mise en place de l'API pour le projet
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

//Imoprtation des router stuff et user
const stuffRoutes = require('./routes/stuff')
const userRoutes = require('./routes/user')

//Ligne de code permettant de connecter l'API à la base de données MangoDB
mongoose.connect('mongodb+srv://Nico:bdd2022@virtus-web.z65ru.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Ligne de code permettant de créer l'application backend Express
const app = express();

//Lignes de code permettant d'autoriser les CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//Ligne de code permettant d'accéder au corps de la requête
app.use(express.json());

//Ligne de code permettant de gérer la ressource image
app.use('/images', express.static(path.join(__dirname, 'images')));
//Ligne de code permettant d'indiquer la racine de la route attendue dans le router du fichier stuff déporté
app.use('/api/stuff', stuffRoutes);
//Ligne de code permettant d'indiquer la racine de la route attendue dans le router du fichier user déporté
app.use('/api/auth', userRoutes);

module.exports = app;
