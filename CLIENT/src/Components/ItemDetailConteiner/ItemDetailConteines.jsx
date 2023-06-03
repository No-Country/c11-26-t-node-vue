import { useState, useEffect } from "react";
import { getItem } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {
  const [producto, setProducto] = useState(null);

  const { idItem } = useParams();

  useEffect(() => {
    getItem(idItem).then((res) => setProducto(res));
  }, [idItem]);

  

  return (
    <div>
      {producto && <ItemDetail _id={idItem} />}
    </div>
  );
};

export default ItemDetailConteiner;

