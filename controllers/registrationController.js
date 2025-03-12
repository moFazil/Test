const Registration = require("../models/registerationSchema");

// Create a new registration
exports.createRegistration = async (req, res) => {
    try {
      const formData = new Registration(req.body);
      await formData.save();
      res.status(201).json({ message: "Registration successful!", data: formData });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Get all registrations
  exports.getRegistrations = async (req, res) => {
    try {
      const registrations = await Registration.find();
      res.status(200).json(registrations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Update a registration
  exports.updateRegistration = async (req, res) => {
    try {
      const updatedData = await Registration.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedData) return res.status(404).json({ message: "Registration not found!" });
      res.status(200).json(updatedData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Delete a registration
  exports.deleteRegistration = async (req, res) => {
    try {
      const deletedData = await Registration.findByIdAndDelete(req.params.id);
      if (!deletedData) return res.status(404).json({ message: "Registration not found!" });
      res.status(200).json({ message: "Deleted successfully!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };