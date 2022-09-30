import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);

    const { productid } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'Productos', '6RfDxpAbftocjJZRfj7U');
        getDoc(queryDoc)
            .then(res => setProduct({ id: res.id, ...res.product() }))

    }, []);

    return (
        <>
            <ItemDetail product={product} />;
        </>
    )

}

export default ItemDetailContainer