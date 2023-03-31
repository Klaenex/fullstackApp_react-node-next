const express = require("express");
const {
  createCategory,
  getCategory,
  getOneCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");

const router = express.Router();

router.get("/", getCategory);
router.get("/:id", getOneCategory);
router.post("/", createCategory);
router.delete("/:id", deleteCategory);
router.patch("/:id", updateCategory);

module.exports = router;
