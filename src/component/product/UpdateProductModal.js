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
  Input,
  Box,
} from "@mui/material";
import { validateFormUpdate } from "../../utils/Validation";
import Api from "../../api/api";
import { useTranslation } from "react-i18next";

const UpdateProductModal = ({
  isOpen,
  onClose,
  products,
  categories,
  onUpdate,
}) => {
  const { t } = useTranslation("updateProductModal");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [updatedProduct, setUpdatedProduct] = useState({
    id: "",
    pname: "",
    price: "",
    description: "",
    categoryname: "",
    image: "",
  });
  const [isFormDirty, setIsFormDirty] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (updatedProduct.image instanceof File) {
      const url = URL.createObjectURL(updatedProduct.image);
      setImagePreview(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    } else if (updatedProduct.image) {
      setImagePreview(
        `http://localhost:8080/onlineshop/product/images/${updatedProduct.image}`
      );
    }
  }, [updatedProduct.image]);

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
          image: product.imagename,
        });
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
      image: "",
    });
    setIsFormDirty(false);
    setFormErrors({});
  };

  const handleFieldChange = (e) => {
    const { name, value, files } = e.target;
    setUpdatedProduct((prev) => ({
      ...prev,
      [name]: files && files.length > 0 ? files[0] : value,
    }));
    setIsFormDirty(true);
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSave = async () => {
    const errors = validateFormUpdate(updatedProduct);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const isDuplicate = products.some(
      (product) =>
        product.pname.toLowerCase() === updatedProduct.pname.toLowerCase() &&
        product.id !== updatedProduct.id
    );

    if (isDuplicate) {
      setFormErrors((prev) => ({
        ...prev,
        pname: "Product name already exists. Please use a different name.",
      }));
      return;
    }

    if (updatedProduct.image && updatedProduct.image instanceof File) {
      const fileExists = await Api.checkImageExists(updatedProduct.image.name);
      if (fileExists) {
        setFormErrors((prev) => ({
          ...prev,
          image:
            "A file with the same name already exists. Please rename your file or choose a different one.",
        }));
        return;
      }
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
      <DialogTitle>{t("UPDATE_PRODUCT")}</DialogTitle>
      <DialogContent>
        <Alert severity="info" sx={{ mb: 2 }}>
          {t("ALERT_PRODUCT_MODAL")}
        </Alert>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>{t("SELECT_PRODUCT")}</InputLabel>
          <Select
            label={t("SELECT_PRODUCT")}
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
          label={t("PRODUCT_NAME")}
          name="pname"
          value={updatedProduct.pname}
          onChange={handleFieldChange}
          fullWidth
          margin="dense"
          error={!!formErrors.pname}
          helperText={formErrors.pname}
        />
        <TextField
          label={t("PRICE")}
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
          label={t("DESCRIPTION")}
          name="description"
          value={updatedProduct.description}
          onChange={handleFieldChange}
          fullWidth
          margin="dense"
        />
        <FormControl fullWidth margin="dense" error={!!formErrors.categoryname}>
          <InputLabel>{t("CATEGORY")}</InputLabel>
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
        <FormControl fullWidth margin="dense">
          <Input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleFieldChange}
            error={!!formErrors.image}
          />
          {formErrors.image && (
            <Typography variant="caption" color="error">
              {formErrors.image}
            </Typography>
          )}
        </FormControl>
        {imagePreview && (
          <Box sx={{ mt: 1 }}>
            <Typography variant="subtitle2">
              {updatedProduct.image instanceof File
                ? t("SELECTED_IMAGE")
                : t("CURRENTLY_IMAGE")}
            </Typography>
            <img
              src={imagePreview}
              alt="Preview"
              style={{ maxWidth: "100%", maxHeight: "150px" }}
            />
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          {t("CANCEL")}
        </Button>
        <Button onClick={handleSave} color="primary" disabled={!isFormDirty}>
          {t("SAVE")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateProductModal;
