import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/Shared/NavBar";
import Footer from "../Pages/Shared/Shared/Footer";



const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;