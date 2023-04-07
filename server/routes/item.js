const express = require("express");
const {
  createItem,
  getItem,
  getOneItem,
  getAllItemByCategory,
  deleteItem,
  updateItem,
} = require("../controllers/itemController");
const router = express.Router();

router.get("/", getItem);
router.get("/:id", getOneItem);
router.get("/category/:categoryId", getAllItemByCategory);
router.post("/", createItem);
router.delete("/:id", deleteItem);
router.patch("/:id", updateItem);
module.exports = router;
