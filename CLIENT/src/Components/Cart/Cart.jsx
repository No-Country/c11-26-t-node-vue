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
        <div>
          {carrito &&
            carrito.map((item,index) => (
              <div key={index}>
                {/*  <p>{JSON.stringify(item.item)}</p> */}
                {item.item && (
                  <>
                 
                    <h3 >{item.item.artist.name}</h3>
                    <p>{item.item.price}</p>
                    <img src={item.item.cover} alt={item.item.title} />
                    <button onClick={() => eliminarProducto(item.item._id)}>
                      Eliminar
                    </button>
                  </>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
