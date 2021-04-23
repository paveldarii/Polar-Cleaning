const router = require("express").Router();
const serviceRequestsController = require("../../controllers/serviceRequestsController");

// Matches with "/api/posts"
router
  .route("/")
  .get(serviceRequestsController.findAll)
  .post(serviceRequestsController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(serviceRequestsController.findById)
  .put(serviceRequestsController.update)
  .delete(serviceRequestsController.remove);

module.exports = router;
