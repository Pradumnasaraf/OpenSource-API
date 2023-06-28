import mongoose from "mongoose";
import { COLLECTION_NAME } from "../config/config.js";

const devtip = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false, // Set versionKey option to false (__v)
    collection: COLLECTION_NAME, // Set Collection name from .env file
  }
);

export default mongoose.model("devtipss", devtip);
