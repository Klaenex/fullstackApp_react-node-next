const Home = require("../models/Home");

const getHome = async (req, res) => {
  try {
    let home = await Home.findOne({});
    if (!home) {
      const defaultHomeData = {
        name: "",
        intro: {
          title: "",
          text: "",
        },
        text: {
          title: "",
          text: "",
        },
        galery: "",
      };
      home = await Home.create(defaultHomeData);
    }
    res.status(200).json(home);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateHome = async (req, res) => {
  try {
    const home = await Home.findOneAndUpdate({}, req.body, { new: true });
    res.status(200).json(home);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getHome,
  updateHome,
};
