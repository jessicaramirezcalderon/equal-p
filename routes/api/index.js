const router = require("express").Router();
const companyRoutes = require("./companies");
const userRoutes = require("./user");
const reviewRoutes = require("./review");

// User routes /api/user*
router.use("/users", userRoutes);
router.use("/companies", companyRoutes);
router.use("/reviews", reviewRoutes);

module.exports = router;
