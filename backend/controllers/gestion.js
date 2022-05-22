const User = require("../models/User");
const jwt = require("jsonwebtoken");
const tokenAccess = "+dc5IOi1MpN2GCOrmdeFJ9FmVUu6mPseRUs8+0v3cDRgX78EvGDo4ZRA9FMEbUVlUiBvjJ7KorDsARKXHC5yZcuhJz+VIoq9X7D+ca/uEF+2cRU75GlqUq3dLZ9qSsuu8CG7DT/ARe0Dy2lHTrPLTnDZ2c5xOeNkun1xiD1lgkNPDk0GKtiVo0bR/YY+ysvIwoQ85jvjK2ySkqQPZZq6cS3KIYbD95TGXS82qsFP0RGEqQBWTJwgewyDqbs5n/awBfXUL0oVZHxBjSoG9+W1cXMcR7fzbwh45YW/UyydYxLhqy9p71pk+Pt2BnTwu0miuD17iZHPPjaVsECtGL941w=="

exports.gestionUser = (req, res) => {
  let filtre_query = Object.keys(req.query)[0];
  let query_filtre = Object.values(req.query)[0];
  const authHeader = req.headers.authorization;
  if (authHeader) {
    let token = authHeader.split('Bearer ')[1];

    jwt.verify(token, tokenAccess, (err, user) => {
      if (err) {
        return err
      }
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
    })
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