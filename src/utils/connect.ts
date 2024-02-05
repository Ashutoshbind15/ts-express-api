import mongoose from "mongoose";
import config from "config";

export const connect = async () => {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log("Connected to the database");
  } catch (error) {
    console.log("Error connecting to the database: ", error);
    process.exit(1);
  }
};
