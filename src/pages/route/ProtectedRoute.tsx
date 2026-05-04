import { useAuthStore } from "../../store/useAuthStore";
import { Navigate,Outlet } from "react-router-dom";

export default function ProtectedRoute(){ 
    const isAuthenticated=useAuthStore((state)=>state.isAuthenticated);
    //jika belum login,redirect ke halaman login
    if(!isAuthenticated){
        return <Navigate to="/login" replace />;
    }
return <Outlet />;
}