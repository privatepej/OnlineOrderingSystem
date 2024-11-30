import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import Api from "../api/api";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Alert,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    role: "CUSTOMER",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await Api.registerUser(formData);
      setSuccess("Registration successful!");
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        role: "CUSTOMER",
      });
      setTimeout(() => {
        navigate(user?.role === "ADMINISTRATOR" ? "/admin/signup" : "/login");
      }, 2000);
    } catch (err) {
      setError(err || "An error occurred while registering. Please try again.");
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#5d9488", marginBottom: "20px" }}
        >
          {user?.role === "ADMINISTRATOR" ? "Add User" : "Signup"}
        </Typography>

        {error && (
          <Alert severity="error" sx={{ marginBottom: "20px" }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ marginBottom: "20px" }}>
            {success}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Username"
            name="username"
            fullWidth
            value={formData.username}
            onChange={handleChange}
            required
            sx={{ marginBottom: "20px" }}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ marginBottom: "20px" }}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            value={formData.password}
            onChange={handleChange}
            required
            sx={{ marginBottom: "20px" }}
          />

          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            fullWidth
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            sx={{ marginBottom: "20px" }}
          />

          <TextField
            label="Address"
            name="address"
            fullWidth
            value={formData.address}
            onChange={handleChange}
            required
            sx={{ marginBottom: "20px" }}
          />

          {user?.role === "ADMINISTRATOR" && (
            <FormControl fullWidth sx={{ marginBottom: "20px" }}>
              <InputLabel>Role</InputLabel>
              <Select
                label="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <MenuItem value="CUSTOMER">Customer</MenuItem>
                <MenuItem value="STAFF">Staff</MenuItem>
                <MenuItem value="ADMINISTRATOR">Administrator</MenuItem>
              </Select>
            </FormControl>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#5d9488",
              color: "#fff",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#0e5026",
              },
              marginTop: "10px",
              padding: "10px 0",
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignupPage;
