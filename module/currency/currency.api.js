const router = require("express").Router();
const paisa = require("./currency.controller");

router.post("/", async (req, res, next) => {
  try {
    const { from, to, amount } = req.body;
    const currencyConverter = await paisa.ccapp({ from, to, amount });
    res.send(currencyConverter.toString());
  } catch (error) {
    currencyConverter;
    next(error);
  }
});
module.exports = router;
