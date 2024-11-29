import React, { useMemo, useState } from "react";
import ProductModal from "../component/product/ProductModal";
import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DeleteProductModal from "../component/category/DeleteProductModal.js";
import ProductCard from "../component/product/ProductCard";
import CustomAlert from "../component/CustomAlert";
import UpdateProductModal from "../component/product/UpdateProductModal";
import useFilteredProducts from "../hooks/useFilterProduct";
import CategoryModal from "../component/category/CategoryModal";
import DeleteCategoryModal from "../component/category/DeleteCategoryModal";
import UpdateCategoryModal from "../component/category/UpdateCategoryModal";
import useAlert from "../hooks/useAlert";
import AdminButtons from "../component/AdminButtons";
import ProductFilter from "../component/product/ProductFilter";
import useProductModalHandlers from "../hooks/useProductModalHandlers";
import useProductActions from "../hooks/useProductAndCategoryActions";
import Loading from "../component/Loading";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { alertMessage, showAlert } = useAlert();
  const {
    addModal,
    deleteModal,
    updateModal,
    addCategoryModal,
    deleteCategoryModal,
    updateCategoryModal,
    fieldErrors,
    setFieldErrors,
    newProduct,
    handleChange,
    selectedProduct,
    setSelectedProduct,
    selectedCategory,
    setSelectedCategory,
    handleCloseModal,
    handleCloseDeleteModal,
    handleCloseUpdateModal,
  } = useProductModalHandlers();

  const {
    loading,
    categories,
    handleAddCategory,
    handleDeleteCategory,
    handleUpdateCategory,
    products,
    handleAddProduct,
    handleDeleteProduct,
    handleUpdateProduct,
  } = useProductActions({
    showAlert,
  });

  const handleAddCategorySubmit = (newCategory) => {
    handleAddCategory(newCategory, addCategoryModal.closeModal);
  };

  const handleDeleteCategorySubmit = (categoryName) => {
    handleDeleteCategory(categoryName, deleteCategoryModal.closeModal);
  };

  const handleUpdateCategorySubmit = (updatedCategory) => {
    handleUpdateCategory(updatedCategory, updateCategoryModal.closeModal);
  };

  const handleAddProductSubmit = () => {
    handleAddProduct(newProduct, setFieldErrors, handleCloseModal);
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
    <Container sx={{ mb: 50 }}>
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
        onSubmit={handleAddProductSubmit}
        product={newProduct}
        categories={categories}
        fieldErrors={fieldErrors}
        handleChange={handleChange}
      />
      <DeleteProductModal
        isOpen={deleteModal.isOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={() =>
          handleDeleteProduct(selectedProduct, handleCloseDeleteModal)
        }
        products={Array.isArray(products) ? products : []} // Guard against bad data
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <UpdateProductModal
        isOpen={updateModal.isOpen}
        onClose={handleCloseUpdateModal}
        products={products}
        categories={categories}
        onUpdate={(product) =>
          handleUpdateProduct(product, handleCloseUpdateModal)
        } // Update handler
      />
      <CategoryModal
        isOpen={addCategoryModal.isOpen}
        onClose={addCategoryModal.closeModal}
        onSubmit={handleAddCategorySubmit}
      />
      <DeleteCategoryModal
        isOpen={deleteCategoryModal.isOpen}
        onClose={deleteCategoryModal.closeModal}
        categories={categories.filter(
          (category) => category.cname !== "Uncategorized"
        )}
        onUpdate={handleDeleteCategorySubmit}
      />

      <UpdateCategoryModal
        isOpen={updateCategoryModal.isOpen}
        onClose={updateCategoryModal.closeModal}
        categories={categories.filter(
          (category) => category.cname !== "Uncategorized"
        )}
        onUpdate={handleUpdateCategorySubmit}
      />
    </Container>
  );
};

export default Products;
