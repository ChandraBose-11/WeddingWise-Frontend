import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const OnlyAdminPrivateRoute = () => {
  const { currentuser } = useSelector((state) => state.user);
  return currentuser && currentuser.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" />
  );
};

export default OnlyAdminPrivateRoute;