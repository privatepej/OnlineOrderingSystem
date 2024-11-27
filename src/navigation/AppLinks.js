import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useAuth } from "../hooks/AuthProvider";

const AppLinks = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/aboutus", label: "AboutUs" },
    { path: "/contact", label: "Contact" },
    ...(user?.role === "ADMINISTRATOR"
      ? [
          { path: "/admin/signup", label: "Add User" },
          { path: "/dashboard", label: "Dashboard" },
        ]
      : user?.role === "STAFF"
      ? [{ path: "/dashboard", label: "Dashboard" }]
      : []),
  ];

  return (
    <>
      {links.map(({ path, label }) => (
        <Link key={path} to={path} style={{ textDecoration: "none" }}>
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            {label}
          </Button>
        </Link>
      ))}

      {user ? (
        <Button
          sx={{ my: 2, color: "white", display: "block" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : (
        <>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Log In
            </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Sign Up
            </Button>
          </Link>
        </>
      )}
    </>
  );
};

export default AppLinks;
