import { baseUrl } from './apiConfig';

class ProductService {
  async listProducts() {
    try {
      const response = await fetch(`${baseUrl}/products`);
      return response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  async getProductById(productId) {
    try {
      const response = await fetch(`${baseUrl}/product/${productId}`);
      return response.json();
    } catch (error) {
      console.error(`Error fetching product with ID ${productId}:`, error);
      throw error;
    }
  }
}

export default new ProductService();
