const router = require("express").Router();
const mailer = require("/home/biratcd/Desktop/MERN-evening/MERN_start/services/mail.js");

router.post(async (req, res, next) => {
  try {
    const result = await mailer.main();
    res.send(result, "email sent");
  } catch (er) {
    next(er);
  }
});

module.exports = router;
