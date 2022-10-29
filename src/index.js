import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/Error/NotFoundPage";
import "./includes/firebase";
import SignupPage from "./pages/Auth/SignupPage";
import Header from "./includes/Header";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
