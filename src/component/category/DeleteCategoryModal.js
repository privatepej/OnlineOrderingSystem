import React, { useState } from "react";
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
  Alert,
} from "@mui/material";

const DeleteCategoryModal = ({ isOpen, onClose, categories, onUpdate }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDelete = () => {
    if (selectedCategory) {
      onUpdate(selectedCategory);
      setSelectedCategory("");
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Delete Category</DialogTitle>
      <DialogContent>
        <Alert severity="warning" sx={{ mb: 2 }}>
          Warning: Deleting a category will remove it permanently!
        </Alert>
        <FormControl fullWidth>
          <InputLabel>Select Category</InputLabel>
          <Select
            label="Select Category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category, index) => (
              <MenuItem key={index} value={category.cname}>
                {category.cname}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          color="error"
          disabled={!selectedCategory}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteCategoryModal;
