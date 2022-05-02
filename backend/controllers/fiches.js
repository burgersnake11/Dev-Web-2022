const Fiches = require('../models/Fiches');



exports.TouteLesFiches = (req, res) => {
  let filtre_query = Object.keys(req.query)[0];
  let query_filtre = Object.values(req.query)[0];
  let query_json = {[filtre_query] : query_filtre}
  if(filtre_query == "recherche"){
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
};

exports.CreerUneFiche = (req, res) => {
  delete req.body._id;
  const enfant = new Fiches({
    ...req.body
  });
  enfant.save()
  .then(() => res.status(201).json({ message : "Enfant créé !"}))
  .catch(error => res.status(400).json({error}));
};