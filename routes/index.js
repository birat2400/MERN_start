const router = require("express").Router();

const apiroutes = require("./routes.api");
const uiroutes = require("./routes.ui");

router.use("/api/v1", apiroutes);
router.use("/", uiroutes);

console.log("chalxa");
module.exports = router;

// const converter = require("../module/currency");

// app.post("/pp", async (res, req) => {
//     const currencyConverter = new CC({from:"USD", to:"JPY", amount:100, isDecimalComma:true})
//   const { amount:pp } = req.body;
//   const ccData = await converter.toDataURL(pp);

//   res.send(`${ccData}`);
// });
