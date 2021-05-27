const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const salaryReportSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  experienceLevel: {type: String, required: true},
  gender: {type: String, required: true},
  salaryRange: {type: Number, required: true},
});

const SalaryReport = mongoose.model("SalaryReport", salaryReportSchema);

module.exports = SalaryReport;
