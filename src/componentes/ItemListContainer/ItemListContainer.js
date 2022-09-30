import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { marcaid } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'Productos');
        getDocs(queryCollection)
            .then(res => setProducts(res.doct.map(producto => ({ id: producto.id, ...producto.products() }))))

    }, []);

    return (
        <>
            <ItemList products={products} />
        </>
    );
}

export default ItemListContainer;