import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation("homePage");

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
            {t("WIDE_MENU")}
          </Typography>
          <Typography variant="h5">{t("WIDE_MENU_DESC")}</Typography>
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
            {t("FREE_DELIVERY")}
          </Typography>
          <Typography variant="h5">{t("FREE_DELIVERY_DESC")}</Typography>
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
            {t("TOP_QUALITY")}
          </Typography>
          <Typography variant="h5">{t("TOP_QUALITY_DESC")}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
