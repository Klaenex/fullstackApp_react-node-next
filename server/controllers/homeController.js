const Home = require("../models/Home");
const mongoose = require("mongoose");
//get Home
const getHome = async (req, res) => {
  const home = await Home.find({});
  res.status(200).json(home);
};

const updateHome = async (req, res) => {};
module.exports = {
  getHome,
};
