const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const { body } = require("express-validator");
const User = require("../models/user");

// GET routes
router.get("/getFlights", userController.getFlights);

router.get("/getFlight/:flightId", userController.getFlight);

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
]);

// POST routes

module.exports = router;
