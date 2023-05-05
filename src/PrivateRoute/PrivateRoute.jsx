import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div style={{height: '500px'}} className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="secondary" />
      </div>
    );
  } else if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
