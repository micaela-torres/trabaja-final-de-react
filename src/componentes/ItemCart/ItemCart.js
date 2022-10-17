import { useCartContext } from '../../context/CartContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../ItemCart/itemcart.css";


const ItemCart = ({ product }) => {
    const { BorrarProducto } = useCartContext();
    return (
        <div className='carritoCompra' style={{ width: 18 + 'rem' }}>
            <Card border="info">
                <Card.Header>{product.Codigo}</Card.Header>
                <Card.Body>
                    <Card.Title>{product.Producto}</Card.Title>
                    <Card.Text>Precio por unitario : ${product.Precio}</Card.Text>
                    <Card.Text>Cantidad: {product.comprados} </Card.Text>
                    <Card.Text><p>Subtotal: ${product.comprados * product.Precio}</p></Card.Text>
                    <Button variant="outline-light" onClick={() => BorrarProducto(product.id)}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-x" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="6" cy="19" r="2" />
                        <circle cx="17" cy="19" r="2" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l7.999 .571m5.43 4.43l-.429 2.999h-13" />
                        <path d="M17 3l4 4" />
                        <path d="M21 3l-4 4" />
                    </svg></Button>{' '}
                </Card.Body>
            </Card>
            <br />
        </div>

    )
}

export default ItemCart