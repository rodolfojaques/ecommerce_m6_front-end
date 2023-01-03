import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import PageProfile from "../pages/pageProfile";
import Teste from "../pages/testes";

function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/teste" element={<Teste/>}/>
            <Route path="/profile" element={<PageProfile/>}/>
        </Routes>
    )
}

export { MainRoutes }