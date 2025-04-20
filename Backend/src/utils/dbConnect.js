import mongoose from "mongoose";

const baseUrl = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    await mongoose
      .connect(baseUrl, {
        dbName: "TenAi"
      })
      .then((db) => console.log("Mongodb connected : ", db.connection.host))
      .catch((error) =>
        console.error(`Error while connecting to the db ${error.message}`)
      );
  } catch (error) {
    console.log(`Error while connecting to db ${error.message}`);
  }
};
