const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", {data: "Hello birat"});
});

module.exports = router;
