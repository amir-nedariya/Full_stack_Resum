import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; // ✅ Import cors
import multer from "multer";
import Contact from "./models/ContactModel.js";

dotenv.config();
const app = express();
const upload = multer();

app.use(cors()); // ✅ Enable CORS
app.use(upload.none());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.post("/contact", async (req, res) => {
  const { username, email, message } = req.body;

  try {
    const newContact = new Contact({ username, email, message });
    await newContact.save();
    res.status(200).json({ message: "Saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
