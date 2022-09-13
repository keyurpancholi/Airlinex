const Flight = require("../models/flight");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

// GET Routes

exports.getFlights = (req, res, next) => {
  const source = req.query.source;
  const destination = req.query.destination;
  Flight.find({
    $or: [{ source: source }, { destination: destination }],
  })
    .then((flights) => {
      if (!flights) {
        const error = new Error("No flights found");
        error.statusCode = 404;
        throw error;
      }
      res
        .status(200)
        .json({ message: "Flights fetched successfully", flights: flights });
    })
    .catch((err) => {
      console.log(err);
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
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
      res
        .status(200)
        .json({ message: "Flight fetched successfully", flight: flight });
    })
    .catch((err) => {
      if (!err.statusCode) {
        error.statusCode = 500;
      }
      next(err);
    });
};

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed");
    error.data = errors.array();
    error.statusCode = 422;
    throw error;
  }
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const contact = req.body.contact;
  bcrypt
    .hash(password, 12)
    .then((hashedPw) => {
      const user = new User({
        username: username,
        email: email,
        password: hashedPw,
        contact: contact,
      });
      return user.save();
    })
    .then((user) => {
      res
        .status(201)
        .json({ message: "User created succesfully", userId: user._id });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
