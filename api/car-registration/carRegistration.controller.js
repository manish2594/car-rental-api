var Registraion = require("./registration.model");
const mongoose = require("mongoose");

exports.addCar = (req, res) => {
  console.log("req body", req.body);

  const register = new Registraion({
    _id: new mongoose.Types.ObjectId(),
    vehicleNum: req.body.vehicleNum,
    model: req.body.model,
    seatingCapacity: req.body.seatingCapacity,
    rentPerDay: req.body.rentPerDay
  });
  register
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Products is posted",
        data: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });

  // res.status(200).json({ data: req.body, message: "Welcome To Post API" });
};
exports.fetchCarList = (req, res) => {
  Registraion.find()
    // .select()
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({ data: result });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  // Registraion.find()
  //   .exec()
  //   .then(data => {

  //     res.status(200).json({ message: "Welcome To Post API", data: data });
  //   })
  //   .catch(err => console.error(err));
};
