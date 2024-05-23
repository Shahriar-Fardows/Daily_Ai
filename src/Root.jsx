import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="h-[100vh]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;