const Flight = require("../models/flight");

// GET Routes

exports.getFlights = (req, res, next) => {
  Flight.find()
    .then((flights) => {
      if(!flights){
        const error = new Error('No flights found')
        error.statusCode = 404
        throw error
      }
      res.status(200).json({message: 'Flights fetched successfully', flights: flights});
    })
    .catch((err) => {
      console.log(err);
      if(!error.statusCode){
        error.statusCode = 500
      }
      next(err)
    });
};

exports.getFlight = (req, res, next) => {
  const flightId = req.params.flightId;
  Flight.findById(flightId)
    .then((flight) => {
      if (!flight) {
        const error = new Error("No flight found");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: 'Flight fetched successfully' ,flight: flight });
    })
    .catch((err) => {
      if (!err.statusCode) {
        error.statusCode = 500;
      }
      next(err);
    });
};