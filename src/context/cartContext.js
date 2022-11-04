import React, { useState, useContext } from 'react'

const cartContext = React.createContext([]);

export const useCartContext = () => useContext(cartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const AgregarCarrito = (item, comprados) => {
        if (EnElCarrito(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, comprados: product.comprados + comprados } : product
            }));
        } else {
            setCart([...cart, { ...item, comprados }]);
        }
    }

    const EliminarCarrito = () => setCart([]);

    const EnElCarrito = (id) => cart.find(product => product.id === id) ? true : false;

    const BorrarProducto = (id) => setCart(cart.filter(product => product.id !== id));

    const SubTotal = () => {
        return cart.reduce((prev, act) => prev + act.comprados * act.Precio, 0);
    }

    const ProductosComprados = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.comprados, 0);



    return (
        <cartContext.Provider value={{
            EliminarCarrito,
            EnElCarrito,
            BorrarProducto,
            AgregarCarrito,
            SubTotal,
            ProductosComprados,

            cart
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider