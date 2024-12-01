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
import { useTranslation } from "react-i18next";

const UpdateCategoryModal = ({ isOpen, onClose, categories, onUpdate }) => {
  const { t } = useTranslation("updateCategoryModal");
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

  const menuProps = {
    PaperProps: {
      style: {
        maxHeight: 250,
        overflowY: "auto",
      },
    },
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{t("UPDATE_CATEGORY")}</DialogTitle>
      <DialogContent>
        <Alert severity="info" sx={{ mb: 2 }}>
          {t("SELECT_TO_UPDATE")}
        </Alert>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>{t("SELECT_CATEGORY")}</InputLabel>
          <Select
            label={t("SELECT_CATEGORY")}
            value={selectedCategory}
            onChange={handleCategoryChange}
            MenuProps={menuProps}
          >
            {categories
              .slice()
              .reverse()
              .map((category, index) => (
                <MenuItem key={index} value={category.id}>
                  {category.cname}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <TextField
          label={t("NEW_CATEGORY_NAME")}
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
          {t("CANCEL")}
        </Button>
        <Button
          onClick={handleSave}
          color="primary"
          disabled={!selectedCategory}
        >
          {t("SAVE")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateCategoryModal;
