const Flight = require("../models/flight");

// GET Routes

// POST Routes
exports.addFlight = (req, res, next) => {
  // add user related validation
  const flightNumber = req.body.flightNumber;
  const source = req.body.source;
  const destination = req.body.destination;
  const flight = new Flight({
    flightNumber: flightNumber,
    source: source,
    destination: destination,
  });
  flight
    .save()
    .then((result) => {
      console.log("Flight created successfully");
      res.status(201).json({message: 'Flight created successfully', result: result});
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.removeFlight = (req, res, next) => {
  const flightId = req.params.flightId;
  Flight.findById(flightId)
    .then((flight) => {
      if (!flight) {
        const error = new Error("No flight found");
        error.statusCode = 404;
        throw error;
      }
      // User validation logic
      return Flight.findByIdAndRemove(flightId)
    }).then(result => {
      console.log(result)
      res.status(200).json({message: 'Flight deleted successfully'})
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err)
    });
};
