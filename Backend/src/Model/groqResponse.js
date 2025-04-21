import mongoose from "mongoose";

const responseSchema = new mongoose.Schema(
  {
    prompt: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("GroqResponse", responseSchema);
