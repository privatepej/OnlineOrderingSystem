import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const CategoryModal = ({ isOpen, onClose, onSubmit }) => {
  const { t } = useTranslation("addCategoryModal");
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCategoryName(e.target.value);
    setError("");
  };

  const handleSubmit = () => {
    if (!categoryName.trim()) {
      setError(t("ERROR_CATEGORY_NAME_REQUIRE"));
      return;
    }
    onSubmit({ cname: categoryName });
    setCategoryName("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{t("ADD_CATEGORY")}</DialogTitle>
      <DialogContent>
        <TextField
          label={t("CATEGORY_NAME")}
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
          {t("CANCEL")}
        </Button>
        <Button onClick={handleSubmit} color="primary">
          {t("ADD")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CategoryModal;
