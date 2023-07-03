import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Navber from "../Components/Shared/NavBer/Navber";
import Footer from "../Components/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
          <Outlet></Outlet> 
          <Footer></Footer>
        </div>
    );
};

export default Main;