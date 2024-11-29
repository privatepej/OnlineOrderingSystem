import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Products from "../pages/Products";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AlreadyLoggedInRoute from "./AlreadyLoggedInRoute";
import CartPage from "../pages/CartPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute roles={["ADMINISTRATOR", "STAFF"]}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute roles={["CUSTOMER"]}>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <AlreadyLoggedInRoute>
              <LoginPage />
            </AlreadyLoggedInRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <AlreadyLoggedInRoute>
              <SignupPage />
            </AlreadyLoggedInRoute>
          }
        />
        <Route
          path="/admin/signup"
          element={
            <PrivateRoute roles={["ADMINISTRATOR"]}>
              <SignupPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
