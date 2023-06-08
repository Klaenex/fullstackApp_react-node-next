const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: number,
      required: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
      googleMaps: String,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
