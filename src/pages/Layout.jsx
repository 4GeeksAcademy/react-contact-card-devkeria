// src/pages/Layout.jsx

import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="container">
    <Outlet />
  </div>
);

export default Layout;


