import Item from "../Item/Item";

const ItemList = ({ products = [] }) => {
    return (
        products.map(producto => <Item key={producto.codigo} info={producto} />)
    );
}

export default ItemList;