import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

const PrivateRoute = ({ children, roles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  console.log(user);
  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
