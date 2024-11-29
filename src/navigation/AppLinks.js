import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Button } from "@mui/material";
import { useAuth } from "../hooks/AuthProvider";
import { useCart } from "../hooks/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import the cart icon

const AppLinks = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();

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
    {
      path: "/cart",
      label: (
        <Badge
          badgeContent={cart?.cartItems?.length || 0} // Show cart item count
          color="secondary"
        >
          <ShoppingCartIcon />
        </Badge>
      ),
    },
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
