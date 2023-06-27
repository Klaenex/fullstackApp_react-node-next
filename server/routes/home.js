const express = require("express");
const { getHome, updateHome } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHome);
router.patch("/", updateHome);
module.exports = router;
