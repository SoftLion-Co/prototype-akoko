import { baseUrl } from './apiConfig';

class DiscountService {
  async listDiscounts() {
    try {
      const response = await fetch(`${baseUrl}/discounts`);
      return response.json();
    } catch (error) {
      console.error('Error fetching discounts:', error);
      throw error;
    }
  }

  async getDiscountById(discountId) {
    try {
      const response = await fetch(`${baseUrl}/discount/${discountId}`);
      return response.json();
    } catch (error) {
      console.error(`Error fetching discount with ID ${discountId}:`, error);
      throw error;
    }
  }
}

export default new DiscountService();
