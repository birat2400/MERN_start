const router = require("express").Router;
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "sthabirat057@gmail.com",
    pass: "",
  },
});

const main = async (mailer) => {
  const { from, to, message } = mailer;
  const info = await transporter.sendMail({
    from: from,
    to: to,
    subject: "hello",
    text: "hello world!",
    html: JSON.stringify(message),
  });
  return info.messageId;
};

module.exports = { main };
