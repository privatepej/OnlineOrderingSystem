import React from "react";
import Box from "@mui/material/Box";
import { Typography, TextField, Button, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("homePage");

  return (
    <Box sx={{ backgroundColor: "#f4f4f4" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "20px",
            alignItems: "left",
            flex: 1,
            minWidth: "250px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            {t("ADDRESS")}
          </Typography>
          <Typography variant="body1">{t("ADDRESS_LINE_1")}</Typography>
          <Typography variant="body1">{t("ADDRESS_LINE_2")}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            margin: "20px",
            flex: 1,
            minWidth: "250px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            {t("STORE_INFO")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
            onClick={() => navigate("/aboutus")}
          >
            {t("ABOUT_US_LINK")}
          </Typography>
          <Typography variant="body1">{t("PHONE")}</Typography>
          <Typography variant="body1">{t("EMAIL")}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            margin: "20px",
            flex: 1,
            minWidth: "250px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            {t("POLICY")}
          </Typography>
          <Typography variant="body1">{t("REFUND_POLICY")}</Typography>
          <Typography variant="body1">{t("TERMS_OF_USE")}</Typography>
          <Typography variant="body1">{t("PRIVACY_POLICY")}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            margin: "20px",
            flex: 1,
            minWidth: "250px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            {t("JOIN_NEWSLETTER_TITLE")}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: "10px" }}>
            {t("JOIN_NEWSLETTER_DESC")}
          </Typography>
          <Box sx={{ display: "flex", gap: "10px", width: "100%" }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Enter your email"
              sx={{ backgroundColor: "white", flex: 1 }}
            />
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#0e5026",
                color: "#ffd475",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#ffd475",
                  color: "#0e5026",
                },
              }}
            >
              {t("SUBSCRIBE")}
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">{t("FOLLOW_US")}</Typography>
        <IconButton
          color="primary"
          onClick={() => window.open("https://www.facebook.com")}
        >
          <FacebookIcon sx={{ fontSize: "30px", color: "#4267B2" }} />
        </IconButton>
        <IconButton
          color="primary"
          onClick={() => window.open("https://twitter.com")}
        >
          <TwitterIcon sx={{ fontSize: "30px", color: "#1DA1F2" }} />
        </IconButton>
        <IconButton
          color="primary"
          onClick={() => window.open("https://www.instagram.com")}
        >
          <InstagramIcon sx={{ fontSize: "30px", color: "#C13584" }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          backgroundColor: "#5d9488",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffd475",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <Typography variant="body2" sx={{ marginBottom: "5px" }}>
          {t("COPYRIGHT")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
