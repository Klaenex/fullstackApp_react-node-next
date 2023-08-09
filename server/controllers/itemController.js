const Item = require("../models/Item");
const mongoose = require("mongoose");

// get all item

const getItem = async (req, res) => {
  const item = await Item.find({}).sort({ createdAt: -1 });
  res.status(200).json(item);
};
// get one item
const getOneItem = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item!" });
  }
  const item = await Item.findById(id);
  if (!item) {
    return res.status(400).json({ error: "No such item!" });
  }
  res.status(200).json(item);
};

//get all item by category

const getAllItemByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const items = await Item.find({
      categoryId: id,
    });
    console.log(items);
    res.status(200).json(items);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

// create a new item
const createItem = async (req, res) => {
  try {
    const {
      title,
      desc,
      enDesc,
      alcool,
      price0,
      price1,
      price2,
      bitterness,
      categoryId,
    } = req.body;

    const item = await Item.create({
      title,
      desc,
      enDesc,
      alcool,
      price0,
      price1,
      price2,
      bitterness,
      categoryId,
    });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//delete a item
const deleteItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item!" });
  }
  const item = await Item.findOneAndDelete({ _id: id });

  if (!item) {
    return res.status(400).json({ error: "No such item!" });
  }

  res.status(200).json(item);
};

//update item

const updateItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item!" });
  }
  const item = await Item.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!item) {
    return res.status(400).json({ error: "No such item!" });
  }

  res.status(200).json(item);
};

module.exports = {
  createItem,
  getOneItem,
  getItem,
  getAllItemByCategory,
  updateItem,
  deleteItem,
};
