import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ToastProvider from "./components/toastProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </StrictMode>
);
