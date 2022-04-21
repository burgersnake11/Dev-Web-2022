const express = require('express');
const mongoose = require("mongoose");

var url = "mongodb+srv://Cargan:Logan1234@cluster0.3dozm.mongodb.net/Dev3?retryWrites=true&w=majority" //URL de la base de données
const app = express(); //permet de créer une application express, qui va recevoir les requetes
app.use(express.json()); //Intercepte toute les requetes qui ont un content type json et le met a dispo dans req.body, donne accès au corps de la requette
const Fiches = require('./models/Fiches')


//------------------------------------------------------------  Connection DB  ------------------------------------------------------------
const connection = mongoose.connect(url,
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true })
          .then(() => console.log('Connexion à MongoDB réussie !'))
          .catch(() => console.log('Connexion à MongoDB échouée !'));
  

//------------------------------------------------------------  CORS  ------------------------------------------------------------
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
}); 

app.get('/api/fiches', (req, res, next) => {
  Fiches.find().then(
      (chosestrouvees) => {
        res.status(200).json(chosestrouvees);
      }
    )
});


app.post('/api/fiches', (req, res) => {
  console.log(req.body);
});

module.exports = app //export la constante pour que l'on puisse l'utiliser partout