const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(cors());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected To Database"));

const apiRouter = require("./routers/api");
app.use("/api/v1/", apiRouter);

// Error Handler
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req}`);
  res.sendStatus(404);
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: error.stack,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening`);
});
