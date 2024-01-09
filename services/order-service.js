const express = require("express");
const app = express();
const ShopifyService = require("./shopifyService");

class OrderService {
  async listOrders(limit = 5) {
    try {
      const orders = await ShopifyService.shopify.order.list({ limit });
      return orders;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getOrderById(orderId) {
    try {
      const order = await ShopifyService.shopify.order.get(orderId);
      return order;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new OrderService();