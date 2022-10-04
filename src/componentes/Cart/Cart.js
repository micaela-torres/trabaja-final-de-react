import { collection, getFirestore, addDoc } from 'firebase/firestore';
import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart';


const Cart = () => {
    const { cart, SubTotal } = useCartContext();

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
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                Total: {SubTotal()}
            </p>
            <button onClick={compraFinalizada}>Finalizar compra</button>
        </>

    )
}

export default Cart