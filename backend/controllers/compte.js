const Fiches = require("../models/Fiches");
const User = require("../models/User")
const jwt = require("jsonwebtoken");
const tokenAccess = "+dc5IOi1MpN2GCOrmdeFJ9FmVUu6mPseRUs8+0v3cDRgX78EvGDo4ZRA9FMEbUVlUiBvjJ7KorDsARKXHC5yZcuhJz+VIoq9X7D+ca/uEF+2cRU75GlqUq3dLZ9qSsuu8CG7DT/ARe0Dy2lHTrPLTnDZ2c5xOeNkun1xiD1lgkNPDk0GKtiVo0bR/YY+ysvIwoQ85jvjK2ySkqQPZZq6cS3KIYbD95TGXS82qsFP0RGEqQBWTJwgewyDqbs5n/awBfXUL0oVZHxBjSoG9+W1cXMcR7fzbwh45YW/UyydYxLhqy9p71pk+Pt2BnTwu0miuD17iZHPPjaVsECtGL941w=="
const mongoose = require('mongoose')

exports.recupererDataCompte = (req, res) => {
    let filtre_query = Object.keys(req.query)[0];
    let query_filtre = Object.values(req.query)[0];
    let query_json = {[filtre_query] : query_filtre}
    const authHeader = req.headers.authorization;
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
            if((userConnected.status == "Animateur") || (userConnected.status == "Admin") || (userConnected.status == "Cuistot") || (userConnected.status == "Trésorier") || (userConnected.status == "Parents") || (userConnected.status == "Utilisateur")) {
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
                } else if (filtre_query == "_id"){
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
                } 
            }
        })
    }
}

exports.saveUser = (req, res) => {
    let id_req = Object.keys(req.body)[0];
    let id_value = Object.values(req.body)[0];
    let id = mongoose.Types.ObjectId(id_value);
    let id_json = {[id_req]:id}
    let status = Object.keys(req.body)[1];
    let status_value = Object.values(req.body)[1];
    let status_json = {[status]:status_value}
    User.updateOne(id_json, {$set:status_json})
      .then(() => res.status(201).json({ message: 'Utilisateur modifié !' }))
      .catch(error => res.status(400).json({ error }));
  }