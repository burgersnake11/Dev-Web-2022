const Fiches = require('../models/Fiches');

exports.TriFiche = (req, res) => {
  console.log(req.query.asthme);
  Fiches.find({asthme : req.query.asthme}).then(
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
