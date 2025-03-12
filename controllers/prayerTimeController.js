const PrayerTime = require("../models/prayerTimeSchema");

// Create prayer times
exports.createPrayerTime = async (req, res) => {
    try {
        const prayerTime = new PrayerTime(req.body);
        await prayerTime.save();
        res.status(201).json({ message: "Prayer time added successfully!", data: prayerTime });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all prayer times
exports.getPrayerTimes = async (req, res) => {
    try {
        const prayerTimes = await PrayerTime.find();
        res.status(200).json(prayerTimes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update prayer time
exports.updatePrayerTime = async (req, res) => {
    try {
        const updatedTime = await PrayerTime.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTime) return res.status(404).json({ message: "Prayer time not found!" });
        res.status(200).json(updatedTime);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete prayer time
exports.deletePrayerTime = async (req, res) => {
    try {
        const deletedTime = await PrayerTime.findByIdAndDelete(req.params.id);
        if (!deletedTime) return res.status(404).json({ message: "Prayer time not found!" });
        res.status(200).json({ message: "Deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
