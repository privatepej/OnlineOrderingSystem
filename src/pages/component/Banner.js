import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";

const Banner = () => {
  return (
    <Box
      sx={{
        minHeight: "20vh",
        display: "flex",
        backgroundColor: "white",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          margin: "70px 70px",
        }}
      >
        <FastfoodIcon sx={{ fontSize: "100px", color: "#F57C00" }} />
        <Box sx={{ marginLeft: "20px", width: "250px" }}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            WIDE MENU
          </Typography>
          <Typography variant="h5">
            Explore a variety of options to satisfy your cravings.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          margin: "70px 70px",
        }}
      >
        <LocalShippingIcon sx={{ fontSize: "100px", color: "#388E3C" }} />
        <Box sx={{ marginLeft: "20px", width: "250px" }}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            FREE DELIVERY
          </Typography>
          <Typography variant="h5">
            Enjoy free shipping on orders above 500, straight to your door.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          margin: "70px 70px",
        }}
      >
        <VerifiedIcon sx={{ fontSize: "100px", color: "#1976D2" }} />
        <Box sx={{ marginLeft: "20px", width: "250px" }}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            TOP QUALITY
          </Typography>
          <Typography variant="h5">
            Only the best for you—top-quality products at unbeatable prices.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
