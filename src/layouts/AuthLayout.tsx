import { Outlet } from "react-router-dom";

export default function AuthLayout(){
    return (
        <div className="grid grid-cols-2 min h-screen items-center">
            <div className="h-screen bg-gray-100">
                <img
                src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
                alt=""
                />
            </div>
            <div className="p-6">
                <Outlet />
            </div>
            <h1>Auth Layout</h1>
        </div>
    );
}