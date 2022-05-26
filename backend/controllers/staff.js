const Fiches = require('../models/Fiches');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const tokenAccess = "+dc5IOi1MpN2GCOrmdeFJ9FmVUu6mPseRUs8+0v3cDRgX78EvGDo4ZRA9FMEbUVlUiBvjJ7KorDsARKXHC5yZcuhJz+VIoq9X7D+ca/uEF+2cRU75GlqUq3dLZ9qSsuu8CG7DT/ARe0Dy2lHTrPLTnDZ2c5xOeNkun1xiD1lgkNPDk0GKtiVo0bR/YY+ysvIwoQ85jvjK2ySkqQPZZq6cS3KIYbD95TGXS82qsFP0RGEqQBWTJwgewyDqbs5n/awBfXUL0oVZHxBjSoG9+W1cXMcR7fzbwh45YW/UyydYxLhqy9p71pk+Pt2BnTwu0miuD17iZHPPjaVsECtGL941w=="
const email_verifier = require('email-verifier');
var Cryptr = require('cryptr');
const cryptr = new Cryptr('dev3');


exports.TouteLesFiches = (req, res) => {
  let filtre_query = Object.keys(req.query)[0];
  let query_filtre = Object.values(req.query)[0];
  let query_json = {[filtre_query] : query_filtre}
  let second_filtre = Object.keys(req.query)[1];
  let second_query = Object.values(req.query)[1];
  let second_json = {[second_filtre] : second_query}
  const authHeader = req.headers.authorization;
  if (authHeader) {
    let token = authHeader.split('Bearer ')[1];

    jwt.verify(token, tokenAccess, (err, user) => {
        if (err) {
          return err
        }
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').split('').map(function(c) {
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
  };
}

exports.CreerUneFiche = (req, res) => {
  delete req.body._id
  let vars = 
  {     "nom_enfant": cryptr.encrypt(String(req.body.nom)),
        "prenom_enfant": cryptr.encrypt(String(req.body.prenom)),
        "adresse_enfant": cryptr.encrypt(String(req.body.adresse)),
        "ddn_enfant": cryptr.encrypt(String(req.body.date)),
        "numero_registre_enfant": cryptr.encrypt(String(req.body.registre)),
        "facebook_autorisation": req.body.facebook_autorisation,
        "nom_resp_1": cryptr.encrypt(String(req.body.nom_resp1)),
        "adresse_resp_1": cryptr.encrypt(String(req.body.dresse_resp1)),
        "tel_resp_1": cryptr.encrypt(String(req.body.tel_resp1)),
        "email_resp_1": cryptr.encrypt(String(req.body.email_resp1)),
        "nom_resp_2": cryptr.encrypt(String(req.body.nom_resp2)),
        "adresse_resp_2": cryptr.encrypt(String(req.body.adresse_resp2)),
        "tel_resp_2": cryptr.encrypt(String(req.body.tel_resp2)),
        "email_resp_2": cryptr.encrypt(String(req.body.email_resp2)),
        "tel_urgence": cryptr.encrypt(String(req.body.tel_urgence)),
        "tetanos": req.body.tetanos,
        "groupe_sanguin": req.body.groupe_sanguin,
        "protection_nuit": req.body.protection_nuit,
        "peur_nuit": req.body.peur_nuit,
        "appareil_dentaire": req.body.appareil_dentaire,
        "appareil_auditif": req.body.appareil_auditif,
        "diabete": req.body.diabete,
        "maladie_cardiaque": req.body.maladie_cardiaque,
        "affection_peau": req.body.affection_peau,
        "somnambulisme": req.body.somnambulisme,
        "insomnie": req.body.insomnie,
        "incontinence": req.body.incontinence,
        "eczema": req.body.eczema,
        "asthme": req.body.asthme,
        "sinusite": req.body.sinusite,
        "bronchite": req.body.bronchite,
        "saignement_nez": req.body.saignement_nez,
        "maux_tete": req.body.maux_tete,
        "maux_ventre": req.body.maux_ventre,
        "constipation": req.body.constipation,
        "diarrhee": req.body.diarrhee,
        "vomissements": req.body.vomissements,
        "mal_route": req.body.mal_route,
        "acariens": req.body.acariens,
        "pollen": req.body.pollen,
        "soleil": req.body.soleil,
        "maquillage": req.body.maquillage,
        "savon": req.body.savon,
        "poils_animaux": req.body.poils_animaux,
        "allergie_supplementaire": req.body.allergie_supplementaire,
        "sais_nager": req.body.sais_nager,
        "sport_difficile": req.body.sport_difficile,
        "remarque_supplementaire": req.body.remarque_supplementaire,
        "id_groupe": req.body.id_groupe,
        "id_parent": req.body.id_parent,
        "payer": false
  };
  const enfant = new Fiches(vars);
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