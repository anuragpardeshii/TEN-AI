import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: [25, "Name can't be greater than 25 characters"]
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\../, "Please enter a valid email"]
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password must be at least 6 characters"]
    }
  },
  {
    timestamps: true
  }
);

export const UserModel = mongoose.model("User", userSchema);
