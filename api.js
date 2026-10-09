// api.js
const BASE_URL = "https://fakestoreapi.com"; // Example API endpoint

/**
 * Generic fetch wrapper with error handling
 */
async function request(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
}

/**
 * Fetch all products
 */
export async function fetchProducts() {
  return await request("/products");
}

/**
 * Fetch product by ID
 */
export async function fetchProductById(id) {
  return await request(`/products/${id}`);
}

/**
 * Fetch products by category
 */
export async function fetchProductsByCategory(category) {
  return await request(`/products/category/${category}`);
}

/**
 * Example: Fetch user data (if needed)
 */
export async function fetchUsers() {
  return await request("/users");
}
