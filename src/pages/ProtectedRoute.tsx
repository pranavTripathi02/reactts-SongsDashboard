import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
    const { auth } = useAuth();

    return auth?.token || true ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
