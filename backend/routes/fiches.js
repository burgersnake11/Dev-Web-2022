const express = require('express');
const routerFiche = express.Router();

const fichesCtrl = require('../controllers/fiches');

routerFiche.get('/',fichesCtrl.TouteLesFiches);
routerFiche.post('/',fichesCtrl.CreerUneFiche);

module.exports = routerFiche;