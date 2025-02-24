const express = require('express');
const routerFiche = express.Router();

const fichesCtrl = require('../controllers/staff');

routerFiche.get('/fiches', fichesCtrl.TouteLesFiches);
routerFiche.post('/fiches', fichesCtrl.CreerUneFiche);
routerFiche.post('/paiement',fichesCtrl.PayerAffiliation);


module.exports = routerFiche;