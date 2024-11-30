import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t } = useTranslation("homePage");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('./img/png/banner8.png')",
        opacity: 0.9,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontSize: "80px",
            fontWeight: "bold",
            letterSpacing: "1px",
            textShadow: "2px 2px 5px #000",
            mb: 3,
          }}
        >
          {t("LANDING_PAGE_MAIN_TEXT")}
        </Typography>

        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontSize: "40px",
            fontStyle: "italic",
            textShadow: "1px 1px 3px #000",
            mb: 5,
          }}
        >
          {t("LANDING_PAGE_SUB_TEXT")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Landing;
