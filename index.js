import express from "express";
import mongoose from "mongoose";
import logger from "./middleware/logger.js";
import path from "path";
import { fileURLToPath } from "url";
import ErrorHandle from "./middleware/404.js";
import devTipRouter from "./routes/devTipRouter.js";
import { MONGODB_URL, DB_NAME, PORT } from "./config/config.js";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// eslint-disable-next-line no-undef
app.use("/", express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use("/api/devtip", devTipRouter);
app.use(ErrorHandle);

mongoose.set("strictQuery", false);
mongoose
  // eslint-disable-next-line no-undef
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: DB_NAME,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((err) => {
    console.log(err);
  });

// eslint-disable-next-line no-undef
app.listen(PORT, () =>
  console.log(`Server is LIVE at -> http://localhost:${PORT}`)
);

export default app;
