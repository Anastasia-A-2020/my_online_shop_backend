import ProductsDataAccess from "./DataAccess.js";

const productsDataAccess = new ProductsDataAccess();

class ProductsService {
  async getAllProducts() {
    return await productsDataAccess.getAllProducts();
  }
  async addNewProduct(body) {
    return await productsDataAccess.addNewProduct(body);
  }
  async deleteProduct(id) {
    return await productsDataAccess.deleteProduct(id);
  }
}

export default ProductsService;
