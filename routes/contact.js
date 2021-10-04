"use strict";
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/", function (req, res, next) {
  res.render("contact");
});


router.post("/", async (req, res, next) => {
  const NOMBRE = req.body.nombre;
  const APELLIDO = req.body.apellido;
  const EMAIL = req.body.email;
  const MENSAJE = req.body.mensaje;

  let emailMsg = {
    to: "marcelobettini@yahoo.com.ar",
    subject: "Mensaje desde Coffee Shop",
    html: `${NOMBRE} ${APELLIDO} se comunicó a través de nuestro formulario de contacto. Su email es ${EMAIL}. Este es su mensaje: "${MENSAJE}$`,
  };

  let transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  let info = await transport.sendMail(emailMsg);
  console.log(info)
  res.render("contact", {
     message: "Mensaje enviado" 
  })


});
module.exports = router;
