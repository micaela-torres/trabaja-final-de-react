import React from "react";
import { useState, useContext } from "react";
export const cartContext = React.createContext([]);
export const useCartContext = () => useContext(cartContext);


const cartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const agregarproducto = (item, comprados) => {
        if (isInCart(item.codigo)) {
            setCart(cart.map(producto => {
                return producto.codigo === item.codigo ? { ...producto, omprados: producto.comprados + comprados } : producto
            }));
        } else {
            setCart([...cart, { ...item, comprados }]);
        }
    };

    const preciofinal = () => {
        return cart.reduce((a, b) => a + b.omprados * b.precio, 0);
    };

    const preciodeproductos = () => cart.reduce((c, actualproducto) => c + actualproducto.comprados, 0);

    const limpiarcarrito = () => setCart([]);

    const isInCart = (codigo) => cart.filter(producto => producto.codigo !== codigo) ? true : false;

    const removerProducto = (codigo) => setCart(cart.filter(producto => producto.codigo !== codigo));



    return (
        <cartContext.Provider value={{
            limpiarcarrito,
            isInCart,
            removerProducto,
            agregarproducto,
            preciofinal,
            preciodeproductos,
            cart
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default cartProvider