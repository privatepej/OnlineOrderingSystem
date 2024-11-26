import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Typography,
} from "@mui/material";
import { validateFormUpdate } from "../../utils/Validation";

const UpdateProductModal = ({
  isOpen,
  onClose,
  products,
  categories,
  onUpdate,
}) => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [updatedProduct, setUpdatedProduct] = useState({
    id: "",
    pname: "",
    price: "",
    description: "",
    categoryname: "",
  });
  const [isFormDirty, setIsFormDirty] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (selectedProduct) {
      const product = products.find((p) => p.pname === selectedProduct);
      if (product) {
        setUpdatedProduct({
          id: product.id,
          pname: product.pname,
          price: product.price,
          description: product.description,
          categoryname: product.categoryname,
        });
        // setIsFormDirty(false); // Reset dirty flag
        // setFormErrors({}); // Reset errors
      }
    }
  }, [selectedProduct, products]);

  const clearFields = () => {
    setSelectedProduct("");
    setUpdatedProduct({
      id: "",
      pname: "",
      price: "",
      description: "",
      categoryname: "",
    });
    setIsFormDirty(false);
    setFormErrors({});
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({ ...prev, [name]: value }));
    setIsFormDirty(true);
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSave = () => {
    const errors = validateFormUpdate(updatedProduct);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    onUpdate(updatedProduct);
    clearFields();
  };

  const handleClose = () => {
    clearFields();
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Update Product</DialogTitle>
      <DialogContent>
        <Alert severity="info" sx={{ mb: 2 }}>
          Please fill out all fields to update the product.
        </Alert>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Select Product</InputLabel>
          <Select
            label="Select Product"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            {products.map((product, index) => (
              <MenuItem key={index} value={product.pname}>
                {product.pname}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Product Name"
          name="pname"
          value={updatedProduct.pname}
          onChange={handleFieldChange}
          fullWidth
          margin="dense"
          error={!!formErrors.pname}
          helperText={formErrors.pname}
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={updatedProduct.price}
          onChange={handleFieldChange}
          fullWidth
          margin="dense"
          error={!!formErrors.price}
          helperText={formErrors.price}
        />
        <TextField
          label="Description"
          name="description"
          value={updatedProduct.description}
          onChange={handleFieldChange}
          fullWidth
          margin="dense"
        />
        <FormControl fullWidth margin="dense" error={!!formErrors.categoryname}>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            name="categoryname"
            value={updatedProduct.categoryname}
            onChange={handleFieldChange}
          >
            {categories.map((category, index) => (
              <MenuItem key={index} value={category.cname}>
                {category.cname}
              </MenuItem>
            ))}
          </Select>
          {formErrors.categoryname && (
            <Typography variant="caption" color="error">
              {formErrors.categoryname}
            </Typography>
          )}
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary" disabled={!isFormDirty}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateProductModal;
