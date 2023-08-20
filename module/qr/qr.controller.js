const QrCode = require("qrcode");


const created = async (qr) => {
  const qrData = await QrCode.toDataURL(qr);
  return qrData;
};

module.exports = { created };
