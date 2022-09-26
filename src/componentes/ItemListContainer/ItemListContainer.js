import { productos } from "../../api/productos";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { marcaid } = useParams();

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            },);
        });
        getProducts.then((resultado) => {
            if (marcaid) {
                const productofiltrado = resultado.filter((prod) => prod.marca === marcaid);
                setProducts(productofiltrado);
            } else {
                setProducts(resultado);
            }
        });
    }, [marcaid]);

    return (
        <>
            <ItemList products={products} />
        </>
    );
}

export default ItemListContainer;