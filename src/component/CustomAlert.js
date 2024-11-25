import React from "react";
import { Alert } from "@mui/material";

const CustomAlert = ({ message, severity = "info", onClose, sx }) => {
  if (!message) return null;

  return (
    <Alert severity={severity} sx={{ mb: 2, ...sx }} onClose={onClose}>
      {message}
    </Alert>
  );
};

export default CustomAlert;
