const mongoose = require("mongoose");

const contactUSInfo = new mongoose.Schema({
  username: { type: String, required: true },
  phone: { type: Number, required: true },
  message: {type: String, require: true}
});


const Info = mongoose.model("contactUSinfo", contactUSInfo);

module.exports = Info;