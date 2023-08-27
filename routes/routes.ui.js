const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", {data: "Hello birat"});
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
