const express = require ("express");
const routerGestion = express.Router();

const gestionCtrl = require('../controllers/gestion');

routerGestion.get('/users', gestionCtrl.gestionUser);
routerGestion.post('/update', gestionCtrl.saveUser);
routerGestion.delete('/delete', gestionCtrl.deleteUser);

module.exports = routerGestion;