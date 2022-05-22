const Fiches = require('../models/Fiches');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const tokenAccess = "+dc5IOi1MpN2GCOrmdeFJ9FmVUu6mPseRUs8+0v3cDRgX78EvGDo4ZRA9FMEbUVlUiBvjJ7KorDsARKXHC5yZcuhJz+VIoq9X7D+ca/uEF+2cRU75GlqUq3dLZ9qSsuu8CG7DT/ARe0Dy2lHTrPLTnDZ2c5xOeNkun1xiD1lgkNPDk0GKtiVo0bR/YY+ysvIwoQ85jvjK2ySkqQPZZq6cS3KIYbD95TGXS82qsFP0RGEqQBWTJwgewyDqbs5n/awBfXUL0oVZHxBjSoG9+W1cXMcR7fzbwh45YW/UyydYxLhqy9p71pk+Pt2BnTwu0miuD17iZHPPjaVsECtGL941w=="
const email_verifier = require('email-verifier');

exports.TouteLesFiches = (req, res) => {
  let filtre_query = Object.keys(req.query)[0];
  let query_filtre = Object.values(req.query)[0];
  let query_json = {[filtre_query] : query_filtre}
  let second_filtre = Object.keys(req.query)[1];
  let second_query = Object.values(req.query)[1];
  let second_json = {[second_filtre] : second_query}
  const authHeader = req.headers.authorization;
  if(filtre_query == "id_parent"){
    Fiches.find(query_json).then(
      (test) => {
        res.status(200).json(test);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  } else {
  if (authHeader) {
    let token = authHeader.split('Bearer ')[1];

    jwt.verify(token, tokenAccess, (err, user) => {
        if (err) {
          return err
        }
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        let userConnected = JSON.parse(jsonPayload);
        if((userConnected.status == "Animateur") || (userConnected.status == "Admin") || (userConnected.status == "Cuistot") || (userConnected.status == "Trésorier")) {
          if(filtre_query == "recherche"){
            if(second_json !== undefined){
              Fiches.find({
                $and: [
                  {$or: [{nom_enfant: {$regex : new RegExp(query_filtre, "i")}}, {prenom_enfant : {$regex : new RegExp(query_filtre, "i")}}]},
                  second_json
                ]
                }).then(
                (test) => {
                  res.status(200).json(test);
                }
              ).catch(
                (error) => {
                  res.status(400).json({
                    error: error
                  });
                }
              );
            }else{
              Fiches.find({$or: [{nom_enfant: {$regex : new RegExp(query_filtre, "i")}}, {prenom_enfant : {$regex : new RegExp(query_filtre, "i")}}]}).then(
                (test) => {
                  res.status(200).json(test);
                }
              ).catch(
                (error) => {
                  res.status(400).json({
                    error: error
                  });
                }
              );
            }
          }
          else if(filtre_query != undefined){
            Fiches.find(query_json).then(
              (test) => {
                res.status(200).json(test);
              }
            ).catch(
              (error) => {
                res.status(400).json({
                  error: error
                });
              }
            );
          } else {
            Fiches.find().then(
              (test) => {
                res.status(200).json(test);
              }
            ).catch(
              (error) => {
                res.status(400).json({
                  error: error
                });
              }
            );
          }
        } else {
          res.status(400).json({error : "Vous n'avez pas les droits !"})
        }
    });
    } else {
      res.status(404).json({error : "Veuillez vous connecter"})
    }
  };
}

exports.CreerUneFiche = (req, res) => {
  delete req.body._id;
  const enfant = new Fiches({
    ...req.body
  });
  enfant.save()
  .then(() => res.status(201).json({ message : "Enfant créé !"}))
  .catch(error => res.status(400).json({error}));
};

exports.PayerAffiliation = (req, res) => {
  let id = Object.keys(req.body)[0];
  let id_value = Object.values(req.body)[0];
  let userObjectId = mongoose.Types.ObjectId(id_value);
  let id_json = {[id]:userObjectId};
  let payer = Object.keys(req.body)[1];
  let payer_value = Object.values(req.body)[1];
  let payer_json = {[payer]:payer_value}
  Fiches.updateOne(id_json, {$set:payer_json} )
    .then((test) => res.status(201).json(test))
    .catch(error => res.status(400).json({ error }));
};



function validateEmail(emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}


module.exports = {
  validateEmail
}