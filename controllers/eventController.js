const Event = require("../models/eventSchema");

// Create Event
exports.createEvent = async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(200).json({ message: "Event Created Successfully", data: event });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get All Events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Event
exports.updateEvent = async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEvent) return res.status(404).json({ message: "Event Not Found" });
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Event
exports.deleteEvent = async (req, res) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.id);
        if (!deletedEvent) return res.status(404).json({ message: "Event Not Found" });
        res.status(200).json({ message: "Event Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
