const mongoose = require("mongoose");

const PrayerSchema = new mongoose.Schema({
  fajrAzan: { type: String, required: true },
  dhuhrAzan: { type: String, required: true },
  asrAzan: { type: String, required: true },
  maghribAzan: { type: String, required: true },
  ishaAzan: { type: String, required: true },
  jummahAzan: { type: String, required: true },
  fajr: { type: String, required: true },
  dhuhr: { type: String, required: true },
  asr: { type: String, required: true },
  maghrib: { type: String, required: true },
  isha: { type: String, required: true },
  jummah: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Prayer", PrayerSchema);
