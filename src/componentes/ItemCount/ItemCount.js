import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, cuenta, onAdd }) => {
    const [contador, setContador] = useState(parseInt(cuenta));

    useEffect(() => {
        setContador(parseInt(cuenta));
    }, [cuenta])

    return (
        <div>
            <Button variant="outline-info" disabled={stock <= 0} onClick={() => onAdd(contador)}>Agregar al carrito</Button>{' '}
            <div>
                <Button variant="outline-info" disabled={contador <= 1} onClick={() => setContador(contador - 1)}>-</Button>{' '}
                Productos seleccionados: {contador}
                <Button variant="outline-info" disabled={contador >= stock} onClick={() => setContador(contador + 1)}>+</Button>{' '}

            </div>
        </div>
    );
}

export default ItemCount;