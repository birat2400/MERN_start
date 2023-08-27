const router = require("express").Router();
const mailer = require("../../services/mail");

router.post("/", async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const result = await mailer.main({ from, to, message });
    res.send({ result });
  } catch (er) {
    next(er);
  }
});
module.exports = router;
