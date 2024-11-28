import axios from "axios";

// Base URL for your backend
const API_BASE_URL = "/onlineshop";

// Axios instance for centralized configurations
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
};

export default Api;
