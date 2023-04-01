const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { Types } = mongoose;

const item = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  enDesc: { type: String, required: true },
  alcool: { type: String, required: true },
  price0: { type: String, required: true },
  price1: { type: String, required: true },
  price2: { type: String, required: true },
  bitterness: { type: String, required: true },
  categoryId: { type: Types.ObjectId, required: true },
});

module.exports = mongoose.model("Item", item);
