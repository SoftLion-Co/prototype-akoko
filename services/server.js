import Shopify from 'shopify-api-node';
import dotenv from 'dotenv';
dotenv.config();

class ShopifyService {
  constructor() {
    this.shopify = this.createShopify();
  }

  createShopify() {
    return new Shopify({
      shopName: process.env.SHOP_NAME,
      apiKey: process.env.API_KEY,
      password: process.env.PASSWORD
    });
  }
}

const shopifyService = new ShopifyService();

export default shopifyService;