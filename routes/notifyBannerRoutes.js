const express = require("express");
const { sendNotifyBanner, getNotfiyBanner } = require("../controllers/notifyBannerController");

const router = express.Router();

router.post("/sendnotification", sendNotifyBanner);

router.get("/getnotifications", getNotfiyBanner);

module.exports = router;
