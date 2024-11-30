import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const ShopFor = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("homePage");

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "50px", fontWeight: "bold" }}>
          {t("SHOP_FOR_TITLE")}
          <span style={{ color: "#ffd475" }}> {t("SHOP_FOR_PRODUCTS")}</span>
        </Typography>
        <Typography variant="h6" sx={{ marginTop: "10px", color: "gray" }}>
          {t("SHOP_FOR_DESC")}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          mt: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "250px",
          }}
        >
          <Box
            component="img"
            src="/img/png/fastfood.png"
            alt="SBC Bootshop Logo"
            sx={{
              height: 200,
            }}
          />
          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
            {t("FAST_FOOD")}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "250px",
          }}
        >
          <Box
            component="img"
            src="/img/png/chips.png"
            alt="SBC Bootshop Logo"
            sx={{
              height: 200,
            }}
          />
          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
            {t("CHIPS")}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "250px",
          }}
        >
          <Box
            component="img"
            src="/img/png/ice-cream.png"
            alt="SBC Bootshop Logo"
            sx={{
              height: 200,
            }}
          />
          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
            {t("DESSERTS")}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "250px",
          }}
        >
          <Box
            component="img"
            src="/img/png/beverage.png"
            alt="SBC Bootshop Logo"
            sx={{
              height: 200,
            }}
          />{" "}
          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
            {t("BEVERAGES")}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ marginTop: "80px" }}>
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
          onClick={() => navigate("/products")}
        >
          {t("VIEW_ALL_PRODUCTS")}
        </Button>
      </Box>
    </Box>
  );
};

export default ShopFor;
