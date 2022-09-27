import React from 'react'
import { useCartContext } from '../../context/cartContext';

const Cart = (producto) => {
    const { removerProducto } = useCartContext();

    return (
        <div>
            <div>
                <p>{producto.producto}</p>
                <p>{producto.descripcion}</p>
                <p>{producto.precio}</p>
                <p>Subtotal: {producto.comprados * producto.precio}</p>
                <button>onClick={() => removerProducto(producto.codigo)}</button>
            </div>
        </div>

    )
}

export default Cart