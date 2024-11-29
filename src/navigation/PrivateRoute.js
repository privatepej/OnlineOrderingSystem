import React, { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";

const PrivateRoute = ({ children, roles }) => {
  const { user } = useAuth();

  const hasAccess = useMemo(() => {
    if (!user) return false;
    if (!roles) return true;
    return roles.includes(user.role);
  }, [user, roles]);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!hasAccess) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
