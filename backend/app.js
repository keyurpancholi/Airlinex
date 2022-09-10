const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// app.use((req, res, next) => {
//   User.findById("631744228f28a9608b16eaf8")
//     .then(user => {
//       req.user = user
//       next()
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.use("/admin", adminRoutes);
app.use(userRoutes);

mongoose
  .connect(
    "mongodb+srv://keyurpancholi:acqualeo7@cluster0.pahmv1w.mongodb.net/airlinex?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("App connected succesfully");
    User.findOne()
      .then((user) => {
        if (!user) {
          const user = new User({
            username: "Keyur",
            email: "keyur.example@gmail.com",
            contact: "7303675122",
            bookings: {
              flights: [],
            },
          });
          user.save();
          console.log("User created successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
// const user = new User({
//   username: 'Keyur',
//   email: 'keyur.example@gmail.com',
//   contact: '7303675122',
//   bookings: {
//     flights: []
//   }
