import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({ message: "", severity: "info" });

  const showAlert = (message, severity = "info") => {
    setAlert({ message, severity });
    setTimeout(() => setAlert({ message: "", severity: "info" }), 3000);
  };

  return {
    alertMessage: alert.message,
    alertSeverity: alert.severity,
    showAlert,
  };
};

export default useAlert;
