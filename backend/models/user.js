const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    bookings: {
      flights: [
        {
          flightId: { type: Schema.Types.ObjectId, required: true },
          flightNumber: String,
          quantity: {type: Number, required: true}
        },
      ],
    },
  },
  { timestamps: true }
);

// userSchema.methods.addFlights = function(flight) {
//   const userFlightIndex = this.bookings.flights.findIndex(cp => {
//     return cp.flightId.toString() === flight._id.toString()
//   })
//   let newQuantity;
//   const updatedFlightItems = [...this.bookings.flights]

//   if(userFlightIndex>=0) {
//     newQuantity = this.bookings.flights[userFlights].quantity + 1
//     updatedFlightItems[userFlightIndex].quantity = newQuantity
//   } else {
//     updatedFlightItems.push({
//       flightId: flight._id,
//       quantity: newQuantity
//     })
//   }

//   const updatedBookings = {
//     flights: updatedFlightItems
//   }
//   this.bookings = updatedBookings
// }

const User = mongoose.model("User", userSchema);
module.exports = User;
