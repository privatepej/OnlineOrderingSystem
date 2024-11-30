import React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Loading = () => {
  const { t } = useTranslation("commons");
  return (
    <Typography variant="h6" sx={{ textAlign: "center", mt: 4 }}>
      {t("LOADING")}
    </Typography>
  );
};

export default Loading;
