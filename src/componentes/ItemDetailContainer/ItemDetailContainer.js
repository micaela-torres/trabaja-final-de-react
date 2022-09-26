import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../api/productos";
import ItemDetail from "../ItemDetail/ItemDetail";




const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    const { productid } = useParams();

    useEffect(() => {
        const getProduct = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            },);
        });

        /*    getProduct.then((result) => {
                const prodFiltrado = result.filter((prod) => prod.codigo === productid);
                setProduct(prodFiltrado[0]);
            });
        }, [productid]);
        console.log(prodFiltrado)*/

        getProduct.then(res => setProduct(res.filter(producto => producto.codigo === parseInt(productid))));
    }, [productid]);

    return (
        <>
            <ItemDetail detail={product} />;
        </>
    )

}

export default ItemDetailContainer