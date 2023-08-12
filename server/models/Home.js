const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const introData = new Schema({
  title: { type: String, default: "" },
  text: { type: String, default: "" },
});
const textData = new Schema({
  title: { type: String, default: "" },
  text: { type: String, default: "" },
});

const homeSchema = new Schema({
  name: { type: String, default: "" },
  intro: { type: introData },
  text: { type: textData },
  galery: { type: String, default: "" },
});

module.exports = mongoose.model("home", homeSchema);
