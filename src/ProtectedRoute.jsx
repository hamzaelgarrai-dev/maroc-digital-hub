// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const authData = JSON.parse(localStorage.getItem("auth"));

  // If no user logged in
  if (!authData || !authData.token) {
    return <Navigate to="/SignIn" replace />;
  }

  const userRole = authData.user.role;

  // If role not allowed
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, show the page
  return children;
}

export default ProtectedRoute;
