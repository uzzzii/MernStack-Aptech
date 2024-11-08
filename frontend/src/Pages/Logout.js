import { useEffect } from "react";
import { useAuth } from "../users/auth";
import { Navigate } from "react-router-dom";

export const Logout = () => {
  const { LogoutUser } = useAuth();
  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);
  return <Navigate to="/login" />;
};
