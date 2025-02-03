import mongoose from "mongoose";
import productSchema from "./productSchema.js";

const ProductModel = new mongoose.Model("Product", productSchema);

export default ProductModel;
