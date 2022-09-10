const express = require('express')
const adminController = require('../controller/admin')

const router = express.Router()

// GET ROUTES

// POST ROUTES
router.post('/addFlight', adminController.addFlight)

router.delete('/deleteFlight/:flightId', adminController.removeFlight)

module.exports = router