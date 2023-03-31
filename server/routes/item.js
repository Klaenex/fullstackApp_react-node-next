const express = require("express");
const router = express.Router();

const Category = require("../models/Category");
const Item = require("../models/Item");

router.post("/", async (req, res) => {
  try {
    const {
      title,
      desc,
      alcool,
      price0,
      price1,
      price2,
      bitterness,
      category,
    } = req.body;

    // créer un nouvel objet Item avec les propriétés extraites de req.body
    const newItem = new Item({
      title,
      desc,
      alcool,
      price0,
      price1,
      price2,
      bitterness,
      category,
    });

    // sauvegarder le nouvel objet Item dans la base de données
    await newItem.save();

    // renvoyer le nouvel objet Item en réponse
    res.status(200).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
