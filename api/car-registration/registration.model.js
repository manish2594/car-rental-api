var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const RegistrationSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    vehicleNum: { type: String, required: true, unique: true },
    model: { type: String, required: true },
    seatingCapacity: { type: Number, required: true },
    rentPerDay: { type: Number, required: true }
  }
  // {collection:'User'} //for existing collections
);

module.exports = mongoose.model("registrations", RegistrationSchema);
//registration will create registrations collections in db
//registrations will create registrations collections in db
//so better keep s in last with collection name
