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
      type: Number,
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

const Contact = mongoose.model("Contact", contactSchema);
Contact.init(); // Appel de la méthode init() sur le modèle Contact

module.exports = Contact;
