const router = require("express").Router();
const mailer = require("../../services/mail");

router.post("/", async (req, res, next) => {
  try {
    const message = JSON.stringify(req.body);
    const from = "sthabirat057@gmail.com";
    const to = "sthabirat057@gmail.com";
    const response = await mailer.main({ from, to, message });
    res.send({ response });
  } catch (er) {
    next(er);
  }
});
module.exports = router;
