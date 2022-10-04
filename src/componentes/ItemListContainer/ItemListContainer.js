import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { marcaid } = useParams();

    useEffect(() => {
        const database = getFirestore();
        const dataCollection = collection(database, 'Productos');

        if (marcaid) {
            const dataFilter = query(dataCollection, where("Marca", "==", marcaid))
            getDocs(dataFilter)
                .then(res => setProducts(res.docs.map(products => ({ id: products.id, ...products.data() }))))

        } else {
            getDocs(dataCollection)
                .then(res => setProducts(res.docs.map(products => ({ id: products.id, ...products.data() }))))
        }
        //if (marcaid) {
        //    const dataFilter = query(dataCollection, where("marcaid", "===", marcaid))
        //    getDocs(dataFilter)
        //        .then(res => setProducts(res.docs.map(productos => ({ id: res.id, ...res.data }))))
        //} else {
        //    getDocs(dataCollection)
        //        .then(res => setProducts(res.docs.map(productos => ({ id: res.id, ...res.data }))))
        //}

    }, [marcaid]);

    return (
        <>
            <ItemList products={products} />
        </>
    );
}

export default ItemListContainer;