import { Button, Box } from "@mui/material";
import { useAuth } from "../hooks/AuthProvider";

const AdminButtons = ({
  onAddProduct,
  onDeleteProduct,
  onUpdateProduct,
  onAddCategory,
  onDeleteCategory,
  onUpdateCategory,
}) => {
  const { user } = useAuth();

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
        Add Product
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={onDeleteProduct}
        sx={{ m: 1 }}
      >
        Delete Product
      </Button>
      <Button
        variant="contained"
        color="warning"
        onClick={onUpdateProduct}
        sx={{ m: 1 }}
      >
        Update Product
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={onAddCategory}
        sx={{ m: 1 }}
      >
        Add Category
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={onDeleteCategory}
        sx={{ m: 1 }}
      >
        Delete Category
      </Button>
      <Button
        variant="contained"
        color="warning"
        onClick={onUpdateCategory}
        sx={{ m: 1 }}
      >
        Update Category
      </Button>
    </Box>
  );
};

export default AdminButtons;
