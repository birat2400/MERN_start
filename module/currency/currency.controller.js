const CC = require("currency-converter-lt");

const ccapp = () => {
  currencyConverter
    .from("USD")
    .to("GBP")
    .amount(100)
    .convert()
    .then((response) => {
      console.log(response);
    });
};

module.exports = { ccapp };
