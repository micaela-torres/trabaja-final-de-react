import React from "react";
import { useState, useContext } from "react";
export const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const agregarproducto = (item, comprados) => {
        if (isInCart(item.id)) {
            setCart(cart.map(producto => {
                return producto.id === item.id ? { ...producto, comprados: producto.comprados + comprados } : producto
            }));
        } else {
            setCart([...cart, { ...item, comprados }]);
        }
    };

    const preciofinal = () => {
        return cart.reduce((a, b) => a + b.comprados * b.Precio, 0);
    };

    const preciodeproductos = () => cart.reduce((c, actualProducto) => c + actualProducto.comprados, 0);

    const limpiarcarrito = () => setCart([]);

    const isInCart = (id) => cart.filter(producto => producto.id !== id) ? true : false;

    const removerProducto = (id) => setCart(cart.filter(producto => producto.id !== id));



    return (
        <CartContext.Provider value={{
            limpiarcarrito,
            isInCart,
            removerProducto,
            agregarproducto,
            preciofinal,
            preciodeproductos,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider