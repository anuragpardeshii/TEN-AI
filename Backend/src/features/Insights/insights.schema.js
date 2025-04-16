import mongoose from "mongoose";

const insightSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: () =>
      new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      })
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

export const Insight = mongoose.model("Insight", insightSchema);
