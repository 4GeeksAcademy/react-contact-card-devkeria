// src/routes.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddContact from "./pages/AddContact.jsx";
import Layout from "./pages/Layout.jsx";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;


