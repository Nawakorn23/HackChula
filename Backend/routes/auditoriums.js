const express = require("express");
const {
  getAuditoriums,
  getAuditorium,
  createAuditorium,
  updateAuditorium,
  deleteAuditorium,
} = require("../controllers/auditoriums");

//Include other resource routers
const reservationRouter = require("./reservations");

const router = express.Router();

const { protect, authorize } = require("../middleware/auth");

//Re-route into other resource routers
router.use("/:auditoriumId/reservations/", reservationRouter);

router
  .route("/")
  .get(getAuditoriums)
  .post(protect, authorize("admin"), createAuditorium);
router
  .route("/:id")
  .get(getAuditorium)
  .put(protect, authorize("admin"), updateAuditorium)
  .delete(protect, authorize("admin"), deleteAuditorium);

module.exports = router;
