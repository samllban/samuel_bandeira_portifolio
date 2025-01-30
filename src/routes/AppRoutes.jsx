import {Routes, Route}  from "react-router-dom";
import Home from "../pages/Home";
import Servicoes from "../pages/Servicos";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicoes />} />
            
        </Routes>
    );
};

export default AppRoutes;