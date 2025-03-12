const express = require("express");
const {
  createPrayerTime,
  getPrayerTimes,
  updatePrayerTime,
  deletePrayerTime
} = require("../controllers/prayerTimeController");

const router = express.Router();

router.post("/", createPrayerTime);

router.get("/", getPrayerTimes);

router.put("/:id", updatePrayerTime);

router.delete("/:id", deletePrayerTime);

module.exports = router;
