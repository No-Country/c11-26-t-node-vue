import React, { useContext } from "react";
import { CarritoContext } from "../Contex/CarritoContext";
import "./Cart.less";

const Cart = () => {
  const { carrito, eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="contenedorCart">
      <h1 className="tituloCart">Carrito de compras</h1>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {carrito &&
            carrito.map((item) => (
              <li key={item._id}>
                {item.data && (
                  <>
                    <h3 className="arth3">{item.data.artist.name}</h3>
                    <p>{item.data.price}</p>
                    <img src={item.data.cover} alt={item.data.title} />
                    <button onClick={() => eliminarProducto(item._id)}>
                      Eliminar
                    </button>
                  </>
                )}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
