import { useMemo } from "react";

const useFilteredProducts = (products = [], selectedCategory, searchQuery) => {
  return useMemo(() => {
    let result = products;

    if (selectedCategory) {
      result = result.filter(
        (product) => product.categoryname === selectedCategory
      );
    }

    if (searchQuery.trim()) {
      result = result.filter((product) =>
        product.pname.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return result || [];
  }, [products, selectedCategory, searchQuery]);
};

export default useFilteredProducts;
