import { collection, getFirestore, addDoc } from 'firebase/firestore';
import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart';
import Button from 'react-bootstrap/Button';
import "../Cart/cart.css";


const Cart = () => {
    const { cart, SubTotal, EliminarCarrito } = useCartContext();

    const orden = {
        buyer: {
            Nombre: "Micaela",
            Email: "mica@symart.com",
            Celular: "03515555555",
        },
        items: cart.map(product => ({ id: product.id, Codigo: product.Codigo, Producto: product.Producto, Cantidad: product.comprados, Total: product.Precio })),
        total: SubTotal(),
    }

    const compraFinalizada = () => {
        const db = getFirestore();
        const ordenCollection = collection(db, "ordenes");
        addDoc(ordenCollection, orden)
            .then(({ id }) => console.log(id))
        EliminarCarrito()

    }



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
            <div className='seguir'>
                <Link to="/">Seguir comprando</Link>
            </div>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <div>
                <h1>
                    Total: $ {SubTotal()}
                </h1>
                <div className='finalizar'>
                    <Button variant="outline-success" onClick={compraFinalizada}>Finalizar compra</Button>
                </div>
            </div>
        </>

    )
}

export default Cart