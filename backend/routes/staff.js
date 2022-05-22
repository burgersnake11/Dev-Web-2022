const express = require('express');
const routerFiche = express.Router();

const fichesCtrl = require('../controllers/staff');

routerFiche.get('/fiches', function(req, res){
    fichesCtrl.TouteLesFiches
});
routerFiche.post('/fiches', function(req, res){
    fichesCtrl.CreerUneFiche
});
routerFiche.post('/paiement', function(req, res){
    fichesCtrl.PayerAffiliation
});


module.exports = routerFiche;