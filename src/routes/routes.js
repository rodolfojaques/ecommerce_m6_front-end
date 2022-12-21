import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Teste from "../pages/testes";

function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/teste" element={<Teste/>}/>
        </Routes>
    )
}

export { MainRoutes }