const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const introData = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
});
const textData = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
});

const homeSchema = new Schema({
  name: { type: String, required: true },
  intro: { type: introData, required: true },
  text: { type: textData, required: true },
  galery: { type: String, require: true },
});
module.exports = mongoose.model("home", homeSchema);
