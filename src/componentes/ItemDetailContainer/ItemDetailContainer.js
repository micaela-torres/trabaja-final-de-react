import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    const { productid } = useParams();

    useEffect(() => {
        const database = getFirestore();
        const dataDoc = doc(database, 'Productos', '6RfDxpAbftocjJZRfj7U');

        getDoc(dataDoc)
            .then(res => setProduct({ id: res.id, ...res.data() }))

    }, []);

    return (
        <>
            <ItemDetail product={product} />;
        </>
    )

}

export default ItemDetailContainer;