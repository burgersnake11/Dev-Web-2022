const Fiches = require('../models/fiches')


exports.TouteLesFiches = (req, res, next) => {
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
};
