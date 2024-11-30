import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import Api from "../api/api";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Container,
  Alert,
} from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userData = await Api.login(email, password);
      login(userData);
    } catch (err) {
      setError(err || "Invalid email or password");
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
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
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#5d9488", marginBottom: "20px" }}
        >
          Log in
        </Typography>

        {error && (
          <Alert severity="error" sx={{ marginBottom: "20px" }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            placeholder="Example@Gmail.com"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              marginBottom: "20px",
            }}
          />

          <TextField
            label="Password"
            type="password"
            placeholder="Enter password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              marginBottom: "20px",
            }}
          />

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
            }}
          >
            Sign In
          </Button>
        </Box>

        <Box
          sx={{
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "#888" }}>
            Don't have an account?
            <Link
              href="/signup"
              sx={{
                color: "#ffd475",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              {" "}
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
