import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../componentes/Navbar/NavBar";
import Layout from "../app/Layout";
import Contacto from "../pag/contacto/Contacto";
import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer";
import Cart from "../componentes/Cart/Cart"


const Router = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<Layout />}></Route>
                    <Route path="/marcas/:marcaid" element={<Layout />}></Route>
                    <Route path="/producto/:productid" element={<ItemDetailContainer />}></Route>
                    <Route path="/Contacto" element={<Contacto />}></Route>
                    <Route path="/Carrito" element={<Cart />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router