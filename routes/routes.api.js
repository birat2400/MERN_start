const router = require("express").Router();
const qrrun = require("../module/qr/qr.api");
const money = require("../module/currency/currency.api")

router.use("/qr", qrrun)

router.use("/currency", money)

module.exports = router;
