const express = require("express");
const app = express();
import shopifyService from "./server";

class ProductService {

	async fetchProducts(limit = 30) {
		try {
		  const products = await shopifyService.shopify.product.list({ limit });
		  return products;
		} catch (error) {
		  console.error(error);
		  throw error;
		}
	}

	async getProductWithMetafields(productId) {
		try {
		  const product = await shopifyService.shopify.product.get(productId);
  
		  const metafields = await shopifyService.shopify.metafield.list({
			 metafield: { owner_resource: "product", owner_id: productId },
		  });
  
		  const productWithMetafields = {
			 product,
			 metafields,
		  };
		  console.log(productWithMetafields);
		  return productWithMetafields;
		} catch (error) {
		  console.error(error);
		  throw error;
		}
	 }
  
}

export default new ProductService();

 
 
