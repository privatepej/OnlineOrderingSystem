import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

const AboutUsHome = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        paddingTop: "50px",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <Box sx={{ maxWidth: "800px", textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            letterSpacing: "2px",
            color: "#555",
          }}
        >
          Our Story
        </Typography>
        <Typography
          sx={{
            fontSize: "60px",
            color: "#ffd475",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          ABOUT US
        </Typography>
        <Typography
          sx={{
            fontSize: "28px",
            color: "#333",
            marginTop: "20px",
          }}
        >
          Welcome to BootMart
        </Typography>

        <Typography
          sx={{
            fontSize: "20px",
            color: "#666",
            marginTop: "20px",
            lineHeight: "1.8",
          }}
        >
          BootMart started with a vision to simplify food ordering for
          small-scale businesses like cafeterias, fast food outlets, and
          take-out services. Over time, we’ve grown into a trusted platform
          connecting hungry customers with the meals they love, delivered with
          speed and reliability.
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            color: "#666",
            marginTop: "10px",
            lineHeight: "1.8",
          }}
        >
          Our mission is to offer an easy-to-use system that benefits both
          businesses and customers by providing a seamless food ordering
          experience, ensuring satisfaction every step of the way.
        </Typography>

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
          onClick={() => navigate("/aboutus")}
        >
          <Typography>DISCOVER MORE</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default AboutUsHome;
