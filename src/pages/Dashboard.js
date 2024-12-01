import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import useProductAndCategoryActions from "../hooks/useProductAndCategoryActions";

const Dashboard = () => {
  const { loading, products, categories } = useProductAndCategoryActions({
    showAlert: () => {},
  });

  const [productStats, setProductStats] = useState({
    productsByCategory: {},
  });

  useEffect(() => {
    if (!loading && products.length > 0 && categories.length > 0) {
      const stats = {
        productsByCategory: categories.reduce((acc, category) => {
          acc[category.cname] = products.filter(
            (product) => product.categoryname === category.cname
          ).length;
          return acc;
        }, {}),
      };
      setProductStats(stats);
    }
  }, [loading, products, categories]);

  return (
    <Box
      sx={{
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#0e5026",
          mb: 3,
        }}
      >
        Admin Dashboard
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mb: 5,
        }}
      >
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#5d9488",
            color: "white",
            flex: "1",
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Total Products
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {loading ? (
                <CircularProgress color="inherit" />
              ) : (
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {products?.length}
                </Typography>
              )}
            </Box>
          </CardContent>
        </Card>

        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#5d9488",
            color: "white",
            flex: "1",
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Total Categories
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {loading ? (
                <CircularProgress color="inherit" />
              ) : (
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {categories?.length}
                </Typography>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#0e5026",
            mb: 2,
          }}
        >
          Products by Category
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                mt: 10,
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            Object.entries(productStats.productsByCategory).map(
              ([category, count], index) => (
                <Card
                  key={index}
                  sx={{
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    flex: "1 1 calc(33% - 10px)",
                    minWidth: "250px",
                    padding: "10px",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#0e5026" }}
                    >
                      {category}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {count}
                    </Typography>
                  </CardContent>
                </Card>
              )
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
