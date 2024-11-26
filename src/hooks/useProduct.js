import Api from "../api/api";
import { useState, useEffect } from "react";
const fetchProductsAndCategories = async () => {
  const [productsData, categoriesData] = await Promise.all([
    Api.getProducts(),
    Api.getCategories(),
  ]);
  return { products: productsData, categories: categoriesData };
};

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { products, categories } = await fetchProductsAndCategories();
        setProducts(products);
        setCategories(categories);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, categories, loading, setProducts, setCategories };
};

export default useProduct;
