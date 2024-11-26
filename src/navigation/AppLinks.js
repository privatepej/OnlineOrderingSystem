import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const AppLinks = () => {
  return (
    <>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <Button sx={{ my: 2, color: "white", display: "block" }}>Home</Button>
      </Link>
      <Link to="/products" style={{ textDecoration: "none" }}>
        <Button sx={{ my: 2, color: "white", display: "block" }}>
          Products
        </Button>
      </Link>
      <Link to="/aboutus" style={{ textDecoration: "none" }}>
        <Button sx={{ my: 2, color: "white", display: "block" }}>
          AboutUs
        </Button>
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <Button sx={{ my: 2, color: "white", display: "block" }}>
          Contact
        </Button>
      </Link>
    </>
  );
};

export default AppLinks;
