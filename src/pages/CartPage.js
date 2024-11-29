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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../hooks/CartContext";
import Loading from "../component/Loading";
const CartPage = () => {
  const { cart, removeCartItem, clearCart } = useCart();

  if (!cart) {
    return <Loading />;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cart.cartItems.length > 0 ? (
        <>
          <List>
            {cart.cartItems.map((item) => (
              <ListItem
                key={item.productId}
                secondaryAction={
                  <IconButton onClick={() => removeCartItem(item.productId)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar
                    src={
                      `http://localhost:8080/onlineshop/product/images/${item.imagename}` ||
                      "/default-image.jpg"
                    }
                    alt={item.imagename}
                    variant="square"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={`${item.productName} (x${item.quantity})`}
                  secondary={`Price: $${item.price.toFixed(
                    2
                  )} | Total: $${item.totalPrice.toFixed(2)}`}
                />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" mt={2}>
            Cart Total: ${cart.cartTotal.toFixed(2)}
          </Typography>
          <Box mt={2}>
            <Button variant="contained" color="secondary" onClick={clearCart}>
              Clear Cart
            </Button>
          </Box>
        </>
      ) : (
        <Typography variant="body1">Your cart is empty.</Typography>
      )}
    </Container>
  );
};

export default CartPage;
