import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Products from '../component/Products';
import ErrorPage from '../pages/ErrorPage';

const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/home" element={<Homepage />} />
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
    
  );
};

export default AppRoutes;
