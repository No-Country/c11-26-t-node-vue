import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

const ItemListConteiner = (props) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProducto = idCategoria
      ? getProductosPorCategoria
      : getProductos;

    funcionProducto(idCategoria)
      .then((res) => setProductos(res))
      .catch((error) => console.error(error));
  }, [idCategoria]);

  return (
    <div >
      <h1>{props.greeting}</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListConteiner;
