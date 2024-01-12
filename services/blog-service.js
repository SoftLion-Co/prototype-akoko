import { baseUrl } from './apiConfig';

class BlogService {
  async listBlogs() {
    try {
      const response = await fetch(`${baseUrl}/blogs`);
      return response.json();
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  }

  async getBlogById(blogId) {
    try {
      const response = await fetch(`${baseUrl}/blog/${blogId}`);
      return response.json();
    } catch (error) {
      console.error(`Error fetching blog with ID ${blogId}:`, error);
      throw error;
    }
  }
}

export default new BlogService();
