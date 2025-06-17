// models/ContactModel.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
   username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [2, "Username must be at least 2 characters"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/\S+@\S+\.\S+/, "Email is invalid"],
    trim: true,
    lowercase: true
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    minlength: [10, "Message must be at least 10 characters"],
    trim: true
  }
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
