import { Navigate, Outlet } from "react-router";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";

function AdminRoute() {
  const { isAdmin, loading } = useAuth();
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