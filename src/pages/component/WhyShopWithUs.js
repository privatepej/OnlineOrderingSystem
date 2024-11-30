import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const WhyShopWithUs = () => {
  return (
    <Box
      sx={{
        minHeight: "50vh",
        backgroundImage:
          "url('./img/png/stefan-barkman-ysambitxV8M-unsplash.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "50px",
            color: "#ffd475",
            fontWeight: "bold",
            mb: 3,
          }}
        >
          Why Shop With Us?
        </Typography>
        <Box sx={{ textAlign: "left", color: "white" }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
            }}
          >
            ✅ Convenience at Your Fingertips: Order your favorite meals
            anytime, anywhere.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
            }}
          >
            ✅ Affordable Prices: Enjoy great deals and discounts on delicious
            meals.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
            }}
          >
            ✅ Fast Delivery: Get your meals delivered hot and fresh in 30
            minutes or less.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
            }}
          >
            ✅ Variety of Choices: Choose from a wide range of cuisines and
            dishes.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
            }}
          >
            ✅ Safe Transactions: Your data and payments are secure with us.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyShopWithUs;
