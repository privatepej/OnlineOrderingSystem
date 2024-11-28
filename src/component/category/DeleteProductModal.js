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

const DeleteProductModal = ({
  isOpen,
  onClose,
  onConfirm,
  products,
  selectedProduct,
  setSelectedProduct,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth={"md"} fullWidth={true}>
      <DialogTitle>Delete Product</DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <InputLabel sx={{ mt: 0.8 }}>Product Name</InputLabel>
          <Select
            label="Product Name"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
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
          Cancel
        </Button>
        <Button onClick={onConfirm} color="error" disabled={!selectedProduct}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteProductModal;
