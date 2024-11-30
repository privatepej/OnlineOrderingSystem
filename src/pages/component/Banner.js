import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
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
        <Box sx={{ marginLeft: "20px", width: "250px" }}>
          <Box
            component="img"
            src="/img/png/wide-menu.png"
            alt="SBC Bootshop Logo"
            sx={{
              height: 200,
            }}
          />
          <Typography variant="h5">{t("WIDE_MENU_DESC")}</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          margin: "70px 70px",
        }}
      >
        <Box sx={{ marginLeft: "20px", width: "250px" }}>
          <Box
            component="img"
            src="/img/png/free-delivery2.png"
            alt="SBC Bootshop Logo"
            sx={{
              height: 200,
            }}
          />
          <Typography variant="h5">{t("FREE_DELIVERY_DESC")}</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          margin: "70px 70px",
        }}
      >
        <Box sx={{ marginLeft: "20px", width: "250px" }}>
          <Box
            component="img"
            src="/img/png/top-quality.png"
            alt="SBC Bootshop Logo"
            sx={{
              height: 200,
            }}
          />
          <Typography variant="h5">{t("TOP_QUALITY_DESC")}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
