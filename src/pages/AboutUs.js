import React from "react";
import { Box, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 0",
        backgroundImage: "url('./assets/PizzaPictures/pizza-store.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Box
        sx={{
          width: "80%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "24px",
          gap: "20px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: 48,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          About Us
        </Typography>

        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h2"
            sx={{ fontSize: 32, textAlign: "left", marginBottom: "15px" }}
          >
            History
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <img
            src="./img/png/history.jpg"
            alt="History"
            width="500px"
            height="300px"
            style={{ borderRadius: "10px", boxShadow: "2px 4px #888888" }}
          />
          <Typography
            variant="body1"
            sx={{ fontSize: 16, lineHeight: 1.8, textAlign: "justify" }}
          >
            BootMart began with a simple mission: to make food ordering quick,
            easy, and accessible for everyone. From humble beginnings serving
            college cafeterias and small take-out restaurants, we’ve grown into
            a trusted partner for food delivery, offering a seamless platform
            for businesses and customers alike.
          </Typography>
        </Box>

        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography
            variant="h2"
            sx={{ fontSize: 32, textAlign: "left", marginBottom: "15px" }}
          >
            Our Company
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: 16, lineHeight: 1.8, textAlign: "justify" }}
          >
            At BootMart, we believe in the power of connection. We partner with
            a wide range of vendors to bring customers the meals they love,
            delivered with speed and reliability. Our team is dedicated to
            enhancing the online food ordering experience by prioritizing
            customer satisfaction, secure payments, and timely deliveries.
          </Typography>
          <img
            src="./img/png/pizza-store2.jpg"
            alt="Pizza Store"
            width="500px"
            height="300px"
            style={{ borderRadius: "10px", boxShadow: "2px 4px #888888" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
