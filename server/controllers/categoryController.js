const Category = require("../models/Category");
const mongoose = require("mongoose");

//get all category

const getCategory = async (req, res) => {
  const category = await Category.find({}).sort({ createdAt: -1 });
  res.status(200).json(category);
};
//get a single category
const getOneCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No category!" });
  }

  const category = await Category.findById(id);

  if (!category) {
    return res.status(400).json({ error: "No such category!" });
  }
  res.status(200).json(category);
};
//create a new category
const createCategory = async (req, res) => {
  try {
    const { titleCategory, options } = req.body;
    const category = await Category.create({ titleCategory, options });
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
//delete a category
const deleteCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such category!" });
  }
  const category = await Category.findOneAndDelete({ _id: id });

  if (!category) {
    return res.status(400).json({ error: "No such category!" });
  }

  res.status(200).json(category);
};

//update category

const updateCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such category!" });
  }
  const category = await Category.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!category) {
    return res.status(400).json({ error: "No such category!" });
  }

  res.status(200).json(category);
};

module.exports = {
  createCategory,
  getOneCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
