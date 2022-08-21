// const Fiches = require('../models/Fiches');
// const mongoose = require('mongoose');


// exports.CreerUneFiche = (req, res) => {
//     delete req.body._id;
//     const enfant = new Fiches({
//       ...req.body
//     });
//     enfant.save()
//     .then(() => res.status(201).json({ message : "Enfant créé !"}))
//     .catch(error => res.status(400).json({error}));
//   };