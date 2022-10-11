const Flight = require("../models/flight");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

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
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.bookFlight = (req, res, next) => {
  const flightId = req.params.flightId;
  const userId = req.userId;

  User.findOne({ _id: userId })
    .then((user) => {
      if (!user) {
        const error = new Error("No user found");
        error.statusCode = 404;
        throw error;
      }
      user.flights.push(flightId);
      return user.save();
    })
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: "Flight added succesfully" });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.viewbookings = (req, res, next) => {
  const userId = req.userId;

  User.findOne({ _id: userId })
    .then((user) => {
      if (!user) {
        const error = new Error("No user found");
        error.statusCode = 404;
        throw error;
      }
      res
        .status(200)
        .json({ message: "Fetched booked flights", flights: user.flights });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// Authentication routes
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
        flights: [],
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

exports.login = (req, res, next) => {
  let loadedUser;
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        const error = new Error("No user found");
        error.statusCode = 404;
        throw error;
      }
      loadedUser = user;
      console.log(user);
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error = new Error("Wrong password!");
        error.statusCode = 401;
        throw error;
      }

      // generating token for the logged in user and attaching it
      const token = jwt.sign(
        {
          email: loadedUser.email,
          password: loadedUser.password,
          userId: loadedUser._id,
        },
        "itlabrocks",
        { expiresIn: "1h" }
      );
      // res.cookie('token', token, {httpOnly: true, maxAge: 3600000})
      res.status(200).json({ token: token, userId: loadedUser._id.toString() });
    });
};
