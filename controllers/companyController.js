const db = require("../models");

function getAverageSalary(reports, type, level) {
  let n = 0;
  let sum = 0;

  reports.forEach((report) => {
    if (report.gender === type && report.experienceLevel === level) {
      n++;
      sum = sum + report.salary;
    }
  });

  return sum === 0 ? 0 : sum/n;
}

// Defining methods for the companyController
module.exports = {
  findAll: function(req, res) {
    db.Company
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Company
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Company
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getCompanyResults: function(req, res) {
    db.SalaryReport
    .find({company: req.params.id})
    .exec()
    .then((salaryReports) => {
      console.log(salaryReports);
      const avgFemaleEntryLevel = getAverageSalary(salaryReports, 'Female', 'Entry Level');
      const avgFemaleMidLevel = getAverageSalary(salaryReports, 'Female', 'Mid Level');
      const avgFemaleSeniorLevel = getAverageSalary(salaryReports, 'Female', 'Senior Level');
      const avgMaleEntryLevel = getAverageSalary(salaryReports, 'Male', 'Entry Level');
      const avgMaleMidLevel = getAverageSalary(salaryReports, 'Male', 'Mid Level');
      const avgMaleSeniorLevel = getAverageSalary(salaryReports, 'Male', 'Senior Level');

      res.json({
        avgFemaleEntryLevel,
        avgFemaleMidLevel,
        avgFemaleSeniorLevel,
        avgMaleEntryLevel,
        avgMaleMidLevel,
        avgMaleSeniorLevel
      });
    })
    .catch(err => res.status(422).json(err));
  },
  handleUserSubmission: function(req, res) {
    db.SalaryReport
    .create({...req.body, user: req.user ? req.user._id : 'NULL'})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Company
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Company
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
