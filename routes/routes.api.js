const router = require("express").Router();
const qrrun = require("../module/qr/qr.api");
const money = require("../module/currency/currency.api");
const email = require("../module/mail/mail.api");

router.use("/qr", qrrun);

router.use("/currency", money);

router.use("/mail", email);

module.exports = router;
