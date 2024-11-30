import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Grid from "@mui/material/Grid2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:support@bootmart.com?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#0e5026",
          textAlign: "center",
          mb: 5,
        }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ md: 8 }}>
          <Box
            onSubmit={handleSubmit}
            sx={{
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#5d9488",
              }}
            >
              Send Us a Message
            </Typography>

            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              sx={{ marginBottom: "20px" }}
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              sx={{ marginBottom: "20px" }}
            />

            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              required
              sx={{ marginBottom: "20px" }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#5d9488",
                color: "#fff",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#0e5026",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>

        {/* Contact Details */}
        <Grid size={{ md: 4 }}>
          <Box sx={{ padding: "20px" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#5d9488",
              }}
            >
              Get in Touch
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <LocationOnIcon sx={{ color: "#0e5026", mr: 1 }} />
              <Typography variant="body1">
                123 Keyland Arnaiz Bootmart City, SBC 12345
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <PhoneIcon sx={{ color: "#0e5026", mr: 1 }} />
              <Typography variant="body1">+63 (123) 456-7890</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <EmailIcon sx={{ color: "#0e5026", mr: 1 }} />
              <Typography variant="body1">support@sbcbootmart.com</Typography>
            </Box>

            <Box>
              <IconButton
                href="https://www.facebook.com"
                sx={{ color: "#4267B2" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://twitter.com" sx={{ color: "#1DA1F2" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com"
                sx={{ color: "#C13584" }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
