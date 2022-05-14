const User = require("../models/User");

exports.gestionUser = (req, res) => {
  let filtre_query = Object.keys(req.query)[0];
  let query_filtre = Object.values(req.query)[0];
  if(filtre_query == "recherche"){
    User.find({$or: [{nom: {$regex : new RegExp(query_filtre, "i")}}, {prenom : {$regex : new RegExp(query_filtre, "i")}}, {email: {$regex : new RegExp(query_filtre, "i")}}]}).then(
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
   else {
    User.find().then(
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

exports.saveUser = (req, res) => {
  let email = Object.keys(req.body)[0];
  let email_value = Object.values(req.body)[0];
  let email_json = {[email]:email_value}
  let status = Object.keys(req.body)[1];
  let status_value = Object.values(req.body)[1];
  let status_json = {[status]:status_value}
  User.updateOne(email_json, {$set:status_json} )
    .then(() => res.status(201).json({ message: 'Utilisateur modifié !' }))
    .catch(error => res.status(400).json({ error }));
}