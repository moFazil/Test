const DailyDua = require("../models/duaSchema");

//Create Dua 
exports.createdua = async (req,res)=>{
    try {
        const dailydua = new DailyDua(req.body);
        await dailydua.save();
        res.status(200).json({message:"Dua Created Successfully", data: dailydua});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

//Get All Dua
exports.getalldua = async (req,res)=>{
    try {
        const getalldua = await DailyDua.find();
        res.status(200).json(getalldua);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

//Update Dua
exports.updatedua = async (req,res)=>{
    try {
        const updateddata = await DailyDua.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updateddata) return res.status(404).json({message:"Dua Not found"});
        res.status(200).json(updateddata);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

//Delete Dua
exports.deletedua = async (req,res)=>{
    try {
        const deletedata = await DailyDua.findByIdAndDelete(req.params.id);
        if(!deletedata) return res.status(404).json({message:"Dua Not Found"});
        res.status(200).json({ message: "Dua Deleted Successfully" });
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}