import axios from "axios";

const API_BASE_URL = "/onlineshop";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const Api = {
  getProducts: async (navigate) => {
    try {
      const response = await axiosInstance.get("/product/listWithImage");
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        navigate("/error");
      }
      throw error;
    }
  },

  addProduct: async (productData) => {
    try {
      const response = await axiosInstance.post(
        "/product/addForm",
        productData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error adding product:", error.message);
      throw error;
    }
  },

  getCategories: async () => {
    try {
      const response = await axiosInstance.get("/category/list");
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error.message);
      throw error;
    }
  },

  deleteProduct: async (productName) => {
    try {
      console.log("deleteProduct", productName);
      const response = await axiosInstance.delete(
        `/product/delete?productName=${productName}`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting product:", error.message);
      throw error;
    }
  },

  updateProduct: async (productData) => {
    try {
      const response = await axiosInstance.put(
        "/product/updates",
        productData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error updating product:", error.message);
      throw error;
    }
  },

  // Add a new category
  addCategory: async (newCategory) => {
    try {
      const response = await axiosInstance.post("/category/add", newCategory);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error adding category:", error.message);
      throw error;
    }
  },

  deleteCategory: async (categoryName) => {
    try {
      const response = await axiosInstance.delete(
        `/category/delete?categoryName=${categoryName}`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting category:", error.message);
      throw error;
    }
  },

  updateCategory: async ({ id, newName }) => {
    try {
      const response = await axiosInstance.put(
        `/category/update?id=${id}&newName=${newName}`
      );
      return response.data;
    } catch (error) {
      console.error("Error updating category:", error.message);
      throw error;
    }
  },
  login: async (email, password) => {
    try {
      const response = await axiosInstance.post("/user/login", {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw (
        error.response?.data || "Login failed. Please check your credentials."
      );
    }
  },
  registerUser: async (formData) => {
    try {
      const response = await axiosInstance.post("/user/register", formData);
      return response.data;
    } catch (error) {
      throw error.response?.data || "Registration failed. Please try again.";
    }
  },
  checkImageExists: async (filename) => {
    try {
      const response = await axiosInstance.head(`/product/images/${filename}`, {
        method: "HEAD",
      });
      return response.status !== 404;
    } catch (error) {
      console.error("Error checking if file exists:", error);
      return false;
    }
  },

  // Cart API
  addToCart: async (userId, productId, quantity = 1) => {
    try {
      const response = await axiosInstance.post(
        `/cart/add?userId=${userId}&productId=${productId}&quantity=${quantity}`
      );
      return response.data;
    } catch (error) {
      console.error("Error adding to cart:", error.message);
      throw error;
    }
  },

  viewCart: async (userId) => {
    try {
      const response = await axiosInstance.get(`/cart/view?userId=${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching cart:", error.message);
      throw error;
    }
  },

  removeCartItem: async (userId, productId) => {
    try {
      const response = await axiosInstance.delete(
        `/cart/remove-item?userId=${userId}&productId=${productId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error removing cart item:", error.message);
      throw error;
    }
  },

  clearCart: async (userId) => {
    try {
      const response = await axiosInstance.delete(
        `/cart/clear?userId=${userId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error clearing cart:", error.message);
      throw error;
    }
  },
};

export default Api;
