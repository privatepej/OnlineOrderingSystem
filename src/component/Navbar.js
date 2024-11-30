import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AppLinks from "../navigation/AppLinks";
import { Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#ffd475",
        color: "#5d9488",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box
            component="img"
            src="/logo.png"
            alt="SBC Bootshop Logo"
            sx={{
              height: 50,
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
            <AppLinks />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
