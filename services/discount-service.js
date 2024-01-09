const express = require("express");
const app = express();
const ShopifyService = require("./shopifyService");

class DiscountService {
  async listDiscounts(limit = 5) {
    try {
      const discounts = await ShopifyService.shopify.discount.list({ limit });
      return discounts;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getDiscountById(discountId) {
    try {
      const discount = await ShopifyService.shopify.discount.get(discountId);
      return discount;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new DiscountService();