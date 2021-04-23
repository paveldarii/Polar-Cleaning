const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceRequestSchema = new Schema({
  contactName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  description: { type: String },
  businessName: { type: String },
  date: { type: Date, default: Date.now },
  attach: {
    data: Buffer,
    contentType: String,
  },
});

const ServiceRequest = mongoose.model("ServiceRequest", serviceRequestSchema);

module.exports = ServiceRequest;
