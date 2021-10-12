const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");

router.get("/", (req, res, next) => {
  //arrow function, para que vean otra forma de escribirlo
  res.render("login");
});

router.post("/", async (req, res, next) => {
  try {
    let user = req.body.userForm;
    let pass = req.body.passForm;
    let data = await userModel.getUser(user, pass);
    if (data !== undefined) {
      console.log(data);
      console.log(req.session);
    } else {
      console.log("wtf!");
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
