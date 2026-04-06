import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import facebookRoutes from "./routes/facebookRoutes.js";


dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));


app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/enquiry", enquiryRoutes);
app.use("/api/facebook", facebookRoutes);

console.log('✅ Routes mounted: /api/contact, /api/admin, /api/blogs, /api/enquiry, /api/facebook');


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));