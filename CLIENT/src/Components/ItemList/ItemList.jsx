import Item from "../Item/Item";
import "./ItemList.css";
import "../../App.less";

const ItemList = ({ productos }) => {
  return (
    <div className="contendorProductos">
      {productos.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
