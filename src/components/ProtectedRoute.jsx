import React from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from "../utils/getCookie";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return <Navigate to="/login" />;
  } else {
    return <>{children}</>;
  }
};

export default ProtectedRoute;
