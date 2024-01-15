import { baseUrl } from './apiConfig';

class OrderService {
  async listOrders() {
    try {
      const response = await fetch(`${baseUrl}/orders`);
      return response.json();
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  }

  async getOrderById(orderId) {
    try {
      const response = await fetch(`${baseUrl}/order/${orderId}`);
      return response.json();
    } catch (error) {
      console.error(`Error fetching order with ID ${orderId}:`, error);
      throw error;
    }
  }

  async createOrder(orderData) {
    try {
      const response = await fetch(`${baseUrl}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      return response.json();
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  }

  async updateOrder(orderId, updatedOrderData) {
    try {
      const response = await fetch(`${baseUrl}/order/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedOrderData),
      });

      return response.json();
    } catch (error) {
      console.error(`Error updating order with ID ${orderId}:`, error);
      throw error;
    }
  }
}

export default new OrderService();
