import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minlength: [2, "Name must be at least 2 characters long."],
    maxlength: [50, "Name must be under 50 characters."]
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address."]
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required."],
    validate: {
      validator: function (v) {
        return /^[0-9]{10}$/.test(v.toString());
      },
      message: "Phone number must be a 10-digit number."
    }
  },
  company: {
    type: String,
    trim: true,
    maxlength: [100, "Company name should be under 100 characters."]
  },
  source: {
    type: String,
    required: [true, "Source is required."]
  },
  message: {
    type: String,
    trim: true,
    maxlength: [1000, "Message should be under 1000 characters."]
  },
  submittedAt: {
    type: String,
    default: () =>
      new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      })
  }
});

const ContactModel = mongoose.model("Contact", contactSchema);
export default ContactModel;
