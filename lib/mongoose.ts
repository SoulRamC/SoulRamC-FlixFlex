/*
 * This file is used for connecting to the database and export the function.
 * */

import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not found in .env");
  }
  if (isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("Connected to database");
  } catch (error: any) {
    throw new Error("Error connecting to database");
  }
};
