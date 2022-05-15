const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenAccess = "+dc5IOi1MpN2GCOrmdeFJ9FmVUu6mPseRUs8+0v3cDRgX78EvGDo4ZRA9FMEbUVlUiBvjJ7KorDsARKXHC5yZcuhJz+VIoq9X7D+ca/uEF+2cRU75GlqUq3dLZ9qSsuu8CG7DT/ARe0Dy2lHTrPLTnDZ2c5xOeNkun1xiD1lgkNPDk0GKtiVo0bR/YY+ysvIwoQ85jvjK2ySkqQPZZq6cS3KIYbD95TGXS82qsFP0RGEqQBWTJwgewyDqbs5n/awBfXUL0oVZHxBjSoG9+W1cXMcR7fzbwh45YW/UyydYxLhqy9p71pk+Pt2BnTwu0miuD17iZHPPjaVsECtGL941w=="

const User = require('../models/User');
const app = require("../app");


exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        nom: req.body.nom,
        prenom : req.body.prenom,
        email: req.body.email,
        password: hash,
        status: "Utilisateur"
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        console.log("Utilisateur non trouvé !")
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            console.log("Mot de passe incorrect !")
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          
          res.status(200).json({
            token: jwt.sign(
              {userId: user._id, status: user.status},
              tokenAccess,
              { expiresIn: '24h'}
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.get = (req, res) => {
  const authHeader = req.headers.authorizations;
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
      if(userConnected.status == "Admin"){
        User.find().then(
          (user) => {
            res.status(200).json(user);
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
      } else {
        res.status(404)
      }
    })
  }
};
