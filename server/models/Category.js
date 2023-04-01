const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const optionCategory = new Schema({
  title: { type: Boolean, required: true },
  desc: { type: Boolean, required: true },
  enDesc: { type: Boolean, required: true },
  alcool: { type: Boolean, required: true },
  price0: { type: Boolean, required: true },
  price1: { type: Boolean, required: true },
  price2: { type: Boolean, required: true },
  bitterness: { type: Boolean, required: true },
});

const categorySchema = new Schema(
  {
    titleCategory: { type: String, required: true },
    options: { type: optionCategory, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
