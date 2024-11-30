import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const WhyShopWithUs = () => {
  const { t } = useTranslation("homePage");

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
          {t("WHY_SHOP_TITLE")}
        </Typography>
        <Box sx={{ textAlign: "left", color: "white" }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
            }}
          >
            {t("WHY_SHOP_CONVENIENCE")}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
            }}
          >
            {t("WHY_SHOP_AFFORDABLE")}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
            }}
          >
            {t("WHY_SHOP_FAST")}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
            }}
          >
            {t("WHY_SHOP_VARIETY")}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
            }}
          >
            {t("WHY_SHOP_SECURE")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyShopWithUs;
