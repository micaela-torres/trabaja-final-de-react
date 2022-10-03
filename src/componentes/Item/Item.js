import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import fotoproducto from "../../img/1001.jpg";
import { useContext } from 'react';
import { cartContext } from "../../context/cartContext"

const Item = ({ info }) => {
    console.log(info)

    useContext(cartContext);


    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={fotoproducto} style={{ width: 250, height: 200 }} />
                    <Card.Body>
                        <Card.Title>{info.Producto}</Card.Title>
                        <Card.Text>{info.Descripcion}</Card.Text>
                        <Card.Text>$ {info.Precio}</Card.Text>
                        <Button variant="outline-info"><Link to={`/producto/${info.Codigo}`}>Ver detalle</Link></Button>{' '}
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