const mongoose = require("mongoose");

const hadeesSchema = new mongoose.Schema(
  {
    narattedBy: { type: String, required: true },
    referenceBook: { type: String },
    category: { type: String },
    hadithInArabic: { type: String },
    hadithInEnglish: { type: String },
    hadithInTamil: { type: String },
    hadithInUrdu: { type: String },
  },
  { timestamps: true }
);

// Custom validation
hadeesSchema.pre("save", function (next) {
  if (
    !this.hadithInArabic &&
    !this.hadithInEnglish &&
    !this.hadithInTamil &&
    !this.hadithInUrdu
  ) {
    return next(new Error("At least one hadith translation must be provided."));
  }
  next();
});

module.exports = mongoose.model("Hadees", hadeesSchema);
