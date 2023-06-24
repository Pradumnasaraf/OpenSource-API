import dotenv from "dotenv";
dotenv.config();

export const MONGODB_URL = process.env.MONGODB_URL;
export const PORT = process.env.PORT || 9009;
export const COLLECTION_NAME = process.env.COLLECTION_NAME;
export const DB_NAME = process.env.DB_NAME;
