const express = require("express");
const { createRegistration, getRegistrations, updateRegistration, deleteRegistration } = require("../controllers/registrationController");

const router = express.Router();

router.post("/register", createRegistration);

router.get("/registrations", getRegistrations);

router.put("/registration/:id", updateRegistration);

router.delete("/registration/:id", deleteRegistration);

module.exports = router;
