const NotifyBanner = require("../models/notifyBannerSchema");

exports.sendNotifyBanner = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    let notifyBanner = await NotifyBanner.findOne();
    if (notifyBanner) {
      notifyBanner.title = title;
      notifyBanner.content = content;
      notifyBanner.updatedAt = new Date();
    } else {
      notifyBanner = new NotifyBanner({ title, content });
    }

    await notifyBanner.save();
    res.status(200).json({ message: "Notification added successfully!", data: notifyBanner });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.getNotfiyBanner = async(req,res) => {
  try {
    const notifyBanner = await NotifyBanner.findOne().sort({createdAt:-1});
    if(!notifyBanner) return res.status(404).json({message:"Notification not found"});

    res.status(200).json({data: notifyBanner});
  } catch (error) {
    res.status(500).json({message:"No notification found",data: error.message});
  }
};
