const express = require("express");
const router = express.Router();
const hadeesController = require("../controllers/hadeesController");

// Routes for Hadees
router.post("/create", hadeesController.createHadees);
router.get("/all", hadeesController.getAllHadees);
router.get("/:id", hadeesController.getHadeesById);
router.put("/update/:id", hadeesController.updateHadees);
router.delete("/delete/:id", hadeesController.deleteHadees);

module.exports = router;
