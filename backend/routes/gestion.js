const express = require ("express");
const routerGestion = express.Router();

const gestionCtrl = require('../controllers/gestion');

routerGestion.get('/users', gestionCtrl.gestionUser);
routerGestion.post('/update', gestionCtrl.saveUser);

module.exports = routerGestion;