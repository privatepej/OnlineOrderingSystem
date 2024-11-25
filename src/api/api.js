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
      const response = await axiosInstance.get("/product/list");
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
      const response = await axiosInstance.post("/product/add", productData);
      console.log("response", response);
      return response.data;
    } catch (error) {
      console.log("error add product", error.message);
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

  // Add other API functions here (e.g., createProduct, updateProduct, deleteProduct)
};

export default Api;
