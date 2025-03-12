require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const registrationRoutes = require("./routes/registrationRoutes");
const prayerRoutes = require("./routes/prayerTimeRoutes");
const notifiyRoutes = require("./routes/notifyBannerRoutes");
const duaRoutes = require("./routes/duaRoutes");
const hadeesRoutes = require("./routes/hadeesRoutes");
const eventRoutes = require("./routes/eventRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
app.next
app.use("/api", registrationRoutes);
app.use("/api/prayer", prayerRoutes);
app.use("/api",notifiyRoutes);
app.use("/api",duaRoutes);
app.use("/api",hadeesRoutes);
app.use("/api",eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});