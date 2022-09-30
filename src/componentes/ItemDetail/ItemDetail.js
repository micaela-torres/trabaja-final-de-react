import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';

const ItemDetail = ({ product }) => {
    const [encarrito, setEncarrito] = useState(false);
    const { addItem } = useCartContext();

    const onAdd = (comprados) => {
        setEncarrito(true);
        addItem(product, comprados);

    }
    console.log(product)

    return (
        <div>

            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Producto: {product.producto}</Card.Title>
                        <Card.Text>{product.descripcion}</Card.Text>
                        <Card.Text>$ {product.precio}</Card.Text>
                        {
                            encarrito
                                ? <Link to="/carrito">Terminar compra</Link>
                                :
                                <ItemCount stock={15} cuenta={1} onAdd={onAdd} />
                        }

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Codigo: {product.codigo}</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </div >
    )
}

export default ItemDetail