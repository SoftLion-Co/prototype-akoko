import { baseUrl } from './apiConfig';

class CustomerService {
  async listCustomers() {
    try {
      const response = await fetch(`${baseUrl}/customers`);
      return response.json();
    } catch (error) {
      console.error('Error fetching customers:', error);
      throw error;
    }
  }

  async getCustomerById(customerId) {
    try {
      const response = await fetch(`${baseUrl}/customer/${customerId}`);
      return response.json();
    } catch (error) {
      console.error(`Error fetching customer with ID ${customerId}:`, error);
      throw error;
    }
  }
}

export default new CustomerService();
