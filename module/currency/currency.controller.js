const CC = require("currency-converter-lt");


const ccapp = async (data) => {
  const {from,to,amount} = data
  const currencyConverter = new CC();

  const result = await currencyConverter
    .from(from.toUpperCase())
    .to(to.toUpperCase())
    .amount(+amount)
    .convert();
  return result;
};

module.exports = { ccapp };
