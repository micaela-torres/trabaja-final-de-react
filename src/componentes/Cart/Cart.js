import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart';
import Button from 'react-bootstrap/Button';
import "../Cart/cart.css";


const Cart = () => {
    const { cart, SubTotal } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <div className='vacio'>
                    <p className='texto'>No hay elementos en su carrito</p>
                    <Button variant="light"><Link to="/">Hacer compras</Link></Button>{' '}

                </div>
            </>
        );
    }

    return (
        <>
            <div className='seguir'>
                <Button variant="outline-secondary"><Link to="/">Seguir comprando</Link></Button>{' '}
            </div>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <div>
                <h1>
                    Total: $ {SubTotal()}
                </h1>
                <Link to="/Formulario" className='finalizar'>
                    <Button variant="outline-success">Finalizar compra</Button>
                </Link>
            </div>
        </>

    )
}

export default Cart