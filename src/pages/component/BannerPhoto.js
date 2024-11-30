import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const BannerPhoto = () => {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        backgroundImage:
          "url('./img/png/patrick-fore-m9qWesqRN0M-unsplash.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          width: "1000px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "50px",
            fontWeight: "bold",
            color: "white",
            mb: 2,
          }}
        >
          Welcome to
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: "100px",
            fontWeight: "bold",
            color: "#ffd475",
            mb: 3,
          }}
        >
          BootMart
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "25px",
            color: "white",
            maxWidth: "800px",
          }}
        >
          BootMart is your trusted online platform for ordering delicious meals
          from a variety of vendors. Whether it’s a quick snack, a full meal, or
          a late-night craving, we’ve got you covered with fast delivery,
          affordable prices, and a user-friendly experience.
        </Typography>
      </Box>
    </Box>
  );
};

export default BannerPhoto;
