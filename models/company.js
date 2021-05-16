const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
 
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
