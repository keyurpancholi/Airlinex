const express = require('express')
const router = express.Router()
const userController = require('../controller/user')

// GET routes
router.get('/getFlights', userController.getFlights)

router.get('/getFlight/:flightId', userController.getFlight)

// POST routes

module.exports = router