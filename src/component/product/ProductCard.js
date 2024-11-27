import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  Box,
} from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        height: 360,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader title={product.pname} sx={{ pt: 0.5, pb: 0.5 }} />
      <CardMedia
        component="img"
        height="200"
        image={`http://localhost:8080/onlineshop/product/images/${product.imagename}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/img/png/basura.png";
        }}
        alt={product.pname}
      />

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
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
        <Typography variant="h6">Price: ${product.price}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
