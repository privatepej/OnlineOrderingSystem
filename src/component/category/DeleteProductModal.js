import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const DeleteProductModal = ({
  isOpen,
  onClose,
  onConfirm,
  products,
  selectedProduct,
  setSelectedProduct,
}) => {
  const { t } = useTranslation("deleteProductModal");
  const menuProps = {
    PaperProps: {
      style: {
        maxHeight: 250,
        overflowY: "auto",
      },
    },
  };
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth={"md"} fullWidth={true}>
      <DialogTitle>{t("DELETE_PRODUCT")}</DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <InputLabel sx={{ mt: 0.8 }}>{t("PRODUCT_NAME")}</InputLabel>
          <Select
            label={t("PRODUCT_NAME")}
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            MenuProps={menuProps}
          >
            {products.map((product) => (
              <MenuItem key={product.pname} value={product.pname}>
                {product.pname}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          {t("CANCEL")}
        </Button>
        <Button onClick={onConfirm} color="error" disabled={!selectedProduct}>
          {t("DELETE")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteProductModal;
