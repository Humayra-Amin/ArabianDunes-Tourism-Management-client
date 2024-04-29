import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import AuthProvider from "../../AuthProvider/AuthProvider";

const Root = () => {
    return (
        <div style={{ background: 'linear-gradient(to bottom right, #FFFFFF, #FFFCB3)' }}>
            <Navbar></Navbar>
            <AuthProvider></AuthProvider>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;