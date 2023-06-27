const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeSchema = new Schema(
  {
    name: { type: String },
    title1: { type: String },
    text1: { type: String },
    img1: { type: String },
    title2: { type: String },
    text2: { type: String },
    img2: { type: String },
    instagramGalery: { type: String },
  },
  { timestamps: true }
);

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;
