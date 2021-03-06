const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const salaryReportSchema = new Schema({
  //user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  company: { type: String, required: true },
  experienceLevel: {type: String, required: true},
  gender: {type: String, required: true},
  salary: {type: Number, required: true},
});

const SalaryReport = mongoose.model("SalaryReport", salaryReportSchema);

module.exports = SalaryReport;
