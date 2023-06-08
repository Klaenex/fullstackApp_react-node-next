const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const item = new Schema({
  title: { type: String },
  desc: { type: String },
  enDesc: { type: String },
  alcool: { type: Number },
  price0: { type: Number },
  price1: { type: Number },
  price2: { type: Number },
  bitterness: { type: Number },
  categoryId: { type: String, required: true },
});

module.exports = mongoose.model("Item", item);
