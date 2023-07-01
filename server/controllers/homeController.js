const Home = require("../models/Home");
const multer = require("multer");

upload = multer({ dest: "uploads/" });
const getHome = async (req, res) => {
  try {
    const home = await Home.findOne();
    res.status(200).json(home);
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
    res.status(500).json({
      message:
        "Une erreur s'est produite lors de la récupération des données Home.",
    });
  }
};

const updateHome = async (req, res) => {
  const update = { ...req.body };
  const options = { new: true, upsert: true };

  try {
    const updatedHome = await Home.findOneAndUpdate({}, update, options);
    res.status(200).json(updatedHome);
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
    res.status(500).json({
      message:
        "Une erreur s'est produite lors de la mise à jour des données Home.",
    });
  }
};

module.exports = {
  getHome,
  updateHome,
};
