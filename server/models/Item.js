const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const item = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  enDesc: { type: String, required: true },
  alcool: { type: Number, required: true },
  price0: { type: Number, required: true },
  price1: { type: Number, required: true },
  price2: { type: Number, required: true },
  bitterness: { type: Number, required: true },
  categoryId: { type: String, required: true },
});

module.exports = mongoose.model("Item", item);
