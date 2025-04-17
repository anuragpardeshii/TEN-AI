import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const baseUrl = process.env.MONGODB_URL || "0.0.0.0:27017";

export const connectDB = async () => {
  try {
    await mongoose
      .connect(baseUrl, {
        dbName: "TenAi"
      })
      .then(() => console.log("Mongodb connected using mongoose"))
      .catch((error) =>
        console.error(`Error while connecting to the db ${error.message}`)
      );
  } catch (error) {
    console.log(`Error while connecting to db ${error.message}`);
  }
};
