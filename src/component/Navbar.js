import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
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
          {/* Left Section */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          </Box>

          {/* Right Section */}
          <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
            <AppLinks />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
