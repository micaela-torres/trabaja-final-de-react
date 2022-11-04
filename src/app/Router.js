import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../componentes/Navbar/NavBar";
import Layout from "../app/Layout";
import Contacto from "../pag/contacto/Contacto";
import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer";
import Cart from "../componentes/Cart/Cart";
import CartProvider from "../context/cartContext";
import Footer from "../componentes/Footer/Footer";
import Formulario from "../componentes/Formulario/Formulario";


const Router = () => {
    return (
        <>
            <BrowserRouter>
                <CartProvider value="producto">
                    <NavBar></NavBar>
                    <Routes>
                        <Route path="/" element={<Layout />}></Route>
                        <Route path="/marcas/:marcaid" element={<Layout />}></Route>
                        <Route path="/producto/:detalleId" element={<ItemDetailContainer />}></Route>
                        <Route path="/Contacto" element={<Contacto />}></Route>
                        <Route path="/Carrito" element={<Cart />}></Route>
                        <Route path="/Formulario" element={<Formulario />}></Route>
                    </Routes>
                    <Footer></Footer>
                </CartProvider>
            </BrowserRouter>
        </>
    )
}

export default Router