import React, { useState, useMemo } from "react";
import Api from "../api/api";
import ProductModal from "./ProductModal";
import { validateForm } from "../utils/Validation";
import {
  Container,
  Typography,
  Button,
  Box,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import DeleteProductModal from "./DeleteProductModal.js";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import CustomAlert from "./CustomAlert";
import UpdateProductModal from "./UpdateProductModal";
import useFilteredProducts from "../hooks/useFilterProduct";
import useProduct from "../hooks/useProduct";
import useModal from "../hooks/useModal";
import CategoryModal from "./CategoryModal";
import DeleteCategoryModal from "./DeleteCategoryModal";
import UpdateCategoryModal from "./UpdateCategoryModal";

const Products = () => {
  const [fieldErrors, setFieldErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState("");
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = async () => {
    const errors = validateForm(newProduct);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    try {
      const payload = {
        pname: newProduct.pname,
        price: parseFloat(newProduct.price),
        description: newProduct.description,
        categoryname: newProduct.categoryname,
      };
      await Api.addProduct(payload);
      setProducts((prev) => [...prev, payload]);
      setAlertMessage(`Product added successfully!`);
      handleCloseModal();
      setTimeout(() => setAlertMessage(""), 3000);
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setFieldErrors({ pname: "Product with the same name already exists" });
      }
    }
  };

  const handleCloseDeleteModal = () => {
    console.log("Open delete modal");
    deleteModal.closeModal();
    setSelectedProduct("");
  };

  const handleCloseUpdateModal = () => {
    console.log("Open update modal");
    updateModal.closeModal();
  };

  const handleDeleteProduct = async () => {
    console.log("Delete initiated for:", selectedProduct);
    try {
      await Api.deleteProduct(selectedProduct);
      setProducts((prev) =>
        prev.filter((product) => product.pname !== selectedProduct)
      );
      setAlertMessage(`Product "${selectedProduct}" deleted successfully!`);
      handleCloseDeleteModal();
      setTimeout(() => setAlertMessage(""), 3000);
    } catch (err) {
      console.error("Failed to delete product:", err);
    }
  };

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      await Api.updateProduct(updatedProduct);
      setProducts((prev) =>
        prev.map((p) =>
          p.id === updatedProduct.id ? { ...p, ...updatedProduct } : p
        )
      );
      setAlertMessage("Product updated successfully!");
      handleCloseUpdateModal();
      setTimeout(() => setAlertMessage(""), 3000);
    } catch (err) {
      console.error("Failed to update product:", err);
    }
  };

  const handleAddCategory = async (newCategory) => {
    try {
      await Api.addCategory(newCategory); // Call API to add the category
      setCategories((prev) => [...prev, newCategory]); // Update categories state
      setAlertMessage("Category added successfully!");
      addCategoryModal.closeModal();
      setTimeout(() => setAlertMessage(""), 3000);
    } catch (err) {
      console.error("Failed to add category:", err);
      setAlertMessage("Failed to add category. Please try again.");
      setTimeout(() => setAlertMessage(""), 3000);
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

      setAlertMessage(`Category "${categoryName}" deleted successfully!`);
      deleteCategoryModal.closeModal();
      setTimeout(() => setAlertMessage(""), 3000);
    } catch (err) {
      console.error("Failed to delete category:", err);
      setAlertMessage("Failed to delete category. Please try again.");
      setTimeout(() => setAlertMessage(""), 3000);
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
      setAlertMessage("Category updated successfully!");
      updateCategoryModal.closeModal();
      setTimeout(() => setAlertMessage(""), 3000);
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
        No products available
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

        <Button
          variant="contained"
          color="primary"
          onClick={addModal.openModal}
          sx={{ m: 1 }}
        >
          Add Product
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={deleteModal.openModal}
          sx={{ m: 1 }}
        >
          Delete Product
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={updateModal.openModal}
          sx={{ m: 1 }}
        >
          Update Product
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={addCategoryModal.openModal}
          sx={{ m: 1 }}
        >
          Add Category
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={deleteCategoryModal.openModal}
          sx={{ m: 1 }}
        >
          Delete Category
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={updateCategoryModal.openModal}
          sx={{ m: 1 }}
        >
          Update Category
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          // alignItems: "center",
          mb: 3,
        }}
      >
        <FormControl sx={{ flex: 0.94 }}>
          <InputLabel>Sort by Category</InputLabel>
          <Select
            label="Sort by Category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <MenuItem value="">All Categories</MenuItem>
            {categories.map((category, index) => (
              <MenuItem key={index} value={category.cname}>
                {category.cname}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Search Products"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ flex: 2, ml: 4.5 }}
        />
      </Box>
      {/* {!products.length && (
        <Typography variant="h6" sx={{ textAlign: "center", mt: 4 }}>
          No products available. Please check back later.
        </Typography>
      )} */}
      <CustomAlert
        message={alertMessage}
        severity="success"
        sx={{ mb: 2 }}
        onClose={() => setAlertMessage("")}
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
