import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  const role = localStorage.getItem("role");

  if (!role) {
    return <Navigate to="/signin" />;
  }

  if (role !== allowedRole) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
