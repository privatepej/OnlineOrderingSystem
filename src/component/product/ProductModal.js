import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Typography,
  Input,
  FormHelperText,
  Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const ProductModal = ({
  isOpen,
  onClose,
  onSubmit,
  product,
  categories,
  fieldErrors,
  handleChange,
}) => {
  const { t } = useTranslation("addProductModal");

  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (product.image instanceof File) {
      const url = URL.createObjectURL(product.image);
      setImagePreview(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setImagePreview("");
    }
  }, [product.image]);

  const menuProps = {
    PaperProps: {
      style: {
        maxHeight: 200,
        overflowY: "auto",
      },
    },
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{t("ADD_PRODUCT")}</DialogTitle>
      <DialogContent>
        <TextField
          label={t("PRODUCT_NAME")}
          name="pname"
          value={product.pname}
          onChange={handleChange}
          fullWidth
          margin="dense"
          required
          error={!!fieldErrors.pname}
          helperText={fieldErrors.pname}
        />
        <TextField
          label={t("PRICE")}
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          fullWidth
          margin="dense"
          required
          error={!!fieldErrors.price}
          helperText={fieldErrors.price}
        />
        <TextField
          label={t("DESCRIPTION")}
          name="description"
          value={product.description}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />
        <FormControl
          fullWidth
          margin="dense"
          error={!!fieldErrors.categoryname}
        >
          <InputLabel>{t("CATEGORY")}</InputLabel>
          <Select
            label={t("CATEGORY")}
            name="categoryname"
            value={product.categoryname}
            onChange={handleChange}
            MenuProps={menuProps}
            required
          >
            {categories.map((category, index) => (
              <MenuItem key={index} value={category.cname}>
                {category.cname}
              </MenuItem>
            ))}
          </Select>
          {fieldErrors.categoryname && (
            <Typography variant="caption" color="error">
              {fieldErrors.categoryname}
            </Typography>
          )}
        </FormControl>
        <FormControl fullWidth margin="dense">
          <Input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
            error={!!fieldErrors.image}
          />
          {fieldErrors.image && (
            <FormHelperText sx={{ color: "red" }}>
              {fieldErrors.image}
            </FormHelperText>
          )}
          {imagePreview && (
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle2">{t("SELECTED_IMAGE")}</Typography>
              <img
                src={imagePreview}
                alt="Preview"
                style={{ maxWidth: "100%", maxHeight: "150px" }}
              />
            </Box>
          )}
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          {t("CANCEL")}
        </Button>
        <Button onClick={onSubmit} color="primary">
          {t("ADD")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductModal;
