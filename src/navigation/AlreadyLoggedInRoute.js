import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

const AlreadyLoggedInRoute = ({ children }) => {
  const { user } = useAuth();

  // Redirect to the home page (or any other page) if the user is already logged in
  if (user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AlreadyLoggedInRoute;
