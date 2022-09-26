import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ detail }) => {
    const [encarrito, setEncarrito] = useState(false);

    const onAdd = (comprados) => {
        setEncarrito(true);
    }
    console.log(detail)

    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Producto: {detail.producto}</Card.Title>
                        <Card.Text>{detail.descripcion}</Card.Text>
                        <Card.Text>$ {detail.precio}</Card.Text>
                        {
                            encarrito
                                ? <Link to="/carrito">Terminar compra</Link>
                                :
                                <ItemCount stock={15} cuenta={1} onAdd={onAdd} />
                        }

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Codigo: {detail.codigo}</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </div >
    )
}

export default ItemDetail