const express = require('express');
const mongoose = require("mongoose");
const app = express(); //permet de créer une application express, qui va recevoir les requetes
const https = require('https')

const Fiches = require('./models/Fiches')
const User = require('./models/User')
const fichesRoutes = require("./routes/staff");
const userRoutes = require("./routes/user");
const gestUserRoutes = require("./routes/gestion");

//------------------------------------------------------------  CORS  ------------------------------------------------------------
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
}); 
  
app.use(express.json()); //Intercepte toute les requetes qui ont un content type json et le met a dispo dans req.body, donne accès au corps de la requette
app.use('/api/staff', fichesRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/gestion', gestUserRoutes);

//------------------------------------------------------------  Connection DB  ------------------------------------------------------------
var url = "mongodb+srv://Mathieu:J0uec581OeHWuz8j@cluster0.3dozm.mongodb.net/Dev3?retryWrites=true&w=majority" //URL de la base de données


const connection = mongoose.connect(url,
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true })
          .then(() => console.log('Connexion à MongoDB réussie !'))
          .catch(() => console.log('Connexion à MongoDB échouée !'));
  

module.exports = app //export la constante pour que l'on puisse l'utiliser partout