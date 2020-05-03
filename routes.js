module.exports = app => {
  //   app.get("/car-registration", (req, res) => {
  //     res.status(200).json({ message: "Welcome To Api" });
  //   });

  app.use("/api/car-registration", require("./api/car-registration"));
  app.use("/api/orders", require("./api/order-details"));
};
