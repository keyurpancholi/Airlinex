const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const { body } = require("express-validator");
const User = require("../models/user");
const isAuth = require('../middleware/is-auth')

// GET routes
router.get("/getFlights", isAuth, userController.getFlights);

router.get("/getFlight/:flightId", isAuth, userController.getFlight);

router.get('/viewbookings', isAuth, userController.viewbookings)

// PUT routes
router.put('/bookflight/:flightId', isAuth, userController.bookFlight)

router.put("/signup", [
  body("username").trim().not().isEmpty(),
  body("password").trim().isLength({ min: 5 }),
  body("email")
    .isEmail()
    .withMessage("Please enter valid email!")
    .custom((value, { req }) => {
      return User.findOne({ email: value }).then((user) => {
        if (user) {
          Promise.reject("User already exists");
        }
      });
    }),
], userController.signup);

// POST routes
router.post('/login', userController.login)

module.exports = router;
