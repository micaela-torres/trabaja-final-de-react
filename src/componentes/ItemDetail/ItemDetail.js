import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import "../ItemDetail/itemdetail.css";
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ product }) => {
    const [encarrito, setEncarrito] = useState(false);
    const { AgregarCarrito } = useCartContext();


    const onAdd = (comprados) => {
        setEncarrito(true);
        AgregarCarrito(product, comprados);
    }


    return (
        <div>

            <CardGroup className='detalle card col-xl-3 col-md-6 col-sm-12 cardMio'>
                <Card>
                    <Card.Img variant="top" src={product.Imagen} />
                    <Card.Body>
                        <Card.Title>{product.Producto}</Card.Title>
                        <Card.Text>{product.Descripcion}</Card.Text>
                        <Card.Text>$ {product.Precio}</Card.Text>
                        <Card.Text>Unidad por caja: {product.Uxc}</Card.Text>
                        <Card.Text>Stock disponible: {product.Stock}</Card.Text>

                        {
                            encarrito
                                ? <Button variant="outline-secondary"><Link to="/carrito">Terminar compra</Link></Button>
                                :
                                <div className='contador'>
                                    <ItemCount stock={product.Stock} cuenta={1} onAdd={onAdd} />
                                </div>
                        }

                    </Card.Body>
                    <Card.Footer>
                        <div className='footer'>
                            <div className="codigo">
                                <small className=" text-muted">Codigo: {product.Codigo}</small>
                            </div>

                            <div className='volver'>
                                <Link to="/">Volver</Link>
                            </div>
                        </div>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </div >
    )
}

export default ItemDetail