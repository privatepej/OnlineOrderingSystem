import React, { useState } from "react";
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
} from "@mui/material";
import { validateCategoryUpdate } from "../../utils/Validation";

const UpdateCategoryModal = ({ isOpen, onClose, categories, onUpdate }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [updatedCategoryName, setUpdatedCategoryName] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const clearFields = () => {
    setSelectedCategory("");
    setUpdatedCategoryName("");
    setFormErrors({});
  };

  const handleFieldChange = (e) => {
    const { value } = e.target;
    setUpdatedCategoryName(value);
    setFormErrors((prev) => ({ ...prev, updatedCategoryName: "" }));
  };

  const handleSave = () => {
    const errors = validateCategoryUpdate({ updatedCategoryName });
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    onUpdate({ id: selectedCategory, newName: updatedCategoryName });
    clearFields();
  };

  const handleClose = () => {
    clearFields();
    onClose();
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Update Category</DialogTitle>
      <DialogContent>
        <Alert severity="info" sx={{ mb: 2 }}>
          Select a category and update its name.
        </Alert>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Select Category</InputLabel>
          <Select
            label="Select Category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map((category, index) => (
              <MenuItem key={index} value={category.id}>
                {category.cname}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="New Category Name"
          name="updatedCategoryName"
          value={updatedCategoryName}
          onChange={handleFieldChange}
          fullWidth
          margin="dense"
          error={!!formErrors.updatedCategoryName}
          helperText={formErrors.updatedCategoryName}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          color="primary"
          disabled={!selectedCategory}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateCategoryModal;
