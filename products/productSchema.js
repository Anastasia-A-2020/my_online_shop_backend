import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  price: {
    type: "string",
    required: true,
  },
  src: {
    type: "string",
  },
});

export default productSchema;
