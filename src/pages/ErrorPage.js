import React from "react";
import { Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h1" color="error">
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! This page seems to have wandered off.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/home"
      >
        Go Back to Home
      </Button>
    </Container>
  );
};

export default ErrorPage;
