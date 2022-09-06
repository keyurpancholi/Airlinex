const Flight = require("../models/flight");

// GET Routes
// exports.getFlight = (req, res, next) => {};

// POST Routes
exports.addFlight = (req, res, next) => {
  const flightNumber = req.body.flightNumber;
  const source = req.body.source;
  const destination = req.body.destination;
  const flight = new Flight({
    flightNumber: flightNumber,
    source: source,
    destination: destination,
  });
  flight.save().then(res => {
    console.log("Flight created successfully")
  }).catch(err => {
    console.log(err)
  })
};
