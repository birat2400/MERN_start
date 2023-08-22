const router = require("express").Router;
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "sthabirat057@gmail.com",
    pass: "###############",
  },
});

const main = async () => {
  console.log(info);
  const info = await transporter.sendMail({
    from: '"sthabirat057@gmail.com" ',
    to: "sthabirat057@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });
};

module.exports = { main };
