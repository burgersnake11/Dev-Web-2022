const express = require('express');
const router = express.Router();

const fichesCtrl = require('../controllers/fiches');


router.get('/fiches', fichesCtrl.TouteLesFiches);