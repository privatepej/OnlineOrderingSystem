import React from "react";
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
} from "@mui/material";

const ProductModal = ({
  isOpen,
  onClose,
  onSubmit,
  product,
  categories,
  fieldErrors,
  handleChange,
}) => (
  <Dialog open={isOpen} onClose={onClose}>
    <DialogTitle>Add Product</DialogTitle>
    <DialogContent>
      <TextField
        label="Product Name"
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
        label="Price"
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
        label="Description"
        name="description"
        value={product.description}
        onChange={handleChange}
        fullWidth
        margin="dense"
      />
      <FormControl fullWidth margin="dense" error={!!fieldErrors.categoryname}>
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          name="categoryname"
          value={product.categoryname}
          onChange={handleChange}
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
          helperText={fieldErrors.image}
        />
        {fieldErrors.image && (
          <FormHelperText sx={{ color: "red" }}>
            {fieldErrors.image}
          </FormHelperText>
        )}
      </FormControl>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="secondary">
        Cancel
      </Button>
      <Button onClick={onSubmit} color="primary">
        Add
      </Button>
    </DialogActions>
  </Dialog>
);

export default ProductModal;
