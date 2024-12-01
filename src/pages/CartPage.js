import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Button,
  ListItemAvatar,
  Avatar,
  Divider,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../hooks/CartContext";
import Loading from "../component/Loading";
import { useTranslation } from "react-i18next";

const CartPage = () => {
  const { cart, removeCartItem, clearCart } = useCart();
  const { t } = useTranslation("cart");

  if (!cart) {
    return <Loading />;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#5d9488" }}
      >
        {t("YOUR_CART")}
      </Typography>

      {cart.cartItems.length > 0 ? (
        <>
          <Paper elevation={24} sx={{ p: 5, borderRadius: 4 }}>
            <List>
              {cart.cartItems.map((item) => (
                <>
                  <ListItem
                    key={item.productId}
                    sx={{
                      gap: "20px",
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        src={
                          `http://localhost:8080/onlineshop/product/images/${item.imagename}` ||
                          "/default-image.jpg"
                        }
                        alt={item.imagename}
                        variant="square"
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "8px",
                          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                    </ListItemAvatar>

                    <ListItemText
                      primary={
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "bold", color: "#0e5026" }}
                        >
                          {item.productName} (x{item.quantity})
                        </Typography>
                      }
                      secondary={
                        <Typography variant="body2" color="textSecondary">
                          {t("PRICE")}: {t("commons:CURRENCY")}
                          {item.price.toFixed(2)} | {t("TOTAL")}: ₱
                          {item.totalPrice.toFixed(2)}
                        </Typography>
                      }
                    />

                    <IconButton
                      edge="end"
                      onClick={() => removeCartItem(item.productId)}
                      sx={{
                        backgroundColor: "#ffd475",
                        "&:hover": {
                          backgroundColor: "#f0c66e",
                        },
                      }}
                    >
                      <DeleteIcon sx={{ color: "#0e5026" }} />
                    </IconButton>
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>

            <Typography
              variant="h6"
              sx={{ mt: 3, fontWeight: "bold", color: "#0e5026" }}
            >
              {t("CART_TOTAL")}: {t("commons:CURRENCY")}
              {cart.cartTotal.toFixed(2)}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: 2,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#5d9488",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#0e5026",
                  },
                }}
                onClick={clearCart}
              >
                {t("CLEAR_CART")}
              </Button>
            </Box>
          </Paper>
        </>
      ) : (
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#888",
            mt: 5,
            fontSize: "18px",
          }}
        >
          {t("EMPTY_CART")}
        </Typography>
      )}
    </Container>
  );
};

export default CartPage;
