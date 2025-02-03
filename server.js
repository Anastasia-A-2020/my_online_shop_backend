import mongoose from "mongoose";
import chalk from "chalk";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const main = async () => {
  const mongoURI = process.env.MONGO_URI;

  await mongoose.connect(mongoURI);

  console.log(chalk.magenta("Connect to MongoDB..."));

  app.listen(PORT, err => {
    if (err) console.log(chalk.bgRed.white.bold(err.message));
    console.log(chalk.magenta.bold(`http://localhost:${PORT}`));
  });
};

main();
