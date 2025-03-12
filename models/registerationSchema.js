const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  headOfFamily: { type: String, required: true, trim: true },
  members: { type: Number, required: true, min: 1 },
  address: { type: String, required: true, trim: true },
  phone: { 
    type: String, 
    required: true, 
    match: /^[0-9]{10}$/
  },
  email: { 
    type: String, 
    required: true, 
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  eligibleForZakat: { 
    type: String, 
    required: true,
    enum: ["Yes", "No"]
  },
  needAssistance: [{ 
    type: String, 
    enum: ["Financial", "Educational", "Medical", "Housing"],
    default: [] 
  }],
  willingToVolunteer: { 
    type: String, 
    required: true,
    enum: ["Yes", "No"]
  },
  otherDetails: { type: String, trim: true },
}, { timestamps: true });

module.exports = mongoose.model("Registration", RegistrationSchema);