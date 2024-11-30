import React from "react";
import { Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const { t } = useTranslation("errorPage");

  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h1" color="error">
        {t("404")}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {t("OPS_404")}
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        {t("404_GO_BACK")}
      </Button>
    </Container>
  );
};

export default ErrorPage;
