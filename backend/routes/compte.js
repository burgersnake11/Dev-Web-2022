const express = require('express');
const routerFiche = express.Router();

const compteCtrl = require('../controllers/compte');

routerFiche.get('/fiches', compteCtrl.recupererDataCompte);
routerFiche.post('/update', compteCtrl.saveUser);

module.exports = routerFiche;