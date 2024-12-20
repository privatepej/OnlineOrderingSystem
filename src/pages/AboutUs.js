import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation("aboutUs");

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
          {t("ABOUT_US")}
        </Typography>

        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h2"
            sx={{ fontSize: 32, textAlign: "left", marginBottom: "15px" }}
          >
            {t("HISTORY")}
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
            alt={t("HISTORY")}
            width="500px"
            height="300px"
            style={{ borderRadius: "10px", boxShadow: "2px 4px #888888" }}
          />
          <Typography
            variant="body1"
            sx={{ fontSize: 16, lineHeight: 1.8, textAlign: "justify" }}
          >
            {t("HISTORY_DESCRIPTION")}
          </Typography>
        </Box>

        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography
            variant="h2"
            sx={{ fontSize: 32, textAlign: "left", marginBottom: "15px" }}
          >
            {t("OUR_SHOP")}
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
            {t("OUR_SHOP_DESCRIPTION")}
          </Typography>
          <img
            src="./img/png/banner6.png"
            alt={t("OUR_COMPANY")}
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
