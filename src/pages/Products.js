import React, { useState, useMemo } from "react";
import Api from "../api/api";
import ProductModal from "../component/product/ProductModal";
import { validateForm } from "../utils/Validation";
import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DeleteProductModal from "../component/category/DeleteProductModal.js";
import ProductCard from "../component/product/ProductCard";
import Loading from "../component/Loading";
import CustomAlert from "../component/CustomAlert";
import UpdateProductModal from "../component/product/UpdateProductModal";
import useFilteredProducts from "../hooks/useFilterProduct";
import useProduct from "../hooks/useProduct";
import useModal from "../hooks/useModal";
import CategoryModal from "../component/category/CategoryModal";
import DeleteCategoryModal from "../component/category/DeleteCategoryModal";
import UpdateCategoryModal from "../component/category/UpdateCategoryModal";
import useAlert from "../hooks/useAlert";
import AdminButtons from "../component/AdminButtons";
import ProductFilter from "../component/product/ProductFilter";

const Products = () => {
  const [fieldErrors, setFieldErrors] = useState({});
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [newProduct, setNewProduct] = useState({
    pname: "",
    price: "",
    description: "",
    categoryname: "",
  });

  const { products, categories, loading, setProducts, setCategories } =
    useProduct();
  const { alertMessage, showAlert } = useAlert();

  const addModal = useModal();
  const deleteModal = useModal();
  const updateModal = useModal();
  const addCategoryModal = useModal();
  const deleteCategoryModal = useModal();
  const updateCategoryModal = useModal();

  const handleCloseModal = () => {
    setNewProduct({ pname: "", price: "", description: "", categoryname: "" });
    setFieldErrors({});
    addModal.closeModal();
  };

  const handleCloseDeleteModal = () => {
    setSelectedProduct("");
    deleteModal.closeModal();
  };

  const handleCloseUpdateModal = () => {
    updateModal.closeModal();
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    setNewProduct((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, // Attach the file object
    }));
  };

  const handleAddProduct = async () => {
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
      formData.append("pname", newProduct.pname);
      formData.append("price", newProduct.price);
      formData.append("description", newProduct.description);
      formData.append("categoryname", newProduct.categoryname);
      if (newProduct.image) {
        formData.append("imagename", newProduct.image);
      }

      const savedProduct = await Api.addProduct(formData);
      setProducts((prev) => [...prev, savedProduct]);
      handleCloseModal();
      showAlert("Product added successfully!");
    } catch (err) {
      if (err.response && err.response.status === 409) {
        const errorMessage = err.response.data;

        if (errorMessage.includes("Product")) {
          setFieldErrors({ pname: errorMessage });
        } else if (errorMessage.includes("Image")) {
          setFieldErrors({ image: errorMessage });
        } else {
          setFieldErrors({
            general: "Conflict error. Please check your inputs.",
          });
        }
      } else {
        console.error("Error adding product:", err);
        showAlert("Failed to add product. Please try again.");
      }
    }
  };

  const handleDeleteProduct = async () => {
    console.log("Delete initiated for:", selectedProduct);
    try {
      await Api.deleteProduct(selectedProduct);
      setProducts((prev) =>
        prev.filter((product) => product.pname !== selectedProduct)
      );
      showAlert(`Product "${selectedProduct}" deleted successfully!`);
      handleCloseDeleteModal();
    } catch (err) {
      console.error("Failed to delete product:", err);
    }
  };

  const handleUpdateProduct = async (product) => {
    const formData = new FormData();
    formData.append("id", product.id);
    formData.append("pname", product.pname);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("categoryname", product.categoryname);

    if (product.image instanceof File) {
      formData.append("imagename", product.image);
    }

    try {
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
      showAlert("Product updated successfully!");
      handleCloseUpdateModal();
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  const handleAddCategory = async (newCategory) => {
    try {
      await Api.addCategory(newCategory); // Call API to add the category
      setCategories((prev) => [...prev, newCategory]); // Update categories state
      showAlert("Category added successfully!");
      addCategoryModal.closeModal();
    } catch (err) {
      console.error("Failed to add category:", err);
      showAlert("Failed to add category. Please try again.");
    }
  };

  const handleDeleteCategory = async (categoryName) => {
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

      showAlert(`Category "${categoryName}" deleted successfully!`);
      deleteCategoryModal.closeModal();
    } catch (err) {
      console.error("Failed to delete category:", err);
      showAlert("Failed to delete category. Please try again.");
    }
  };

  const handleUpdateCategory = async ({ id, newName }) => {
    try {
      await Api.updateCategory({ id, newName });
      setCategories((prev) =>
        prev.map((cat) => (cat.id === id ? { ...cat, cname: newName } : cat))
      );
      setProducts((prev) =>
        prev.map((product) =>
          product.categoryname === categories.find((cat) => cat.id === id).cname
            ? { ...product, categoryname: newName }
            : product
        )
      );
      showAlert("Category updated successfully!");
      updateCategoryModal.closeModal();
    } catch (err) {
      console.error("Failed to update category:", err);
    }
  };

  const filteredProducts = useFilteredProducts(
    products,
    selectedCategory,
    searchQuery
  );

  const memoizedProductCards = useMemo(() => {
    return filteredProducts.length > 0 ? (
      filteredProducts.map((product, index) => (
        <Grid size={{ xs: 15, md: 4 }} key={index}>
          <ProductCard product={product} />
        </Grid>
      ))
    ) : (
      <Typography
        variant="h6"
        sx={{ textAlign: "center", mt: 4, width: "100%" }}
      >
        No products match.
      </Typography>
    );
  }, [filteredProducts]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Product Catalog
        </Typography>

        <AdminButtons
          onAddProduct={addModal.openModal}
          onDeleteProduct={deleteModal.openModal}
          onUpdateProduct={updateModal.openModal}
          onAddCategory={addCategoryModal.openModal}
          onDeleteCategory={deleteCategoryModal.openModal}
          onUpdateCategory={updateCategoryModal.openModal}
        />
      </Box>
      <Box
        sx={{
          mb: 3,
        }}
      >
        <ProductFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          categories={categories}
        />
      </Box>
      <CustomAlert
        message={alertMessage}
        severity="success"
        sx={{ mb: 2 }}
        onClose={() => showAlert("")}
      />
      <Grid container spacing={5}>
        {memoizedProductCards}
      </Grid>
      <ProductModal
        isOpen={addModal.isOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddProduct}
        product={newProduct}
        categories={categories}
        fieldErrors={fieldErrors}
        handleChange={handleChange}
      />
      <DeleteProductModal
        isOpen={deleteModal.isOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteProduct}
        products={Array.isArray(products) ? products : []} // Guard against bad data
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <UpdateProductModal
        isOpen={updateModal.isOpen}
        onClose={handleCloseUpdateModal}
        products={products}
        categories={categories}
        onUpdate={handleUpdateProduct}
      />
      <CategoryModal
        isOpen={addCategoryModal.isOpen}
        onClose={addCategoryModal.closeModal}
        onSubmit={handleAddCategory}
      />
      <DeleteCategoryModal
        isOpen={deleteCategoryModal.isOpen}
        onClose={deleteCategoryModal.closeModal}
        categories={categories.filter(
          (category) => category.cname !== "Uncategorized"
        )}
        onConfirm={handleDeleteCategory}
      />

      <UpdateCategoryModal
        isOpen={updateCategoryModal.isOpen}
        onClose={updateCategoryModal.closeModal}
        categories={categories.filter(
          (category) => category.cname !== "Uncategorized"
        )}
        onUpdate={handleUpdateCategory}
      />
    </Container>
  );
};

export default Products;
