"use strict";
const express = require("express");
const router = express.Router();
const productsModel = require("../models/productsModel");

/* GET home page. */
router.get("/", function (req, res, next) {
  const products = productsModel.getProducts();
  res.render("index", { products });
});
module.exports = router;
