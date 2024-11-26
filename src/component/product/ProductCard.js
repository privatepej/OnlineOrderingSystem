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
        height: 345,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flexShrink: 0 }}>
        <CardHeader title={product.pname} />
      </Box>

      <CardMedia
        component="img"
        height="160"
        image={product.image || "/static/images/default-product.jpg"}
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
        <Box sx={{ minHeight: 30 }}>
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
