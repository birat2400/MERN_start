const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("ui runs");
});

module.exports = router;
