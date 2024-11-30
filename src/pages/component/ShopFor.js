import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import IcecreamIcon from "@mui/icons-material/Icecream";
import LiquorIcon from "@mui/icons-material/Liquor";
import { useNavigate } from "react-router";

const ShopFor = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "50px", fontWeight: "bold" }}>
          SHOP FOR <span style={{ color: "#ffd475" }}>PRODUCTS</span>
        </Typography>
        <Typography variant="h6" sx={{ marginTop: "10px", color: "gray" }}>
          Discover a variety of options to satisfy your cravings. Explore our
          categories below!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          mt: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "250px",
          }}
        >
          <FastfoodIcon sx={{ fontSize: "150px", color: "#FF7043" }} />
          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
            Fast Food
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "250px",
          }}
        >
          <LocalPizzaIcon sx={{ fontSize: "150px", color: "#F57C00" }} />
          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
            Pizza
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "250px",
          }}
        >
          <IcecreamIcon sx={{ fontSize: "150px", color: "#4FC3F7" }} />
          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
            Desserts
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "250px",
          }}
        >
          <LiquorIcon sx={{ fontSize: "150px", color: "#7E57C2" }} />
          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
            Beverages
          </Typography>
        </Box>
      </Box>

      <Box sx={{ marginTop: "80px" }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            marginTop: "30px",
            padding: "10px 30px",
            backgroundColor: "#0e5026",
            color: "#ffd475",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#ffd475",
              color: "#0e5026",
            },
          }}
          onClick={() => navigate("/products")}
        >
          VIEW ALL PRODUCTS
        </Button>
      </Box>
    </Box>
  );
};

export default ShopFor;
