import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";   // ← NEW IMPORT

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Analytics />                                      {/* ← NEW COMPONENT */}
  </React.StrictMode>
);