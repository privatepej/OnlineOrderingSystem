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
      throw error;
    }
  },

  getCategories: async () => {
    try {
      const response = await axiosInstance.get("/category/list");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteProduct: async (productName) => {
    try {
      const response = await axiosInstance.delete(
        `/product/delete?productName=${productName}`
      );
      return response.data;
    } catch (error) {
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
      throw error;
    }
  },

  addCategory: async (newCategory) => {
    try {
      const response = await axiosInstance.post("/category/add", newCategory);
      return response.data;
    } catch (error) {
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
      throw error;
    }
  },
  registerUser: async (formData) => {
    try {
      const response = await axiosInstance.post("/user/register", formData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  checkImageExists: async (filename) => {
    try {
      const response = await axiosInstance.head(`/product/images/${filename}`, {
        method: "HEAD",
      });
      return response.status !== 404;
    } catch (error) {
      return false;
    }
  },

  addToCart: async (userId, productId, quantity = 1) => {
    try {
      const response = await axiosInstance.post(
        `/cart/add?userId=${userId}&productId=${productId}&quantity=${quantity}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  viewCart: async (userId) => {
    try {
      const response = await axiosInstance.get(`/cart/view?userId=${userId}`);
      return response.data;
    } catch (error) {
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
      throw error;
    }
  },
};

export default Api;
