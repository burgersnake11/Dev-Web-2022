const express = require('express');
const routerTriFiche = express.Router();

const trifichesCtrl = require('../controllers/trifiches');


routerTriFiche.get('/',trifichesCtrl.TrierFiches);

module.exports = routerTriFiche;