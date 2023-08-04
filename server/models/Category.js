const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Input = new Schema({
  active: { type: Boolean },
  inputType: { type: String },
});
const optionCategory = new Schema({
  name: { type: Input, required: true },
  desc: { type: Input, required: true },
  enDesc: { type: Input, required: true },
  alcool: { type: Input, required: true },
  price0: { type: Input, required: true },
  price1: { type: Input, required: true },
  price2: { type: Input, required: true },
  bitterness: { type: Input, required: true },
});
const categorySchema = new Schema(
  {
    titleCategory: { type: String, required: true },
    options: { type: optionCategory, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
