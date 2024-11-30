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
import { useTranslation } from "react-i18next";

const DeleteCategoryModal = ({ isOpen, onClose, categories, onUpdate }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { t } = useTranslation("deleteCategoryModal");

  const handleDelete = () => {
    if (selectedCategory) {
      onUpdate(selectedCategory);
      setSelectedCategory("");
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{t("DELETE_CATEGORY")}</DialogTitle>
      <DialogContent>
        <Alert severity="warning" sx={{ mb: 2 }}>
          {t("WARNING_DELETE_CATEGORY")}
        </Alert>
        <FormControl fullWidth>
          <InputLabel>{t("SELECT_CATEGORY")}</InputLabel>
          <Select
            label={t("SELECT_CATEGORY")}
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
          {t("CANCEL")}
        </Button>
        <Button
          onClick={handleDelete}
          color="error"
          disabled={!selectedCategory}
        >
          {t("DELETE")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteCategoryModal;
