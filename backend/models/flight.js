const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    flightNumber: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
}, {timestamps: true})

const Flight = mongoose.model('Flight', flightSchema)
module.exports = Flight