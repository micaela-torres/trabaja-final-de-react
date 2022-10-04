import { useCartContext } from '../../context/CartContext';


const ItemCart = ({ product }) => {
    const { BorrarProducto } = useCartContext();
    return (
        <div>
            <div>
                <p>{product.Producto}</p>
                <p>{product.Descripcion}</p>
                <p>{product.Precio}</p>
                <p>Subtotal: ${product.comprados * product.Precio}</p>
                <button onClick={() => BorrarProducto(product.id)}>Eliminar</button>
            </div>
        </div>

    )
}

export default ItemCart