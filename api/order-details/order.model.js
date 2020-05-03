var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    // mobile: { type: Number, max: 10, min: 10 },
    mobile: { type: Number },
    vehicleNum: { type: String, required: true, ref: "registrations" },
    issuedDate: { type: Date, default: Date.now },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
  }
  // {collection:'User'} //for existing collections
);

module.exports = mongoose.model("orders", OrderSchema);
