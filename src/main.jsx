

import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes.jsx";
import { StoreProvider } from "./hooks/useGlobalReducer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <AppRoutes />
    </StoreProvider>
  </React.StrictMode>
);
