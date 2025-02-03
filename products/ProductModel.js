import mongoose from "mongoose";
import productSchema from "./productSchema.js";

const ProductModel = new mongoose.model("Product", productSchema);

export default ProductModel;
