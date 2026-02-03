import { Navigate, Outlet } from "react-router";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";

function AdminRoute() {
    console.log("AdminRoute rendered");
  const { isAdmin, loading } = useAuth();
    console.log("isAdmin:", isAdmin, "loading:", loading);
  if (loading) {
    return <div>Checking admin access...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/admin" replace />;
  }


//   return <div>ADMIN ROUTE HIT</div>
  return <Outlet />;
}

export default AdminRoute;