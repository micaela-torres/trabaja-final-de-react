import { useCartContext } from '../../context/CartContext';
import { createItem } from "../../firebase/config"
import Button from 'react-bootstrap/Button';
import "../Formulario/formulario.css";
import { useState } from 'react';
import Swal from 'sweetalert2';

const Formulario = () => {
    const { cart, SubTotal, EliminarCarrito } = useCartContext();
    const [orden, setOrden] = useState({
        Nombre: "",
        Email: "",
        Celular: "",
    });

    const valorInputs = (e) => {
        setOrden({ ...orden, [e.target.name]: e.target.value })
    }


    const compraFinalizada = (e) => {
        e.preventDefault();

        const items = cart.map(product => ({ id: product.id, Codigo: product.Codigo, Producto: product.Producto, Cantidad: product.comprados, Total: product.Precio }));

        const total = SubTotal();

        const obj = { orden, items, total }

        createItem(obj).then(id => Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Su compra fue realizada con el codigo ${id}`,
            showConfirmButton: false,
            timer: 2500
        }))
        EliminarCarrito()

        setOrden({
            Nombre: "",
            Email: "",
            Celular: "",

        })


    }

    return (
        <>
            <h1> Finalizar compra </h1>
            <form>
                <div className='formulario'>
                    <input type="text" name="Nombre" placeholder="Ingrese su nombre" value={orden.Nombre} onChange={valorInputs} />
                    <input type="email" name="Email" placeholder="Ingrese su mail" value={orden.Email}
                        onChange={valorInputs} />
                    <input type="number" name="Celular" placeholder="Ingrese su celular" value={orden.Celular}
                        onChange={valorInputs} />
                    <Button variant="outline-success" onClick={compraFinalizada}>Finalizar compra</Button>
                </div>
            </form>
        </>
    )
}

export default Formulario;