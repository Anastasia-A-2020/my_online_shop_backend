import mongoose from "mongoose";
import chalk from "chalk";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

const main = async () => {
  await mongoose.connect(
    "mongodb+srv://test:test@cluster0.cihqd.mongodb.net/online)shop?retryWrites=true&w=majority&appName=Cluster0"
  );

  console.log(chalk.magenta("Connect to MongoDB..."));

  app.listen(PORT, err => {
    if (err) console.log(chalk.bgRed.white.bold(err.message));
    console.log(chalk.magenta.bold(`http://localhost:${PORT}`));
  });
};

main();
