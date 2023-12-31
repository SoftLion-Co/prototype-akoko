const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { email } = req.body;

  // Налаштовуємо транспортер (замініть на свої дані)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  // Параметри листа
  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Підписка на новини",
    text: "Дякуємо за підписку на наші новини!",
  };

  // Відправка електронного листа
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email Sent");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
