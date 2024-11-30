import { Button, Box } from "@mui/material";
import { useAuth } from "../hooks/AuthProvider";
import { useTranslation } from "react-i18next";

const AdminButtons = ({
  onAddProduct,
  onDeleteProduct,
  onUpdateProduct,
  onAddCategory,
  onDeleteCategory,
  onUpdateCategory,
}) => {
  const { user } = useAuth();
  const { t } = useTranslation("commons");

  if (user?.role !== "ADMINISTRATOR") {
    return null;
  }
  return (
    <Box sx={{ textAlign: "center", mb: 4 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={onAddProduct}
        sx={{ m: 1 }}
      >
        {t("ADD_PRODUCT")}
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={onDeleteProduct}
        sx={{ m: 1 }}
      >
        {t("DELETE_PRODUCT")}
      </Button>
      <Button
        variant="contained"
        color="warning"
        onClick={onUpdateProduct}
        sx={{ m: 1 }}
      >
        {t("UPDATE_PRODUCT")}
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={onAddCategory}
        sx={{ m: 1 }}
      >
        {t("ADD_CATEGORY")}
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={onDeleteCategory}
        sx={{ m: 1 }}
      >
        {t("DELETE_CATEGORY")}
      </Button>
      <Button
        variant="contained"
        color="warning"
        onClick={onUpdateCategory}
        sx={{ m: 1 }}
      >
        {t("UPDATE_CATEGORY")}
      </Button>
    </Box>
  );
};

export default AdminButtons;
