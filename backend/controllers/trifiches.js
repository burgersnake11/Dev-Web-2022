const Fiches = require('../models/Fiches');

exports.TrierFiches = (req, res) => {
    Fiches.find({ asthme : true, bronchite : true }).then(
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
