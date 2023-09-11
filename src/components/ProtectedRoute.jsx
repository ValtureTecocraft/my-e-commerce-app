import React from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from "../utils/getCookie";

const ProtectedRoute = ({ childern }) => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return <>{childern}</>;
};

export default ProtectedRoute;
