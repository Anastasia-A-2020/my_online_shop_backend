import ProductModel from "./ProductModel.js";

class ProductsDataAccess {
  async getAllProducts() {
    return await ProductModel.find();
  }
  async addNewProduct(body) {
    const newProduct = new ProductModel(body);
    return await newProduct.save();
  }
  async deleteProduct(id) {
    return await ProductModel.findByIdAndDelete(id);
  }
}

export default ProductsDataAccess;
