import { useState } from "react";

const useAlert = () => {
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(""), 3000);
  };

  return { alertMessage, showAlert };
};

export default useAlert;
