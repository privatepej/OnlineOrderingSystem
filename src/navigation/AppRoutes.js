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

const publicRoutes = [
  { path: "/", element: <Homepage /> },
  { path: "/products", element: <Products /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/contact", element: <Contact /> },
];

const privateRoutes = [
  {
    path: "/dashboard",
    element: (
      <PrivateRoute roles={["ADMINISTRATOR", "STAFF"]}>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/cart",
    element: (
      <PrivateRoute roles={["CUSTOMER"]}>
        <CartPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin/signup",
    element: (
      <PrivateRoute roles={["ADMINISTRATOR"]}>
        <SignupPage />
      </PrivateRoute>
    ),
  },
];

const authRoutes = [
  {
    path: "/login",
    element: (
      <AlreadyLoggedInRoute>
        <LoginPage />
      </AlreadyLoggedInRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <AlreadyLoggedInRoute>
        <SignupPage />
      </AlreadyLoggedInRoute>
    ),
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      {privateRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      {authRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
