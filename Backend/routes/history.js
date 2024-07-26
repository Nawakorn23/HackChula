const express = require("express");
const {
  getHistorys,
  getHistory,
  createHistory,
  updateHistory,
  deleteHistory,
} = require("../controllers/history");

const router = express.Router({ mergeParams: true });

const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(protect, getHistorys)
  .post(protect, authorize("admin", "user"), createHistory);
router
  .route("/:id")
  .get(protect, getHistory)
  .put(protect, authorize("admin", "user"), updateHistory)
  .delete(protect, authorize("admin", "user"), deleteHistory);

module.exports = router;
