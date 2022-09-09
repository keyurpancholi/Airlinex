const Flight = require("../models/flight");

// GET Routes

exports.getFlight = (req, res, next) => {
  Flight.find()
    .then((flights) => {
      console.log(flights);
      res.status(201);
    })
    .catch((err) => {
      console.log(err);
    });
};

