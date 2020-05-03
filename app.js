const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");
var mongoose = require("mongoose");
var config = require("./config/environment");

var mongoDB = config.dbUrl;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

var db = mongoose.connection;
db.on("open", function() {
  console.log("mongodb is connected!!");
});
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.disable("etag");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
const api = require("./routes")(app);
module.exports = app;
