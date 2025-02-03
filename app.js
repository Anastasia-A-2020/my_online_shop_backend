import express, { json } from "express";
import cors from "cors";
import path from "path";
import productsRoutes from "./products/routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/public", express.static(path.resolve("public")));

app.use("/api/products", productsRoutes);

app.get("/", (req, res) => {
  res.send("Hello World from home!");
});

export default app;
