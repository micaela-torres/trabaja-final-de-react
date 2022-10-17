import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "../ItemCount/itemcount.css";

const ItemCount = ({ stock, cuenta, onAdd }) => {
    const [contador, setContador] = useState(parseInt(cuenta));

    useEffect(() => {
        setContador(parseInt(cuenta));
    }, [cuenta])

    return (
        <>
            <div>
                <div className="botones">
                    <Button variant="outline-info" disabled={contador <= 1} onClick={() => setContador(contador - 1)}>-</Button>{' '}
                    Productos seleccionados: {contador}
                    <Button variant="outline-info" disabled={contador >= stock} onClick={() => setContador(contador + 1)}>+</Button>{' '}

                </div>
                <div className="contadores">
                    <Button variant="outline-info" disabled={stock <= 0} onClick={() => onAdd(contador)}>Agregar al carrito</Button>{' '}
                </div>
            </div>
        </>
    );
}

export default ItemCount;