const express = require("express");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use("/", routes);

app.use((err, req, res, next) => {
  err =
    process.env.NODE_ENV === "production"
      ? "something went wrong..."
      : err.toString();
  res.status(500).send(err);
});

app.listen(4002);
console.log("running");
