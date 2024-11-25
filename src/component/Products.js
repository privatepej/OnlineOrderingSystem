import React, { useEffect, useState } from "react";
import Api from "../api/api";
import ProductModal from "./ProductModal";
import { validateForm } from "../utils/Validation";
import { Container, Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DeleteProductModal from "./DeleteProductModal.js";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import CustomAlert from "./CustomAlert";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fieldErrors, setFieldErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Track delete modal state
  const [selectedProduct, setSelectedProduct] = useState(""); // Track selected product name for deletion
  const [newProduct, setNewProduct] = useState({
    pname: "",
    price: "",
    description: "",
    categoryname: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          Api.getProducts(),
          Api.getCategories(),
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewProduct({ pname: "", price: "", description: "", categoryname: "" });
    setFieldErrors({});
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

  const handleOpenDeleteModal = () => setIsDeleteModalOpen(true);

  const handleCloseDeleteModal = () => {
    console.log("Open delete modal"); // Debug log
    setIsDeleteModalOpen(false);
    setSelectedProduct("");
  };

  const handleDeleteProduct = async () => {
    console.log("Delete initiated for:", selectedProduct); // Debug log
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

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Product Catalog
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Add Product
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={handleOpenDeleteModal}
        >
          Delete Product
        </Button>
      </Box>

      <CustomAlert
        message={alertMessage}
        severity="success"
        sx={{ mb: 2 }}
        onClose={() => setAlertMessage("")}
      />

      <Grid container spacing={5}>
        {products.map((product) => (
          <Grid item size={{ xs: 15, md: 4 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddProduct}
        product={newProduct}
        categories={categories}
        fieldErrors={fieldErrors}
        handleChange={handleChange}
      />

      <DeleteProductModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteProduct}
        products={products}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </Container>
  );
};

export default Products;
