const express = require("express");
const { getHome } = require("../controllers/homeController");

router.get("/", getHome);
module.exports = router;
