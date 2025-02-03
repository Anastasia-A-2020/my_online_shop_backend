import chalk from "chalk";
import ProductsService from "./Service.js";

const productsService = new ProductsService();
class ProductsController {
  async getAllProducts(req, res) {
    try {
      const products = await productsService.getAllProducts();
      res.json(products);
    } catch (error) {
      console.log(chalk.bgRed.white(error.message));
      res.status(500).json({ message: error.message });
    }
  }
  async addNewProduct(req, res) {
    try {
      const newProduct = await productsService.addNewProduct(req.body);
      res.json(newProduct);
    } catch (error) {
      console.log(chalk.bgRed.white(error.message));
      res.status(500).json({ message: error.message });
    }
  }
  async deleteProduct(req, res) {
    return await productsService.deleteProduct(req.params.id);
  }
}

export default ProductsController;
