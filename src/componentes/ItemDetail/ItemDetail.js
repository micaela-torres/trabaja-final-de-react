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


    return (
        <div>

            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={product.Imagen} />
                    <Card.Body>
                        <Card.Title>{product.Producto}</Card.Title>
                        <Card.Text>{product.Descripcion}</Card.Text>
                        <Card.Text>$ {product.Precio}</Card.Text>
                        {
                            encarrito
                                ? <Link to="/carrito">Terminar compra</Link>
                                :
                                <ItemCount stock={15} cuenta={1} onAdd={onAdd} />
                        }

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Codigo: {product.Codigo}</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </div >
    )
}

export default ItemDetail