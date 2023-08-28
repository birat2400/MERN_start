const router = require("express").Router;
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "sthabirat057@gmail.com",
    pass: "apxdudypqpaizmvq",
  },
});

const main = async (mailing) => {
  const { from, to, message } = mailing;
  const info = await transporter.sendMail({
    from: from.toString(),
    to: to.toString(),
    subject: "hello",
    text: "hello world!",
    html: JSON.stringify(message),
  });
  return info.messageId;
};

module.exports = { main };
