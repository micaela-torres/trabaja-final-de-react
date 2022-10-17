import Item from "../Item/Item";
import "../ItemList/itemlist.css";

const ItemList = ({ products = [] }) => {
    return (
        <div>
            {
                products.map(producto => <Item key={producto.id} info={producto} />)
            }
        </div>

    );
}

export default ItemList;
