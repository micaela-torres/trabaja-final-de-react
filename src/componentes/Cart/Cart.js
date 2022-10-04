import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart';


const Cart = () => {
    const { cart, SubTotal } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en su carrito</p>
                <Link to="/">Hacer compras</Link>
            </>
        );
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                Total: {SubTotal()}
            </p>
        </>

    )
}

export default Cart