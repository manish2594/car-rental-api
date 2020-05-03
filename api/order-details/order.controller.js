var Orders = require("./order.model");
const mongoose = require("mongoose");

exports.addOrders = (req, res) => {
  const OrdersData = new Orders({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    mobile: req.body.mobile,
    vehicleNum: req.body.vehicleNum,
    startDate: req.body.startDate,
    endDate: req.body.endDate
  });
  OrdersData.save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Orders is saved",
        data: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });

  // res.status(200).json({ data: req.body, message: "Welcome To Post API" });
};
exports.fetchOrdersList = (req, res) => {
  Orders.find()
    // .select()
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({ data: result, status: 200 });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  // Orders.find()
  //   .exec()
  //   .then(data => {

  //     res.status(200).json({ message: "Welcome To Post API", data: data });
  //   })
  //   .catch(err => console.error(err));
};

exports.ordersAvailability = (req, res) => {
  let startDate = req.body.startDate;
  let endDate = req.body.endDate;

  Orders.find(
    {
      $and: [
        { startDate: { $gte: startDate } },
        { endDate: { $lte: endDate } },
        { vehicleNum: req.body.vehicleNum }
      ]
    }
    // {
    //   or$: [
    //     {
    //       $and: [
    //         { startDate: { $gte: startDate } },
    //         { endDate: { $lte: startDate } },
    //         { vehicleNum: req.body.vehicleNum }
    //       ]
    //     }
    //     // {
    //     //   $and: [
    //     //     { startDate: { $gte: endDate } },
    //     //     { endDate: { $lte: endDate } },
    //     //     { vehicleNum: req.body.vehicleNum }
    //     //   ]
    //     // }
    //   ]
    // }
  )
    // .select()
    .exec()
    .then(result => {
      console.log(result);
      //   if (!result.length) {
      //     res.status(200).json({ status: 200, meassage: "Seat is Available" });
      //   }
      res.status(200).json({
        data: result,
        status: 200,
        meassage: "Seat is not Availble"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  // Orders.find()
  //   .exec()
  //   .then(data => {

  //     res.status(200).json({ message: "Welcome To Post API", data: data });
  //   })
  //   .catch(err => console.error(err));
};
