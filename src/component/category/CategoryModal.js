import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const CategoryModal = ({ isOpen, onClose, onSubmit }) => {
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCategoryName(e.target.value);
    setError(""); // Clear error on change
  };

  const handleSubmit = () => {
    if (!categoryName.trim()) {
      setError("Category name is required.");
      return;
    }
    onSubmit({ cname: categoryName }); // Send the new category to the parent handler
    setCategoryName(""); // Clear input after submit
    onClose(); // Close the modal
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add Category</DialogTitle>
      <DialogContent>
        <TextField
          label="Category Name"
          value={categoryName}
          onChange={handleChange}
          fullWidth
          margin="dense"
          required
          error={!!error}
          helperText={error}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CategoryModal;
