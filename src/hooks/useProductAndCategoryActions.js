import { useEffect, useState } from "react";
import Api from "../api/api";
import { validateForm } from "../utils/Validation";

const useProductAndCategoryActions = ({ showAlert }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          Api.getProducts(),
          Api.getCategories(),
        ]);

        setProducts(Array.isArray(productsData) ? productsData : []);
        setCategories(Array.isArray(categoriesData) ? categoriesData : []);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsAndCategories();
  }, []);

  const handleAddProduct = async (
    newProduct,
    setFieldErrors,
    handleCloseModal
  ) => {
    const errors = validateForm(newProduct);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    const isDuplicate = products.some(
      (product) =>
        product.pname.toLowerCase() === newProduct.pname.toLowerCase()
    );

    if (isDuplicate) {
      setFieldErrors((prev) => ({
        ...prev,
        pname: "Product name already exists. Please use a different name.",
      }));
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(newProduct).forEach(([key, value]) => {
        if (newProduct.image) {
          formData.append("imagename", newProduct.image);
        }
        formData.append(key, value);
      });

      if (newProduct.image && newProduct.image instanceof File) {
        const fileExists = await Api.checkImageExists(newProduct.image.name);
        if (fileExists) {
          setFieldErrors((prev) => ({
            ...prev,
            image:
              "A file with the same name already exists. Please rename your file or choose a different one.",
          }));
          return;
        }
      }

      const savedProduct = await Api.addProduct(formData);
      setProducts((prev) => [...prev, savedProduct]);
      handleCloseModal();
      showAlert("Product added successfully!", "success");
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  const handleDeleteProduct = async (
    selectedProduct,
    handleCloseDeleteModal
  ) => {
    try {
      await Api.deleteProduct(selectedProduct);
      setProducts((prev) =>
        prev.filter((product) => product.pname !== selectedProduct)
      );
      showAlert(
        `Product "${selectedProduct}" deleted successfully!`,
        "success"
      );
      handleCloseDeleteModal();
    } catch (err) {
      console.error("Failed to delete product:", err);
    }
  };

  const handleUpdateProduct = async (product, handleCloseUpdateModal) => {
    try {
      const formData = new FormData();
      Object.entries(product).forEach(([key, value]) => {
        if (product.image) {
          formData.append("imagename", product.image);
        }
        formData.append(key, value);
      });

      const updatedProduct = await Api.updateProduct(formData);
      setProducts((prevProducts) =>
        prevProducts.map((p) => {
          if (p.id === updatedProduct.id) {
            const updated = { ...updatedProduct };
            if (!updated.imagename) {
              updated.imagename = p.imagename;
            }
            return updated;
          }
          return p;
        })
      );
      showAlert("Product updated successfully!", "success");
      handleCloseUpdateModal();
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  const handleAddCategory = async (newCategory, handleCloseModal) => {
    try {
      await Api.addCategory(newCategory);
      setCategories((prev) => [...prev, newCategory]);
      showAlert("Category added successfully!", "success");
      handleCloseModal();
    } catch (err) {
      console.error("Failed to add category:", err);
      showAlert("Failed to add category. Please try again.", "error");
    }
  };

  const handleDeleteCategory = async (categoryName, handleCloseModal) => {
    try {
      await Api.deleteCategory(categoryName);
      setCategories((prev) =>
        prev.filter((category) => category.cname !== categoryName)
      );
      setProducts((prev) =>
        prev.map((product) =>
          product.categoryname === categoryName
            ? { ...product, categoryname: "Uncategorized" }
            : product
        )
      );
      showAlert(`Category "${categoryName}" deleted successfully!`, "success");
      handleCloseModal();
    } catch (err) {
      console.error("Failed to delete category:", err);
      showAlert("Failed to delete category. Please try again.", "error");
    }
  };

  const handleUpdateCategory = async ({ id, newName }, handleCloseModal) => {
    try {
      const updatedCategory = await Api.updateCategory({ id, newName });
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === id
            ? { ...cat, cname: updatedCategory.cname || newName }
            : cat
        )
      );
      setProducts((prev) =>
        prev.map((product) =>
          product.categoryname ===
          (categories.find((cat) => cat.id === id)?.cname || "")
            ? { ...product, categoryname: newName }
            : product
        )
      );
      showAlert("Category updated successfully!", "success");
      handleCloseModal();
    } catch (err) {
      console.error("Failed to update category:", err);
      showAlert("Failed to update category. Please try again.", "error");
    }
  };

  return {
    loading,
    categories,
    setCategories,
    handleAddCategory,
    handleDeleteCategory,
    handleUpdateCategory,
    products,
    setProducts,
    handleAddProduct,
    handleDeleteProduct,
    handleUpdateProduct,
  };
};

export default useProductAndCategoryActions;
