const mongoose = require("mongoose");

const DuaSchema = new mongoose.Schema({
    arabicdua:{type:String,required:true},
    englishdua:{type:String,required:true},
    duameaning:{type:String,required:true},
},{timestamps:true});

module.exports = mongoose.model("DailyDua", DuaSchema);