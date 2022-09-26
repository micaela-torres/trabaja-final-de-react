import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import fotoproducto from "../../img/1001.jpg";

const Item = ({ info }) => {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={fotoproducto} style={{ width: 250, height: 200 }} />
                    <Card.Body>
                        <Card.Title>{info.producto}</Card.Title>
                        <Card.Text>{info.descripcion}</Card.Text>
                        <Card.Text>$ {info.precio}</Card.Text>
                        <Button variant="outline-info"><Link to={`/producto/${info.codigo}`}>Ver detalle</Link></Button>{' '}
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Codigo: {info.codigo}</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </div >

    );

};

export default Item;