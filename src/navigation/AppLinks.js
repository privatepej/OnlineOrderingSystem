import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Button } from "@mui/material";
import { useAuth } from "../hooks/AuthProvider";
import { useCart } from "../hooks/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AppLinks = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const links = useMemo(() => {
    const baseLinks = [
      { path: "/", label: "Home" },
      { path: "/products", label: "Products" },
      { path: "/aboutus", label: "About Us" },
      { path: "/contact", label: "Contact" },
    ];

    if (user?.role === "CUSTOMER") {
      baseLinks.push({
        path: "/cart",
        label: (
          <Badge badgeContent={cart?.cartItems?.length || 0} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        ),
      });
    }

    if (user?.role === "ADMINISTRATOR") {
      baseLinks.push(
        { path: "/admin/signup", label: "Add User" },
        { path: "/dashboard", label: "Dashboard" }
      );
    }

    if (user?.role === "STAFF") {
      baseLinks.push({ path: "/dashboard", label: "Dashboard" });
    }

    return baseLinks;
  }, [user, cart]);

  return (
    <>
      {links.map(({ path, label }) => (
        <Link key={path} to={path} style={{ textDecoration: "none" }}>
          <Button sx={{ my: 2, color: "#0e5026", display: "block" }}>
            {label}
          </Button>
        </Link>
      ))}

      {user ? (
        <Button
          sx={{ my: 2, color: "#0e5026", display: "block" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : (
        <>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button sx={{ my: 2, color: "#0e5026", display: "block" }}>
              Log In
            </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button sx={{ my: 2, color: "#0e5026", display: "block" }}>
              Sign Up
            </Button>
          </Link>
        </>
      )}
    </>
  );
};

export default AppLinks;
