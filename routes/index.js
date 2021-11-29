"use strict";
const express = require("express");
const router = express.Router();
const productsModel = require("../models/productsModel");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const products = await productsModel.getProducts();
  res.render("index", { products });
});
module.exports = router;
