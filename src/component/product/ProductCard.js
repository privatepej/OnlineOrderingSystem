import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  Box,
  Button,
} from "@mui/material";
import { useCart } from "../../hooks/CartContext";
import { useAuth } from "../../hooks/AuthProvider";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();

  const handleAddToCart = () => {
    addToCart(product.id, 1);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <CardHeader
        title={product.pname}
        titleTypographyProps={{
          variant: "h6",
          sx: {
            fontWeight: "bold",
            textAlign: "center",
            textOverflow: "ellipsis",
          },
        }}
        sx={{ p: 1, backgroundColor: "#f4f4f4" }}
      />

      <Box
        sx={{
          display: "flex",
          height: "200px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <CardMedia
          component="img"
          image={`http://localhost:8080/onlineshop/product/images/${product.imagename}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/img/png/defaultReact.png";
          }}
          alt={product.pname}
          sx={{
            objectFit: "contain",
          }}
        />
      </Box>

      <CardContent>
        <Box sx={{ mb: 2 }}>
          {product.description ? (
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
            >
              {product.description}
            </Typography>
          ) : (
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontStyle: "italic" }}
            >
              No description available
            </Typography>
          )}
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontStyle: "italic" }}
          >
            Category: {product.categoryname}
          </Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 1,
          }}
        >
          Price: ${product.price.toFixed(2)}
        </Typography>
        {user?.role === "CUSTOMER" && (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddToCart}
            sx={{
              backgroundColor: "#5d9488",
              "&:hover": {
                backgroundColor: "#0e5026",
              },
            }}
          >
            Add to Cart
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
