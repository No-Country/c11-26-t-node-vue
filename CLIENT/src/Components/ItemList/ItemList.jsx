import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import "../../App.less";

const ItemList = ({ productos }) => {
  // Mezclar el arreglo de productos de forma aleatoria
  const productosAleatorios = productos.sort(() => Math.random() - 0.5);
  // Obtener solo los primeros 12 productos aleatorios
  const productosLimitados = productosAleatorios.slice(0, 12);

  return (
    <div className="contendorProductos">
      {productosLimitados.map((prod) => (
        <Item key={prod._id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;



