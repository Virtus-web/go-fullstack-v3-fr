const Thing = require('../models/thing');
const fs = require('fs');

// exports.createThing = (req, res, next) => {
//   delete req.body._id;
//   const thing = new Thing({
//     ...req.body
//   });
//   thing.save()
//     .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
//     .catch(error => res.status(400).json({ error }));
// }

//Nouvelle syntaxe de la méthode createThing incluant la logique métier des fichiers entrants
exports.createThing = (req, res, next) => {
    const thingObject = JSON.parse(req.body.thing)
    delete thingObject;
    const thing = new Thing({
        ...thingObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    thing.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
}


// exports.updateThing = (req, res, next) => {
//   Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
//     .then(() => res.status(200).json({ message: 'Objet modifié !'}))
//     .catch(error => res.status(400).json({ error }));
// }

//Nouvelle syntaxe de la méthode createThing incluant la logique métier des fichiers entrants
exports.updateThing = (req, res, next) => {
    const thingObject = req.file ?
    {
        ...JSON.parse(req.body.thing),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body }
    Thing.updateOne({ _id: req.params.id }, { ...thingObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
}


// exports.deleteThing = (req, res, next) => {
//   Thing.deleteOne({ _id: req.params.id })
//     .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
//     .catch(error => res.status(400).json({ error }));
// }

//Nouvelle syntaxe de la méthode deleteThing incluant la solution à la faille de sécurité
// exports.deleteThing = (req, res, next) => {
//     Thing.findOne({ _id: req.params.id })
//     .then((thing) => { 
//         if (!thing) {
//             return res.status(404).json({ error: new Error('Objet non trouvé !')})
//         }
//         if (thing.userId !== req.auth.userId) {
//             return res.status(401).json({ error: new Error('Requête non authorisée !')})
//         }
//         Thing.deleteOne({ _id: req.params.id })
//         .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
//         .catch(error => res.status(400).json({ error }));
//     })
// }

//Nouvelle syntaxe de la méthode createThing incluant la logique métier des fichiers entrants
exports.deleteThing = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
    .then(thing => {
        const filename = thing.imageUrl.split('/images/')[1]
        fs.unlink(`images/${filename}`, () => {
            Thing.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
            .catch(error => res.status(400).json({ error }));
        })
    })
    .catch(error => res.status(500).json({ error }))
}


exports.getThing = (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
}

exports.getAllThings = (req, res, next) => {
  Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
}
