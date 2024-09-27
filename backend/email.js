// const express = require("express");
// const nodemailer = require("nodemailer");
// const mg = require("nodemailer-mailgun-transport");
// require("dotenv").config();

// const router = express.Router();

// const mailgunAuth = {
//   auth: {
//     api_key: process.env.MAILGUN_API_KEY, // Your Mailgun API Key
//     domain: process.env.MAILGUN_DOMAIN, // Your Mailgun Domain
//   },
// };

// const transporter = nodemailer.createTransport(mg(mailgunAuth));

// router.post("/send", (req, res) => {
//   const { name, email, message } = req.body;

//   const mailOptions = {
//     from: email,
//     to: process.env.EMAIL_USER, // Your email to receive the message
//     subject: `Contact Form Submission from ${name}`,
//     text: `
//       Name: ${name}
//       Email: ${email}
//       Message: ${message}
//     `,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error("Error sending email:", error);
//       return res
//         .status(500)
//         .send({ success: false, message: "Failed to send message." });
//     } else {
//       console.log("Email sent:", info);
//       return res
//         .status(200)
//         .send({ success: true, message: "Email sent successfully!" });
//     }
//   });
// });

// module.exports = router;
