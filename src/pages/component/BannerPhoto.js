import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const BannerPhoto = () => {
  const { t } = useTranslation("homePage");

  return (
    <Box
      sx={{
        minHeight: "70vh",
        backgroundImage: "url('./img/png/banner7.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          {t("BANNER_PHOTO_TITLE")}
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
          {t("BANNER_PHOTO_SUBTITLE")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "25px",
            color: "white",
            maxWidth: "800px",
          }}
        >
          {t("BANNER_PHOTO_DESC")}
        </Typography>
      </Box>
    </Box>
  );
};

export default BannerPhoto;
