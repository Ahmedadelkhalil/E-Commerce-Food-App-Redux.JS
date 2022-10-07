import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AllFoods from "../Pages/AllFoods";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Contact from "../Pages/Contact";
import FoodDetails from "../Pages/FoodDetails";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Erroe404";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routers;
