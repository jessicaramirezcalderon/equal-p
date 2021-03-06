const router = require("express").Router();
const companyController = require("../../controllers/companyController");

// Matches with "/api/companies"
router.route("/")
  .get(companyController.findAll)
  .post(companyController.create);

// Matches with "/api/companies/:id"
router
  .route("/:id")
  .get(companyController.findById)
  .put(companyController.update)
  .delete(companyController.remove);

router
  .route('/:id/results')
  .get(companyController.getCompanyResults);

router
  .route('/:id/submission')
  .post(companyController.handleUserSubmission);

module.exports = router;
