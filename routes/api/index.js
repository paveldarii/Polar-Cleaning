const router = require("express").Router();
const postRoutes = require("./posts");
const serviceRequests = require("./serviceRequests");

// Post routes
router.use("/posts", postRoutes);
router.use("/serviceRequests", serviceRequests);

module.exports = router;
