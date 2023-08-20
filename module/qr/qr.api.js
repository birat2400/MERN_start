const router = require("express").Router();
const qrControl = require("./qr.controller");

router.post("/", async (req, res, next) => {
  try {
    const { name: qr } = req.body;
    const result = await qrControl.created(qr);
    res.send(`<img src=${result} />`);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
