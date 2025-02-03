import express from "express";
import ProductsController from "./Controller.js";

const productsRoutes = express.Router();
const productsController = new ProductsController();

productsRoutes.get("/", productsController.getAllProducts);
productsRoutes.post("/", productsController.addNewProduct);
productsRoutes.delete("/:id", productsController.deleteProduct);

export default productsRoutes;
