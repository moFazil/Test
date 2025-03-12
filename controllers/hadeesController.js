const Hadees = require("../models/hadeesSchema");

// Create Hadees
exports.createHadees = async (req, res) => {
    try {
        const hadees = new Hadees(req.body);
        await hadees.save();
        res.status(200).json({ message: "Hadees Created Successfully", data: hadees });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get All Hadees
exports.getAllHadees = async (req, res) => {
    try {
        const hadeesList = await Hadees.find();
        res.status(200).json(hadeesList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Single Hadees by ID
exports.getHadeesById = async (req, res) => {
    try {
        const hadees = await Hadees.findById(req.params.id);
        if (!hadees) return res.status(404).json({ message: "Hadees Not Found" });
        res.status(200).json(hadees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Hadees
exports.updateHadees = async (req, res) => {
    try {
        const updatedHadees = await Hadees.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedHadees) return res.status(404).json({ message: "Hadees Not Found" });
        res.status(200).json(updatedHadees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Hadees
exports.deleteHadees = async (req, res) => {
    try {
        const deletedHadees = await Hadees.findByIdAndDelete(req.params.id);
        if (!deletedHadees) return res.status(404).json({ message: "Hadees Not Found" });
        res.status(200).json({ message: "Hadees Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
