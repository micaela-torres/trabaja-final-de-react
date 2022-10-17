import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "../Item/item.css";


const Item = ({ info }) => {

    return (
        <>
            <div className="tarjeta" style={{ width: 18 + 'rem' }}>
                <CardGroup>
                    <Card >
                        <Card.Img variant="top" src={info.Imagen} />
                        <Card.Body>
                            <Card.Title>{info.Producto}</Card.Title>
                            <Card.Text>{info.Descripcion}</Card.Text>
                            <Card.Text>$ {info.Precio}</Card.Text>
                            <Button variant="outline-info"><Link to={`/producto/${info.id}`}>Ver detalle</Link></Button>{' '}
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Codigo: {info.Codigo}</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>

            </div >
        </>

    );

};

export default Item;