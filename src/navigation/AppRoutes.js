import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Products from "../component/Products";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
