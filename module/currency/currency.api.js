const router = require("express").Router();
const paisa = require("./currency.controller");

router.post("/", async (req, res) => {
  try {
    // const { amount: Am } = req.body;
    const currencyConverter = await paisa.ccapp();
    res.send(currencyConverter);
  } catch (error) {
    res.send("not working sathi");
  }
});
module.exports = router;
