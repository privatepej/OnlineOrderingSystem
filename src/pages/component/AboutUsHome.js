import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const AboutUsHome = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("homePage");

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
          {t("OUR_STORY")}
        </Typography>
        <Typography
          sx={{
            fontSize: "60px",
            color: "#ffd475",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {t("ABOUT_US")}
        </Typography>
        <Typography
          sx={{
            fontSize: "28px",
            color: "#333",
            marginTop: "20px",
          }}
        >
          {t("ABOUT_US_MAIN_TEXT")}
        </Typography>

        <Typography
          sx={{
            fontSize: "20px",
            color: "#666",
            marginTop: "20px",
            lineHeight: "1.8",
          }}
        >
          {t("ABOUT_US_DESCRIPTION_1")}
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            color: "#666",
            marginTop: "10px",
            lineHeight: "1.8",
          }}
        >
          {t("ABOUT_US_DESCRIPTION_2")}
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
          <Typography> {t("DISCOVER_MORE")}</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default AboutUsHome;
