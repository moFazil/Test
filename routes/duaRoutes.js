const express = require("express");
const { createdua, getalldua, updatedua, deletedua } = require("../controllers/duaController");
const router = express.Router();

router.post("/createdua", createdua);
router.get("/alldua", getalldua);
router.put("/updatedua/:id", updatedua);
router.delete("/deletedua/:id", deletedua);

module.exports = router;
